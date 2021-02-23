function sentensify(str) {
  // Only change code below this line
  str = str.split(/\W/);
  console.log(str);
  console.log(str.join(" "));
  return str.join(" ");
  // Only change code above this line
}
sentensify("May-the-force-be-with-you");