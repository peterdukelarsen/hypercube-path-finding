var hypercube = angular.module('hypercube', ["ngSanitize"]);

hypercube.controller("hypercube_control", function($scope) {
	$scope.printing = false;
	// $scope.dim_in = 3;
	// $scope.indexA = 0;
	// $scope.indexB = 3;
	// $scope.verticePrintArea = "";

	$scope.dimensionVerticesPrint = function() {
		$scope.verticePrintArea = main1($scope.dim_in);
		$scope.printing = true;
		return;
	}

	$scope.pathPrint = function() {
		$scope.pathPrintArea = main2(global_dim, global_vertices, $scope.indexA, $scope.indexB);
		return;
	}
});

var Hamming = function(a_array, b_array) {
	if (a_array.length === b_array.length) {
		var result = 0;
		var size = a_array.length
		for (var i=0; i < size; ++i) {
			if (a_array[i] != b_array[i]) {
				++result;
			}
		}
		return result;
	}
	else {
		console.error("ERROR: sizes of A & B do not match");
		return;
	}
}

var global_vertices;
var global_dim;

var makePath = function(vertices, a_array, b_array) {
	var printString = "";
	var ham = Hamming(a_array, b_array);
	console.log("WOOT NOT FUCKED RD 2");
	var path = []; // path is an array of vertices (array of arrays)
	var temp_vert = [];
	path[0] = a_array;
	for (l=0; l < a_array.length; ++l) {
		temp_vert[l] = a_array[l];
	}
	console.log("path[0]:");
	console.log(path[0]);
	console.log("a_array:");
	console.log(a_array);
	var j = 0;
	for (var i = 0; i < ham; ++i) {
		if (temp_vert[j] === b_array[j]) {
			--i;
		}
		else {
			temp_vert[j] = b_array[j];
			var tempeh = [];
			console.log("temp_vert.length: " + temp_vert.length);
			for (z=0; z < temp_vert.length; ++z) {
				tempeh[z] = temp_vert[z];
			}
			path.push(tempeh);
		}
		++j;
	}
	console.log(path);
	var temp = -1;
	printString += "Possible path: <br/>";
	for (g = 0; g < path.length; ++g) {
		temp = -1;
		for (z = 0; z < vertices.length; ++z) {
			if (compVert(path[g], vertices[z])) {
				temp = i;
			}
		}
		printString += (spaced(temp.toString(), 3) + " ");
	}
	printString += "<br/>";
	for (w = 0; w < path.length; ++w) {
		printString += spaced("- ", 4);
	}
	printString += "<br/>";
	return (printString + printVertices(path, false));
}


var compVert = function(a_array, b_array) {
	return (Hamming(a_array, b_array) === 0);
}

var spaced = function(someString, size) {
	var space_string = "";
	var startsize = someString.length;
	for (var i = startsize; i < size; ++i) {
		space_string += " ";
	}
	console.log(someString + space_string);
	return (someString + space_string);
}

var printVertices = function(vertices, printI) {
	var printString = "";
	if (printI) {
		var temp = vertices.length;
		for (var i=0; i < temp; ++i) {
			printString += (spaced(i.toString(), 3) + " ");
		}
		printString += "<br/>";
		for (var j=0; j < temp; ++j) {
			printString += spaced("-", 4);
		}
		printString += "<br/>";
	}
	for (var g=0; g < vertices[0].length; ++g) {
		for (k=0; k < vertices.length; ++k) {
			printString += (spaced((vertices[k][g]).toString(), 3) + " ");
		}
		printString += "<br/>";
	}
	return printString;
	// document.getElementById(element_id).innerHTML = printString;
}

var main1 = function(dim_in) {
	var tempNode = [];
	for (i=0; i < dim_in; ++i) {
		tempNode.push(0);
	}
	var dim = 0;
	var vertices = [];
	var indexA, indexB, ham;
	var printString = "";
	printString += ("Input Dimensions: " + dim_in);
	dim = dim_in;
	if (tempNode.length > dim_in) {
		tempNode.slice(0, dim_in);
	}
	printString += "<br/><br/>";
	for (var i=0; i < Math.pow(2,dim); ++i) {
		var temp = 0x0001;
		for (var j=0; j < dim; ++j) {
			//if(((i & 0x0ffff)) == (((i & 0x0ffff) & ((0x0ffff & Math.pow(2,j))>>> 0) >>> 0)))
			//if((((0x1 <<< j) >>> 1)))/* & (i >>> 0))>>>0*/
			if(((0x1 << j) & (i >>> 0) )>>> 0)
			{
				tempNode[j] = 1;
			}
			else
			{
				tempNode[j] = 0;
			}
			//tempNode[j] = (i && ((i) & (Math.pow(2,j))));
			//tempNode[j] = ((i==0) && (Math.pow(2, j) == 0));
		}
		var temp2 = [];
		for (p = 0; p < tempNode.length; ++p) {
			temp2.push(tempNode[p]);
		}
		vertices.push(temp2);
	}
	tempNode.push(0);
	printString += "Vertices:<br/>";
	if(dim >= 6) {
		printString += (Math.pow(2, dim) + " Too many vertices to print<br/>Still possible to find shortest paths between vertices on the hypercube");
	}
	else {
		printString += printVertices(vertices, true);
	}
	global_vertices = vertices;
	global_dim = dim;
	return printString;
}

var main2 = function(dim, vertices, indexA, indexB) {
	var printString = "";
	console.log(vertices[indexA]);
	console.log(vertices[indexB]);
	var ham = Hamming(vertices[indexA], vertices[indexB]);
	console.log("WOOT WE NOT COMPLETELY FUCKED");
	printString += "<br/>-------------------------------------------------------<br/>";
	printString += "The Hamming distance (H(A, B)) is: " + ham + "<br/>";
	printString += "Parallel paths of any length less than: " + dim + "<br/>";
	printString += "Parallel paths, length H(A, B) : " + ham + "<br/><br/>";
	console.log("making path");
	printString += makePath(vertices, vertices[indexA], vertices[indexB]);
	return printString;
	// document.getElementById(element_Path).innerHTML = printString;
}
