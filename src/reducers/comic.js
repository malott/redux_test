const initialState = {
  src: "https://imgs.xkcd.com/comics/defensive_profile_2x.png"
};

function randomComic() {
  //logic to get random comic and return it
  return "";
}

function comic(state = initialState, action) {
  switch (action.type) {
    case "NEXT":
      return {
        src: randomComic()
      };
    default:
      return state;
  }
}

export default comic;
