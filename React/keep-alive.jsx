import React, { Component, createContext } from 'react'
const { Provider, Consumer } = createContext()
/*
这是一个高阶组件（Higher-Order Component, HOC） `withScope`，它接受一个 React 组件 `WrappedComponent`，返回一个新的函数组件。这个新的函数组件会接收一些 `props`，然后使用 `Consumer` 来接收上下文 `keep`，并将 `keep` 和其他 `props` 一起传递给 `WrappedComponent`。
*/
const withScope = (WrappedComponent) => (props) =>
  <Consumer>{(keep) => <WrappedComponent {...props} keep={keep} />}</Consumer>
/*
`AliveScope` 是一个 React 类组件，它使用 `Provider` 提供了一个上下文方法 `keep`，该方法接受一个 `id` 和 `children`，并在状态中保存它们。然后，在 render 方法中，它会先渲染传入的 `children`，然后渲染保存在状态中的每个 `children`，每个 `children` 被包在一个 `div` 中，`div` 的引用保存在 `this.nodes[id]` 中。
*/
export class AliveScope extends Component {
  nodes = {}
  state = {}
  keep = (id, children) =>
    new Promise((resolve) =>
      this.setState({ [id]: { id, children } }, () => resolve(this.nodes[id]))
    )
  render() {
    return (
      <Provider value={this.keep}>
        {this.props.children}
        {Object.values(this.state).map(({ id, children }) => (
          <div
            key={id}
            ref={(node) => {
              this.nodes[id] = node
            }}>
            {children}
          </div>
        ))}
      </Provider>
    )
  }
}
/*
`KeepAlive` 是一个使用了 `withScope` 装饰器的类组件，它在初始化时调用 `keep` 方法，并在收到 `keep` 方法返回的实际内容后，将其插入到一个空的 `div` 中。这个 `div` 的引用保存在 `this.placeholder` 中。
*/
@withScope
class KeepAlive extends Component {
  constructor(props) {
    super(props)
    this.init(props)
  }
  init = async ({ id, children, keep }) => {
    const realContent = await keep(id, children)
    this.placeholder.appendChild(realContent)
  }
  render() {
    return (
      <div
        ref={(node) => {
          this.placeholder = node
        }}
      />
    )
  }
}
export default KeepAlive
// https://codesandbox.io/s/zuijian-react-keepalive-shixian-ovh90?file=/src/KeepAlive.js:0-1259
