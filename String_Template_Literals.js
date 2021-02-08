const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    const failureItems = [];
      for(let i = 0; i <arr.length; i++)
      {
          let item = `<li class="text-warning">${arr[i]}</li>`; //backticks
          failureItems.push(item);
      }
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);
  console.log(failuresList);