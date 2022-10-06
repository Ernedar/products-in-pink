import React, { CSSProperties, FC } from 'react';

import "./FreeGoodiesList.css";

type freeGoodiesListProps = {
	listItems: string[];
	bulletTranslation: string;
}

const FreeGoodiesList: FC<freeGoodiesListProps> = ({
	listItems,
	bulletTranslation
}) => {
	const bullet = {"--content": "'+"+bulletTranslation+"'"} as CSSProperties

	return <ul className="free-goodie-list">
		{listItems.map((item, index) => (
			<li style={bullet} key={index}>{item}</li>
		))}
	</ul>
};

export default FreeGoodiesList;