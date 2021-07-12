var nagihiko_szz = function () {
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

  function differenceBy(array, ...values) {
    let len = arguments.length
    //TODO
    let result = array.map(f)
    let arr = concat(...values).map(f)
    for (let i = 0; i < arr.length; i++) {
      let n = result.indexOf(arr[i])
      if (n >= 0) {
        result[n] = result[result.length - 1]
        result.pop()
      }
    }
    return result
  }

  function differenceWith() {

  }

  function drop(array, n = 1) {
    let result = []
    let l = array.length
    let i = n
    while (i < l) {
      result.push(array[i])
      i++
    }
    return result
  }

  function dropRight(array, n = 1) {
    let result = []
    let l = array.length - n
    let i = 0
    while (i < l) {
      result.push(array[i])
      i++
    }
    return result
  }

  function dropRightWhile() {

  }

  function dropWhile() {

  }

  function fill()

  return {
    chunk,
    compact,
    concat,
    difference,
    differenceBy,
    differenceWith,
    drop,
    dropRight,
    dropRightWhile,
    dropWhile,
    fill,
    findIndex,
    findLastIndex,
    flatten,
    flattenDeep,
    flattenDepth,
    fromPairs,
    head,
    indexOf,
    initial,
    intersection,
    intersectionBy,
    intersectionWith,
    join,
    last,
    lastIndexOf,
    nth,
    pull,
    pullAll,
    pullAllBy,
    pullAllWith,
    pullAt,
    reverse,
    sortedIndex,
    sortedIndexBy,
    sortedIndexOf,
    sortedLastIndex,
    sortedLastIndexBy,
    sortedLastIndexOf,
    sortedUniq,
    sortedUniqBy,
    tail,
    take,
    takeRight,
    takeRightWhile,
    takeWhile,
    union,
    unionBy,
    unionWith,
    uniq,
    uniqBy,
    uniqWith,
    unzip,
    unzipWith,
    without,
    xor,
    xorBy,
    xorWith,
    zip,
    zipObject,
    zipObjectDeep,
    zipWith,
    countBy,
    every,
    filter,
    find,
    findLast,
    flatMap,
    flatMapDeep,
    flatMapDepth,
    forEach,
    forEachRight,
    groupBy,
    includes,
    invokeMap,
    keyBy,
    map,
    orderBy,
    partition,
    reduce,
    reduceRight,
    reject,
    sample,
    sampleSize,
    shuffle,
    size,
    some,
    sortBy,
    ary,
    curry,
    defer,
    delay,
    flip,
    memoize,
    negate,
    once,
    spread,
    unary,
    castArray,
    cloneDeep,
    conformsTo,
    eq,
    gt,
    gte,
    isArguments,
    isArray,
    isArrayBuffer,
    isArrayLike,
    isArrayLikeObject,
    isBoolean,
    isDate,
    isElement,
    isEmpty,
    isEqual,
    isEqualWith,
    isError,
    isFinite,
    isFunction,
    isInteger,
    isLength,
    isMap,
    isMatch,
    isMatchWith,
    isNaN,
    isNative,
    isNil,
    isNull,
    isNumber,
    isObject,
    isObjectLike,
    isPlainObject,
    isRegExp,
    isSafeInteger,
    isSet,
    isString,
    isSymbol,
    isTypedArray,
    isUndefined,
    isWeakMap,
    isWeakSet,
    lt,
    lte,
    toArray,
    toFinite,
    toInteger,
    toLength,
    toNumber,
    assign,
    at,
    toSafeInteger,
    add,
    ceil,
    divide,
    floor,
    max,
    maxBy,
    mean,
    meanBy,
    min,
    minBy,
    multiply,
    round,
    subtract,
    sum,
    sumBy,
    clamp,
    inRange,
    random,
    assignIn,
    defaults,
    defaultsDeep,
    findKey,
    findLastKey,
    forIn,
    forInRight,
    forOwn,
    forOwnRight,
    functions,
    functionsIn,
    get,
    has,
    hasIn,
    invert,
    invertBy,
    invoke,
    keys,
    keysIn,
    mapKeys,
    mapValues,
    merge,
    mergeWith,
    omit,
    omitBy,
    pick,
    pickBy,
    result,
    set,
    setWith,
    toPairs,
    toPairsIn,
    transform,
    unset,
    update,
    updateWith,
    values,
    valuesIn,
    camelCase,
    capitalize,
    endsWith,
    escape,
    escapeRegExp,
    kebabCase,
    lowerCase,
    lowerFirst,
    pad,
    padEnd,
    padStart,
    parseInt,
    repeat,
    replace,
    snakeCase,
    split,
    startCase,
    startsWith,
    toLower,
    toUpper,
    trim,
    trimEnd,
    trimStart,
    truncate,
    unescape,
    upperCase,
    upperFirst,
    words,
    conforms,
    constant,
    defaultTo,
    flow,
    identity,
    matches,
    method,
    methodOf,
    nthArg,
    property,
    propertyOf,
    range,
    rangeRight,
    times,
    toPath,
    uniqueId,
    parseJson,
    stringifyJson,
  }
}