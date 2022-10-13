import React, { FC } from 'react';
import { SubCategoryLinkInterface } from '../../utils/interfaces';

import './SubCategoryLinks.css';

type subCategoryLinksProps = {
  linkItemsList: Array<SubCategoryLinkInterface>;
};

export const SubCategoryLinks: FC<subCategoryLinksProps> = ({
  linkItemsList,
}) => {
  return (
    <div className="page-sub-category-links">
      {linkItemsList?.map((subCategoryLinkItem, index) => (
        <a
          key={index}
          href={subCategoryLinkItem.link}
          className="btn btn-widest btn-lg type-sub-cat"
        >
          {subCategoryLinkItem.label}
        </a>
      ))}
    </div>
  );
};
