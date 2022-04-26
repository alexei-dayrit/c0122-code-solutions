/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {};                  // 1 * 1 = O(1) // constant time
  const unique = [];                // 1 * 1 = O(1) // constant time
  for (
    let i = 0;                      // 1 * 1 = O(1) // constant time (for loops iniatilized once and only once)
    i < words.length;               // 2 * n = O(2n) ~= O(n) (property access and comparison, n bcuz run before each iteration) // linear time
    i++                             // 2 * n = O(2n) ~= O(n) (operations = taking current value + 1, then reassigning value back to i - n)
  ) {
    const word = words[i];          // 2 * n = O(2n) ~= O(n) (operations = words[i] and assigning to i)
    if (!seen[word]) {              // 3 * n = O(3n) ~= O(n) (ops = index access, not operator, truthy test, runs n times)
      seen[word] = true;            // 2 * n = 0(2n) ~= 0(n)
      // seen is marking something like a dictionary
      unique[unique.length] = word; // 3 * n = O(3n) ~= O(n) (prop access w/ length, index, assign to word)
    }
  }
  return unique;
} // Big O Notation for uniqueLinear: O(n) - take worst one ('find bottleneck')

function uniqueQuadratic(words) {
  const unique = [];                // 1 * 1 = O(1) // constant
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(2n) ~= O(n) (ops= compare and grab lengths prop, n bcuz accessed before each iteration // linear time
    i++                             // 2 * n = O(2n) ~= O(n) (ops= addition and assignment, n bcuz runs after each iteration of the loop)
  ) {
    const word = words[i];          // 2 * n = O(2n) ~= O(n)
    let isUnique = true;            // 1 * n = O(1n) ~= O(n)
    for (
      let c = 0;                    // 1 * n = O(n) (since in a loop then we run n)
      c < i;                        // 1 * n * n = O(n^2) (ops = just comparison) // quadratic time
      c++                           // 2 * n * n = O(2n^2) ~= O(n^2)
    ) {
      const comparing = words[c];   // 2 * n^2 = O(2n^2) ~= O(n^2)
      if (comparing === word) {     // 2 * n^2  O(1n^2) ~= O(n^2) -- always assume worst case scenario, condtion sometimes runs, sometimes doens't but it doesn't matter
        isUnique = false;           // 1 * n^2 = O(1n^2) ~= O(n^2)
      }
    }
    if (isUnique) {                 // 1 * n = O(1n) ~= O(n)
      unique[unique.length] = word; // 3 * n = O(3n) ~= O(n)
    }
  }
  return unique;                    // 1 * 1 = O(1)
} // Big O Notation for uniqueQuadratic: O(n^2)
