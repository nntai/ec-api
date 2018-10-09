const fs = require('fs');
const path = require('path');

function moduleExists(module) {
  const modules = fs.readdirSync(
    path.join(__dirname, '../../../server/modules'),
  );
  return modules.indexOf(module) >= 0;
}

module.exports = moduleExists;
