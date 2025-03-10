const fs = require("fs");
const util = require("util");

class Writer{
    construtor(){
    
        this.writer = util.promisify(fs.writeFile);
    }

    async sWrite(filename, data){

        try{
            await this.writer(filename,data);
            return true;
        }catch{
            return false;
        }
        
    }
}

module.exports = Writer;