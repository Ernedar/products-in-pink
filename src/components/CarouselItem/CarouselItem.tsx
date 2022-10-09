import React, { FC } from 'react';

import Price from '../Price';
import ProductImage from '../ProductImage';
import StarChart from '../StarChart';

import "./CarouselItem.css";

const CarouselItem: FC = () => {

	return (
		<div className='carousel-item pl-1 pr-1'>
			<ProductImage className="mb-1" />
			<p className='article-title mb-1'>Název zboží</p>
			<StarChart rating={4.25} />
			<p className='article-desc mt-1 mb-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem perspiciatis id asperiores cupiditate tenetur quod, debitis eos. Esse pariatur iste consequuntur possimus, accusamus voluptates perspiciatis non amet blanditiis sapiente consequatur!</p>
			<Price currency='Kč' currentPrice={3453} />
		</div>
	)
}

export default CarouselItem;