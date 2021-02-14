import React, { useState } from "react";
import Context from "./setup";
import { searchByQuery } from "../services/api";
import { image } from "./data";

const PhotosContext: React.FC = ({ children }) => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [photoArray, setPhotoArray] = useState([]);
  const [doesDataExists, setdoesDataExists] = useState<boolean>(false);
  const [favs, setFavs] = useState<image[]>([]);

  const handleFetchByQuery = async (term: string) => {
    setIsFetching(true);
    const resp = await searchByQuery(term);
    setPhotoArray(resp);
    setIsFetching(false);
    setdoesDataExists(true);
  };

  const addFav = (newFav: image) => {
    if (favs.find(({ id }) => (id === newFav.id)) === undefined) {
      setFavs([...favs, newFav]);
    }
  };

  const contextData = {
    photoArray,
    isFetching,
    doesDataExists,
    handleFetchByQuery,
    addFav,
    favs,
  };
  return <Context.Provider value={contextData}>{children}</Context.Provider>;
};

export default PhotosContext;
