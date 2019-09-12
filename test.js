var getImg =  require('./index.js')
var fs = require('fs')
var input =`
## hello
contetn
![电风扇卡了](http://leeon.im/image1)
![a](http://leeon.im/image1)
![b](http://leeon.im/image2)
![c](http://leeon.im/image3)
![d法撒旦法撒旦法撒旦.png](http://leeon.im/image4)
`
var nodeObj = getImg(input)
fs.writeFileSync('test.json', nodeObj)
console.log(nodeObj)