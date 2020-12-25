// 封装队列类

function Queue() {
  // 属性
  this.items = []

  // 方法
  // 向队列尾部添加一个新元素
  Queue.prototype.enqueue = function (element) {
    this.items.push(element)
  }
  // 移除队列第一项并返回被移除元素
  Queue.prototype.dequeue = function () {
    return this.items.shift()
  }
  // 返回队列中第一个元素
  Queue.prototype.front = function () {
    return this.items[0]
  }
  // 判断队列是否为空
  Queue.prototype.isEmpty = function () {
    return !this.items.length
  }
  // 返回队列长度
  Queue.prototype.size = function () {
    return this.items.length
  }
  // 将队列转为字符串
  Queue.prototype.toString = function () {
    result = ''
    this.items.forEach(element => {
      result += element + ''
    })
    return result
  }
}

// 击鼓传花代码

function passGame(nameList, num) {
  var queue = new Queue()

  // 所有人添加到队列中
  nameList.forEach(name => {
    queue.enqueue(name)
  })

  while (queue.size() > 1) {
    // 开始数数字,不是num的时候重新加入到队列的末尾
    for (let index = 0; index < num - 1; index++) {
      queue.enqueue(queue.dequeue())
    }
    // num对应的人删除
    queue.dequeue()
  }

  var endName = queue.front()
  return nameList.indexOf(endName)
}

names = ['a', 'b', 'c', 'd', 'e']

console.log(passGame(names, 3))
