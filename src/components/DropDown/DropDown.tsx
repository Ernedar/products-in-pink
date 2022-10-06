import React, { FC, ReactNode } from 'react';

import "./DropDown.css";

import { DropDownListItemInterface } from "../../utils/interfaces";

type dropDownProps = {
	iconPosition?: 'before' | 'after' | 'both',
	children?: ReactNode,
	options: Array<DropDownListItemInterface>
}

const DropDown: FC<dropDownProps> = ({
	iconPosition = 'after',
	children,
	options
}) => {

	return (
		<button>
			{(iconPosition === 'before' || iconPosition === 'both') && <span className="dropdown-chevron"></span>}
			{children && <span>{children}</span>}
			{(iconPosition === 'after' || iconPosition === 'both') && <span className="dropdown-chevron"></span>}
			<ul className="dropdown-item-list">
				{
					options.map((item, index) => (
						<li key={index}>
							<a href={item.link}>{item.label}</a>
						</li>
					))
				}
			</ul>
		</button>
	)
};

export default DropDown;