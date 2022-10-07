import React, { FC, ReactNode, useState } from 'react';

import "./DropDown.css";

import { DropDownListItemInterface } from "../../utils/interfaces";
import classNames from 'classnames';

type dropDownProps = {
	className?: string;
	iconPosition?: 'before' | 'after' | 'both',
	children?: ReactNode,
	options: Array<DropDownListItemInterface>
}

const DropDown: FC<dropDownProps> = ({
	className = '',
	iconPosition = 'before',
	children,
	options
}) => {

	const [dropDownToggle, setDropDownToggle] = useState(false);

	return (
		<button className={classNames("btn btn-dropdown", className)} onClick={() => setDropDownToggle(!dropDownToggle)}>
			{(iconPosition === 'before' || iconPosition === 'both') && <span className={classNames("dropdown-chevron", {'rotate': dropDownToggle, 'arrow-offset-right': (children || iconPosition === 'both')})}></span>}
			{children && <span className="dropdown-content">{children}</span>}
			<ul className={classNames("dropdown-item-list", {'opened': dropDownToggle})}>
				{
					options.map((item, index) => (
						<li key={index}>
							<a href={item.link}>{item.label}</a>
						</li>
					))
				}
			</ul>
			{(iconPosition === 'after' || iconPosition === 'both') && <span className={classNames("dropdown-chevron", {'rotate': dropDownToggle, 'arrow-offset-left': (children || iconPosition === 'both')})}></span>}
		</button>
	)
};

export default DropDown;