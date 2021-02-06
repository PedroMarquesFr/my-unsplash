import { createContext } from "react";
import { ContextData } from "./data";

const Context = createContext<ContextData>({
  photoArray: [],
  doesDataExists: false,
  isFetching: false,
  handleFetchByQuery() {},
});

export default Context;
