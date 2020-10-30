var config = {
    outputImage: __dirname + '/images/done/compressed/',
    compressedImage: __dirname + '/images/done/compressed/',
    inputImage: __dirname + '/images/todo/',
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