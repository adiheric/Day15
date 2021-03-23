function checkVariableScope() {
  "use strict";

  let i = "block variable";

  if (true) {
    i = "function variable";

    console.log("Scope i is: ", i);
  } else {
    console.log("Scope i is: ", i);
    return i;
  }
}

checkVariableScope();
module.exports = checkVariableScope;
