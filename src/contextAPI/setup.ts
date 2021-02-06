import { createContext } from "react";
import { ContextData } from "./data";

const Context = createContext<ContextData>({ photoArray:[], isFetching:true });

export default Context;
