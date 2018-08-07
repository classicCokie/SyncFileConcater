var fs =  require('fs');

const MY_PATH = './persons/';
const DESTINATION_FILE = './test.js';

var concatedFile = "";

readInAllFiles(MY_PATH);
writeToFile();

function readInAllFiles (dir, filelist) {

    var files = fs.readdirSync(dir);

    files.forEach(function(file) {

        if (fs.statSync(dir + file).isDirectory()) {
            readInAllFiles(dir + file + '/', filelist);
        }
        else {
            if (!/\.(js)$/.test(file)) {
                return false;
            }
           concatedFile += fs.readFileSync(dir + file, 'utf-8');
        }
    });
}

function writeToFile() {
    fs.writeFile(DESTINATION_FILE, concatedFile, function(err) {
        if(err) {
            return console.log(err);
        }
    });
}








