/** Graph Valid Tree
 * Given n nodes labeled from 0 to n-1 and a list of undirected edges (each edge is a pair of nodes), write a function to check whether these edges make up a valid tree.
 *
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function (n, edges) {
  if (n === 0) return false;

  const adjList = new Array(n).fill(0).map(() => []);

  for (let [u, v] of edges) {
    adjList[u].push(v);
    adjList[v].push(u); // Add this line to handle undirected edges
  }

  const visited = new Set();

  const dfs = (node, parent) => {
    if (visited.has(node)) return false;
    visited.add(node);
    for (let neighbor of adjList[node]) {
      if (neighbor === parent) continue; // Skip the edge leading back to the parent

      if (!dfs(neighbor, node)) {
        return false;
      }
    }

    return true;
  };

  return !!dfs(0, -1);
};

const validTreeUsingStack = (n, edges) => {
  if (n === 0) return false;

  const adjList = new Array(n).fill(0).map(() => []);

  for (let [u, v] of edges) {
    adjList[u].push(v);
    adjList[v].push(u); // Add this line to handle undirected edges
  }

  const visited = new Set();
  const stack = [[0, -1]];

  while (stack.length) {
    const [node, parent] = stack.pop();

    if (visited.has(node)) return false;
    visited.add(node);
    for (let neighbor of adjList[node]) {
      if (neighbor === parent) continue;
      if (visited.has(neighbor)) return false;

      stack.push([neighbor, node]);
    }
  }
  return true;
};

const validTreeUsingQueue = (n, edges) => {
  if (n === 0) return false;

  const adjList = new Array(n).fill(0).map(() => []);

  for (let [u, v] of edges) {
    adjList[u].push(v);
    adjList[v].push(u); // Add this line to handle undirected edges
  }

  const visited = new Set();
  const stack = [[0, -1]];

  while (stack.length) {
    const [node, parent] = stack.shift();

    if (visited.has(node)) return false;
    visited.add(node);
    for (let neighbor of adjList[node]) {
      if (neighbor === parent) continue;
      if (visited.has(neighbor)) return false;

      stack.push([neighbor, node]);
    }
  }
  return true;
};

console.log(
  validTreeUsingQueue(5, [
    [0, 1],
    [2, 0],
    [0, 3],
    [1, 4],
  ])
); // true

// console.log(
//     validTreeUsingStack(5, [
//     [0, 1],
//     [1, 2],
//     [2, 3],
//     [1, 3],
//     [1, 4],
//   ])
// ); // false
