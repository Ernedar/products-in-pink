import React, { FC } from 'react';

import './SearchResultItem.css';

type searchResultItemProps = {
  children: React.ReactNode;
  key?: number;
};

const SearchResultItem: FC<searchResultItemProps> = ({ children, key }) => {
  return (
    <div className="search-result-item mb-5 pl-1 pr-1" key={key}>
      {children}
    </div>
  );
};

export default SearchResultItem;
