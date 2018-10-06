var fs = require('fs');
var StatMode = require('stat-mode');
var colors = require('colors');

fs.stat('./cat.jpg', function(err, stats) {
    var statMode = new StatMode(stats);
    console.log(statMode.toString());
});

/*fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
    console.log('Dane przed zapisem!'.blue);
    console.log(data);
    fs.appendFile('./tekst.txt', '\nA tak wyglądają po zapisie!', function(err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie'.blue)
            console.log(data);
        });
    });
});
*/
fs.readdir('./folder_to_copy', 'utf-8', function(err, files) {
    console.log('Dane przed zapisem!'.blue);
    console.log(files);
    //fs.mkdir('./folder_after_copy', function(err) {
      //  if (err) throw err;
        //console.log('Zapisano!'.blue);
        fs.writeFile('folder_content', files, function(err) {
            console.log('Dane po zapisie'.blue)
        });
    });
//});

/*
fs.readdir('./folder_to_copy', 'utf-8', function(err, files) {
    console.log('Dane przed zapisem!'.blue);
    console.log(files);
    fs.mkdir('./folder_after_copy', function(err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
        fs.writeFile('folder_after_copy/', 'utf-8', function(err) {
            console.log('Dane po zapisie'.blue)
        });
    });
});
*/