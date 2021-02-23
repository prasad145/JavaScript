
//functional programming is all about creating and using non mutating functions
function nonMutatingPush(original, newItem) {
    //does not mutate original arrays
    //console.log(original.concat(newItem));
    return original.concat(newItem);
  }
  var first = [1, 2, 3];
  var second = [4, 5];
  nonMutatingPush(first, second);