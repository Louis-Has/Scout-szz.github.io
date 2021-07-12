let damiaomiao = {
  chunk: function (array, size) {
    let result = []
    let l = array.length
    let i = 0
    while (i < l) {
      let dv = []
      while (dv.length < size && i < l) {
        dv.push(array[i])
        i++
      }
      result.push(dv)
    }
    return result
  },
  compact: function (array) {
    let result = []
    let l = array.length
    for (let i = 0; i < l; i++) {
      if (array[i]) {
        result.push(array[i])
      }
    }
    return result
  },
  concat: function (array)


}