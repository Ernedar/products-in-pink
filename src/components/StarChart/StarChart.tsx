import React, { FC } from 'react';

import "./StarChart.css";

type starChartProps = {
	rating: number;
}

const StarChart: FC<starChartProps> = ({
	rating = 0
}) => {
	const percentage = {"--percent": (rating/5)*100 + "%"} as React.CSSProperties;
	return <div className='stars' style={percentage}></div>
};

export default StarChart;