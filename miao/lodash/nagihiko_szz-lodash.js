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
		let result = []
		let arr = concat(...values)
		for (let i of array) {
			if (arr.indexOf(i) < 0)
				result.push(i)
		}
		return result
	}

	function diffenrenceBy(array, ...values) {
		let result = []
		let arr = concat(...values)
		let fun = iteratee(arr.pop())
		forEach(arr, fun)
		// arr.forEach(fun)
		for (let i of array) {
			if (arr.indexOf(fun(i)) < 0)
				result.push(i)
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

	function fill(array, value, st, en) {
		let result = []
		let l = array.length
		let i = 0
		while (i < st) {
			result.push(array[i])
			i++
		}
		while (i < en) {
			result.push(value)
			i++
		}
		while (i < l) {
			result.push(array[i])
			i++
		}
		return result
	}

	function findIndex() {

	}

	function findLastIndex() {

	}

	function flatten(array) {
		let result = []
		let l = array.length
		for (let i = 0; i < l; i++) {
			if (array[i][0] === undefined) {
				result.push(array[i])
			} else {
				let ll = array[i].length
				for (let u = 0; u < ll; u++) result.push(array[i][u])
			}
		}
		return result
	}

	function flattenDeep(array) {
		let result = []
		let l = array.length
		for (let i = 0; i < l; i++) {
			if (array[i][0] === undefined) {
				result.push(array[i])
			} else {
				let dv = flattenDeep(array[i])
				concat(result, dv)
			}
		}
		return result
	}

	function flattenDepth(array, k) {
		let result = []
		let l = array.length
		for (let i = 0; i < l; i++) {
			if (array[i][0] !== undefined && k > 0) {
				let dv = flattenDepth(array[i], --k)
				concat(result, dv)
			} else {
				result.push(array[i])
			}
		}
		return result
	}

	function fromPairs() {

	}

	function head() {

	}

	function indexOf() {

	}

	function initial() {

	}

	function intersection() {

	}

	function intersectionBy() {

	}

	function intersectionWith() {

	}

	function join() {

	}

	function last() {

	}

	function lastIndexOf() {

	}

	function nth() {

	}

	function pull() {

	}

	function pullAll() {

	}

	function pullAllBy() {

	}

	function pullAllWith() {

	}

	function pullAt() {

	}

	function reverse() {

	}

	function sortedIndex() {

	}

	function sortedIndexBy() {

	}

	function sortedIndexOf() {

	}

	function sortedLastIndex() {

	}

	function sortedLastIndexBy() {

	}

	function sortedLastIndexOf() {

	}

	function sortedUniq() {

	}

	function sortedUniqBy() {

	}

	function tail() {

	}

	function take() {

	}

	function takeRight() {

	}

	function takeRightWhile() {

	}

	function takeWhile() {

	}

	function union() {

	}

	function unionBy() {

	}

	function unionWith() {

	}

	function uniq(array) {
		let result = []
		for (let i of array) {
			if (!result.includes(array[i]))
				result.push(array[i])
		}
		return result
	}

	function uniqBy() {

	}

	function uniqWith() {

	}

	function unzip() {

	}

	function unzipWith() {

	}

	function without() {

	}

	function xor() {

	}

	function xorBy() {

	}

	function xorWith() {

	}

	function zip(...array) {
		let result = []
		for (let i = 0; i < array.length; i++) {
			for (let u = 0; u < array[i].length; u++) {
				if (result[u] === undefined) result.push([])
				result[u].push(array[i][u])
			}
		}
		return result
	}

	function zipObject() {

	}

	function zipObjectDeep() {

	}

	function zipWith() {

	}

	function countBy() {

	}

	function every() {

	}

	function filter(obj, fun) {
		fun = iteratee(fun)
		let result = []
		for (let it in obj) {
			if (fun(obj[it]))
				result.push(obj[it])
		}
		return result
	}

	function find() {

	}

	function findLast() {

	}

	function flatMap() {

	}

	function flatMapDeep() {

	}

	function flatMapDepth() {

	}

	function forEach(array, fun) {
		for (let key in array) {
			array[key] = fun(array[key], key, array)
		}
		return array
	}

	function forEachRight(array, fun) {
		let l = array.length
		for (let key = l - 1; key >= 0; key--) {
			fun(array[key], key, array)
		}
		return array
	}

	function groupBy(array, f) {
		let result = {}
		if (f === 'length') {
			let l = array.length
			for (let i = 0; i < l; i++) {
				let div = array[i].length
				if (div in result) {
					result[div].push(array[i])
				} else {
					result[div] = [array[i]]
				}
			}
		} else {
			let l = array.length
			for (let i = 0; i < l; i++) {
				let div = f(array[i])
				if (div in result) {
					result[div].push(array[i])
				} else {
					result[div] = [array[i]]
				}
			}
		}
		return result
	}

	function includes() {

	}

	function invokeMap() {

	}

	function keyBy(array, f) {
		let result = {}
		if (typeof f === 'function') {
			for (let i = 0; i < array.length; i++) {
				let div = f(array[i])
				if (div in result) {
					result[div].push(array[i])
				} else {
					result[div] = [array[i]]
				}
			}
		} else {
			for (let i = 0; i < array.length; i++) {
				let div = array[i][f]
				if (div in result) {
					result[div].push(array[i])
				} else {
					result[div] = [array[i]]
				}
			}
		}
		return result
	}

	function map(obj, fun) {
		fun = iteratee(fun)
		let result = []
		for (let i in obj) {
			result.push(fun(obj[i], obj[i - 1] || 0, obj))
		}
		return result
	}

	function iteratee(predicate) {
		if (typeof predicate === 'function')
			return predicate
		if (typeof predicate === 'string')
			return property(predicate)
		if (Array.isArray(predicate))
			return isEqual(...predicate)
		if (typeof predicate === 'object')
			return matches(predicate)
	}

	function orderBy() {

	}

	function partition() {

	}

	function reduce(obj, fn, init) {
		fn = iteratee(fn)
		if (Array.isArray(obj)) {
			init = init || 0
			for (let i of obj)
				init = fn(init, i)
		} else {
			init = init || {}
			for (let i in obj) {
				init = fn(init, obj[i], i)
			}
		}
		return init
		// let keyArr = keys(obj),
		// 	start = 0
		// if (arguments.length == 2) {
		// 	start = 1
		// 	init = obj[keyArr[0]]
		// }
		// for (let i = start; i < keyArr.length; i++) {
		// 	init = fn(init, obj[keyArr[i]], keyArr[i], obj)
		// }
		// return init
	}

	function reduceRight() {

	}

	function reject() {

	}

	function sample() {

	}

	function sampleSize() {

	}

	function shuffle() {

	}

	function size() {

	}

	function some() {

	}

	function sortBy() {

	}

	function ary() {

	}

	function curry() {

	}

	function defer() {

	}

	function delay() {

	}

	function flip() {

	}

	function memoize() {

	}

	function negate() {

	}

	function once() {

	}

	function spread() {

	}

	function unary() {

	}

	function castArray() {

	}

	function cloneDeep() {

	}

	function conformsTo() {

	}

	function eq() {

	}

	function gt() {

	}

	function gte() {

	}

	function isArguments() {

	}

	function isArray() {

	}

	function isArrayBuffer() {

	}

	function isArrayLike() {

	}

	function isArrayLikeObject() {

	}

	function isBoolean() {

	}

	function isDate() {

	}

	function isElement() {

	}

	function isEmpty() {

	}

	function isEqual(object, other) {
		if (typeof object === 'number' || typeof object === 'string')
			return object === other
		if (Array.isArray(object)) {
			if (!Array.isArray(other)) return false
			if (object.length !== other.length) return false
			for (let i = 0; i < object.length; i++) {
				if (!isEqual(object[i], other[i]))
					return false
			}
			return true
		}
		if (typeof object === 'object') {
			if (typeof other !== 'object') return false
			if (Object.keys(object).length !== Object.keys(other).length) return false
			let keys = Object.keys(object)
			for (let i = 0; i < keys.length; i++) {
				if (!other[keys[i]] || !isEqual(object[keys[i]], other[keys[i]]))
					return false
			}
			return true
		}
	}

	function isEqualWith() {

	}

	function isError() {

	}

	function isFinite() {

	}

	function isFunction() {

	}

	function isInteger() {

	}

	function isLength() {

	}

	function isMap() {

	}

	function isMatch(object, source) {
		if (object == source)
			return true
		if (typeof object !== 'object' || typeof source !== 'object')
			return false
		for (let i in source) {
			if (source[i] && typeof source[i] !== 'object') {
				if (object[i] !== source[i])
					return false
			} else {
				if (!isMatch(object[i], source[i]))
					return false
			}
		}
		return true
	}

	function isMatchWith() {

	}

	function isNaN() {

	}

	function isNative() {

	}

	function isNil() {

	}

	function isNull() {

	}

	function isNumber() {

	}

	function isObject() {

	}

	function isObjectLike() {

	}

	function isPlainObject() {

	}

	function isRegExp() {

	}

	function isSafeInteger() {

	}

	function isSet() {

	}

	function isString() {

	}

	function isSymbol() {

	}

	function isTypedArray() {

	}

	function isUndefined() {

	}

	function isWeakMap() {

	}

	function isWeakSet() {

	}

	function lt() {

	}

	function lte() {

	}

	function toArray() {

	}

	function toFinite() {

	}

	function toInteger() {

	}

	function toLength() {

	}

	function toNumber() {

	}

	function assign() {

	}

	function at() {

	}

	function toSafeInteger() {

	}

	function add() {

	}

	function ceil() {

	}

	function divide() {

	}

	function floor() {

	}

	function max() {

	}

	function maxBy() {

	}

	function mean() {

	}

	function meanBy() {

	}

	function min() {

	}

	function minBy() {

	}

	function multiply() {

	}

	function round() {

	}

	function subtract() {

	}

	function sum(array) {
		return array.reduce((x, y) => x + y)
	}

	function sumBy(array, fun = identity) {
		fun = iteratee(fun)
		return array.reduce((x, y) => x + fun(y), 0)
	}

	function clamp() {

	}

	function inRange() {

	}

	function random() {

	}

	function assignIn() {

	}

	function defaults() {

	}

	function defaultsDeep() {

	}

	function findKey() {

	}

	function findLastKey() {

	}

	function forIn() {

	}

	function forInRight() {

	}

	function forOwn() {

	}

	function forOwnRight() {

	}

	function functions() {

	}

	function functionsIn() {

	}

	function get(object, array, defaultvalue = 'default') {
		for (let i of array.toPath()) {
			if (object == undefined) {
				return defaultvalue
			} else {
				object = object[i]
			}
		}
		return object
	}

	function has() {

	}

	function hasIn() {

	}

	function invert() {

	}

	function invertBy() {

	}

	function invoke() {

	}

	function keys(obj) {
		let res = []
		for (let i in obj) {
			if (obj.hasOwnProperty(i))
				res.push(i)
		}
		return res
	}

	function keysIn() {

	}

	function mapKeys() {

	}

	function mapValues() {

	}

	function merge() {

	}

	function mergeWith() {

	}

	function omit() {

	}

	function omitBy() {

	}

	function pick() {

	}

	function pickBy() {

	}

	function result() {

	}

	function set() {

	}

	function setWith() {

	}

	function toPairs() {

	}

	function toPairsIn() {

	}

	function transform() {

	}

	function unset() {

	}

	function update() {

	}

	function updateWith() {

	}

	function values() {

	}

	function valuesIn() {

	}

	function camelCase() {

	}

	function capitalize() {

	}

	function endsWith() {

	}

	function escape() {

	}

	function escapeRegExp() {

	}

	function kebabCase() {

	}

	function lowerCase() {

	}

	function lowerFirst() {

	}

	function pad() {

	}

	function padEnd() {

	}

	function padStart() {

	}

	function parseInt() {

	}

	function repeat() {

	}

	String.prototype.search2 = function (reg) {
		if (typeof reg == 'string') {
			return this.indexOf(reg)
		}
		var prevLastIndex = reg.lastIndex // 记录正则本身的lastIndex以备后续还原
		reg.lastIndex = start // 将lastIndex归0以防止有g的话不从开头匹配
		var match = reg.exec(this)
		if (match) {
			reg.lastIndex = prevLastIndex
			return match.index
		} else {
			reg.lastIndex = prevLastIndex
			return -1
		}
	}

	String.prototype.match2 = function (re) {
		if (re.global) {
			var prevLastIndex = re.lastIndex
			re.lastIndex = 0
			var result = []
			var match = null

			while (match = re.exec(this)) {
				result.push(match[0])
			}

			if (result.length == 0) {
				return null
			}
			return result
		} else {
			return re.exec(this)
		}
	}

	function replace(string, replacer, replacement,) {
		if (typeof replacer == 'string') {
			var idx = this.indexOf(replacer)
			if (typeof replacement == 'function') {
				replacement = replacement(replacer, idx, this)
			} else {
				replacement = replacement.split2('$&').join(replacer)
			}
			if (idx == -1) {
				return this
			} else {
				return this.slice(0, idx) + replacement + this.slice(idx + replacer.length)
			}
		} else {
			var oldLastIndex = replacer.lastIndex
			replacer.lastIndex = 0
			replacement = transformReplacementStringToReplacementFunction(replacement)
			var result = ''

			var match = null
			var startIndex = replacer.lastIndex
			while (match = replacer.exec(this)) {
				result += this.slice(startIndex, match.index)
				result += replacement(...match)
				startIndex = replacer.lastIndex
				if (match[0] == '') { // 零宽匹配
					replacer.lastIndex++
				}
			}
			result += this.slice(startIndex)

			return result
		}

		//将形如'aaa$&bbb$1ccc$2d'的字符串转换为等价的函数
		function transformReplacementStringToReplacementFunction(replacementString) {
			if (typeof replacementString == 'function') {
				return replacementString
			}
			// replacementString: 'aaa$&bbb$1ccc$2d'
			var splitted = replacementString.split2(/(\$[\d&])/)
			// splitted is like ["aaa", "$&", "bbb", "$1", "ccc", "$2", "d"]
			return function (...args) {
				var str = ''
				for (var part of splitted) {
					if (part.length == 2 && part[0] == '$') { // part is like $& $5 $7
						if (part[1] == '&') {
							str += args[0]
						} else {
							str += args[part[1]] || ''
						}
					} else {
						str += part
					}
				}
				return str
			}
		}
	}

	function snakeCase() {

	}

	function split(string, spliter, length = Infinity) {
		let result = []
		if (typeof spliter == 'string') {
			let st = 0
			let index
			while (index = string.indexOf(spliter) >= 0 && length-- > 0) {
				result.push(string.slice(st, index))
				st = index + spliter.length
			}
			result.push(string.slice(st))
			return result
		} else {
			// let index = spliter.lastIndexOf
			spliter.lastIndex = 0

			if (!spliter.global)
				spliter = new RegExp(spliter, spliter.flags + 'g')

			let st = spliter.lastIndex
			let match = null
			while (match = spliter.exec(string)) {
				result.push(string.slice(st, match.index))
				result.push(...match.slice(1))
				st = spliter.lastIndex
				if (match[0] == '')
					spliter.lastIndex++
			}
			result.push(string.slice(st))
			return result
		}
	}

	function startCase() {

	}

	function startsWith() {

	}

	function toLower() {

	}

	function toUpper() {

	}

	function trim() {

	}

	function trimEnd() {

	}

	function trimStart() {

	}

	function truncate() {

	}

	function unescape() {

	}

	function upperCase() {

	}

	function upperFirst() {

	}

	function words() {

	}

	function conforms() {

	}

	function constant() {

	}

	function defaultTo() {

	}

	function flow() {

	}

	function identity(value) {
		return value
	}

	function matches(source) {
		return function (object) {
			return isMatch(object, source)
		}
	}

	function method() {

	}

	function methodOf() {

	}

	function nthArg() {

	}

	function property(value) {
		if (value.indexOf('.') < 0) {
			return function (dv) {
				return dv[value]
			}
		} else {
			return function (dv) {
				vw = value.split('.')
				for (let it of vw)
					dv = dv[it]
				return dv
			}
		}
	}

	function propertyOf() {

	}

	function range() {

	}

	function rangeRight() {

	}

	function times() {

	}

	function toPath(value) {
		// if (Array.isArray(value)) {
		// 	return value
		// } else {
		// 	return value.split('.')
		// }
		return Array.isArray(value) ? value : value.split('.')
	}

	function uniqueId() {

	}

	function parseJson() {

	}

	function stringifyJson() {

	}

	return {
		chunk,
		compact,
		concat,
		difference,
		diffenrenceBy,
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
		snakeCase,
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
}()