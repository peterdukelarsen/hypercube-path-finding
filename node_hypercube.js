var Hamming = function(a_array, b_array) {
	if (a_array.length === b_array.length) {
		var result = 0;
		var size = a_array.length
		for (var i=0; i < size; ++i) {
			if (a_array[i] != b_array[i]) {
				++result;
			}
		}
		console.log("result: " + result);
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
	console.log("makePath");
	var printString = "";
	var ham = Hamming(a_array, b_array);
	console.log(a_array);
	console.log(b_array);
	var path = []; // path is an array of vertices (array of arrays)
	var temp_vert = a_array;
	path.push(temp_vert);
	var j = 0;
	console.log("fuck this loop");
	for (var i = 0; i < ham; ++i) {
		if (temp_vert[j] == b_array[j]) {
			--i;
		}
		else {
			temp_vert[j] = b_array[j];
			path.push(temp_vert);
		}
		++j;
	}
	console.log("OK thru loop one");
	var temp = -1;
	printString += "Possible path: \n";
	for (g = 0; g < path.length; ++g) {
		temp = -1;
		for (z = 0; z < vertices.length; ++z) {
			if (compVert(path[g], vertices[z])) {
				temp = i;
			}
		}
		printString += (spaced(temp.toString(), 3) + " ");
	}
	printString += "\n";
	for (w = 0; w < path.length; ++w) {
		printString += spaced("- ", 4);
	}
	printString += "\n";
	return (printString + printVertices(path, false));
}


var compVert = function(a_array, b_array) {
	return (Hamming(a_array, b_array) === 0);
}

var spaced = function(someString, size) {
	var space_string = "";
	var startsize = someString.length;
	console.log("size - someString.length: " + (startsize));
	for (var i = startsize; i < size; ++i) {
		space_string += " ";
	}
	return (someString + space_string);
}

var printVertices = function(vertices, printI) {
	var printString = "";
	if (printI) {
		console.log("vertices.length: "+vertices.length);
		var temp = vertices.length;
		for (var i=0; i < temp; ++i) {
			console.log("before spaced");
			printString += (spaced(i.toString(), 3) + " ");
		}
		printString += "\n";
		for (var j=0; j < vertices.length; ++j) {
			printString += spaced("- ", 4);
		}
		printString += "\n";
	}
	for (var g=0; g < vertices[0].length; ++g) {
		console.log("g: " + g);
		for (k=0; k < vertices.length; ++k) {
			console.log("k: " + k);
			printString += (spaced((vertices[k][g]).toString(), 3) + " ");
		}
		printString += "\n";
	}
	return printString;
	// document.getElementById(element_id).innerHTML = printString;
}

var main1 = function(dim_in) {
	var tempNode = [];
	for (i=0; i < dim_in; ++i) {
		tempNode.push(0);
	}
	console.log("blah0");
	var dim = 0;
	var vertices = [];
	var indexA, indexB, ham;
	var printString = "";
	console.log("blah1");
	printString += "Input Dimensions:";
	dim = dim_in;
	if (tempNode.length > dim_in) {
		tempNode.slice(0, dim_in);
	}
	printString += "\n-------------------------------------------------------\n";
	console.log("blah2");
	for (i=0; i < Math.pow(2,dim); ++i) {
		for (j=0; j < dim; ++j) {
			tempNode[j] = ((i) & (Math.pow(2,j)));
		}
		vertices.push(tempNode);
		console.log(vertices);
	}
	console.log("blah3");
	printString += "Vertices:\n";
	if(dim >= 6) {
		console.log("blah4");
		printString += (Math.pow(2, dim) + " Too many vertices to print\nStill possible to find shortest paths between vertices on the hypercube");
	}
	else {
		console.log("blah5");
		printString += printVertices(vertices, true);
		console.log("blahdone");
	}
	console.log("blah6");
	console.log(printString);
	global_vertices = vertices;
	global_dim = dim;
	return printString;
}

var main2 = function(dim, vertices, indexA, indexB) {
	var printString = "";
	var ham = Hamming(vertices[indexA], vertices[indexB]);
	printString += "\n-------------------------------------------------------\n";
	printString += "The Hamming distance (H(A, B)) is: " + ham + "\n";
	printString += "Parallel paths of any length less than: " + dim + "\n";
	printString += "Parallel paths, length H(A, B) : " + ham + "\n\n";
	printString += makePath(vertices, vertices[indexA], vertices[indexB]);
	return printString;
	// document.getElementById(element_Path).innerHTML = printString;
}

console.log(main1(3));
console.log(main2(global_dim, global_vertices, 0, 3));
