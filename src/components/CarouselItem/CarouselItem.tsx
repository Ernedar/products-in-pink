import React, { FC } from 'react';

import './CarouselItem.css';

type carouselItemProps = {
  children: React.ReactNode;
  key?: number;
};

const CarouselItem: FC<carouselItemProps> = ({ children, key }) => {
  return (
    <div className="carousel-item pl-1 pr-1" key={key}>
      {children}
    </div>
  );
};

export default CarouselItem;
