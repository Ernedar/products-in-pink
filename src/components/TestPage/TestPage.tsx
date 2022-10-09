import React, { FC } from 'react';

import "./TestPage.css";

import StarChart from '../StarChart';
import FreeGoodiesList from '../FreeGoodiesList/FreeGoodiesList';
import DropDown from '../DropDown';
import Price from '../Price';
import Carousel from '../Carousel';

import { BuyDropDownListItems } from "../../utils/utils";
import CarouselItem from '../CarouselItem';
import SearchResultItem from '../SearchResultItem';

const TestPage: FC = () => {

	return (
		<div className="main-container">
			<div>
				<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
				<br />
				<h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
				<br />
				<h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
				<br />
				<h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
				<br />
				<h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
				<br />
				<h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
				<br />
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				<br />
				<a href="/">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
			</div>
				<br />
			<div>
				<p className="article-title">Article Name - Long</p>
				<p className="article-desc">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus sint pariatur aliquid necessitatibus harum dicta. Tempora doloremque libero, debitis, nulla assumenda numquam quaerat iure atque sed commodi ipsum, eaque a.
				</p>
			</div>
				<br />
			<div>
				<StarChart rating={3.5} />
			</div>
				<br />
			<div style={{display: "flex", justifyContent: "flex-start", alignItems: "flex-end", gap: "5px"}}>
				<button className="btn btn-sm btn-primary">Button Small</button>
				<button className="btn btn-md btn-primary">Button Medium</button>
				<button className="btn btn-lg btn-primary">Button Large</button>
				<button className="btn btn-sm btn-secondary">Button Small</button>
				<button className="btn btn-md btn-secondary">Button Medium</button>
				<button className="btn btn-lg btn-secondary">Button Large</button>
			</div>
				<br />
			<div style={{display: "flex", justifyContent: "flex-start", alignItems: "flex-end", gap: "5px"}}>
				<button className="btn btn-sm btn-wide">Button Wide Small</button>
				<button className="btn btn-md btn-wide">Button Wide Medium</button>
				<button className="btn btn-lg btn-wide">Button Wide Large</button>
			</div>
				<br />
			<div style={{display: "flex", justifyContent: "flex-start", alignItems: "flex-end", gap: "5px"}}>
				<button className="btn btn-sm btn-widest">Button Wide Small</button>
				<button className="btn btn-md btn-widest">Button Wide Medium</button>
				<button className="btn btn-lg btn-widest">Button Wide Large</button>
			</div>
				<br />
			<div style={{display: "flex", justifyContent: "flex-start", alignItems: "center"}}>
				<a href="/" className="btn btn-widest btn-lg type-sub-cat">MacBook</a>
			</div>
				<br />
			<div style={{display: "flex", justifyContent: "flex-start", alignItems: "flex-end", gap: "5px"}}>
				<button className="btn btn-md btn-wide type-tab-anchor active">
					Nejprodávanější
				</button>
				<button className="btn btn-md btn-wide type-tab-anchor">
					Nejprodávanější
				</button>
			</div>
				<br />
			<DropDown className="btn-md btn-wide" iconPosition='both' options={BuyDropDownListItems}> Dropdown with label </DropDown>
				<br />
			<div className="active-object-group">
				<button className="btn btn-md btn-primary">
					Koupit
				</button>
				<DropDown className='btn btn-md btn-primary' options={BuyDropDownListItems}/>
			</div>
				<br />
			<div>
				<FreeGoodiesList listItems={
					[
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus sint pariatur aliquid necessitatibus harum dicta.',
						'free goodie no.2'
					]
				} bulletTranslation="zdarma" />
			</div>
				<br />
			<Price currency="Kč" originalPrice={1000000.78} currentPrice={1125000.56}/>
				<br />
			<SearchResultItem itemAvailability={5}/>
			<CarouselItem id={123456} />
				<br />
			<Carousel />
		</div>
	)
};

export default TestPage;