import { connect } from "react-redux";

import { Comic } from "../components/Comic";

// AppContainer.js
const mapStateToProps = state => ({
  comic: state.comic
});

const mapDispatchToProps = {
  Comic
};

const ComicContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Comic);

export default ComicContainer;
