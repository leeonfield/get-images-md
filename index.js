var commonMark = require("commonmark")
function getAllImg(markdown) {
  if (!markdown) return
  var parsed = new commonMark.Parser().parse(markdown)
  var walker = parsed.walker()
  var event
  var nodeList = []
  while ((event = walker.next())) {
    var node = event.node
    if (node.type === "image" && node.destination) {
      nodeList.push(node.destination)
    }
  }

  return nodeList
}

module.exports = getAllImg
