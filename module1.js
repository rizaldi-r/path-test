import { module2Function } from './src/nodule2.js';
import { module3Function } from './src/test/module3.js';

function module1Function() {
  console.log('module1Function called');
  module2Function(); // Call function from module2
  return "module1";
}

export { module1Function };