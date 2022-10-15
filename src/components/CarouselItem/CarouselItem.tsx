import React, { FC } from 'react';

import './CarouselItem.css';

type carouselItemProps = {
  children: React.ReactNode;
};

const CarouselItem: FC<carouselItemProps> = ({ children }) => {
  return (
    <div className="carousel-item pl-1 pr-1">
      {children}
    </div>
  );
};

export default CarouselItem;
