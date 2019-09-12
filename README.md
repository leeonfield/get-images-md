# get-images-md
get all images node in markdown

```js
var getImg = require('md-imgs')
var input = `
![a](http://leeon.im/image1)
![b](http://leeon.im/image2)
![c](http://leeon.im/image3)
`
var srcList = getImg(input)
console.log(srcList)
/**
[
  'http://leeon.im/image1',
  'http://leeon.im/image2',
  'http://leeon.im/image3'
]
**/
```

get