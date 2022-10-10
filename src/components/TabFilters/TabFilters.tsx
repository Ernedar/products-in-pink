import React, { FC, useState } from 'react';
import classNames from 'classnames';

import { TabFilterInterface } from '../../utils/interfaces';

import './TabFilters.css';

type tabFiltersProps = {
  linkItemsList: Array<TabFilterInterface>;
};

const TabFilters: FC<tabFiltersProps> = ({ linkItemsList }) => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className="page-tab-filters">
      {linkItemsList &&
        linkItemsList.map((tabFilterItem, index) => (
          <button
            onClick={() => setCurrentTab(index)}
            key={index}
            data-attr={index}
            className={classNames('btn btn-md btn-wide type-tab-anchor', {
              active: currentTab === index,
            })}
          >
            {tabFilterItem.label}
          </button>
        ))}
    </div>
  );
};

export default TabFilters;
