//Name of the File : image-resize-sharp.js
const sharp = require('sharp');
const fs = require('fs');
const isImage = require('is-image');

var path = require('path')

let input = 'C:/wamp64/www/nodeJs/images/a_faire/'; /*"G:/A mettre sur le site/Photos/";*/
let output = 'C:/wamp64/www/nodeJs/images/output2/';

let largeSizeDir = '600/';
let largeSize = '_l'; //on peut l'enlever ne sert a rien en l'etat

let smallSizeDir = '125/';
let smallSize = '_s'; //on peut l'enlever ne sert a rien en l'etat
 
let verySmallSizeDir = '80/';
let verySmallSize = '_vs'; //on peut l'enlever ne sert a rien en l'etat


const vs = output + verySmallSizeDir;
const s = output + smallSizeDir;
const l = output + largeSizeDir;
const finalDir = "final/";

// Créé dossier dans output si existe pas

if (!fs.existsSync(output + verySmallSizeDir)){
	fs.mkdirSync(output + verySmallSizeDir);
}
if (!fs.existsSync(output + smallSizeDir)){
	fs.mkdirSync(output + smallSizeDir);
}				
if (!fs.existsSync(output + largeSizeDir)){
	fs.mkdirSync(output + largeSizeDir);
}

// Suprimme les fichiers dans dossier final

fs.readdir(finalDir + verySmallSizeDir, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    fs.unlink(path.join(finalDir + verySmallSizeDir, file), err => {
      if (err) throw err;
    });
  }
});

fs.readdir(finalDir + smallSizeDir, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    fs.unlink(path.join(finalDir + smallSizeDir, file), err => {
      if (err) throw err;
    });
  }
});


fs.readdir(finalDir + largeSizeDir, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    fs.unlink(path.join(finalDir + largeSizeDir, file), err => {
      if (err) throw err;
    });
  }
});

// Suprimme les fichiers dans output


fs.readdir(vs, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    fs.unlink(path.join(vs, file), err => {
      if (err) throw err;
    });
  }
});

fs.readdir(s, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    fs.unlink(path.join(s, file), err => {
      if (err) throw err;
    });
  }
});

fs.readdir(l, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    fs.unlink(path.join(l, file), err => {
      if (err) throw err;
    });
  }
});






	

	