
const FUNC_LIST = {
  bubbleSort: require('./bubble-sort'),
  quickSort: require('./quick-sort')
}

function autoTest() {
  let list = new Array(2000)
  for (let idx = 0; idx < list.length; idx++) {
    list[idx] = Math.floor(Math.random() * 1000)
  }
  for (let sortKey in FUNC_LIST) {
    sortList = [...list]
    console.time(sortKey)
    FUNC_LIST[sortKey](sortList)
    console.timeEnd(sortKey)
  }
}

autoTest()