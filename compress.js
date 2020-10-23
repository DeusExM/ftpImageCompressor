var compress_images = require("compress-images"),
    INPUT_PATH,
    OUTPUT_path;

INPUT_PATH = __dirname + '/images/before/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}';
//allDirectories = 'images/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}';
OUTPUT_path = __dirname + '/images/after/compressed/';

compress_images(INPUT_PATH, OUTPUT_path, {compress_force: false, statistic: true, autoupdate: true}, false,
    {jpg: {engine: "mozjpeg", command: ["-quality", "60"]}},
    {png: {engine: "pngquant", command: ["--quality=65-80", "-o"]}},
    {svg: {engine: "svgo", command: "--multipass"}},
    {gif: {engine: "gifsicle", command: ["--colors", "64", "--use-col=web"]}},
    function (error, completed, statistic) {
        /*
        console.log("-------------");
        console.log(error);
        console.log(completed);
        console.log(statistic);
        console.log("-------------");
        */
    }
);