#include <iostream>
#include <vector>
#include <cmath>
#include <string>
#include <cassert>
#include <iomanip>

using namespace std;
void printVertices(vector< vector<bool> > &vertices, bool printI)
{
	if(printI)
	{
		for (int i = 0; i < (int)vertices.size(); ++i)
		{
			cout << setw(3) << i << " ";
		}
		cout << endl;
		for (int i = 0; i < (int)vertices.size(); ++i)
		{
			cout << setw(4) << "- ";
		}
		cout << endl;
	}
	for(unsigned i = 0; i < vertices[0].size(); ++i)
	{
		for(unsigned j = 0; j < vertices.size(); ++j)
		{
			cout << setw(3) << vertices.at(j).at(i) << " ";
		}
		cout << endl;
	}
}


int Hamming(vector<bool> &A, vector<bool> &B)
{
	assert(A.size() == B.size());
	int result = 0;
	for(unsigned i = 0; i < A.size(); i++)
	{
		if(B[i] != A[i]) result++;
	}
	return result;
}
bool compVert(vector<bool> &A, vector<bool> &B)
{
	int ham = Hamming(A, B);
	return (ham == 0);

}
//construct shortest path from A to B using method from Proposition 3.1
void makePath(vector< vector<bool> > &vertices, vector<bool> &A, vector<bool> &B)
{
	int ham = Hamming(A, B);
	vector< vector<bool> > path;
	vector<bool> tempVert(A);
	path.push_back(tempVert);
	int j = 0;
	for(int i = 0; i < ham; ++i)
	{
		if(tempVert[j] == B[j])
		{
			i -= 1;
		}
		else
		{
			tempVert[j] = B[j];
			path.push_back(tempVert);
		}
		++j;
	}
	int temp = -1;
	cout << "Possible Path:  \n";
	for(int j = 0; j < (int)path.size(); ++j)
	{
		temp = -1;
		for(int i = 0; i < (int)vertices.size(); ++i)
		{
			if(compVert(path[j], vertices[i]))
			{
				temp = i;
			}
		}
		cout << setw(3) << temp << " ";
	}
	cout << endl;
	for (int i = 0; i < (int)path.size(); ++i)
	{
		cout << setw(4) << "- ";
	}
	cout << endl;
	printVertices(path, 0);

}

int main()
{
	vector<bool> tempNode;
	int  dim = 0;
	bool loop = 1;
	vector< vector<bool> > vertices;
	char yesno;
	int indexA, indexB, ham;
	cout << "=====================================================\n";
	while(loop)
	{
		cout << "input dimensions:";
		cin >> dim;
		cout << "-------------------------------------------------------\n";
		tempNode.resize(dim);
		for(unsigned i = 0; i < pow(2,dim); ++i)
		{
			for (unsigned j = 0; j < dim; ++j)
			{
				tempNode[j] = (bool)(i & (unsigned)pow(2,j));
			}
			vertices.push_back(tempNode);
		}
		cout << "vertices:\n";
		if(dim >= 6)
		{
			cout << pow(2, dim) << " vertices is too many to print\nit is still possible to find shortest paths between vertices on the hypercube";
		}
		else
		{
			printVertices(vertices, true);	
		}
		cout << "\n\nenter vertex A: ";
		cin >> indexA;
		cout <<"enter vertex B: ";
		cin >> indexB;
		ham = Hamming(vertices[indexA], vertices[indexB]);
		cout << "-------------------------------------------------------\n";
		cout << "the Hamming distance (H(A, B)) is: " << ham << endl;
		cout << "parallel paths of any length: " << dim << "\n";
		cout << "parallel paths, length H(A, B) : " << ham << "\n";
		cout << endl;
		makePath(vertices, vertices[indexA], vertices[indexB]);
		cout << "continue? (y/n)  ";
		cin >> yesno;
		if(yesno != 'y')
		{
			loop = 0;
		}
		cout << "=====================================================\n";
		vertices.clear();

	}

	return 0;
}