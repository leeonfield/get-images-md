var getImg = require('./index.js')
var input = `
![a](http://leeon.im/image1)
![b](http://leeon.im/image2)
![c](http://leeon.im/image3)
`
var nodeObj = getImg(input)

console.log(nodeObj)