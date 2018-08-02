import React from "react";
import { connect } from "react-redux";
import { newComic, c } from "../actions";

let ComicButton = props => {
  return (
    <div>
      <button onCLick={c}>Press</button>
    </div>
  );
};

connect(
  state => state.src,
  { c }
)(ComicButton);
/*
const mapStateToProps = (state, ownProps) => {
  return {
    src: ""
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setComic());
    }
  };
};

ComicButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComicButton);*/

export default ComicButton;
