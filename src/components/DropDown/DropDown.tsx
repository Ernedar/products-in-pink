import React, { FC, ReactNode, useState } from 'react';

import './DropDown.css';

import { DropDownListItemInterface } from '../../utils/interfaces';
import { IconPositions } from '../../utils/enums';
import classNames from 'classnames';

type dropDownProps = {
  className?: string;
  iconPosition?: IconPositions;
  children?: ReactNode;
  options: Array<DropDownListItemInterface>;
};

const DropDown: FC<dropDownProps> = ({
  className = '',
  iconPosition = IconPositions.after,
  children,
  options,
}) => {
  const [dropDownToggle, setDropDownToggle] = useState(false);

  const arrowLeft =
    iconPosition === (IconPositions.before || IconPositions.both);
  const arrowRight =
    iconPosition === (IconPositions.after || IconPositions.both);
  const arrowOffset = children || iconPosition === IconPositions.both;

  return (
    <div className={classNames('btn dropdown', className)}>
      <button
        className={classNames('btn', className)}
        onClick={() => setDropDownToggle(!dropDownToggle)}
      >
        {arrowLeft && (
          <span
            className={classNames('dropdown-chevron', {
              rotate: dropDownToggle,
              'arrow-offset-right': arrowOffset,
            })}
          ></span>
        )}
        {children && <span className="dropdown-content">{children}</span>}
        {arrowRight && (
          <span
            className={classNames('dropdown-chevron', {
              rotate: dropDownToggle,
              'arrow-offset-left': arrowOffset,
            })}
          ></span>
        )}
      </button>
      <ul
        className={classNames('dropdown-item-list', { opened: dropDownToggle })}
      >
        {options.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
