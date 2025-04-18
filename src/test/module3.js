function module3Function() {
  console.log('module3Function called');
  module4Function(); // Call function from module4
  return "module3";
}

export { module3Function };