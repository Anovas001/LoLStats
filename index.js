const gm = require('gm');

gm('test1.png')
    .blackThreshold(100 ,100 , 100 , 0.5)
    .write("threshold1.png", function (err) {
        if (!err) console.log('done');
        else console.log(err)
    });

const tesseract = require("node-tesseract-ocr")

const config = {
    lang: "eng",
    oem: 1,
    psm: 3,
}

tesseract
    .recognize("threshold1.png", config)
    .then((text) => {
        console.log("Result:", text)
    })
    .catch((error) => {
        console.log(error.message)
    })