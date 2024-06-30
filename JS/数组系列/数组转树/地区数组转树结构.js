function arrayToTree(arr, root) {
  const result = [] // 用于存放结果
  const map = {} // 用于存放 list 下的节点

  // 1. 遍历 arr，将 arr 下的所有节点使用 id 作为索引存入到 map
  for (const item of arr) {
    map[item.id] = item // 浅拷贝（存储对 item 的引用）
  }

  // 2. 再次遍历，将根节点放入最外层，子节点放入父节点
  for (const item of arr) {
    // 3. 获取节点的 id 和 父 id
    const { id, parentId } = item // ES6 解构赋值
    // 4. 如果是根节点，存入 result
    if (item.parentId === root) {
      result.push(map[id])
    } else {
      // 5. 反之，存入到父节点
      map[parentId].children ? map[parentId].children.push(map[id]) : (map[parentId].children = [map[id]])
    }
  }

  // 将结果返回
  return result
}
