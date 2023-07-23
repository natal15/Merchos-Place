import React from 'react';
import Styled from './styles'

const Logo = () => {
  const imageUrl = 'https://th.bing.com/th/id/OIG.gKv7wc1uQZWlNQk2KuDo?pid=ImgGng';

  return (
    <Styled.ImageWrapper>
      <Styled.Photo src={imageUrl} alt="Description of the image" />
    </Styled.ImageWrapper>
  );
};

export default Logo;






