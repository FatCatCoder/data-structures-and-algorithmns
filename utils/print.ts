const util = require('util');

function print(...obj: any){
    obj.forEach((element: any) => {
        console.log(util.inspect(element, true, null, true));
    });
}

module.exports = print;