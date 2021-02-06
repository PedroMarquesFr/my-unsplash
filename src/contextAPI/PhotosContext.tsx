import React, { useState } from "react";
import Context from "./setup";
import { searchByQuery } from "../services/api";

const PhotosContext: React.FC = ({ children }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [photoArray, setPhotoArray] = useState([]);
  const [doesDataExists, setdoesDataExists] = useState(false)

  const handleFetchByQuery = async (term: string) => {
    setIsFetching(true);
    const resp = await searchByQuery(term);
    setPhotoArray(resp);
    setIsFetching(false);
    setdoesDataExists(true);
  };

  const contextData = { photoArray, isFetching, doesDataExists, handleFetchByQuery };
  return <Context.Provider value={contextData}>{children}</Context.Provider>;
};

export default PhotosContext;
