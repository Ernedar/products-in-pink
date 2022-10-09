import React, { FC, useEffect, useState } from 'react';
import { mockComponent } from 'react-dom/test-utils';
import CarouselItem from '../CarouselItem';

import "./Carousel.css";

type carouselProps = {

}

const Carousel: FC<carouselProps> = ({
}) => {

	const MockIDs = [
		{
			id: 2331311
		},
		{
			id: 2331312
		},
		{
			id: 2331313
		},
		{
			id: 2331314
		},
		{
			id: 2331315
		},
		{
			id: 2331316
		},
		{
			id: 2331317
		},
		{
			id: 2331318
		},
		{
			id: 2331319
		},
		{
			id: 2331320
		},
		{
			id: 2331321
		},
		{
			id: 2331322
		},
		{
			id: 2331323
		},
		{
			id: 2331324
		},
		{
			id: 2331325
		},
		{
			id: 2331326
		}
	]

	const [currentVisibleProductIndex, setCurrentVisibleProductIndex] = useState(0);

	/* next if at the end will add back 0 to the end, previous on beginning will add length -1 before 0. numbers will change on visible articles starting 0 - max visible number. */

	function setLineOfIndexes(currentIndex: number, arrayLength: number) {
		let setIndexOneLess = currentIndex - 1;
		let setIndexTwoLess = currentIndex - 2;
		let setIndexOneMore = currentIndex + 1;
		let setIndexTwoMore = currentIndex + 2;

		if(currentIndex === 0) {
			setIndexOneLess = arrayLength - 1;
			setIndexTwoLess = arrayLength - 2;
		} else if (currentIndex === 1) {
			setIndexTwoLess = arrayLength - 1;
		} else if (currentIndex === arrayLength - 1) {
			setIndexOneMore = 0;
			setIndexTwoMore = 1;
		} else if (currentIndex === arrayLength - 2) {
			setIndexTwoMore = 0;
		}

		return [setIndexTwoLess, setIndexOneLess, currentIndex, setIndexOneMore, setIndexTwoMore];
	}

	useEffect(() => {
		setLineOfIndexes(currentVisibleProductIndex, MockIDs.length);
	}, [currentVisibleProductIndex, MockIDs.length])

	return (
		<div className="carousel mb-4">
			<div className="carousel-side left p-1">
				<button className="btn btn-secondary carousel-arrow carousel-left" onClick={() => setCurrentVisibleProductIndex(currentVisibleProductIndex === 0 ? currentVisibleProductIndex => currentVisibleProductIndex = MockIDs.length - 1 : currentVisibleProductIndex => currentVisibleProductIndex - 1)}><span></span></button>
			</div>
			<div className="carousel-inner">
				<div className="carousel-item-line">
					<CarouselItem id={MockIDs[setLineOfIndexes(currentVisibleProductIndex, MockIDs.length)[0]].id}/>
					<CarouselItem id={MockIDs[setLineOfIndexes(currentVisibleProductIndex, MockIDs.length)[1]].id} />
					<CarouselItem id={MockIDs[setLineOfIndexes(currentVisibleProductIndex, MockIDs.length)[2]].id} />
					<CarouselItem id={MockIDs[setLineOfIndexes(currentVisibleProductIndex, MockIDs.length)[3]].id} />
					<CarouselItem id={MockIDs[setLineOfIndexes(currentVisibleProductIndex, MockIDs.length)[4]].id} />
				</div>
			</div>
			<div className="carousel-side right p-1">
				<button className="btn btn-secondary carousel-arrow carousel-right" onClick={() => setCurrentVisibleProductIndex(currentVisibleProductIndex === MockIDs.length - 1 ? currentVisibleProductIndex => currentVisibleProductIndex = 0 : currentVisibleProductIndex => currentVisibleProductIndex + 1)}><span></span></button>
			</div>
		</div>
	)
};

export default Carousel;