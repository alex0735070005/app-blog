import { combineReducers } from "redux";

import home from "components/pages/Home/redux/reducer";
import posts from "components/pages/Posts/redux/reducer";

export default combineReducers({
  home,
  posts
});
