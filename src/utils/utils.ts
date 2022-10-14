import {
  DropDownListItemInterface,
  SubCategoryLinkInterface,
  TabFilterInterface,
} from './interfaces';

export function setLineOfIndexes(currentIndex: number, arrayLength: number) {
  let setIndexOneLess = currentIndex - 1;
  let setIndexTwoLess = currentIndex - 2;
  let setIndexOneMore = currentIndex + 1;
  let setIndexTwoMore = currentIndex + 2;

  if (currentIndex === 0) {
    setIndexOneLess = arrayLength - 1;
    setIndexTwoLess = arrayLength - 2;
  } else if (currentIndex === 1) {
    setIndexTwoLess = arrayLength - 1;
  } else if (currentIndex === arrayLength - 1) {
    setIndexOneMore = 0;
    setIndexTwoMore = 1;
  } else if (currentIndex === arrayLength - 2) {
    setIndexTwoMore = 0;
  }

  return [
    setIndexTwoLess,
    setIndexOneLess,
    currentIndex,
    setIndexOneMore,
    setIndexTwoMore,
  ];
}

export const BuyDropDownListItems: Array<DropDownListItemInterface> = [
  {
    label: 'Koupit zrychleně',
    link: '/',
  },
  {
    label: 'Porovnat',
    link: '/',
  },
  {
    label: 'Hlídat',
    link: '/',
  },
  {
    label: 'Přidat do seznamu',
    link: '/',
  },
];

export const SubCategoryLinkItems: Array<SubCategoryLinkInterface> = [
  {
    label: 'MacBook',
    icon: '',
    link: '/',
  },
  {
    label: 'Herní',
    icon: '',
    link: '/',
  },
  {
    label: 'Kancelářské',
    icon: '',
    link: '/',
  },
  {
    label: 'Profesionální',
    icon: '',
    link: '/',
  },
  {
    label: 'Stylové',
    icon: '',
    link: '/',
  },
  {
    label: 'Základní',
    icon: '',
    link: '/',
  },
  {
    label: 'Dotykové',
    icon: '',
    link: '/',
  },
  {
    label: 'Na splátky',
    icon: '',
    link: '/',
  },
  {
    label: 'VR Ready',
    icon: '',
    link: '/',
  },
  {
    label: 'IRIS Graphics',
    icon: '',
    link: '/',
  },
  {
    label: 'Brašny, batohy',
    icon: '',
    link: '/',
  },
  {
    label: 'Příslušenství',
    icon: '',
    link: '/',
  },
];

export const PageTabFilters: Array<TabFilterInterface> = [
  {
    label: 'TOP',
    link: '/',
  },
  {
    label: 'Nejprodávanější',
    link: '/',
  },
  {
    label: 'Od nejlevnějšího',
    link: '/',
  },
  {
    label: 'Od nejdražšího',
    link: '/',
  },
];
