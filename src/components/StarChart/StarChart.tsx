import classNames from 'classnames';
import React, { FC } from 'react';

import "./StarChart.css";

type starChartProps = {
	rating: number;
	className?: string;
}

const StarChart: FC<starChartProps> = ({
	rating = 0,
	className
}) => {
	const percentage = {"--percent": (rating/5)*100 + "%"} as React.CSSProperties;
	return <div className={classNames('stars', className)} style={percentage}></div>
};

export default StarChart;