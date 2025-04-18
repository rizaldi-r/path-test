import { module3Function } from './test/module3.js';

function module2Function() {
  console.log('module2Function called');
  module3Function(); // Call function from module3
  return "module2";
}

export { module2Function };