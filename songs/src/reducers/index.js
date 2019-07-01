import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4.05" },
    { title: "Yari kuda nana hige", duration: "3.45" },
    { title: "Yarige beku ee loka", duration: "4.05" },
    { title: "Karunade ", duration: "4.05" }
  ];
};

const selectedSongReducer = (selectedSong = [], action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
