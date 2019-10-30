// 快速排序
function quickSort(list, left = 0, right = -1) {
  right < 0 && (right = list.length - 1)
  if (left >= right) return
  let lIdx = left, rIdx = right, mid = list[right]
  list.slice(left, right + 1).forEach(item => item > mid ? list[rIdx--] = item : list[lIdx++] = item)
  quickSort(list, left, rIdx - 1)
  quickSort(list, rIdx + 1, right)
}

let list = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3]
quickSort(list)
console.log(list)
module.exports = quickSort