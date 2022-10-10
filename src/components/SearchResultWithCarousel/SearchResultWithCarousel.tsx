import React, { FC, useState } from 'react';
import SubCategoryLinks from '../SubCategoryLinks';
import Carousel from '../Carousel';

import './SearchResultWithCarousel.css';
import AxiosService from '../../access/axios';

import { SubCategoryLinkItems, PageTabFilters } from '../../utils/utils';
import TabFilters from '../TabFilters';
import SearchResultItem from '../SearchResultItem';

const SearchResultWithCarousel: FC = () => {
  const [stateResponse, setStateResponse] = useState<string | null>('');

  return (
    <div className="main-container">
      <button
        onClick={() =>
          AxiosService.responseWithProducts()
            .then((response) => setStateResponse(response.countryPhonePrefix))
            .catch(() => setStateResponse('Network Error'))
        }
        className="btn btn-md btn-primary"
      >
        TryLoadData
      </button>
      {stateResponse}
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
  );
};

export default SearchResultWithCarousel;
