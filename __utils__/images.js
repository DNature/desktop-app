import fs from 'fs';

export function buildHtmlImage(encodedImage) {
  return (encodedImage = `<img src=${encodedImage}>`);
}

export async function encodesToBase64(file) {
  // read binary data
  var bitmap = await fs.promises.readFile(file);
  // convert binary data to base64 encoded string
  const buffer = Buffer.from(bitmap).toString('base64');
  // console.log({buffer})
  await fs.promises.writeFile('buffer.txt', buffer);
  return buffer;
}

// export async function downloadImage(url, path, fileName) {
//     fs.createWriteStream(path + + ".jpg");
//     http.get(url) {
//         response.pipe(file);
//     });
// }
// const http = require('https');
// const fs = require('fs');

// fs.createWriteStream("file.jpg");
//  http.get("https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png", function(response) {
//   response.pipe(file);
// });
