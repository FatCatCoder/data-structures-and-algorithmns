const util = require('util');

function prettyprint(...obj){
    obj.forEach((element) => {
        console.log(util.inspect(element, true, 2, true));
    });
}

module.exports = prettyprint