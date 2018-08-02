import React from "react";
import { connect } from "react-redux";

class Comic extends React.Component {
  next = () => {
    this.props.dispatch({ type: "NEXT" });
  };

  render() {
    return (
      <div>
        <img src={this.props.src} alt="" />
        <button onClick={this.next}>next</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    src: state.comic.src
  };
}

export default connect(mapStateToProps)(Comic);
