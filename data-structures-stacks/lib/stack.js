/* exported Stack */

/**
 * Possible applicable question: isBalanced (VScode implementation)
 * input: string of braces parentheses, square brackets, curly braces
 * example: "[]" or "()" or "{{}}" -> return true
 *          "{]" or "(" or "[[(])]" -> false
 * set of braces is balance if all of them match each other
 *
 * solution with stack = linear time
 */
class Stack {

  constructor(...values) {

    const data = {};

    let index = 0;

    this.push = function (value) { // constant time - O(1) // same amount of operations regardless of the input's (value) size
      if (arguments.length < 1) {
        throw new TypeError('stack.push() requires a value argument');
      }
      if (typeof value === 'undefined') {
        throw new TypeError('stack.push(value) received undefined');
      }
      data[index] = value;
      index++;
    };

    this.pop = function () { // constant time - O(1)
      const last = index - 1;
      if (last < 0) return;
      const value = data[last];
      delete data[last];
      index = last;
      return value;
    };

    this.peek = function () { // constant time - O(1)
      const last = index - 1;
      if (last < 0) return;
      return data[last];
    };

    this.print = function () { // linear time - O(n)
      if (index === 0) {
        return 'Stack { <empty> }';
      }
      let output = ' }';
      let last = index - 1;
      for (; last > 0; last--) {
        output = ' <- ' + JSON.stringify(data[last]) + output;
      }
      output = JSON.stringify(data[last]) + output;
      return 'Stack { ' + output;
    };

    for (let i = 0; i < values.length; i++) {
      this.push(values[i]);
    }

    Object.freeze(this);

  }

}
