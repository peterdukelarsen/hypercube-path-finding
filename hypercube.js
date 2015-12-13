var Hamming = function(a_array, b_array) {
	if (a_array.length === b_array.length) {
		var result = 0;
		for (i=0; i < a_array.length; ++i) {
			if (a_array[i] == b_array[i]) {
				++result;
			}
		}
		return result;
	}
	else {
		console.error("ERROR: sizes of A & B do not match");
	}
}

var makePath = function(vertices, a_array, b_array) {
	var printString = "";
	var ham = Hamming(a_array, b_array);
	var path = []; // path is an array of vertices (array of arrays)
	var temp_vert = a_array;
	path.push(temp_vert);
	var j = 0;
	for (i = 0; i < ham; ++i) {
		if (temp_vert[j] === b_array[j]) {
			--i;
		}
		else {
			tempVert[j] = b_array[j];
			path.push(tempVert);
		}
		++j;
	}
	var temp = -1;
	printString += "Possible path: <br/>";
	for (g = 0; g < path.length; ++g) {
		temp = -1;
		for (z = 0; z < vertices.length; ++z) {
			if (compVert(path[g], vertices[z])) {
				temp = i;
			}
		}
		printString += (spaced(temp, 3) + " ");
	}
	printString += "<br/>";
	for (w = 0; w < path.length; ++w) {
		printString += spaced("- ", 4);
	}
	printString += "<br/>";
	return (printString + printVertices(path, 0));
}


var compVert = function(a_array, b_array) {
	return (Hamming(a_array, b_array) === 0);
}

var spaced = function(someString, size) {
	var space_string = "";
	for (i = size - someString.length; i < size; ++i) {
		space_string += " ";
	}
	return (someString + space_string);
}

var printVertices = function(vertices, printI) {
	var printString = "";
	if (printI) {
		for (i=0; i < vertices.length; ++i) {
			printString += (spaced(i.toString(), 3) + " ");
		}
		printString += "<br/>";
		for (j=0; j < vertices.length; ++j) {
			printString += spaced("- ", 4);
		}
		printString += "<br/>";
	}
	for (g=0; g < vertices[0].length; ++g) {
		for (k=0; k < vertices.length; ++k) {
			printString += (spaced(vertices[k][g], 3) + " ");
		}
	}
	return printString;
	// document.getElementById(element_id).innerHTML = printString;
}

// need to figure out how i will print, and what main will look like
