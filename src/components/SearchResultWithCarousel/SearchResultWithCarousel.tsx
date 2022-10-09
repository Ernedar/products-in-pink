import React, { FC } from 'react';
import SubCategoryLinks from '../SubCategoryLinks';
import Carousel from '../Carousel';

import "./SearchResultWithCarousel.css";

import { SubCategoryLinkItems, PageTabFilters } from '../../utils/utils';
import TabFilters from '../TabFilters';
import SearchResultItem from '../SearchResultItem';

const SearchResultWithCarousel: FC = () => {

	return (
		<div className='main-container'>
			<h2 className="mb-4">Notebooky</h2>
			<SubCategoryLinks linkItemsList={SubCategoryLinkItems} />
      		<h4 className="mt-4 mb-4">Nejprodávanější</h4>
			<Carousel />
			<TabFilters linkItemsList={PageTabFilters} />
			<div className="search-results-wrapper mb-3 pt-3">
				<SearchResultItem itemAvailability={5} />
				<SearchResultItem itemAvailability={5} />
				<SearchResultItem itemAvailability={5} />
				<SearchResultItem itemAvailability={5} />
				<SearchResultItem itemAvailability={5} />
				<SearchResultItem itemAvailability={5} />
				<SearchResultItem itemAvailability={5} />
				<SearchResultItem itemAvailability={5} />
				<SearchResultItem itemAvailability={5} />
				<SearchResultItem itemAvailability={5} />
				<SearchResultItem itemAvailability={5} />
			</div>
		</div>
	)
}

export default SearchResultWithCarousel;