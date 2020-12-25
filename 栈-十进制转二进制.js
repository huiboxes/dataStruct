// 封装栈类
function Stack() {
  // 栈的属性
  this.items = []

  // 栈的方法
  // 添加新元素到栈顶
  Stack.prototype.push = function (element) {
    this.items.push(element)
  }

  // 从栈顶取出元素
  Stack.prototype.pop = function () {
    return this.items.pop()
  }

  // 查看下一个栈顶元素
  Stack.prototype.peek = function () {
    return this.items[this.items.length - 1]
  }

  // 判断栈是否为空
  Stack.prototype.isEmpty = function () {
    return !this.items.length
  }

  // 获取栈中元素的个数
  Stack.prototype.size = function () {
    return this.items.length
  }

  // toString方法
  Stack.prototype.toString = function () {
    var result = ''
    this.items.forEach(element => {
      result += element + ''
    })
    return result
  }
}

// 将十进制转换成二进制
function decTobin(decNumber) {
  var stack = new Stack()
  while (decNumber > 0) {
    // 获取余数
    stack.push(decNumber % 2)

    // 获取整出后的结果作为下一次的数字
    decNumber = Math.floor(decNumber / 2)
  }
  // 从栈中取出二进制
  var binaryString = ''
  while (!stack.isEmpty()) {
    binaryString += stack.pop()
  }
  return binaryString
}

console.log(decTobin(100))