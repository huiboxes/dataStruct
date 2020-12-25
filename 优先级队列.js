function PriorityQueue() {
  this.items = []

  function QueueElement(element, priority) {
    this.element = element
    this.priority = priority
  }
  // 添加新数据
  PriorityQueue.prototype.enqueue = function (element, priority) {
    var queueElement = new QueueElement(element, priority)

    if (this.items.length == 0) {
      this.items.push(queueElement)
    } else {
      var added = false
      this.items.forEach(item => {
        if (queueElement.priority < item.priority) {
          this.items.splice(i, 0, queueElement)
          added = true
          break
        }
      })

      if (!added) {
        this.items.push(queueElement)
      }
    }
  }
  // 移除队列第一项并返回被移除元素
  PriorityQueue.prototype.dequeue = function () {
    return this.items.shift()
  }
  // 返回队列中第一个元素
  PriorityQueue.prototype.front = function () {
    return this.items[0]
  }
  // 判断队列是否为空
  PriorityQueue.prototype.isEmpty = function () {
    return !this.items.length
  }
  // 返回队列长度
  PriorityQueue.prototype.size = function () {
    return this.items.length
  }
  // 将队列转为字符串
  PriorityQueue.prototype.toString = function () {
    result = ''
    this.items.forEach(element => {
      result += element.element + '-' + element.priority
    })
    return result
  }
}
