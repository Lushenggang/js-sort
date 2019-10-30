function merge(list1, list2) {
  let idx1 = 0, idx2 = 0, result = new Array(list1.length + list2.length)
  while (idx1 < list1.length && idx2 < list2.length) {
    result[idx1 + idx2] = list1[idx1] < list2[idx2] ? list1[idx1++] : list2[idx2++]
  }
  let rest = idx1 >= list1.length ? list2.slice(idx2) : list1.slice(idx1)
  result.splice(idx1 + idx2, rest.length, ...rest)
  return result
}

function mergeSort(list) {
  if (list.length <= 1) return [...list]
  let mid = Math.floor(list.length / 2)
  return merge(mergeSort(list.slice(0, mid)), mergeSort(list.slice(mid, list.length)))
}

module.exports = mergeSort
