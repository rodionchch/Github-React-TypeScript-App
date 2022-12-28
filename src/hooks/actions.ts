import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { githubReducer, githubActions } from "store/github/github.slice";

const actions = {
  ...githubReducer,
  ...githubActions
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
