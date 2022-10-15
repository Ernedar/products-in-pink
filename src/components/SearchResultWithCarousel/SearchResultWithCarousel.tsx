import React, { FC } from 'react';
import { SubCategoryLinks } from '../SubCategoryLinks';
import Carousel from '../Carousel';

import './SearchResultWithCarousel.css';

import { SubCategoryLinkItems, PageTabFilters } from '../../utils/utils';

import { useGetProduct } from '../../hooks/useGetProduct';

import TabFilters from '../TabFilters';
import SearchResultItem from '../SearchResultItem';
import Errors from '../Errors';
import Loading from '../Loading';

import DropDown from '../DropDown';
import FreeGoodiesList from '../FreeGoodiesList';

import Price from '../Price';
import ProductImage from '../ProductImage';
import StarChart from '../StarChart';

import { BuyDropDownListItems, freeGoodiesListItems } from '../../utils/utils';

import serverResponseJSON from '../../assets/serverResponse.json';

const SearchResultWithCarousel: FC = () => {
  //const { loading, data, error } = useGetProduct();

  const loading = false;
  const error: Error | undefined = undefined;
  const data = serverResponseJSON.data;

  console.log(data);

  return (
    <div className="main-container">
      <h2 className="mb-4">Notebooky</h2>
      <SubCategoryLinks linkItemsList={SubCategoryLinkItems} />
      <h4 className="mt-4 mb-4">Nejprodávanější</h4>

      {loading && <Loading />}
      {!loading && error && <Errors error={error} />}
      {!loading && !error && data && <Carousel carouselItemList={data} />}
      <TabFilters linkItemsList={PageTabFilters} />
      {loading && <Loading />}
      {!loading && error && <Errors error={error} />}
      {!loading && !error && data && (
        <div className="search-results-wrapper mb-3 pt-3">
          {
            data.map((item, index) => (
            <SearchResultItem key={index}>
              <p className="article-title mb-1">{item.name}</p>
              <p className="article-desc mt-1 mb-2">{item.spec}</p>
              <FreeGoodiesList bulletTranslation='zdarma'>
                {freeGoodiesListItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </FreeGoodiesList>
              <div className="search-result-image-wrapper mt-2 mb-2">
                <ProductImage imageUrl={item.img} imageAlt={item.name} />
                <StarChart
                  rating={item.rating}
                  className="positioned-star-chart"
                />
              </div>
              <div className="price-buy-wrapper mb-2">
                <Price
                  currentPrice={item.priceInfo.priceWithVat}
                  originalPrice={item.priceInfo.comparePrice}
                />
                <div className="active-object-group">
                  <button className="btn btn-md btn-wide btn-primary">
                    Koupit
                  </button>
                  <DropDown
                    className="btn btn-md btn-primary"
                    options={BuyDropDownListItems}
                  />
                </div>
              </div>
              <p
                className="storage-state"
                style={{ color: '#' + item.avail_color }}
              >
                {item.avail}
              </p>
            </SearchResultItem>
              ))}
        </div>
      )}
    </div>
  );
};

export default SearchResultWithCarousel;
