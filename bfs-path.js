function findNeighbors(node, matrix) {
    let [row, col] = node
    const arr = [
        // Up
        [row - 1, col],
        // Down
        [row + 1, col],
        // Left
        [row, col - 1],
        // Right
        [row, col + 1],
    ]
    let copy = []
    for (let i = 0; i < arr.length; i++) {
        let node = arr[i];
        if (node[0] >= 0 && node[0] < matrix.length) {
            if (node[1] >= 0 && node[1] < matrix[node[0]].length) {
                copy.push(node)
            }
        }
    }
    return copy
}


function bfsPath(matrix, startNode, endValue) {
    let array = []

    const queue = [startNode]
    const visited = new Set()
    visited.add(`[${startNode[0]},${startNode[1]}]`)

    while(queue.length){
        let curr = queue.shift()
        visited.add(`[${curr[0]},${curr[1]}]`)
        array.push(curr)
        if (matrix[curr[0]][curr[1]] === endValue){return array}
        let neighbors = findNeighbors(curr, matrix)
        for (neighbor of neighbors){
            if(!visited.has(`[${neighbor[0]},${neighbor[1]}]`)){
                queue.push(neighbor)
                visited.add(`[${neighbor[0]},${neighbor[1]}]`)
            }

        }

    }
    return false

}


// ***** UNCOMMENT FOR LOCAL TESTING *****

const matrix1 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

// // EXAMPLE TESTS #1. Tests for findNeighbors function
//console.log(findNeighbors([1, 1], matrix1)) // Finds all 4 neighbors from an
// // internal node (left, right, down, up)
// // [ [ 0, 1 ], [ 2, 1 ], [ 1, 2 ], [ 1, 0 ] ]

// console.log(findNeighbors([0,0], matrix1)); // Finds two neighbors from a
// // corner node // [ [ 1, 0 ], [ 0, 1 ] ]

// console.log(findNeighbors([3,1], matrix1)); // Finds three neighbors from
// // an edge node // [ [ 2, 1 ], [ 3, 2 ], [ 3, 0 ] ]


// EXAMPLE TESTS #2. Tests for bfsPath function

console.log(bfsPath(matrix1, [0,0], 16)); // can traverse the entire matrix
// returns an array of coordinates with no duplicates:

// [
//     [ 0, 0 ], [ 1, 0 ],
//     [ 0, 1 ], [ 2, 0 ],
//     [ 1, 1 ], [ 0, 2 ],
//     [ 3, 0 ], [ 2, 1 ],
//     [ 1, 2 ], [ 0, 3 ],
//     [ 3, 1 ], [ 2, 2 ],
//     [ 1, 3 ], [ 3, 2 ],
//     [ 2, 3 ], [ 3, 3 ]
//  ]

// Note for debugging purposes: The coordinates should represent the following matrix values, in order:
// 1 5 2 9 6 3 13 10 7 4 14 11 8 15 12 16

// console.log(bfsPath(matrix1, [2,2], 11)); // returns a single node if end
// // value is located at start node
// // [ [ 2, 2 ] ]

// console.log(bfsPath(matrix1, [1,2], 8)); // can handle various start nodes
// // and end values
// // [ [ 1, 2 ], [ 0, 2 ], [ 2, 2 ], [ 1, 3 ] ]

// console.log(bfsPath(matrix1, [0,0], 17)); // can return false if end value
// // is not found
// // false

/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [findNeighbors, bfsPath];
