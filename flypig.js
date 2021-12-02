/**
 * 将 document.cookie 解析为 HashMap, 如: document.cookie="a=1;b=2;c=3" 解析为 {a: "1", b: "2", c:"3"}
 * @function parseCookies
 * @param  {string} direction {cookie字符串，如"a=1;b=2;c=3"}
 * @return {object} hashMap {解析后的 HashMap}
 */
function parseCookies(cookies) {
    let result = {}
    let draft = cookies.split(';')
    draft.map(ele => {
        let mes = ele.split('=')
        result[mes[0]] = mes[1]
    })
    return result
}

/**
* 判断两个矩形是否重叠
* @function isOverlap
* @param  {object} rect1 {矩形1的坐标和尺寸，如"{ x: 100, y: 100, width: 100, height: 100 }"}
* @param  {object} rect2 {矩形2的坐标和尺寸，如"{ x: 150, y: 150, width: 100, height: 100 }"}
* @return {boolean} isOverlap {是否重叠}
*/
function isOverlap(rect1, rect2) {
    let rectX = comparePick(rect1, rect2, 'x')
    if (compare(...rectX, 'width')) {
        let rectY = comparePick(rect1, rect2, 'y')
        return compare(...rectY, 'height')
    } else {
        return false
    }

    function comparePick(obj1, obj2, att) {
        if (obj1[att] <= obj2[att]) {
            return [obj1, obj2, att]
        } else {
            return [obj2, obj1, att]
        }
    }

    function compare(obj1, obj2, att1, att2) {
        return obj1[att1] + obj1[att2] > obj2[att1]
    }
}

/**
* 寻找2个数组的交集
* @function intersect
* @param  {array} arr1 {数组1，如"[1,2,3,4,5]"}
* @param  {array} arr2 {数组2，如"[1,2,4,7,5]"}
* @return {array} arrOver {交集数组}
*/
function intersect(arr1, arr2) {
    let arrOver = []
    for (let i of arr1) {
        if (arr2.indexOf(i) > -1) arrOver.push(i)
    }
    return arrOver
}

/**
* 数组去重
* @function unique
* @param  {array} arr {数组1，如"[1,2,1,5,3,4,5]"}
* @return {array} unique {合并去重后的数组}
*/
function unique(arr) {
    let unique = []
    for (let i of arr) {
        if (unique.indexOf(i) === -1) unique.push(i)
    }
    return unique
}

/**
* 请基于JS中Array对象的push/pop/shift/unshift，实现一个容量为N的整数队列Queue
*
*要求：
* 1. 当队列容量满时，队列内元素的淘汰算法为“先进先出FIFO”
* 2. 提供max()方法，获取队列中的最大的元素，要求时间复杂度为O(1)
* 3. 实现队列的入列add、获取头部元素peek、出列remove方法等基本的队列操作
*
* @function Queue
* @param  {number} N {容量}
*/
function Queue(N) {
    this.arr = []
    this.max = Math.max(...this.arr)

    this.add = function (n) {
        this.arr.push(n)
        this.reload()
        this.max = n > this.max ? n : Math.max(...this.arr)
        return this.arr
    }

    this.reload = function () {
        while (this.arr.length > N) this.arr = this.arr.slice(- N)
    }

    this.remove = function (idx) {
        let da = this.arr.splice(idx, 1)
        this.max = da[0] < this.max ? this.max : Math.max(...this.arr)
        return this.arr
    }

    this.peek = function () {
        return this.arr[0]
    }

    this.max = function () {
        return this.max
    }

}
