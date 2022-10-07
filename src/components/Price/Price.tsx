import React, { FC } from 'react';
import classNames from "classnames";

import "./Price.css";

type priceProps = {
	className?: string;
	currency: string;
	originalPrice?: number | string;
	currentPrice: number | string;
}

const Price: FC<priceProps> = ({
	className ='',
	currency = 'CZK',
	originalPrice = 0,
	currentPrice
}) => {

	return (
		<div className={classNames("price-group", className)}>
			<p className="current-price">{currentPrice}{" " + currency}</p>
			{originalPrice && <p className="original-price">{originalPrice}{" " + currency}</p>}
		</div>
	)
};

export default Price;