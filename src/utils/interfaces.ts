export interface DropDownListItemInterface {
  label: string;
  link: string;
}

export interface SubCategoryLinkInterface {
  label: string;
  icon: string;
  link: string;
}

export interface TabFilterInterface {
  label: string;
  link: string;
}

/* INTERFACES FROM TASK SETTING BEGIN */

export interface ProductItemOutdated {
  id: number;
  code: string;
  img: string;
  name: string;
  spec: string;
  price: string;
  cprice: string | null;
  priceWithoutVat: string;
  avail: string;
  avail_postfix: string;
  availLegend: string | null;
  avail_postfix2: string | null;
  avail_color: string;
  is_action: boolean;
  action_name: string | null;
  rating: number;
  promo_cnt: number;
  promos: Array<string> | null;
  order: number;
  is_special_service: boolean;
  type: number;
  itemType: string;
  url: string;
  minimumAmount: number;
  amountInPack: number;
  start_time: number | null;
  end_time: number | null;
  variant_type: number;
  advertising: string;
  categoryName: string | null;
  inBasket: number;
}

export interface ResponseInterfaceOutdated {
  err: number;
  msg: string | null;
  vzt: number;
  user_name: string;
  basket_cnt: number;
  basket_total_cnt: number;
  user_id: number;
  favCnt: number;
  alzaCredit: number | null;
  countryID: number;
  countryPhonePrefix: string;
  serverTime: number;
  data_cnt: number;
  data: Array<ProductItemOutdated>;
}

/* INTERFACES FROM TASK SETTING END */
/* ----------------------------------------------- */
/* REAL DATA INTERFACES BEGIN */

export interface Self {
  href: string;
  appLink: string;
  enabled: boolean;
}

export interface PriceInfo {
  priceWithoutVat: string;
  priceWithVat: string;
  comparePrice: string | null;
  discountRate: string | null;
  pricePrefix: string | null;
  pricePostfix: string | null;
  discountReason: string | null;
  gaPriceWithoutVat: string | null;
  priceNoCurrency: number | null;
  delayedPaymentPriceWithVat: string | null;
}

export interface PriceInfoV2 {
  priceWithVat: string;
  comparePrice: string | null;
  pricePrefix: string | null;
  pricePostfix: string | null;
  priceDescription: string | null;
  priceType: number;
  headerText: string | null;
  headerIconUrl: string | null;
  priceSave: string | null;
  explanationPriceAction: ExplanationPriceAction | null;
  unitPriceWithVat: string;
  unitName: string;
}

export interface ExplanationPriceAction {
  href: string;
  appLink: string;
  enabled: boolean;
}

export interface ProductIconList {
  (key: number): ProductIcon;
}

export interface ProductIcon {
  text: string;
  image: string;
  clickAction: null;
}

export interface ViewerProductInfo {
  href: string;
  appLink: string;
  enabled: boolean;
}

export interface Product {
  self: Self;
  priceInfo: PriceInfo;
  priceInfoV2: PriceInfoV2;
  cpriceTotal: null;
  is_comparable: boolean;
  priceTotal: null;
  promosWorth: null;
  ratingCount: number;
  specParent: null;
  userOwns: boolean;
  userOwnedContentId: null;
  navigationUrl: null;
  canChangeQuantity: boolean;
  canCashBack: boolean;
  cashBackType: number;
  cashBackPriceLabel: null;
  cashBackPrice: null;
  cashBackPercent: null;
  giftAdvisor: null;
  catalog_number: string;
  count: number;
  showUpsellDialog: boolean;
  onChangeItemCountClick: null;
  icons: ProductIconList | [];
  viewerProductInfo: ViewerProductInfo;
  id: number;
  code: string;
  img: string;
  name: string;
  spec: string;
  price: string;
  cprice: string | null;
  priceWithoutVat: string;
  avail: string;
  avail_postfix: string;
  avail_postfix2: string | null;
  availLegend: null;
  avail_color: string;
  is_action: boolean;
  action_name: string;
  rating: number;
  promo_cnt: number;
  promos: null;
  order: number;
  is_special_service: boolean;
  type: number;
  year: number;
  can_buy: boolean;
  itemType: string;
  orderItemId: null;
  iType: number;
  maxCanBuy: number | null;
  eshopType: number;
  url: string;
  canStream: boolean;
  canUserStream: boolean;
  supplierCode?: string;
  parentId: number;
  minimumAmount: number;
  amountInPack: number;
  start_time: null;
  end_time: null;
  variant_type: number;
  priceNoCurrency: number;
  categoryName: string | null;
  inBasket: number;
}

/* REAL DATA INTERFACES BEGIN */
