import React, { CSSProperties, FC } from 'react';

import "./FreeGoodiesList.css";

type freeGoodiesListProps = {
	children: React.ReactNode;
	bulletTranslation: string;
}

const FreeGoodiesList: FC<freeGoodiesListProps> = ({
	children,
	bulletTranslation
}) => {
	const bullet = {"--content": "'+"+bulletTranslation+"'"} as CSSProperties

	return <ul className="free-goodie-list" style={bullet}>
		{children}
	</ul>
};

export default FreeGoodiesList;