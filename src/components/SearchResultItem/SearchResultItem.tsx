import React, { FC } from 'react';

import './SearchResultItem.css';

type searchResultItemProps = {
  children: React.ReactNode;
};

const SearchResultItem: FC<searchResultItemProps> = ({ children }) => {
  return (
    <div className="search-result-item mb-5 pl-1 pr-1">
      {children}
    </div>
  );
};

export default SearchResultItem;
