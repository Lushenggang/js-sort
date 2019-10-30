// 冒泡排序
function bubbleSort (list) {
  for (let i = 0; i < list.length; i++) {
    for (let j = 1; j < list.length - i; j++) {
      list[j] < list[j - 1] && ([list[j - 1], list[j]] = [list[j], list[j - 1]])
    }
  }
}

let list = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3]
bubbleSort(list)
console.log(list)
module.exports = bubbleSort
