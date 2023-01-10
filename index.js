const cv = require('opencv4nodejs');

const mat = cv.imread('./test1.png');
const threshold = mat.threshold(0, 255, cv.THRESH_BINARY);

const ocr = new cv.OCR();
const text = ocr.run(threshold);
console.log(text);