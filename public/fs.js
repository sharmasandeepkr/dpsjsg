(function() {
    var fs = require('fs');
    var util = require('util');
    var readStream = fs.createReadStream('/mnt/c/Users/sandeep\ kumar/Desktop/link.txt');
    readStream.on('data', function(data) {
        var sdt = data.toString();
        console.log(util.inspect(sdt));
    });
    readStream.on('end', function() { console.log('file ended'); });
})();