/* fichier: deploy.js */
var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();

var config = {
  user: "username",
  password: "password",
  host: "ftp address",
  port: 21,
  localRoot: __dirname + '/done/',
  remoteRoot: 'chapier_lu/images/product/',  //images/product/
  include: ['*.png', '**/*'],
  exclude: ["dist/**/*.map", "node_modules/**", "node_modules/**/.*", ".git/**"],
  deleteRemote: false,
  forcePasv: true
}

ftpDeploy.deploy(config)
  .then(res => console.log('finished:', res))
  .catch(err => console.log(err))
  
  /* fichier: deploy.js */
ftpDeploy.on('uploading', function (data) {
  data.totalFilesCount; // total des fichiers à transférer
  data.transferredFileCount; // total des fichier transférés
  data.filename; // fichier en cours de transfert
});
ftpDeploy.on('uploaded', function (data) {
  console.log(data); // données identiques à l'événement "uploading"
});
ftpDeploy.on('log', function (data) {
  console.log(data); // données identiques à l'événement "uploading"
});