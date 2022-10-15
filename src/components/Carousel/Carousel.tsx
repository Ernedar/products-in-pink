import React, { FC, useEffect, useState } from 'react';
import CarouselItem from '../CarouselItem';

import { setLineOfIndexes } from '../../utils/handlers';

import Price from '../Price';
import ProductImage from '../ProductImage';
import StarChart from '../StarChart';

import './Carousel.css';

type carouselProps = {
  carouselItemList?: Array<any>;
};

const Carousel: FC<carouselProps> = ({ carouselItemList }) => {
  const [currentVisibleProductIndex, setCurrentVisibleProductIndex] =
    useState(0);

  /* next if at the end will add back 0 to the end, previous on beginning will add length -1 before 0. numbers will change on visible articles starting 0 - max visible number. */

  useEffect(() => {
    if (carouselItemList)
      setLineOfIndexes(currentVisibleProductIndex, carouselItemList.length);
  }, [currentVisibleProductIndex, carouselItemList?.length, carouselItemList]);

  return (
    <div className="carousel mb-4">
      <div className="carousel-side left p-1">
        {carouselItemList && (
          <button
            className="btn btn-secondary carousel-arrow carousel-left"
            onClick={() =>
              setCurrentVisibleProductIndex(
                currentVisibleProductIndex === 0
                  ? (currentVisibleProductIndex) =>
                      (currentVisibleProductIndex = carouselItemList.length - 1)
                  : (currentVisibleProductIndex) =>
                      currentVisibleProductIndex - 1
              )
            }
          >
            <span></span>
          </button>
        )}
      </div>
      <div className="carousel-inner">
        {carouselItemList && (
          <div className="carousel-item-line">
            {setLineOfIndexes(
              currentVisibleProductIndex,
              carouselItemList.length
            ).map((item, index) => (
              <CarouselItem key={index}>
                <ProductImage
                  imageUrl={carouselItemList[item].img}
                  imageAlt={carouselItemList[item].name}
                  className="mb-1"
                />
                <p className="article-title mb-1">
                  {carouselItemList[item].name}
                </p>
                <StarChart rating={carouselItemList[item].rating} />
                <p className="article-desc mt-1 mb-2">
                  {carouselItemList[item].spec}
                </p>
                <Price
                  currentPrice={carouselItemList[item].priceInfo.priceWithVat}
                />
              </CarouselItem>
            ))}
          </div>
        )}
      </div>
      <div className="carousel-side right p-1">
        {carouselItemList && (
          <button
            className="btn btn-secondary carousel-arrow carousel-right"
            onClick={() =>
              setCurrentVisibleProductIndex(
                currentVisibleProductIndex === carouselItemList.length - 1
                  ? (currentVisibleProductIndex) =>
                      (currentVisibleProductIndex = 0)
                  : (currentVisibleProductIndex) =>
                      currentVisibleProductIndex + 1
              )
            }
          >
            <span></span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
