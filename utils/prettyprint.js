const util = require('util');

function prettyprint(...obj){
    obj.forEach((element) => {
        console.log(util.inspect(element, true, null, true));
    });
}

module.exports = prettyprint