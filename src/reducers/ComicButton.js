import { comic } from "../actions";

const ComicButton = (state = comic.src, action) => {
  return state;
};

const reducer = (state, action) => {
  if (action.type === "COMIC") {
    // you have action.id here from action creator,
    // and state, where you can get card you need by that id,
    // change expanded property and return new state
    alert("1");
  }
};

export default ComicButton;
