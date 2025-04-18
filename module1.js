import { module2Function } from "./src/module2.js";
import { module3Function } from "./src/test/module3.js";

function module1Function() {
    console.log("module1Function called");
    module2Function();
    module3Function();
    return "module1";
}

module1Function;
