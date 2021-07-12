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

  function difference(array, ...values) {
    let result = array
    let arr = concat(...values)
    for (let i = 0; i < arr.length; i++) {
      let n = result.indexOf(arr[i])
      if (n >= 0) {
        result[n] = result[result.length - 1]
        result.pop()
      }
    }
    return result
  }


  return {
    chunk: chunk,
    compact: compact,
    concat: concat,
    difference: difference,
  }
}