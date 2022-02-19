/* exported defaults */

/*
  - Loop through source obj
    - If prop is in target obj,
      - Skip this iteration
    - Else target at current prop is equal to current key
*/

function defaults(target, source) {
  for (var prop in source) {
    if (prop in target) {
      continue;
    } else {
      target[prop] = source[prop];
    }
  }
}

/*
  source = object
  prop = object keys
  source[prop] = key value
*/
