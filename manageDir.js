
const fs = require('fs');
var path = require('path')

let input = __dirname + '/images/after/compressed/';
let output = __dirname + '/images/after/final/';

let largeSizeDir = output + '80';
let smallSizeDir = output + '125';
let verySmallSizeDir = output + '600';

// Créé dossier dans output si existe pas
if (!fs.existsSync(input )){
  fs.mkdirSync(input );
}
if (!fs.existsSync(verySmallSizeDir)){
	fs.mkdirSync(verySmallSizeDir);
}
if (!fs.existsSync(smallSizeDir)){
	fs.mkdirSync(smallSizeDir);
}				
if (!fs.existsSync(largeSizeDir)){
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




	

	