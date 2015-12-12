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
	for (g = 0; g < path.length; ++g) {
		temp = -1;
		for (z = 0; z < vertices.length; ++z) {
			if (compVert(path[g], vertices[z])) {
				temp = i;
			}
		}
		// some cout thing
	}
	// endl
	for (w = 0; w < path.length; ++w) {
		// come cout
	}
	// endl
	// printVertices
}


var compVert = function(a_array, b_array) {
	return (Hamming(a_array, b_array) === 0);
}
