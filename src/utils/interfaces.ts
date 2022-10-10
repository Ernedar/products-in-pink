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

export interface ProductItemData {
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

export interface ProductItemResponse {
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
  data: Array<ProductItemData>;
}
