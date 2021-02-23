function add(x) {
    // Only change code below this line
    return function(y)
    {
      return function(z)
      {
        return x + y + z;
      }
    }
    //in ES - 6
    // const ans =  x => y => z => x + y + z;
    //  return ans;
  }
  add(10)(20)(30);