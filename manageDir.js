const fs = require('fs');
var path = require('path')

let input = __dirname + '/images/done/compressed/';
let output = __dirname + '/images/done/final/';

let largeSizeDir = output + '80';
let smallSizeDir = output + '125';
let verySmallSizeDir = output + '600';

// Créé dossier dans output si existe pas
if (!fs.existsSync(input)) {
    fs.mkdirSync(input);
}
if (!fs.existsSync(verySmallSizeDir)) {
    fs.mkdirSync(verySmallSizeDir);
}
if (!fs.existsSync(smallSizeDir)) {
    fs.mkdirSync(smallSizeDir);
}
if (!fs.existsSync(largeSizeDir)) {
    fs.mkdirSync(largeSizeDir);
}

// Suprimme les fichiers dans dossier final
fs.readdir(input, (err, files) => {
    if (err) throw err;

    for (const file of files) {
        fs.unlink(path.join(input, file), err => {
            if (err) throw err;
        });
    }
});

fs.readdir(verySmallSizeDir, (err, files) => {
    if (err) throw err;

    for (const file of files) {
        fs.unlink(path.join(verySmallSizeDir, file), err => {
            if (err) throw err;
        });
    }
});

fs.readdir(smallSizeDir, (err, files) => {
    if (err) throw err;

    for (const file of files) {
        fs.unlink(path.join(smallSizeDir, file), err => {
            if (err) throw err;
        });
    }
});


fs.readdir(largeSizeDir, (err, files) => {
    if (err) throw err;

    for (const file of files) {
        fs.unlink(path.join(largeSizeDir, file), err => {
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




	

	