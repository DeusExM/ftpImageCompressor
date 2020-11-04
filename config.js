var config = {
    outputImage: __dirname + '/images/done/compressed/',
    compressedImage: __dirname + '/images/done/compressed/',
    inputImage: '/run/user/1000/gvfs/smb-share:server=192.168.5.2,share=marketing/A mettre sur le site/Photos/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}',
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