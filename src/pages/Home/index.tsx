import React, { useContext, useEffect } from "react";
import Context from "../../contextAPI/setup";
import ImagesWrapper from "../../components/ImagesWrapper";

import { Container } from "./styles";

const Home: React.FC = () => {
  const { isFetching, photoArray, handleFetchByQuery, doesDataExists } = useContext(Context);

  useEffect(() => {
    handleFetchByQuery('sugar');
  }, []);

  return (
    <Container>
      {console.log(photoArray)}
      {doesDataExists && <ImagesWrapper photoArray = {photoArray}/>}
      {isFetching && <span>Loading...</span>}
      
    </Container>
  );
};

export default Home;
