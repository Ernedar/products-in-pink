import React, { FC, ReactNode } from 'react';

import "./Carousel.css";

type carouselProps = {
	children: ReactNode
}

const Carousel: FC<carouselProps> = ({
	children
}) => {
	return (
		<div className="carousel">
			<div className="carousel-side left">
				<button className="carousel-arrow carousel-left"></button>
			</div>
			<div className="carousel-inner">
				{children}
			</div>
			<div className="carousel-side right">
				<button className="carousel-arrow carousel-right"></button>
			</div>
		</div>
	)
};

export default Carousel;