var damiaomiao = function () {
  function chunk(array, size) {
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
  }

  function compact(array) {
    let result = []
    let l = array.length
    for (let i = 0; i < l; i++) {
      if (array[i]) {
        result.push(array[i])
      }
    }
    return result
  }

  function concat(array, ...args) {
    let result = array
    let l = args.length
    for (let i = 0; i < l; i++) {
      if (args[i][0]) {
        let l = args[i].length
        for (let u = 0; u < l; u++) {
          result.push(args[i][u])
        }
      } else {
        result.push(args[i])
      }
    }
    return result
  }

  return {
    chunk: chunk,
    compact: compact,
    concat: concat,
  }
}