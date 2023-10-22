function depthFirstSearch(graph, startNode, targetNode) {
    if (startNode === targetNode) {
        return targetNode;
    }

    for (let i = 0; i < graph[startNode].length; i++) {
        let connectedVertex = graph[startNode][i];
        //mark node as visited by making it null
        graph[startNode][i] = null;

        //Showing traversal
        console.log(graph);

        //Recursively call function on the connected vertex until the target node is found
        if (connectedVertex != null) {
            let result = depthFirstSearch(graph, connectedVertex, targetNode);
            if (result) {
                return result;
            }
        }
    }

    return null;
}

let testAdjList0 = [
    [1],
    [3],
    [0, 2],
    [1, 2]
];

let testAdjList1 = [
    [1],
    [4],
    [3],
    [5],
    [2],
    [3]
];

let testAdjList2 = [
    [1],
    [3],
    [0, 2],
    [1, 2]
];

let testAdjList3 = [
    [1, 2, 0],
    [2, 0],
    [0],
    [1]
];

console.log(depthFirstSearch(testAdjList0, 0, 0));
console.log();
console.log(depthFirstSearch(testAdjList1, 0, 5));
console.log();
console.log(depthFirstSearch(testAdjList2, 3, 2));
console.log();
console.log(depthFirstSearch(testAdjList3, 0, 3));