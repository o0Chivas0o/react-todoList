import React from 'react'; // 为什么要 import React
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default Welcome // 为什么要 export，为什么要加 default