var fs =  require('fs');

const MY_PATH = './persons/';

var concatedFile = "";

readInAllFiles(MY_PATH, []);
writeToFile();

function readInAllFiles (dir, filelist) {
    
    var files = fs.readdirSync(dir);

    filelist = filelist || [];

    files.forEach(function(file) {

        if (fs.statSync(dir + file).isDirectory()) {
            filelist = readInAllFiles(dir + file + '/', filelist);
        }
        else {
            if (!/\.(js)$/.test(filename)) {
                return false;
            }
           concatedFile += fs.readFileSync(dir + file, 'utf-8');
        }
    });
}

function writeToFile() {
    fs.writeFile("./test.js", concatedFile, function(err) {
        if(err) {
            return console.log(err);
        }
    }); 
}







