import React from "react";

class ClassLifeCycle extends React.Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
  }

  UNSAFE_componentWillMount() {
    console.log("Component will mount");
  }

  componentDidMount() {
    console.log("Component did mount!");
  }

  UNSAFE_componentWillReceiveProps() {
    console.log("Component will receive props");
  }

  shouldComponentUpdate() {
    console.log("Should Component update");
    return true;
  }

  UNSAFE_componentWillUpdate() {
    console.log("Component will update");
  }

  componentDidUpdate() {
    console.log("Component did update");
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  render() {
    return <div>Class Component</div>;
  }
}

export default ClassLifeCycle;
