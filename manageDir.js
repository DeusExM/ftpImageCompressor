const fs = require('fs');
var path = require('path')

let input = __dirname + '/images/done/compressed/';
let output = __dirname + '/images/done/resize/';

let largeSizeDir = '80';
let smallSizeDir ='125';
let verySmallSizeDir = '600';

// Créé dossier dans output si existe pas
if (!fs.existsSync(input + verySmallSizeDir)) {
    fs.mkdirSync(input + verySmallSizeDir);
}
if (!fs.existsSync( input + smallSizeDir)) {
    fs.mkdirSync( input + smallSizeDir);
}
if (!fs.existsSync(input + largeSizeDir)) {
    fs.mkdirSync(input + largeSizeDir);
}

if (!fs.existsSync(output + verySmallSizeDir)) {
    fs.mkdirSync(output + verySmallSizeDir);
}
if (!fs.existsSync( output + smallSizeDir)) {
    fs.mkdirSync( output + smallSizeDir);
}
if (!fs.existsSync(output + largeSizeDir)) {
    fs.mkdirSync(output + largeSizeDir);
}

// Suprimme les fichiers dans dossier final
fs.readdir(input + verySmallSizeDir, (err, files) => {
    if (err) throw err;

    for (const file of files) {
        fs.unlink(path.join(input + verySmallSizeDir, file), err => {
            if (err) throw err;
        });
    }
});

fs.readdir(input + smallSizeDir, (err, files) => {
    if (err) throw err;

    for (const file of files) {
        fs.unlink(path.join(input + smallSizeDir, file), err => {
            if (err) throw err;
        });
    }
});

fs.readdir(input + largeSizeDir, (err, files) => {
    if (err) throw err;

    for (const file of files) {
        fs.unlink(path.join(input + largeSizeDir, file), err => {
            if (err) throw err;
        });
    }
});





// Suprimme les fichiers dans dossier final
fs.readdir(output + verySmallSizeDir, (err, files) => {
    if (err) throw err;

    for (const file of files) {
        fs.unlink(path.join(output + verySmallSizeDir, file), err => {
            if (err) throw err;
        });
    }
});

fs.readdir(output + smallSizeDir, (err, files) => {
    if (err) throw err;

    for (const file of files) {
        fs.unlink(path.join(output + smallSizeDir, file), err => {
            if (err) throw err;
        });
    }
});

fs.readdir(output + largeSizeDir, (err, files) => {
    if (err) throw err;

    for (const file of files) {
        fs.unlink(path.join(output + largeSizeDir, file), err => {
            if (err) throw err;
        });
    }
});



//-------------- move file exported in old folder (change code to do that when succesfully exported in "deploy"

let remoteFilesInput = '/run/user/1000/gvfs/smb-share:server=192.168.5.2,share=marketing/A mettre sur le site/Photos/';
let remoteFilesMoveTo = '/run/user/1000/gvfs/smb-share:server=192.168.5.2,share=marketing/A mettre sur le site/Photos/old/';
// Suprimme les fichiers dans dossier final
fs.readdir(remoteFilesInput, {withFileTypes: true}, (err, files) => {
    if (err) throw err;
    for (const file of files) {
        if (file.isFile()) {
            if ((/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i).test(path.extname(file.name))) {
                fs.rename(path.join(remoteFilesInput, file.name), path.join(remoteFilesMoveTo, file.name), function(err) {
                    if (err) {
                        throw err
                    } else {
                        console.log("Successfully moved the file!")
                    }
                })
            }
        }
    }
});







