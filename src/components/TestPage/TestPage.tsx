import React, { FC } from 'react';

import "./TestPage.css";

import StarChart from '../StarChart';
import FreeGoodiesList from '../FreeGoodiesList/FreeGoodiesList';
import DropDown from '../DropDown';

import { BuyDropDownListItems } from "../../utils/utils";

const testPage: FC = () => {
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
				<button className="btn btn-sm">Button Small</button>
				<button className="btn btn-md">Button Medium</button>
				<button className="btn btn-lg">Button Large</button>
			</div>
				<br />
			<div style={{display: "flex", justifyContent: "flex-start", alignItems: "flex-end", gap: "5px"}}>
				<button className="btn btn-sm btn-wide">Button Wide Small</button>
				<button className="btn btn-md btn-wide">Button Wide Medium</button>
				<button className="btn btn-lg btn-wide">Button Wide Large</button>
			</div>
				<br />
			<div>
				<a href="/" className="btn type-sub-cat">MacBook</a>
			</div>
			<button className="btn type-tab-anchor">
				Nejprodávanější
			</button>
			<button className="btn btn-buy">
				Koupit
			</button>
			<DropDown options={BuyDropDownListItems}> Dropdown with label </DropDown>
			<div className="button-group">
				<button className="btn btn-buy">
					Koupit
				</button>
				<button className="btn type-dropdown">
					Dropdown
				</button>
			</div>
			<div>
				<FreeGoodiesList listItems={
					[
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus sint pariatur aliquid necessitatibus harum dicta.',
						'free goodie no.2'
					]
				} bulletTranslation="zdarma" />
			</div>
			<div className="price-group">
				<p className="current-price">1 000 000 Kč</p>
				<p className="previous-price">1 100 000 Kč</p>
			</div>
		</div>
	)
};

export default testPage;