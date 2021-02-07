import React from "react";

import { Container, Link, Image } from "./styles";

interface propsImg {
  src: string;
  alt: string;
  link: string;
}

const ImagePrev: React.FC<propsImg> = ({ src, alt, link }) => {
  return (
    <Container>
      <Link href={link}>
        <Image src={src} alt={alt} />
      </Link>
    </Container>
  );
};

export default ImagePrev;
