import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      爸爸
      <Son />
    </div>
  );
}

class Son extends React.Component {
  constructor() {
    super();
    this.state = {
      n: 0
    };
  }
  add() {
    // 不可以用 this,state,n += 1 React 不会监听数据
    // 高手都用函数
    // this.setState({ n: this.state.n + 1 });
    this.setState(state => {
      const n = state.n + 1; // 旧的 state.n
      console.log(n); // 新的 state.n
      return { n };
    });
  }
  render() {
    return (
      <div className="Son">
        儿子{this.state.n}
        <button onClick={() => this.add()}>+1</button>
        <Grandson />
      </div>
    );
  }
}

const Grandson = () => {
  const [n, setN] = React.useState(0); // 析构赋值 0为初始值
  // const array = React.useState(0);
  // const n = array[0]
  // const setN = array[1]
  return (
    <div className="Grandson">
      孙子{n}
      <button onClick={() => setN(n + 1)}>+1</button>
    </div>
  ); // setN 永远不会改变 n，会产生一个新的 n
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
