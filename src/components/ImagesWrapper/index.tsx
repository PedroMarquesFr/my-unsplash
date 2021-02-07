import React from "react";
import { image } from "../../contextAPI/data";
import ImagePrev from "./ImagePrev";

import { Container } from "./styles";

const ImagesWrapper: React.FC<{ photoArray: image[] }> = ({ photoArray }) => {
  return (
    <Container>
      {photoArray.map(({ urls, alt_description, links }) => (
        <ImagePrev
          src={urls.regular}
          alt={alt_description}
          link={links.download}
        />
      ))}
    </Container>
  );
};

export default ImagesWrapper;
