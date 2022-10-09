import classNames from 'classnames';
import React, { FC } from 'react';
import DropDown from '../DropDown';
import FreeGoodiesList from '../FreeGoodiesList';

import Price from '../Price';
import ProductImage from '../ProductImage';
import StarChart from '../StarChart';

import "./SearchResultItem.css";

import { BuyDropDownListItems } from '../../utils/utils';

type searchResultItemProps = {
	itemAvailability: number | string;
}

const SearchResultItem: FC<searchResultItemProps> = ({
	itemAvailability
}) => {

	return (
		<div className='search-result-item mb-5 pl-1 pr-1'>
			<p className='article-title mb-1'>Název zboží</p>
			<p className='article-desc mt-1 mb-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem perspiciatis id asperiores cupiditate tenetur quod, debitis eos. Esse pariatur iste consequuntur possimus, accusamus voluptates perspiciatis non amet blanditiis sapiente consequatur!</p>
			<FreeGoodiesList listItems={['Lorem ipsum dolor sit', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.']} bulletTranslation='zdarma' />
			<div className="search-result-image-wrapper mt-2 mb-2">
				<ProductImage />
				<StarChart rating={2.45} className="positioned-star-chart"/>
			</div>
			<div className="price-buy-wrapper mb-2">
				<Price currency='Kč' currentPrice={3453} originalPrice={3943}/>
				<div className="active-object-group">
					<button className="btn btn-md btn-wide btn-primary">
						Koupit
					</button>
					<DropDown className='btn btn-md btn-primary' options={BuyDropDownListItems}/>
				</div>
			</div>
			<p className={classNames('storage-state', {
				'available': itemAvailability !== typeof String && itemAvailability > 0,
			})}>
				Skladem &gt; 5ks
			</p>
		</div>
	)
}

export default SearchResultItem;