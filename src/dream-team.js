const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let name = '';

  for (i = 0; i < members.length; i++) {
    if (typeof(members[i]) === 'string') {
      name +=  members[i].trim()[0];
    }
  }

  name = name.toUpperCase().split("").sort().join("");

  return name;
};
