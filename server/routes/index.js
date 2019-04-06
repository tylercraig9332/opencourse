const fs = require('fs');
const path = require('path');

// Requires all the files in the api folder
module.exports = (app) => {
	fs.readdirSync('routes/api/').forEach((file) => {
    if (file.substr(0, file.indexOf('.')) == 'example') {
      continue;
    } else {
		    require(`./api/${file.substr(0, file.indexOf('.'))}`)(app);
    }
	})
}
