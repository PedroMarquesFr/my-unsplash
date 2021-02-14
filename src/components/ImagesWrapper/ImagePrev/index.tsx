import React, { useContext } from "react";
import Context from "../../../contextAPI/setup";
import { image } from "../../../contextAPI/data";
import { Container, Image } from "./styles";


const ImagePrev: React.FC<{ image: image }> = ({ image }) => {
  const { addFav } = useContext(Context);
  return (
    <Container onClick={() => addFav(image)}>
      <Image src={image.urls.regular} alt={image.alt_description} />
    </Container>
  );
};

export default ImagePrev;
