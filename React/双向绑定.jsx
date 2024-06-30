// 简单版
// 1、给input标签绑定一个onchange改变事件
// 2、通过获取事件目标中value值，拿到最新的input标签中的内容
// 3、通过this.setState()，把最新的值给到state中的状态
import React, { Component } from 'react'
export default class App extends Component {
    //接收input中的value值
    state = { inputValue: '' }
//输入框内容改变事件
inputChange(event){
    // console.log(event.target.value);
    this.setState({
        inputValue: event.target.value
    })}    
render() {
    //解构出inputValue，方便书写
    let { inputValue } = this.state
    return (
        <div>
             <input value={inputValue} onChange={this.inputChange.bind(this)}>           
             </input>
             { inputValue }
        </div> )}}
//首先需要定义一个自定义 Hook ，方便后续使用。这里定义的 setState 就是为了后续触发 React 的重渲染。
function useSignal(val) {
  const ref = useRef(val);
  const [, setState] = useState({});
//首先是基本类型，由于 Object.defineProperty 监听的是对象里的属性，所以对于基本类型我们需要包装一个对象来返回，就像这样
  if (typeof val !== 'object')
  return {
    get value() {
      return ref.current;
    },
    set value(val) {
      if (val === ref.current) return;
      ref.current = val;
      setState({});
    }
  };
//然后是对象的处理，我们只需要遍历对象属性，给每个属性都加上 get 和 set 方法
  if (Object.prototype.toString.call(val) === '[object Object]') {
  const init = cloneDeep(val);
  Object.keys(init).forEach((key) => {
    Object.defineProperty(init, key, {
      get() {
        return ref.current[key];
      },
      set(val) {
        if (val === ref.current[key]) return;
        ref.current[key] = val;
        setState({});
      }
    });
  });
  return init;
}
//遍历数组然后每一项都用 Object.defineProperty 来进行拦截是可行的，但如果数组过长是不是有点浪费呢。所以还是给数组挂载一个 set 方法，在 set 里统一进行处理。
 const arrayMethods = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
if (Array.isArray(val)) {
  const init = cloneDeep(val);
  arrayMethods.forEach((method) => {
    const _fn = Array.prototype[method];
    init[method] = function (...args) {
      _fn.call(this, ...args);
      setState({});
    };
  });
  init['set'] = (index, val) => {
    if (init[index] === val) return;
    init[index] = val;
    setState({});
  };
  return init;
}

const Demo = () => {
  const count2 = useSignal([1, 2, 3]);
  return (
    <>
      <div>count2: {count2.join(',')}</div>
      <Button onClick={() => count2.push(parseInt(Math.random() * 10))}>add count2</Button>
      <Button onClick={() => count2.pop()}>del count2</Button>
      <Button onClick={() => count2.set(2, parseInt(Math.random() * 100))}>set Arr[2]</Button>
    </>
  );
};