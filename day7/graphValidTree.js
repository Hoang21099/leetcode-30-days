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
  }

  const visited = new Set();

  const dfs = (node) => {
    if (visited.has(node)) return false;
    visited.add(node);
    for (let neighbor of adjList[node]) {
      if (!dfs(neighbor)) {
        return false;
      }
    }

    return true;
  };

  return !!dfs(0, -1);
};

console.log(
  validTree(5, [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 4],
  ])
); // true

console.log(
  validTree(5, [
    [0, 1],
    [1, 2],
    [2, 3],
    [1, 3],
    [1, 4],
  ])
); // false
