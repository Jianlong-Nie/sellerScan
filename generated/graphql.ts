import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** SCALARS */
  Date: any;
  /** SCALARS */
  DateTime: any;
  FileUpload: any;
};

export type AddReviewResponse = {
  __typename?: 'AddReviewResponse';
  description?: Maybe<Scalars['String']>;
  postedBy: Scalars['ID'];
  productId?: Maybe<Scalars['ID']>;
  ratingVote: Scalars['Int'];
  reviewId: Scalars['ID'];
  sellerId?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};

export type Address = {
  __typename?: 'Address';
  addressType?: Maybe<Scalars['String']>;
  areaCode?: Maybe<Scalars['String']>;
  block?: Maybe<Scalars['String']>;
  building?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  defaultAddress?: Maybe<Scalars['Boolean']>;
  district?: Maybe<Scalars['String']>;
  flat?: Maybe<Scalars['String']>;
  floor?: Maybe<Scalars['String']>;
  houseNumber?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  landMark?: Maybe<Scalars['String']>;
  pinCode?: Maybe<Scalars['String']>;
  provinceState?: Maybe<Scalars['String']>;
  referenceId?: Maybe<Scalars['String']>;
  streetAddress1?: Maybe<Scalars['String']>;
  streetAddress2?: Maybe<Scalars['String']>;
  townCity?: Maybe<Scalars['String']>;
  villageArea?: Maybe<Scalars['String']>;
};

export type AddressInput = {
  areaCode?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  provinceState?: InputMaybe<Scalars['String']>;
  streetAddress1?: InputMaybe<Scalars['String']>;
  streetAddress2?: InputMaybe<Scalars['String']>;
  townCity?: InputMaybe<Scalars['String']>;
};

export type AddressRequest = {
  addressId: Scalars['ID'];
  addressType?: InputMaybe<AddressType>;
  areaCode?: InputMaybe<Scalars['String']>;
  block?: InputMaybe<Scalars['String']>;
  building?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  defaultAddress?: InputMaybe<Scalars['Boolean']>;
  district?: InputMaybe<Scalars['String']>;
  flat?: InputMaybe<Scalars['String']>;
  floor?: InputMaybe<Scalars['String']>;
  houseNumber?: InputMaybe<Scalars['String']>;
  landMark?: InputMaybe<Scalars['String']>;
  pinCode?: InputMaybe<Scalars['String']>;
  provinceState?: InputMaybe<Scalars['String']>;
  referenceId: Scalars['String'];
  streetAddress1?: InputMaybe<Scalars['String']>;
  streetAddress2?: InputMaybe<Scalars['String']>;
  streetAddress3?: InputMaybe<Scalars['String']>;
  townCity?: InputMaybe<Scalars['String']>;
  villageArea?: InputMaybe<Scalars['String']>;
};

export type AddressRequestForCreate = {
  addressType?: InputMaybe<AddressType>;
  areaCode?: InputMaybe<Scalars['String']>;
  block?: InputMaybe<Scalars['String']>;
  building?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  defaultAddress?: InputMaybe<Scalars['Boolean']>;
  district?: InputMaybe<Scalars['String']>;
  flat?: InputMaybe<Scalars['String']>;
  floor?: InputMaybe<Scalars['String']>;
  houseNumber?: InputMaybe<Scalars['String']>;
  landMark?: InputMaybe<Scalars['String']>;
  pinCode?: InputMaybe<Scalars['String']>;
  provinceState?: InputMaybe<Scalars['String']>;
  referenceId: Scalars['String'];
  streetAddress1?: InputMaybe<Scalars['String']>;
  streetAddress2?: InputMaybe<Scalars['String']>;
  streetAddress3?: InputMaybe<Scalars['String']>;
  townCity?: InputMaybe<Scalars['String']>;
  villageArea?: InputMaybe<Scalars['String']>;
};

export type AddressRequestToGetCoordinates = {
  cityTownVillage?: InputMaybe<Scalars['String']>;
  countryID: Scalars['ID'];
  flatHomeApartmentBuilding?: InputMaybe<Scalars['String']>;
  pinCode?: InputMaybe<Scalars['String']>;
  stateID: Scalars['ID'];
  streetColonyName?: InputMaybe<Scalars['String']>;
};

export type AddressResponse = {
  __typename?: 'AddressResponse';
  addressFloor?: Maybe<Scalars['String']>;
  addressId: Scalars['ID'];
  addressType?: Maybe<AddressType>;
  areaCode?: Maybe<Scalars['String']>;
  block?: Maybe<Scalars['String']>;
  building?: Maybe<Scalars['String']>;
  coordinateResponse?: Maybe<CoordinateResponse>;
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  defaultAddress?: Maybe<Scalars['Boolean']>;
  district?: Maybe<Scalars['String']>;
  flat?: Maybe<Scalars['String']>;
  floor?: Maybe<Scalars['String']>;
  houseNumber?: Maybe<Scalars['String']>;
  isDefault?: Maybe<Scalars['Boolean']>;
  landMark?: Maybe<Scalars['String']>;
  landmark?: Maybe<Scalars['String']>;
  pinCode?: Maybe<Scalars['String']>;
  provinceState?: Maybe<Scalars['String']>;
  referenceId?: Maybe<Scalars['ID']>;
  streetAddress1?: Maybe<Scalars['String']>;
  streetAddress2?: Maybe<Scalars['String']>;
  streetAddress3?: Maybe<Scalars['String']>;
  townCity?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  villageArea?: Maybe<Scalars['String']>;
};

export enum AddressType {
  Billing = 'BILLING',
  Business = 'BUSINESS',
  CollectionPoint = 'COLLECTION_POINT',
  PickUp = 'PICK_UP',
  Return = 'RETURN',
  Shipping = 'SHIPPING',
  Undefined = 'UNDEFINED'
}

export type AddressView = {
  __typename?: 'AddressView';
  addressFloor?: Maybe<Scalars['String']>;
  addressId: Scalars['ID'];
  areaCode?: Maybe<Scalars['String']>;
  block?: Maybe<Scalars['String']>;
  building?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  district?: Maybe<Scalars['String']>;
  flat?: Maybe<Scalars['String']>;
  houseNumber?: Maybe<Scalars['String']>;
  landmark?: Maybe<Scalars['String']>;
  pinCode?: Maybe<Scalars['String']>;
  provinceState?: Maybe<Scalars['String']>;
  streetAddress1?: Maybe<Scalars['String']>;
  streetAddress2?: Maybe<Scalars['String']>;
  streetAddress3?: Maybe<Scalars['String']>;
  townCity?: Maybe<Scalars['String']>;
  villageArea?: Maybe<Scalars['String']>;
};

export type Announcement = {
  __typename?: 'Announcement';
  announcementDatetime?: Maybe<Scalars['DateTime']>;
  announcementText?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  referenceId?: Maybe<Scalars['String']>;
  validityInterval?: Maybe<Scalars['Int']>;
};

export type BillingDetailsRequest = {
  billingAddress?: InputMaybe<AddressRequest>;
  billingDetailsId: Scalars['ID'];
  buyerId: Scalars['ID'];
  companyName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  taxCode?: InputMaybe<Scalars['String']>;
};

export type BillingDetailsRequestForCreate = {
  billingAddress: AddressRequestForCreate;
  buyerId: Scalars['ID'];
  companyName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  taxCode?: InputMaybe<Scalars['String']>;
};

export type BillingDetailsResponse = {
  __typename?: 'BillingDetailsResponse';
  billingAddress?: Maybe<AddressResponse>;
  billingDetailsId?: Maybe<Scalars['ID']>;
  buyerId?: Maybe<Scalars['ID']>;
  companyName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  taxCode?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum BusinessType {
  BusinessSeller = 'BUSINESS_SELLER',
  IndividualSeller = 'INDIVIDUAL_SELLER',
  Undefined = 'UNDEFINED'
}

export type Buyer = {
  __typename?: 'Buyer';
  id: Scalars['ID'];
};

export type BuyerDetailsResponse = {
  __typename?: 'BuyerDetailsResponse';
  buyerId: Scalars['ID'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type BuyerListingResponse = {
  __typename?: 'BuyerListingResponse';
  content: Array<Maybe<ProductListingView>>;
  pageNo: Scalars['Int'];
  pageSize: Scalars['Int'];
  totalElements: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type BuyerOrderOption = {
  pageOption: PageOption;
  searchString?: InputMaybe<Scalars['String']>;
};

export type BuyerOrderResponse = {
  __typename?: 'BuyerOrderResponse';
  content: Array<OrderItemDetailResponse>;
  pageNo: Scalars['Int'];
  pageSize: Scalars['Int'];
  totalElements: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type BuyerProfileRequest = {
  applicationSettings?: InputMaybe<Scalars['String']>;
  buyerId: Scalars['ID'];
  categoryPreferences?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  country?: InputMaybe<Scalars['String']>;
  currencies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  geoLocation?: InputMaybe<Scalars['String']>;
  languages?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastName?: InputMaybe<Scalars['String']>;
  oneClickPurchaseOn?: InputMaybe<Scalars['Boolean']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  productPreferences?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sellerPreferences?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BuyerProfileRequestForCreate = {
  country?: InputMaybe<Scalars['String']>;
  currencies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  geoLocation?: InputMaybe<Scalars['String']>;
  languages?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastName?: InputMaybe<Scalars['String']>;
  oneClickPurchaseOn?: InputMaybe<Scalars['Boolean']>;
  password?: InputMaybe<Scalars['String']>;
  phoneNumber: Scalars['String'];
};

export type BuyerProfileResponse = {
  __typename?: 'BuyerProfileResponse';
  applicationSettings?: Maybe<Scalars['String']>;
  billingDetails?: Maybe<BillingDetailsResponse>;
  bonusSalamiCredit?: Maybe<Scalars['Float']>;
  bonusSalamiCreditExpire?: Maybe<Scalars['DateTime']>;
  buyerId?: Maybe<Scalars['ID']>;
  categoryPreferences?: Maybe<Array<Maybe<Scalars['String']>>>;
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  currencies?: Maybe<Array<Maybe<Scalars['String']>>>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  geoLocation?: Maybe<Scalars['String']>;
  guestBuyer?: Maybe<Scalars['Boolean']>;
  languages?: Maybe<Array<Maybe<Scalars['String']>>>;
  lastName?: Maybe<Scalars['String']>;
  notifications?: Maybe<Array<Maybe<NotificationResponse>>>;
  oneClickPurchaseOn?: Maybe<Scalars['Boolean']>;
  paymentOptions?: Maybe<Array<Maybe<PaymentDetailResponse>>>;
  phoneNumber?: Maybe<Scalars['String']>;
  preferences?: Maybe<Array<Maybe<PreferenceResponse>>>;
  productPreferences?: Maybe<Array<Maybe<Scalars['String']>>>;
  refundSalamiCredit?: Maybe<Scalars['Float']>;
  selectedCountry?: Maybe<CountryResponse>;
  selectedSupportedLanguage?: Maybe<SupportedLanguageResponse>;
  sellerPreferences?: Maybe<Array<Maybe<Scalars['String']>>>;
  shareInformations?: Maybe<Array<Maybe<ShareInformationResponse>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['ID']>;
  userName?: Maybe<Scalars['String']>;
  userType?: Maybe<UserType>;
  walletId?: Maybe<Scalars['ID']>;
  wishLists?: Maybe<Array<Maybe<WishListResponse>>>;
};

export type CancelOrderItemRequest = {
  message?: InputMaybe<Scalars['String']>;
  orderItemId: Scalars['String'];
  reason: CancellationReason;
};

export enum CancellationReason {
  MistakeOrder = 'MISTAKE_ORDER',
  NotAbleToWaitForListingCompletion = 'NOT_ABLE_TO_WAIT_FOR_LISTING_COMPLETION',
  ProductNotRequired = 'PRODUCT_NOT_REQUIRED'
}

export type CartInput = {
  billingDetailsId: Scalars['ID'];
  buyerId: Scalars['ID'];
  cartItems?: InputMaybe<Array<InputMaybe<CartItemInput>>>;
  shippingAddressId?: InputMaybe<Scalars['ID']>;
  useSalamiWallet: Scalars['Boolean'];
};

export type CartItemInput = {
  listingId: Scalars['ID'];
  quantity?: InputMaybe<Scalars['Int']>;
  variantId: Scalars['ID'];
};

export type Category = {
  __typename?: 'Category';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  parentCategory?: Maybe<Category>;
};

export type CategoryView = {
  __typename?: 'CategoryView';
  categoryId?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ChatMessageRequest = {
  chatId: Scalars['ID'];
  chatMessageId: Scalars['ID'];
  msgText?: InputMaybe<Scalars['String']>;
  postedBy?: InputMaybe<Scalars['String']>;
};

export type ChatMessageRequestForCreate = {
  chatId: Scalars['ID'];
  msgText?: InputMaybe<Scalars['String']>;
  postedBy?: InputMaybe<Scalars['String']>;
};

export type ChatMessageResponse = {
  __typename?: 'ChatMessageResponse';
  chatId?: Maybe<Scalars['ID']>;
  chatMessageId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  msgText?: Maybe<Scalars['String']>;
  postedBy?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ChatRequest = {
  chatId: Scalars['ID'];
  chatOpenPeriodEndDate?: InputMaybe<Scalars['DateTime']>;
  chatOpenPeriodStartDate?: InputMaybe<Scalars['DateTime']>;
  chatStatus?: InputMaybe<ChatStatus>;
  muteFlagForCustomer?: InputMaybe<Scalars['Boolean']>;
  productListingId: Scalars['ID'];
  productName?: InputMaybe<Scalars['String']>;
};

export type ChatRequestForCreate = {
  chatOpenPeriodEndDate?: InputMaybe<Scalars['DateTime']>;
  chatOpenPeriodStartDate?: InputMaybe<Scalars['DateTime']>;
  chatStatus?: InputMaybe<ChatStatus>;
  muteFlagForCustomer?: InputMaybe<Scalars['Boolean']>;
  productListingId: Scalars['ID'];
  productName?: InputMaybe<Scalars['String']>;
};

export type ChatResponse = {
  __typename?: 'ChatResponse';
  buyerProfiles?: Maybe<Array<Maybe<BuyerProfileResponse>>>;
  chatId?: Maybe<Scalars['ID']>;
  chatOpenPeriodEndDate?: Maybe<Scalars['DateTime']>;
  chatOpenPeriodStartDate?: Maybe<Scalars['DateTime']>;
  chatStatus?: Maybe<ChatStatus>;
  createdAt?: Maybe<Scalars['DateTime']>;
  messages?: Maybe<Array<Maybe<ChatMessageResponse>>>;
  muteFlagForCustomer?: Maybe<Scalars['Boolean']>;
  productListingId?: Maybe<Scalars['ID']>;
  productName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum ChatStatus {
  Closed = 'CLOSED',
  Locked = 'LOCKED',
  Open = 'OPEN',
  Suspended = 'SUSPENDED',
  Undefined = 'UNDEFINED'
}

export type ChatSubscriberRequest = {
  buyerId: Scalars['ID'];
  chatId: Scalars['ID'];
};

export type ChatSubscriberRequestForCreate = {
  buyerId: Scalars['ID'];
  chatId: Scalars['ID'];
};

export type ChatSubscriberResponse = {
  __typename?: 'ChatSubscriberResponse';
  buyerId?: Maybe<Scalars['ID']>;
  chatId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CollectionPoint = {
  __typename?: 'CollectionPoint';
  address?: Maybe<Address>;
  collectionPointId?: Maybe<Scalars['ID']>;
  microHubId?: Maybe<Scalars['ID']>;
};

export type CollectionPointInput = {
  listingId?: InputMaybe<Scalars['ID']>;
  microHubId: Scalars['ID'];
};

export type CollectionPointPickupDetailView = {
  __typename?: 'CollectionPointPickupDetailView';
  areaCode?: Maybe<Scalars['String']>;
  contactNumber?: Maybe<Scalars['String']>;
  contactPerson?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  microHubId?: Maybe<Scalars['ID']>;
  openingHours?: Maybe<Array<Maybe<Scalars['String']>>>;
  provinceState?: Maybe<Scalars['String']>;
  streetAddress1?: Maybe<Scalars['String']>;
  streetAddress2?: Maybe<Scalars['String']>;
  townCity?: Maybe<Scalars['String']>;
};

export type CollectionPointPickupResponse = {
  __typename?: 'CollectionPointPickupResponse';
  areaCode?: Maybe<Scalars['String']>;
  collectionDate?: Maybe<Scalars['Date']>;
  collectionPointId?: Maybe<Scalars['ID']>;
  contactNumber?: Maybe<Scalars['String']>;
  contactPerson?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  microHubId?: Maybe<Scalars['ID']>;
  openingHours?: Maybe<Array<Maybe<Scalars['String']>>>;
  provinceState?: Maybe<Scalars['String']>;
  streetAddress1?: Maybe<Scalars['String']>;
  streetAddress2?: Maybe<Scalars['String']>;
  townCity?: Maybe<Scalars['String']>;
};

export type CoordinateResponse = {
  __typename?: 'CoordinateResponse';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type CountryResponse = {
  __typename?: 'CountryResponse';
  countryName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
};

export type CountryStateResponse = {
  __typename?: 'CountryStateResponse';
  countryId?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  stateName?: Maybe<Scalars['String']>;
};

export type CourierDeliveryDetailView = {
  __typename?: 'CourierDeliveryDetailView';
  courierDeliveryId: Scalars['ID'];
  courierName?: Maybe<Scalars['String']>;
  shippingFees?: Maybe<Scalars['Float']>;
  shippingFeesTaxes?: Maybe<Scalars['Float']>;
};

export type CourierDeliveryDetails = {
  __typename?: 'CourierDeliveryDetails';
  courierDeliveryId: Scalars['ID'];
  courierName?: Maybe<Scalars['String']>;
  shippingFees?: Maybe<Scalars['Float']>;
  shippingFeesTaxes?: Maybe<Scalars['Float']>;
};

export type CourierDeliveryDetailsInput = {
  courierName: Scalars['String'];
  listingId?: InputMaybe<Scalars['String']>;
  shippingFees?: InputMaybe<Scalars['Float']>;
  shippingFeesTaxes?: InputMaybe<Scalars['Float']>;
};

export type DeliveryAddressGeoCoordinateRequest = {
  addressId: Scalars['ID'];
  coordinates?: InputMaybe<PointRequest>;
};

export type DeliveryAddressGeoCoordinateRequestForCreate = {
  addressId: Scalars['ID'];
  coordinates?: InputMaybe<PointRequestForCreate>;
};

export type DeliveryAddressGeoCoordinateResponse = {
  __typename?: 'DeliveryAddressGeoCoordinateResponse';
  addressId: Scalars['ID'];
  coordinates?: Maybe<PointResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DeliveryAddressToOnlineStoreRequest = {
  addressId: Scalars['ID'];
  storeId: Scalars['ID'];
};

export type DeliveryAddressToOnlineStoreRequestForCreate = {
  addressId: Scalars['ID'];
  storeId: Scalars['ID'];
};

export type DeliveryAddressToOnlineStoreResponse = {
  __typename?: 'DeliveryAddressToOnlineStoreResponse';
  addressId: Scalars['ID'];
  createdAt?: Maybe<Scalars['DateTime']>;
  storeId: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DeliveryAddressesByOnlineStoresResponse = {
  __typename?: 'DeliveryAddressesByOnlineStoresResponse';
  addresses?: Maybe<Array<Maybe<AddressResponse>>>;
};

export enum DeliveryOption {
  CollectionPointPickup = 'COLLECTION_POINT_PICKUP',
  CourierDelivery = 'COURIER_DELIVERY',
  SellerDirectDelivery = 'SELLER_DIRECT_DELIVERY',
  SellerLocationPickup = 'SELLER_LOCATION_PICKUP',
  Undefined = 'UNDEFINED'
}

/** INPUTS */
export type FilterParams = {
  addressId?: InputMaybe<Scalars['String']>;
  buyerId?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  listingId?: InputMaybe<Scalars['String']>;
  productId?: InputMaybe<Scalars['String']>;
  sellerId?: InputMaybe<Scalars['String']>;
  storeId?: InputMaybe<Scalars['String']>;
  stores?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  textToSearch?: InputMaybe<Scalars['String']>;
};

export enum FilterType {
  Active = 'ACTIVE',
  ActiveByAddressId = 'ACTIVE_BY_ADDRESS_ID',
  ActiveByAddressIdAndAnnouncement = 'ACTIVE_BY_ADDRESS_ID_AND_ANNOUNCEMENT',
  ActiveByAddressIdAndCategory = 'ACTIVE_BY_ADDRESS_ID_AND_CATEGORY',
  ActiveByAddressIdAndFullTextSearch = 'ACTIVE_BY_ADDRESS_ID_AND_FULL_TEXT_SEARCH',
  ActiveByAddressIdAndSeller = 'ACTIVE_BY_ADDRESS_ID_AND_SELLER',
  ActiveByAddressIdAndShareList = 'ACTIVE_BY_ADDRESS_ID_AND_SHARE_LIST',
  ActiveByAddressIdAndWishList = 'ACTIVE_BY_ADDRESS_ID_AND_WISH_LIST',
  ActiveByStores = 'ACTIVE_BY_STORES',
  ByListingId = 'BY_LISTING_ID',
  BySeller = 'BY_SELLER',
  ByStoreId = 'BY_STORE_ID',
  Undefined = 'UNDEFINED'
}

export type ForgotPasswordStep1Response = {
  __typename?: 'ForgotPasswordStep1Response';
  email?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type ForgotPasswordStep2Response = {
  __typename?: 'ForgotPasswordStep2Response';
  actionToken?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type ForgotPasswordStep3Response = {
  __typename?: 'ForgotPasswordStep3Response';
  message?: Maybe<Scalars['String']>;
};

export type GenericResponse = {
  __typename?: 'GenericResponse';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

export enum ImageType {
  Gif = 'GIF',
  Jpg = 'JPG',
  Png = 'PNG',
  Raw = 'RAW',
  Swg = 'SWG',
  Tiff = 'TIFF',
  Undefined = 'UNDEFINED'
}

export type Images = {
  __typename?: 'Images';
  description?: Maybe<Scalars['String']>;
  fullPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  imageName?: Maybe<Scalars['String']>;
  imageType?: Maybe<ImageType>;
  referenceId?: Maybe<Scalars['String']>;
};

export type IsListingAvailableInput = {
  listingId: Scalars['ID'];
  /** null if product has only one variant */
  quantity: Scalars['Int'];
  variantId?: InputMaybe<Scalars['ID']>;
};

export type IsListingAvailableResponse = {
  __typename?: 'IsListingAvailableResponse';
  isAvailable?: Maybe<Scalars['Boolean']>;
  listingId?: Maybe<Scalars['ID']>;
  reason?: Maybe<Scalars['String']>;
  variantId?: Maybe<Scalars['ID']>;
};

export type KeyValuePair = {
  __typename?: 'KeyValuePair';
  key: Scalars['String'];
  value: Scalars['String'];
};

export enum ListingOrderFilterType {
  ListingId = 'LISTING_ID',
  None = 'NONE'
}

export type ListingOrderOptions = {
  filterType: ListingOrderFilterType;
  listingId?: InputMaybe<Scalars['ID']>;
  pageOption: PageOption;
};

export type ListingStatusInput = {
  listingId: Scalars['String'];
  status: ProductListingStatus;
};

export type ListingStoreInput = {
  microHubId?: InputMaybe<Scalars['String']>;
  storeId: Scalars['String'];
};

export type ListingVariantInput = {
  priceId: Scalars['String'];
  quantity: Scalars['Int'];
  variantId?: InputMaybe<Scalars['String']>;
};

export type ListingVariantView = {
  __typename?: 'ListingVariantView';
  defaultVariant?: Maybe<Scalars['Boolean']>;
  fullPath?: Maybe<Scalars['String']>;
  isAvailable?: Maybe<Scalars['Boolean']>;
  itemsAvailable?: Maybe<Scalars['Int']>;
  itemsInStock?: Maybe<Scalars['Int']>;
  itemsSold?: Maybe<Scalars['Int']>;
  listingId: Scalars['ID'];
  options?: Maybe<Array<Maybe<KeyValuePair>>>;
  productId?: Maybe<Scalars['ID']>;
  retailPrice?: Maybe<Scalars['Float']>;
  variantId?: Maybe<Scalars['ID']>;
  wholeSalePrice?: Maybe<Scalars['Float']>;
};

export type MicroHubResponse = {
  __typename?: 'MicroHubResponse';
  address?: Maybe<AddressResponse>;
  contactNumber?: Maybe<Scalars['String']>;
  contactPerson?: Maybe<Scalars['String']>;
  microHubId?: Maybe<Scalars['ID']>;
  openingHours?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** MUTATIONS */
export type Mutation = {
  __typename?: 'Mutation';
  acceptProduct?: Maybe<Product>;
  acceptSellerRegistrationDocuments?: Maybe<GenericResponse>;
  addBonusSalamiCredit?: Maybe<Scalars['Float']>;
  addOptionValue?: Maybe<Option>;
  /** categories */
  addParentCategory: Category;
  addProductRefundToWallet?: Maybe<SalamiWalletTransactionResponse>;
  addProductReview: AddReviewResponse;
  addProductToWishlist: Wishlist;
  addRefundSalamiCredit?: Maybe<Scalars['Float']>;
  addReportReview: ReportReviewResponse;
  addRequestForProduct: RequestForProductResponse;
  addSellerReview: AddReviewResponse;
  addShareInformation: ShareInformation;
  addSubCategory: Category;
  approveOrRejectOrderReturnRequest?: Maybe<Scalars['Boolean']>;
  cancelOrderItem?: Maybe<Scalars['Boolean']>;
  cancelOrderItemByListingId?: Maybe<Scalars['Boolean']>;
  changePassword?: Maybe<Scalars['Boolean']>;
  cloneListing: Array<ProductListing>;
  createAddress?: Maybe<AddressResponse>;
  createAddressForGuestBuyer?: Maybe<AddressResponse>;
  createBillingDetails?: Maybe<BillingDetailsResponse>;
  createBillingDetailsForGuestBuyer?: Maybe<BillingDetailsResponse>;
  createChat?: Maybe<ChatResponse>;
  createChatMessage?: Maybe<ChatMessageResponse>;
  createChatSubscriber?: Maybe<ChatSubscriberResponse>;
  createDeliveryAddressGeoCoordinate?: Maybe<DeliveryAddressGeoCoordinateResponse>;
  createDeliveryAddressToOnlineStore?: Maybe<DeliveryAddressToOnlineStoreResponse>;
  createGuestBuyer?: Maybe<BuyerProfileResponse>;
  createNotification?: Maybe<NotificationResponse>;
  /** options */
  createOption?: Maybe<Option>;
  createOrderFromCart?: Maybe<OrderResponse>;
  createPaymentDetail?: Maybe<PaymentDetailResponse>;
  createPreference?: Maybe<PreferenceResponse>;
  createProduct: Product;
  createProductListings: Array<ProductListing>;
  createRecurringListings: Array<ProductListing>;
  createSellerBillingDetails?: Maybe<SellerBillingDetailsResponse>;
  createSellerContact?: Maybe<SellerContactResponse>;
  createSellerToOnlineStore?: Maybe<SellerToOnlineStoreResponse>;
  createServiceOperator?: Maybe<GenericResponse>;
  createShareInformation?: Maybe<ShareInformationResponse>;
  createShippingDetail?: Maybe<ShippingDetailResponse>;
  /** stores */
  createStore?: Maybe<Store>;
  createWishList?: Maybe<WishListResponse>;
  deleteAddress?: Maybe<Scalars['Boolean']>;
  deleteAddressForGuestBuyer?: Maybe<Scalars['Boolean']>;
  deleteBillingDetails?: Maybe<Scalars['Boolean']>;
  deleteBillingDetailsForGuestBuyer?: Maybe<Scalars['Boolean']>;
  deleteBuyerProfile?: Maybe<Scalars['Boolean']>;
  deleteChat?: Maybe<Scalars['Boolean']>;
  deleteChatMessage?: Maybe<Scalars['Boolean']>;
  deleteChatSubscriber?: Maybe<Scalars['Boolean']>;
  deleteDeliveryAddressGeoCoordinate?: Maybe<Scalars['Boolean']>;
  deleteDeliveryAddressToOnlineStore?: Maybe<Scalars['Boolean']>;
  deleteNotification?: Maybe<Scalars['Boolean']>;
  deleteOption?: Maybe<Scalars['Boolean']>;
  deletePaymentDetail?: Maybe<Scalars['Boolean']>;
  deletePreference?: Maybe<Scalars['Boolean']>;
  deleteProduct?: Maybe<Scalars['Boolean']>;
  deleteProductFromWishlist: Scalars['Int'];
  deleteProductListing: Scalars['Boolean'];
  deleteSellerBillingDetails?: Maybe<Scalars['Boolean']>;
  deleteSellerContact?: Maybe<Scalars['Boolean']>;
  deleteSellerProfile?: Maybe<Scalars['Boolean']>;
  deleteSellerToOnlineStore?: Maybe<Scalars['Boolean']>;
  deleteShareInformation?: Maybe<Scalars['Boolean']>;
  deleteShippingDetail?: Maybe<Scalars['Boolean']>;
  deleteStoreById?: Maybe<Scalars['Boolean']>;
  deleteWishList?: Maybe<Scalars['Boolean']>;
  disableProduct?: Maybe<Product>;
  forgotPasswordStep1SendNotificationEmail?: Maybe<ForgotPasswordStep1Response>;
  forgotPasswordStep1SendNotificationSms?: Maybe<ForgotPasswordStep1Response>;
  forgotPasswordStep2VerifyTokenEmail?: Maybe<ForgotPasswordStep2Response>;
  forgotPasswordStep2VerifyTokenSms?: Maybe<ForgotPasswordStep2Response>;
  forgotPasswordStep3ChangeByEmail?: Maybe<ForgotPasswordStep3Response>;
  forgotPasswordStep3ChangeBySms?: Maybe<ForgotPasswordStep3Response>;
  grantGiftPromotion?: Maybe<SalamiWalletGiftTransactionResponse>;
  incrementHelpfulCount?: Maybe<Scalars['Int']>;
  incrementSoldQuantity: Scalars['Boolean'];
  markOrderItemAsDelivered?: Maybe<Scalars['Boolean']>;
  markOrderReturnAsReceived?: Maybe<Scalars['Boolean']>;
  rateSeller?: Maybe<Scalars['Boolean']>;
  reduceOrderAmountFromWallet?: Maybe<ReduceWalletResponse>;
  reduceSoldQuantity: Scalars['Boolean'];
  refillSalamiCredit?: Maybe<SalamiWalletTransactionResponse>;
  registerBuyer?: Maybe<BuyerProfileResponse>;
  registerGuestBuyerToBuyer?: Maybe<BuyerProfileResponse>;
  registerSeller?: Maybe<SellerProfileResponse>;
  rejectProduct?: Maybe<Product>;
  rejectSellerValidation?: Maybe<GenericResponse>;
  resendVerificationCodeInEmail?: Maybe<ResendCodeResponse>;
  resendVerificationCodeInSms?: Maybe<ResendCodeResponse>;
  saveListingCollectionPoint: CollectionPoint;
  saveListingCourierDeliveryDetails: CourierDeliveryDetails;
  saveListingSellerDirectDelivery: SellerDirectDeliveryResponse;
  saveListingSellerLocation: CollectionPoint;
  saveListingVariants: Array<ProductListingVariant>;
  savePreferredCategories?: Maybe<Scalars['String']>;
  sellerBillingDetailsForSeller?: Maybe<SellerBillingDetailsResponse>;
  sellerContactForSeller?: Maybe<Array<Maybe<SellerContactResponse>>>;
  sendOTPCodeForBuyer?: Maybe<GenericResponse>;
  sendVerifyEmail?: Maybe<Scalars['Boolean']>;
  sendVerifySms?: Maybe<Scalars['Boolean']>;
  setCountryForUser?: Maybe<CountryResponse>;
  setEscrowAccountToSeller?: Maybe<SellerProfileResponse>;
  setSupportedLanguageForUser?: Maybe<SupportedLanguageResponse>;
  setWalletToBuyer?: Maybe<BuyerProfileResponse>;
  submitOrderReturnRequest?: Maybe<OrderReturnResponse>;
  updateAddress?: Maybe<AddressResponse>;
  updateAddressForGuestBuyer?: Maybe<AddressResponse>;
  updateBillingDetails?: Maybe<BillingDetailsResponse>;
  updateBillingDetailsForGuestBuyer?: Maybe<BillingDetailsResponse>;
  updateBuyerProfile?: Maybe<BuyerProfileResponse>;
  updateCategory: Category;
  updateChat?: Maybe<ChatResponse>;
  updateChatMessage?: Maybe<ChatMessageResponse>;
  updateChatSubscriber?: Maybe<ChatSubscriberResponse>;
  updateDeliveryAddressGeoCoordinate?: Maybe<DeliveryAddressGeoCoordinateResponse>;
  updateDeliveryAddressToOnlineStore?: Maybe<DeliveryAddressToOnlineStoreResponse>;
  updateListingStatus: ProductListing;
  updateNotification?: Maybe<NotificationResponse>;
  updatePaymentDetail?: Maybe<PaymentDetailResponse>;
  updatePreference?: Maybe<PreferenceResponse>;
  updateProduct: SellerProductDetailView;
  updateProductListing: ProductListing;
  updateProductPriceAndQuantity: SellerProductDetailView;
  updateSellerBillingDetails?: Maybe<SellerBillingDetailsResponse>;
  updateSellerContact?: Maybe<SellerContactResponse>;
  updateSellerProfile?: Maybe<SellerProfileResponse>;
  updateSellerToOnlineStore?: Maybe<SellerToOnlineStoreResponse>;
  updateShareInformation?: Maybe<ShareInformationResponse>;
  updateShippingDetail?: Maybe<ShippingDetailResponse>;
  updateStore?: Maybe<Store>;
  updateWishList?: Maybe<WishListResponse>;
  useRefundSalamiCredit?: Maybe<Scalars['Float']>;
  validateCode?: Maybe<ValidateCodeResponse>;
  validateOTPCodeForBuyer?: Maybe<ValidateCodeResponse>;
};


/** MUTATIONS */
export type MutationAcceptProductArgs = {
  productId: Scalars['ID'];
};


/** MUTATIONS */
export type MutationAcceptSellerRegistrationDocumentsArgs = {
  sellerId: Scalars['ID'];
};


/** MUTATIONS */
export type MutationAddBonusSalamiCreditArgs = {
  amount: Scalars['Float'];
  bonusSalamiCreditExpire?: InputMaybe<Scalars['DateTime']>;
  buyerId: Scalars['ID'];
};


/** MUTATIONS */
export type MutationAddOptionValueArgs = {
  optionId: Scalars['ID'];
  value: Scalars['String'];
};


/** MUTATIONS */
export type MutationAddParentCategoryArgs = {
  description: Scalars['String'];
  name: Scalars['String'];
};


/** MUTATIONS */
export type MutationAddProductRefundToWalletArgs = {
  amount: Scalars['Float'];
  buyerId: Scalars['ID'];
  transactionReference: Scalars['ID'];
};


/** MUTATIONS */
export type MutationAddProductReviewArgs = {
  input: ProductReviewInput;
};


/** MUTATIONS */
export type MutationAddProductToWishlistArgs = {
  buyerId: Scalars['String'];
  productId: Scalars['String'];
};


/** MUTATIONS */
export type MutationAddRefundSalamiCreditArgs = {
  buyerId: Scalars['ID'];
  refundAmount: Scalars['Float'];
};


/** MUTATIONS */
export type MutationAddReportReviewArgs = {
  input: ReportReviewInput;
};


/** MUTATIONS */
export type MutationAddRequestForProductArgs = {
  input: RequestForProductInput;
};


/** MUTATIONS */
export type MutationAddSellerReviewArgs = {
  input: SellerReviewInput;
};


/** MUTATIONS */
export type MutationAddShareInformationArgs = {
  input: ShareInformationInput;
};


/** MUTATIONS */
export type MutationAddSubCategoryArgs = {
  description: Scalars['String'];
  name: Scalars['String'];
  parentCategoryId: Scalars['String'];
};


/** MUTATIONS */
export type MutationApproveOrRejectOrderReturnRequestArgs = {
  request: OrderReturnEventRequest;
};


/** MUTATIONS */
export type MutationCancelOrderItemArgs = {
  request?: InputMaybe<CancelOrderItemRequest>;
};


/** MUTATIONS */
export type MutationCancelOrderItemByListingIdArgs = {
  listingId: Scalars['ID'];
};


/** MUTATIONS */
export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
  userId: Scalars['ID'];
};


/** MUTATIONS */
export type MutationCloneListingArgs = {
  listingIds: Array<Scalars['String']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
};


/** MUTATIONS */
export type MutationCreateAddressArgs = {
  request: AddressRequestForCreate;
};


/** MUTATIONS */
export type MutationCreateAddressForGuestBuyerArgs = {
  request: AddressRequestForCreate;
};


/** MUTATIONS */
export type MutationCreateBillingDetailsArgs = {
  request: BillingDetailsRequestForCreate;
};


/** MUTATIONS */
export type MutationCreateBillingDetailsForGuestBuyerArgs = {
  request: BillingDetailsRequestForCreate;
};


/** MUTATIONS */
export type MutationCreateChatArgs = {
  request: ChatRequestForCreate;
};


/** MUTATIONS */
export type MutationCreateChatMessageArgs = {
  request: ChatMessageRequestForCreate;
};


/** MUTATIONS */
export type MutationCreateChatSubscriberArgs = {
  request: ChatSubscriberRequestForCreate;
};


/** MUTATIONS */
export type MutationCreateDeliveryAddressGeoCoordinateArgs = {
  request: DeliveryAddressGeoCoordinateRequestForCreate;
};


/** MUTATIONS */
export type MutationCreateDeliveryAddressToOnlineStoreArgs = {
  request: DeliveryAddressToOnlineStoreRequestForCreate;
};


/** MUTATIONS */
export type MutationCreateNotificationArgs = {
  request: NotificationRequestForCreate;
};


/** MUTATIONS */
export type MutationCreateOptionArgs = {
  option?: InputMaybe<OptionInput>;
};


/** MUTATIONS */
export type MutationCreateOrderFromCartArgs = {
  request: CartInput;
};


/** MUTATIONS */
export type MutationCreatePaymentDetailArgs = {
  request: PaymentDetailRequestForCreate;
};


/** MUTATIONS */
export type MutationCreatePreferenceArgs = {
  request: PreferenceRequestForCreate;
};


/** MUTATIONS */
export type MutationCreateProductArgs = {
  productCreateInput: ProductCreateInput;
};


/** MUTATIONS */
export type MutationCreateProductListingsArgs = {
  input: ProductListingsInput;
};


/** MUTATIONS */
export type MutationCreateRecurringListingsArgs = {
  input: RecurringListingInput;
};


/** MUTATIONS */
export type MutationCreateSellerBillingDetailsArgs = {
  request: SellerBillingDetailsRequestForCreate;
};


/** MUTATIONS */
export type MutationCreateSellerContactArgs = {
  request: SellerContactRequestForCreate;
};


/** MUTATIONS */
export type MutationCreateSellerToOnlineStoreArgs = {
  request: SellerToOnlineStoreRequestForCreate;
};


/** MUTATIONS */
export type MutationCreateServiceOperatorArgs = {
  request: ServiceOperatorProfileForCreate;
};


/** MUTATIONS */
export type MutationCreateShareInformationArgs = {
  request: ShareInformationRequestForCreate;
};


/** MUTATIONS */
export type MutationCreateShippingDetailArgs = {
  request: ShippingDetailRequestForCreate;
};


/** MUTATIONS */
export type MutationCreateStoreArgs = {
  storeInput: StoreCreateInput;
};


/** MUTATIONS */
export type MutationCreateWishListArgs = {
  request: WishListRequestForCreate;
};


/** MUTATIONS */
export type MutationDeleteAddressArgs = {
  addressId: Scalars['ID'];
};


/** MUTATIONS */
export type MutationDeleteAddressForGuestBuyerArgs = {
  addressId: Scalars['ID'];
  guestBuyerId: Scalars['ID'];
};


/** MUTATIONS */
export type MutationDeleteBillingDetailsArgs = {
  billingDetailsId: Scalars['ID'];
};


/** MUTATIONS */
export type MutationDeleteBillingDetailsForGuestBuyerArgs = {
  billingDetailsId: Scalars['ID'];
  guestBuyer?: InputMaybe<Scalars['ID']>;
};


/** MUTATIONS */
export type MutationDeleteBuyerProfileArgs = {
  buyerId: Scalars['ID'];
};


/** MUTATIONS */
export type MutationDeleteChatArgs = {
  chatId: Scalars['ID'];
};


/** MUTATIONS */
export type MutationDeleteChatMessageArgs = {
  chatMessageId: Scalars['ID'];
};


/** MUTATIONS */
export type MutationDeleteChatSubscriberArgs = {
  buyerId: Scalars['ID'];
  chatId: Scalars['ID'];
};


/** MUTATIONS */
export type MutationDeleteDeliveryAddressGeoCoordinateArgs = {
  id: Scalars['ID'];
};


/** MUTATIONS */
export type MutationDeleteDeliveryAddressToOnlineStoreArgs = {
  addressId: Scalars['ID'];
  storeId: Scalars['ID'];
};


/** MUTATIONS */
export type MutationDeleteNotificationArgs = {
  notificationId: Scalars['ID'];
};


/** MUTATIONS */
export type MutationDeleteOptionArgs = {
  optionId: Scalars['String'];
};


/** MUTATIONS */
export type MutationDeletePaymentDetailArgs = {
  paymentDetailId: Scalars['ID'];
};


/** MUTATIONS */
export type MutationDeletePreferenceArgs = {
  preferenceId: Scalars['ID'];
};


/** MUTATIONS */
export type MutationDeleteProductArgs = {
  productId: Scalars['ID'];
};


/** MUTATIONS */
export type MutationDeleteProductFromWishlistArgs = {
  buyerId: Scalars['String'];
  productId: Scalars['String'];
};


/** MUTATIONS */
export type MutationDeleteProductListingArgs = {
  listingId: Scalars['String'];
};


/** MUTATIONS */
export type MutationDeleteSellerBillingDetailsArgs = {
  billingDetailsId: Scalars['ID'];
};


/** MUTATIONS */
export type MutationDeleteSellerContactArgs = {
  contactId: Scalars['ID'];
};


/** MUTATIONS */
export type MutationDeleteSellerProfileArgs = {
  sellerId: Scalars['ID'];
};


/** MUTATIONS */
export type MutationDeleteSellerToOnlineStoreArgs = {
  sellerId: Scalars['ID'];
  storeId: Scalars['ID'];
};


/** MUTATIONS */
export type MutationDeleteShareInformationArgs = {
  shareInformationId: Scalars['ID'];
};


/** MUTATIONS */
export type MutationDeleteShippingDetailArgs = {
  shippingId: Scalars['ID'];
};


/** MUTATIONS */
export type MutationDeleteStoreByIdArgs = {
  storeId: Scalars['String'];
};


/** MUTATIONS */
export type MutationDeleteWishListArgs = {
  wishListId: Scalars['ID'];
};


/** MUTATIONS */
export type MutationDisableProductArgs = {
  productId: Scalars['ID'];
};


/** MUTATIONS */
export type MutationForgotPasswordStep1SendNotificationEmailArgs = {
  email: Scalars['String'];
};


/** MUTATIONS */
export type MutationForgotPasswordStep1SendNotificationSmsArgs = {
  sms: Scalars['String'];
};


/** MUTATIONS */
export type MutationForgotPasswordStep2VerifyTokenEmailArgs = {
  email: Scalars['String'];
  tokenCode?: InputMaybe<Scalars['String']>;
};


/** MUTATIONS */
export type MutationForgotPasswordStep2VerifyTokenSmsArgs = {
  sms: Scalars['String'];
  tokenCode?: InputMaybe<Scalars['String']>;
};


/** MUTATIONS */
export type MutationForgotPasswordStep3ChangeByEmailArgs = {
  actionTokenValue: Scalars['String'];
  confirmPassword: Scalars['String'];
  newPassword: Scalars['String'];
};


/** MUTATIONS */
export type MutationForgotPasswordStep3ChangeBySmsArgs = {
  actionTokenValue: Scalars['String'];
  confirmPassword: Scalars['String'];
  newPassword: Scalars['String'];
};


/** MUTATIONS */
export type MutationGrantGiftPromotionArgs = {
  amount: Scalars['Float'];
  buyerId: Scalars['ID'];
  expiryDate?: InputMaybe<Scalars['Date']>;
};


/** MUTATIONS */
export type MutationIncrementHelpfulCountArgs = {
  reviewId: Scalars['String'];
};


/** MUTATIONS */
export type MutationIncrementSoldQuantityArgs = {
  input: VariantSoldQuantityInput;
};


/** MUTATIONS */
export type MutationMarkOrderItemAsDeliveredArgs = {
  request: OrderItemDeliveredRequest;
};


/** MUTATIONS */
export type MutationMarkOrderReturnAsReceivedArgs = {
  request: OrderReturnReceivedRequest;
};


/** MUTATIONS */
export type MutationRateSellerArgs = {
  buyerId: Scalars['ID'];
  rating: Scalars['Float'];
  sellerId: Scalars['ID'];
};


/** MUTATIONS */
export type MutationReduceOrderAmountFromWalletArgs = {
  amount: Scalars['Float'];
  transactionReference: Scalars['ID'];
};


/** MUTATIONS */
export type MutationReduceSoldQuantityArgs = {
  input: VariantSoldQuantityInput;
};


/** MUTATIONS */
export type MutationRefillSalamiCreditArgs = {
  amount: Scalars['Float'];
  transactionReference: Scalars['ID'];
};


/** MUTATIONS */
export type MutationRegisterBuyerArgs = {
  request: BuyerProfileRequestForCreate;
};


/** MUTATIONS */
export type MutationRegisterGuestBuyerToBuyerArgs = {
  request: BuyerProfileRequest;
};


/** MUTATIONS */
export type MutationRegisterSellerArgs = {
  request: SellerProfileRequestForCreate;
};


/** MUTATIONS */
export type MutationRejectProductArgs = {
  productId: Scalars['ID'];
};


/** MUTATIONS */
export type MutationRejectSellerValidationArgs = {
  rejectNote?: InputMaybe<Scalars['String']>;
  rejectReason: RegistrationRejectedReason;
  sellerId: Scalars['ID'];
};


/** MUTATIONS */
export type MutationResendVerificationCodeInEmailArgs = {
  emailAddress: Scalars['String'];
};


/** MUTATIONS */
export type MutationResendVerificationCodeInSmsArgs = {
  phoneNumber: Scalars['String'];
};


/** MUTATIONS */
export type MutationSaveListingCollectionPointArgs = {
  input: CollectionPointInput;
};


/** MUTATIONS */
export type MutationSaveListingCourierDeliveryDetailsArgs = {
  input: CourierDeliveryDetailsInput;
};


/** MUTATIONS */
export type MutationSaveListingSellerDirectDeliveryArgs = {
  input: SellerDirectDeliveryInput;
};


/** MUTATIONS */
export type MutationSaveListingSellerLocationArgs = {
  input: SellerLocationInput;
};


/** MUTATIONS */
export type MutationSaveListingVariantsArgs = {
  input: ProductListingVariantInput;
};


/** MUTATIONS */
export type MutationSavePreferredCategoriesArgs = {
  buyerId: Scalars['ID'];
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


/** MUTATIONS */
export type MutationSellerBillingDetailsForSellerArgs = {
  sellerId: Scalars['ID'];
};


/** MUTATIONS */
export type MutationSellerContactForSellerArgs = {
  sellerId: Scalars['ID'];
};


/** MUTATIONS */
export type MutationSendOtpCodeForBuyerArgs = {
  buyerId: Scalars['ID'];
};


/** MUTATIONS */
export type MutationSendVerifyEmailArgs = {
  userId: Scalars['ID'];
};


/** MUTATIONS */
export type MutationSendVerifySmsArgs = {
  userId: Scalars['ID'];
};


/** MUTATIONS */
export type MutationSetCountryForUserArgs = {
  countryId: Scalars['ID'];
  userId: Scalars['ID'];
};


/** MUTATIONS */
export type MutationSetEscrowAccountToSellerArgs = {
  escrowAccountId: Scalars['ID'];
  sellerId?: InputMaybe<Scalars['ID']>;
};


/** MUTATIONS */
export type MutationSetSupportedLanguageForUserArgs = {
  supportedLanguageId: Scalars['ID'];
  userId: Scalars['ID'];
};


/** MUTATIONS */
export type MutationSetWalletToBuyerArgs = {
  buyerId: Scalars['ID'];
  walletId: Scalars['ID'];
};


/** MUTATIONS */
export type MutationSubmitOrderReturnRequestArgs = {
  request: OrderReturnRequest;
};


/** MUTATIONS */
export type MutationUpdateAddressArgs = {
  request: AddressRequest;
};


/** MUTATIONS */
export type MutationUpdateAddressForGuestBuyerArgs = {
  request: AddressRequest;
};


/** MUTATIONS */
export type MutationUpdateBillingDetailsArgs = {
  request: BillingDetailsRequest;
};


/** MUTATIONS */
export type MutationUpdateBillingDetailsForGuestBuyerArgs = {
  request: BillingDetailsRequest;
};


/** MUTATIONS */
export type MutationUpdateBuyerProfileArgs = {
  request: BuyerProfileRequest;
};


/** MUTATIONS */
export type MutationUpdateCategoryArgs = {
  categoryId: Scalars['String'];
  description: Scalars['String'];
  name: Scalars['String'];
};


/** MUTATIONS */
export type MutationUpdateChatArgs = {
  request: ChatRequest;
};


/** MUTATIONS */
export type MutationUpdateChatMessageArgs = {
  request: ChatMessageRequest;
};


/** MUTATIONS */
export type MutationUpdateChatSubscriberArgs = {
  request: ChatSubscriberRequest;
};


/** MUTATIONS */
export type MutationUpdateDeliveryAddressGeoCoordinateArgs = {
  request: DeliveryAddressGeoCoordinateRequest;
};


/** MUTATIONS */
export type MutationUpdateDeliveryAddressToOnlineStoreArgs = {
  request: DeliveryAddressToOnlineStoreRequest;
};


/** MUTATIONS */
export type MutationUpdateListingStatusArgs = {
  input: ListingStatusInput;
};


/** MUTATIONS */
export type MutationUpdateNotificationArgs = {
  request: NotificationRequest;
};


/** MUTATIONS */
export type MutationUpdatePaymentDetailArgs = {
  request: PaymentDetailRequest;
};


/** MUTATIONS */
export type MutationUpdatePreferenceArgs = {
  request: PreferenceRequest;
};


/** MUTATIONS */
export type MutationUpdateProductArgs = {
  input: ProductUpdateInput;
};


/** MUTATIONS */
export type MutationUpdateProductListingArgs = {
  input: ProductListingUpdateInput;
};


/** MUTATIONS */
export type MutationUpdateProductPriceAndQuantityArgs = {
  input: ProductPriceAndQuantityUpdateInput;
};


/** MUTATIONS */
export type MutationUpdateSellerBillingDetailsArgs = {
  request: SellerBillingDetailsRequest;
};


/** MUTATIONS */
export type MutationUpdateSellerContactArgs = {
  request: SellerContactRequest;
};


/** MUTATIONS */
export type MutationUpdateSellerProfileArgs = {
  request: SellerProfileRequest;
};


/** MUTATIONS */
export type MutationUpdateSellerToOnlineStoreArgs = {
  request: SellerToOnlineStoreRequest;
};


/** MUTATIONS */
export type MutationUpdateShareInformationArgs = {
  request: ShareInformationRequest;
};


/** MUTATIONS */
export type MutationUpdateShippingDetailArgs = {
  request: ShippingDetailRequest;
};


/** MUTATIONS */
export type MutationUpdateStoreArgs = {
  storeId: Scalars['String'];
  storeInput: StoreInput;
};


/** MUTATIONS */
export type MutationUpdateWishListArgs = {
  request: WishListRequest;
};


/** MUTATIONS */
export type MutationUseRefundSalamiCreditArgs = {
  amount: Scalars['Float'];
  buyerId: Scalars['ID'];
};


/** MUTATIONS */
export type MutationValidateCodeArgs = {
  request: ValidateCodeRequest;
};


/** MUTATIONS */
export type MutationValidateOtpCodeForBuyerArgs = {
  request: ValidateCodeRequest;
};

export type NotificationRequest = {
  buyerId: Scalars['ID'];
  dateTime?: InputMaybe<Scalars['DateTime']>;
  notificationId: Scalars['ID'];
  notificationStatus?: InputMaybe<NotificationStatus>;
  text?: InputMaybe<Scalars['String']>;
};

export type NotificationRequestForCreate = {
  buyerId: Scalars['ID'];
  dateTime?: InputMaybe<Scalars['DateTime']>;
  notificationStatus?: InputMaybe<NotificationStatus>;
  text?: InputMaybe<Scalars['String']>;
};

export type NotificationResponse = {
  __typename?: 'NotificationResponse';
  buyerId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  dateTime?: Maybe<Scalars['DateTime']>;
  notificationId?: Maybe<Scalars['ID']>;
  notificationStatus?: Maybe<NotificationStatus>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum NotificationStatus {
  Read = 'READ',
  Undefined = 'UNDEFINED',
  Unread = 'UNREAD'
}

export type OneClickBuyResponse = {
  __typename?: 'OneClickBuyResponse';
  defaultAddress?: Maybe<AddressResponse>;
  defaultPaymentMethod?: Maybe<PaymentDetailResponse>;
};

export enum OnlineStoreType {
  AnnouncementOnlineStore = 'ANNOUNCEMENT_ONLINE_STORE',
  MainOnlineStore = 'MAIN_ONLINE_STORE',
  Undefined = 'UNDEFINED'
}

export type Option = {
  __typename?: 'Option';
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  optionId: Scalars['ID'];
  values?: Maybe<Array<Maybe<OptionValue>>>;
};

export type OptionInput = {
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  values: Array<Scalars['String']>;
};

export type OptionValue = {
  __typename?: 'OptionValue';
  value: Scalars['String'];
  valueId: Scalars['ID'];
};

export type OptionValueInput = {
  optionId: Scalars['ID'];
  optionValueId: Scalars['ID'];
};

export enum OrderDateFilterType {
  Custom = 'CUSTOM',
  Last_7Days = 'LAST_7_DAYS',
  Last_30Days = 'LAST_30_DAYS',
  LastYear = 'LAST_YEAR'
}

export type OrderDateParameter = {
  endDate?: InputMaybe<Scalars['Date']>;
  orderDateFilterType: OrderDateFilterType;
  startDate?: InputMaybe<Scalars['Date']>;
};

export type OrderItemDeliveredRequest = {
  buyerId: Scalars['String'];
  orderItemId: Scalars['String'];
};

export type OrderItemDetailResponse = {
  __typename?: 'OrderItemDetailResponse';
  /** returned only for query: getOrderItemDetails */
  buyer?: Maybe<BuyerDetailsResponse>;
  buyerId: Scalars['ID'];
  collectionPoint?: Maybe<CollectionPointPickupResponse>;
  deliveryAddress?: Maybe<AddressResponse>;
  deliveryDate?: Maybe<Scalars['Date']>;
  deliveryOption: DeliveryOption;
  itemDiscount: Scalars['Float'];
  itemPrice: Scalars['Float'];
  latestEventStatus: OrderItemHistoryEventType;
  listingId: Scalars['ID'];
  listingStatus: ProductListingStatus;
  longName?: Maybe<Scalars['String']>;
  mainImagePath?: Maybe<Scalars['String']>;
  orderDatetime: Scalars['DateTime'];
  orderDiscount: Scalars['Float'];
  orderId: Scalars['ID'];
  orderItemId: Scalars['ID'];
  orderNumber: Scalars['String'];
  orderReturnId?: Maybe<Scalars['ID']>;
  orderServiceFees: Scalars['Float'];
  orderShippingFees: Scalars['Float'];
  orderSubTotal: Scalars['Float'];
  orderTotal: Scalars['Float'];
  paymentStatus?: Maybe<OrderItemHistoryEventType>;
  pickupAddress?: Maybe<AddressResponse>;
  priceId: Scalars['ID'];
  productId: Scalars['ID'];
  quantity: Scalars['Int'];
  retailPrice: Scalars['Float'];
  sellerDirectDelivery?: Maybe<SellerDirectDeliveryResponse>;
  sellerId: Scalars['ID'];
  sellerLocation?: Maybe<SellerLocationPickupResponse>;
  sellerSku?: Maybe<Scalars['String']>;
  shippingDate?: Maybe<Scalars['Date']>;
  shippingDetails?: Maybe<ShippingDetailsResponse>;
  shortName: Scalars['String'];
  storeId: Scalars['ID'];
  totalSavings: Scalars['Float'];
  variantId: Scalars['ID'];
  vendorSku?: Maybe<Scalars['String']>;
  wholeSalePrice: Scalars['Float'];
};

export enum OrderItemHistoryEventType {
  BuyerReturned = 'BUYER_RETURNED',
  CanceledByBuyer = 'CANCELED_BY_BUYER',
  CanceledBySeller = 'CANCELED_BY_SELLER',
  Collected = 'COLLECTED',
  CourierDelivery = 'COURIER_DELIVERY',
  Delivered = 'DELIVERED',
  Paid = 'PAID',
  RefundComplete = 'REFUND_COMPLETE',
  RefundRequest = 'REFUND_REQUEST',
  ReplacementComplete = 'REPLACEMENT_COMPLETE',
  ReplacementRequest = 'REPLACEMENT_REQUEST',
  SellerCollectionPoint = 'SELLER_COLLECTION_POINT',
  SellerDelivery = 'SELLER_DELIVERY',
  WaitingForPayment = 'WAITING_FOR_PAYMENT',
  WaitingForShipment = 'WAITING_FOR_SHIPMENT'
}

export type OrderItemResponse = {
  __typename?: 'OrderItemResponse';
  itemPrice?: Maybe<Scalars['Float']>;
  listingId?: Maybe<Scalars['ID']>;
  orderItemId?: Maybe<Scalars['ID']>;
  quantity?: Maybe<Scalars['Int']>;
  sellerId?: Maybe<Scalars['ID']>;
  variantId?: Maybe<Scalars['ID']>;
};

export type OrderPaymentDetailsResponse = {
  __typename?: 'OrderPaymentDetailsResponse';
  balanceToPay?: Maybe<Scalars['Float']>;
  usedGiftAmount?: Maybe<Scalars['Float']>;
  usedWalletAmount?: Maybe<Scalars['Float']>;
};

/** TYPES */
export type OrderResponse = {
  __typename?: 'OrderResponse';
  buyerId?: Maybe<Scalars['ID']>;
  discount?: Maybe<Scalars['Float']>;
  orderId?: Maybe<Scalars['ID']>;
  orderItems?: Maybe<Array<Maybe<OrderItemResponse>>>;
  orderNumber?: Maybe<Scalars['String']>;
  orderTotal?: Maybe<Scalars['Float']>;
  paymentDetails?: Maybe<OrderPaymentDetailsResponse>;
  serviceFees?: Maybe<Scalars['Float']>;
  shippingFees?: Maybe<Scalars['Float']>;
  subTotal?: Maybe<Scalars['Float']>;
  taxes?: Maybe<Scalars['Float']>;
  totalSavings?: Maybe<Scalars['Float']>;
};

export type OrderReturnEventRequest = {
  event?: InputMaybe<ReturnEventType>;
  notes?: InputMaybe<Scalars['String']>;
  orderReturnId: Scalars['ID'];
};

export type OrderReturnEventResponse = {
  __typename?: 'OrderReturnEventResponse';
  eventDateTime: Scalars['DateTime'];
  eventType: ReturnEventType;
  notes?: Maybe<Scalars['String']>;
  returnId: Scalars['ID'];
};

export enum OrderReturnFilterType {
  None = 'NONE',
  ReturnStatus = 'RETURN_STATUS'
}

export type OrderReturnOptions = {
  filterType: OrderReturnFilterType;
  pageOption: PageOption;
  returnStatus?: InputMaybe<ReturnEventType>;
};

/** INPUTS */
export type OrderReturnReceivedRequest = {
  buyerId: Scalars['ID'];
  orderReturnId: Scalars['ID'];
};

export type OrderReturnRequest = {
  buyerId: Scalars['ID'];
  message?: InputMaybe<Scalars['String']>;
  orderItemId: Scalars['ID'];
  quantity: Scalars['Int'];
  returnOption: ReturnOption;
  returnReasonPolicyId?: InputMaybe<Scalars['ID']>;
};

export type OrderReturnResponse = {
  __typename?: 'OrderReturnResponse';
  collectionPoint?: Maybe<CollectionPointPickupResponse>;
  deadline?: Maybe<Scalars['Date']>;
  deliveryOption: DeliveryOption;
  latestEventStatus: ReturnEventType;
  orderReturnId: Scalars['ID'];
  qrCodeAsBase64?: Maybe<Scalars['String']>;
  returnAddress?: Maybe<AddressResponse>;
  returnLabel?: Maybe<Scalars['String']>;
  returnOption: ReturnOption;
  sellerLocation?: Maybe<SellerLocationPickupResponse>;
};

export type OrderReturnStatusResponse = {
  __typename?: 'OrderReturnStatusResponse';
  deadline?: Maybe<Scalars['Date']>;
  events?: Maybe<Array<Maybe<OrderReturnEventResponse>>>;
  orderReturnId: Scalars['ID'];
};

export type PageOption = {
  pageNumber: Scalars['Int'];
  pageSize: Scalars['Int'];
};

export type PaymentDetailRequest = {
  buyerId: Scalars['ID'];
  isDefaultPaymentType?: InputMaybe<Scalars['Boolean']>;
  paymentDetailId: Scalars['ID'];
  paymentType?: InputMaybe<PaymentType>;
};

export type PaymentDetailRequestForCreate = {
  buyerId: Scalars['ID'];
  isDefaultPaymentType?: InputMaybe<Scalars['Boolean']>;
  paymentType?: InputMaybe<PaymentType>;
};

export type PaymentDetailResponse = {
  __typename?: 'PaymentDetailResponse';
  buyerId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  isDefaultPaymentType?: Maybe<Scalars['Boolean']>;
  paymentDetailId?: Maybe<Scalars['ID']>;
  paymentType?: Maybe<PaymentType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum PaymentType {
  CashAtDelivery = 'CASH_AT_DELIVERY',
  CreditCard = 'CREDIT_CARD',
  DebitCard = 'DEBIT_CARD',
  Escrow = 'ESCROW',
  Paypal = 'PAYPAL',
  SalamiCredit = 'SALAMI_CREDIT',
  Undefined = 'UNDEFINED',
  WireTransfer = 'WIRE_TRANSFER'
}

export type PointRequest = {
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type PointRequestForCreate = {
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type PointResponse = {
  __typename?: 'PointResponse';
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
};

export type PolicyNameView = {
  __typename?: 'PolicyNameView';
  name?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type PreferenceRequest = {
  preferenceId: Scalars['ID'];
  preferenceType?: InputMaybe<PreferenceType>;
  profileId: Scalars['ID'];
  referenceId: Scalars['ID'];
};

export type PreferenceRequestForCreate = {
  preferenceType?: InputMaybe<PreferenceType>;
  profileId: Scalars['ID'];
  referenceId: Scalars['ID'];
};

export type PreferenceResponse = {
  __typename?: 'PreferenceResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  preferenceId?: Maybe<Scalars['ID']>;
  preferenceType?: Maybe<PreferenceType>;
  profileId?: Maybe<Scalars['ID']>;
  referenceId?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum PreferenceType {
  Category = 'CATEGORY',
  Product = 'PRODUCT',
  Seller = 'SELLER',
  Undefined = 'UNDEFINED'
}

export type Price = {
  __typename?: 'Price';
  currency?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  retailPrice?: Maybe<Scalars['Float']>;
  salePercentage?: Maybe<Scalars['Float']>;
  taxPercentage?: Maybe<Scalars['Float']>;
  totalQuantityPrice?: Maybe<Scalars['Float']>;
  wholeSalePrice?: Maybe<Scalars['Float']>;
};

/** TYPES */
export type Product = {
  __typename?: 'Product';
  brand?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  highlightBullets?: Maybe<Array<Maybe<Scalars['String']>>>;
  id: Scalars['ID'];
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  longName?: Maybe<Scalars['String']>;
  productType?: Maybe<ProductType>;
  shortName: Scalars['String'];
  vendorName?: Maybe<Scalars['String']>;
};

export type ProductCategoryView = {
  __typename?: 'ProductCategoryView';
  categoryId?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['ID']>;
};

export type ProductCreateInput = {
  productDetailsInput: ProductDetailsInput;
  productReturnPolicyInput: ProductReturnPolicyInput;
  productStocksAndPricingInput: ProductStocksAndPricingInput;
};

export type ProductDetailsInput = {
  brand?: InputMaybe<Scalars['String']>;
  categoryId: Scalars['String'];
  deletedImageIds?: InputMaybe<Array<Scalars['ID']>>;
  description?: InputMaybe<Scalars['String']>;
  highlightBullets?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  keywords?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  longName: Scalars['String'];
  productImages?: InputMaybe<Array<Scalars['FileUpload']>>;
  productType?: InputMaybe<Scalars['String']>;
  shortName: Scalars['String'];
  vendor?: InputMaybe<Scalars['String']>;
};

export type ProductListing = {
  __typename?: 'ProductListing';
  announcement?: Maybe<Announcement>;
  closedDate?: Maybe<Scalars['Date']>;
  deliveryDate?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  minSoldQuantity: Scalars['Int'];
  openUntil: Scalars['Date'];
  product: Product;
  productListingStatus: ProductListingStatus;
  startDate: Scalars['DateTime'];
  store: Store;
};

export enum ProductListingStatus {
  Accepted = 'ACCEPTED',
  Active = 'ACTIVE',
  Closed = 'CLOSED',
  Draft = 'DRAFT',
  Hidden = 'HIDDEN',
  Open = 'OPEN',
  Rejected = 'REJECTED',
  Retired = 'RETIRED',
  Successful = 'SUCCESSFUL',
  Suspended = 'SUSPENDED',
  Undefined = 'UNDEFINED'
}

/** ENUMS */
export enum ProductListingType {
  AnnouncementProductListing = 'ANNOUNCEMENT_PRODUCT_LISTING',
  MainProductListing = 'MAIN_PRODUCT_LISTING',
  RecurringProductListing = 'RECURRING_PRODUCT_LISTING',
  Undefined = 'UNDEFINED'
}

export type ProductListingUpdateInput = {
  listingId: Scalars['String'];
  minSoldQuantity?: InputMaybe<Scalars['Int']>;
  openUntil?: InputMaybe<Scalars['Date']>;
  productId: Scalars['String'];
  startDate?: InputMaybe<Scalars['DateTime']>;
  storeId?: InputMaybe<Scalars['String']>;
};

export type ProductListingVariant = {
  __typename?: 'ProductListingVariant';
  itemsAvailable?: Maybe<Scalars['Int']>;
  itemsSold?: Maybe<Scalars['Int']>;
  price?: Maybe<Price>;
  productId: Scalars['ID'];
  productListing: ProductListing;
  variantId?: Maybe<Scalars['ID']>;
};

export type ProductListingVariantInput = {
  listingId: Scalars['String'];
  variants: Array<ListingVariantInput>;
};

export type ProductListingView = {
  __typename?: 'ProductListingView';
  amountSaved?: Maybe<Scalars['Float']>;
  announcementDeliveryDate?: Maybe<Scalars['Date']>;
  announcementId?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Maybe<ProductCategoryView>>>;
  closedDate?: Maybe<Scalars['String']>;
  courierName?: Maybe<Scalars['String']>;
  courierShippingFee?: Maybe<Scalars['Float']>;
  courierShippingFeeTax?: Maybe<Scalars['Float']>;
  createOn?: Maybe<Scalars['String']>;
  deliveryOption?: Maybe<DeliveryOption>;
  description?: Maybe<Scalars['String']>;
  highlightBullets?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<Images>>>;
  itemSold?: Maybe<Scalars['Int']>;
  listingId?: Maybe<Scalars['String']>;
  listingVariants?: Maybe<Array<Maybe<ListingVariantView>>>;
  longName?: Maybe<Scalars['String']>;
  minSoldQuantity?: Maybe<Scalars['Int']>;
  noOfItemsInStock?: Maybe<Scalars['Int']>;
  noOfOrderedItems?: Maybe<Scalars['Int']>;
  numberOfItemsAvailable?: Maybe<Scalars['Int']>;
  numberOfReviews?: Maybe<Scalars['Int']>;
  numberOfStars?: Maybe<Scalars['Float']>;
  openUntil?: Maybe<Scalars['String']>;
  percentOff?: Maybe<Scalars['Int']>;
  photo?: Maybe<Scalars['String']>;
  photoUrls?: Maybe<Array<Maybe<Scalars['String']>>>;
  pickupAddress?: Maybe<AddressView>;
  productId?: Maybe<Scalars['String']>;
  productListingType?: Maybe<Scalars['String']>;
  progressBarValue?: Maybe<Scalars['Int']>;
  qtyAvailable?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
  ratingDetail?: Maybe<RatingDetail>;
  relatedProducts?: Maybe<Scalars['String']>;
  retailPrice?: Maybe<Scalars['Float']>;
  returnAddress?: Maybe<AddressView>;
  returnAddressId?: Maybe<Scalars['String']>;
  returnPolicies?: Maybe<Array<Maybe<ProductReturnPolicyView>>>;
  reviews?: Maybe<Array<Maybe<ReviewView>>>;
  salePercentage?: Maybe<Scalars['Float']>;
  seller?: Maybe<SellerView>;
  sellerId?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  storeId?: Maybe<Scalars['String']>;
  storeName?: Maybe<Scalars['String']>;
  technicalDetails?: Maybe<Scalars['String']>;
  wholeSalePrice?: Maybe<Scalars['Float']>;
};

export type ProductListingsInput = {
  courierDeliveryDetails?: InputMaybe<CourierDeliveryDetailsInput>;
  deliveryOption: DeliveryOption;
  minSoldQuantity: Scalars['Int'];
  openUntil: Scalars['Date'];
  productId: Scalars['String'];
  productListingType: ProductListingType;
  sellerLocation?: InputMaybe<SellerLocationInput>;
  startDate: Scalars['DateTime'];
  stores: Array<ListingStoreInput>;
  variants: Array<InputMaybe<ListingVariantInput>>;
};

export type ProductPageable = {
  page?: InputMaybe<Scalars['Int']>;
  searchText?: InputMaybe<Scalars['String']>;
  sellerId?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ProductSort>;
  sortDirection?: InputMaybe<SortDirection>;
};

export type ProductPriceAndQuantityUpdateInput = {
  itemsInStock: Scalars['Int'];
  priceId: Scalars['ID'];
  productId: Scalars['ID'];
  retailPrice: Scalars['Float'];
  variants?: InputMaybe<Array<VariantPriceAndQuantityUpdateInput>>;
  wholeSalePrice: Scalars['Float'];
};

export type ProductResponse = {
  __typename?: 'ProductResponse';
  content: Array<SellerProductDetailView>;
  pageNo: Scalars['Int'];
  pageSize: Scalars['Int'];
  totalElements: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type ProductReturnPolicy = {
  __typename?: 'ProductReturnPolicy';
  name: Scalars['String'];
  returnPolicyId: Scalars['ID'];
  value: Scalars['String'];
};

export type ProductReturnPolicyInput = {
  addressInput?: InputMaybe<AddressInput>;
  returnLabelImage?: InputMaybe<Scalars['FileUpload']>;
  returnPolicyInputs: Array<InputMaybe<ReturnPolicyInput>>;
};

export type ProductReturnPolicyView = {
  __typename?: 'ProductReturnPolicyView';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['ID']>;
  value?: Maybe<Scalars['String']>;
};

export type ProductReviewInput = {
  description?: InputMaybe<Scalars['String']>;
  productId: Scalars['ID'];
  ratingVote: Scalars['Int'];
  title: Scalars['String'];
};

export enum ProductSort {
  CreatedDate = 'CREATED_DATE',
  Name = 'NAME'
}

export enum ProductStatus {
  Active = 'ACTIVE',
  Closed = 'CLOSED',
  Deleted = 'DELETED',
  Draft = 'DRAFT',
  Hidden = 'HIDDEN',
  Retired = 'RETIRED',
  Suspended = 'SUSPENDED',
  Undefined = 'UNDEFINED'
}

export type ProductStocksAndPricingInput = {
  currency: Scalars['String'];
  itemsInStock: Scalars['Int'];
  profit?: InputMaybe<Scalars['Float']>;
  retailPrice: Scalars['Float'];
  sellerSku?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['String']>;
  sizeUnit?: InputMaybe<Scalars['String']>;
  variantInputs?: InputMaybe<Array<InputMaybe<ProductVariantInput>>>;
  weight?: InputMaybe<Scalars['Float']>;
  weightUnit?: InputMaybe<Scalars['String']>;
  wholeSalePrice: Scalars['Float'];
};

export enum ProductType {
  DontUseMe_1 = 'DONT_USE_ME_1',
  DontUseMe_2 = 'DONT_USE_ME_2',
  Undefined = 'UNDEFINED'
}

export type ProductUpdateInput = {
  productDetailsInput: ProductDetailsInput;
  productId: Scalars['ID'];
  productReturnPolicyInput: ProductReturnPolicyInput;
  productStocksAndPricingInput: ProductStocksAndPricingInput;
};

export enum ProductValidationStatus {
  Accepted = 'ACCEPTED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type ProductVariantInput = {
  defaultVariant: Scalars['Boolean'];
  itemsInStock: Scalars['Int'];
  options?: InputMaybe<Array<InputMaybe<OptionValueInput>>>;
  retailPrice: Scalars['Float'];
  sellerSku?: InputMaybe<Scalars['String']>;
  variantId?: InputMaybe<Scalars['ID']>;
  variantImage?: InputMaybe<Scalars['FileUpload']>;
  wholeSalePrice: Scalars['Float'];
};

/** QUERIES */
export type Query = {
  __typename?: 'Query';
  addressById?: Maybe<AddressResponse>;
  addressByIdForGuestBuyer?: Maybe<AddressResponse>;
  addresses?: Maybe<Array<Maybe<AddressResponse>>>;
  billingDetails?: Maybe<Array<Maybe<BillingDetailsResponse>>>;
  billingDetailsByBuyerId?: Maybe<Array<Maybe<BillingDetailsResponse>>>;
  billingDetailsByGuestBuyerId?: Maybe<Array<Maybe<BillingDetailsResponse>>>;
  billingDetailsById?: Maybe<BillingDetailsResponse>;
  buyerHasVerifiedPhoneNumber?: Maybe<Scalars['Boolean']>;
  buyerProfile?: Maybe<BuyerProfileResponse>;
  buyerProfileByUserId?: Maybe<BuyerProfileResponse>;
  buyerProfiles?: Maybe<Array<Maybe<BuyerProfileResponse>>>;
  chatById?: Maybe<ChatResponse>;
  chatMessageById?: Maybe<ChatMessageResponse>;
  chatMessages?: Maybe<Array<Maybe<ChatMessageResponse>>>;
  chatSubscriberById?: Maybe<ChatSubscriberResponse>;
  chatSubscribers?: Maybe<Array<Maybe<ChatSubscriberResponse>>>;
  chats?: Maybe<Array<Maybe<ChatResponse>>>;
  coordinatesForAddressRequest?: Maybe<CoordinateResponse>;
  coordinatesForAddressRequestFromAddressId?: Maybe<CoordinateResponse>;
  defaultPaymentDetailByBuyerId?: Maybe<PaymentDetailResponse>;
  deliveryAddressForBuyer?: Maybe<AddressResponse>;
  deliveryAddressForGuestBuyer?: Maybe<AddressResponse>;
  deliveryAddressGeoCoordinateById?: Maybe<DeliveryAddressGeoCoordinateResponse>;
  deliveryAddressGeoCoordinates?: Maybe<Array<Maybe<DeliveryAddressGeoCoordinateResponse>>>;
  deliveryAddressToOnlineStoreById?: Maybe<DeliveryAddressToOnlineStoreResponse>;
  deliveryAddressToOnlineStores?: Maybe<Array<Maybe<DeliveryAddressToOnlineStoreResponse>>>;
  deliveryAddressesByOnlineStores?: Maybe<DeliveryAddressesByOnlineStoresResponse>;
  findReviews?: Maybe<Array<Maybe<ReviewResponse>>>;
  /** categories */
  getAllCategories: Array<Maybe<CategoryView>>;
  getBuyerAddressByType?: Maybe<Array<Maybe<AddressResponse>>>;
  getBuyerAddressesById?: Maybe<Array<Maybe<AddressResponse>>>;
  getBuyerDefaultAddressByBuyerId?: Maybe<AddressResponse>;
  getBuyerSalamiWalletBalance?: Maybe<SalamiWalletResponse>;
  getCountries?: Maybe<Array<Maybe<CountryResponse>>>;
  getGuestBuyerAddressByType?: Maybe<Array<Maybe<AddressResponse>>>;
  getGuestBuyerAddressesById?: Maybe<Array<Maybe<AddressResponse>>>;
  getGuestBuyerDefaultAddressByBuyerId?: Maybe<AddressResponse>;
  getHowToVideoLink?: Maybe<GenericResponse>;
  getListings: BuyerListingResponse;
  getMicroHubInformation?: Maybe<Array<Maybe<MicroHubResponse>>>;
  /** options */
  getOptionReference: Array<Option>;
  getOrderItemDetails: OrderItemDetailResponse;
  getOrderReturn: OrderReturnResponse;
  getOrderReturnStatus: OrderReturnStatusResponse;
  /** return policies */
  getPolicyNames: Array<Maybe<PolicyNameView>>;
  getPreferredCategories: Array<Maybe<CategoryView>>;
  getProductByProductId: SellerProductDetailView;
  getProductReviewSummaryResponse?: Maybe<ReviewSummaryResponse>;
  getProducts: ProductResponse;
  getRefundSalamiCredit?: Maybe<Scalars['Float']>;
  getRelatedProducts?: Maybe<Array<Maybe<SellerProductDetailView>>>;
  getSellerAddressByType?: Maybe<Array<Maybe<AddressResponse>>>;
  getSellerAddressesById?: Maybe<Array<Maybe<AddressResponse>>>;
  getSellerDefaultAddressBySellerId?: Maybe<AddressResponse>;
  getSellerDocumentKeys?: Maybe<Array<Maybe<SellerDocumentResponse>>>;
  getSellerListing: SellerListingResponse;
  getSellerListingDetails: SellerListingDetailView;
  getSellerListingForAcceptOrReject: SellerListingResponse;
  getSellerListingGroupByProduct: SellerListingGroupResponse;
  getSellerListingOrders: SellerListingOrderResponse;
  getSellerOrderReturns: SellerOrderReturnResponse;
  getSellerOrders: SellerOrderResponse;
  getSellerReviewSummaryResponse?: Maybe<ReviewSummaryResponse>;
  getShareInformationByProductId?: Maybe<Array<Maybe<ShareInformation>>>;
  getStatesByCountryId?: Maybe<Array<Maybe<CountryStateResponse>>>;
  getStoreByName: Store;
  /** stores */
  getStores: StoreResponse;
  getStoresByCityOrProvince: StoreResponse;
  getSupportedLanguages?: Maybe<Array<Maybe<SupportedLanguageResponse>>>;
  guestBuyerProfile?: Maybe<BuyerProfileResponse>;
  isListingAvailable?: Maybe<Array<Maybe<IsListingAvailableResponse>>>;
  isProductInWishlist: Scalars['Boolean'];
  notificationById?: Maybe<NotificationResponse>;
  notifications?: Maybe<Array<Maybe<NotificationResponse>>>;
  oneClickBuy?: Maybe<OneClickBuyResponse>;
  onlineStoreByGeoCoordinates: StoreResponse;
  onlineStoresForSeller?: Maybe<Array<Maybe<SellerToOnlineStoreResponse>>>;
  paymentDetailById?: Maybe<PaymentDetailResponse>;
  paymentDetails?: Maybe<Array<Maybe<PaymentDetailResponse>>>;
  paymentDetailsByBuyerId?: Maybe<Array<Maybe<PaymentDetailResponse>>>;
  preferenceById?: Maybe<PreferenceResponse>;
  preferences?: Maybe<Array<Maybe<PreferenceResponse>>>;
  searchBuyerOrders: BuyerOrderResponse;
  searchStoreByName: StoreResponse;
  sellerBillingDetails?: Maybe<Array<Maybe<SellerBillingDetailsResponse>>>;
  sellerBillingDetailsById?: Maybe<SellerBillingDetailsResponse>;
  sellerBillingDetailsForSeller?: Maybe<SellerBillingDetailsResponse>;
  sellerContactById?: Maybe<SellerContactResponse>;
  sellerContacts?: Maybe<Array<Maybe<SellerContactResponse>>>;
  sellerContactsBySeller?: Maybe<Array<Maybe<SellerContactResponse>>>;
  sellerProfile?: Maybe<SellerProfileResponse>;
  sellerProfileByUserId?: Maybe<SellerProfileResponse>;
  sellerProfiles?: Maybe<Array<Maybe<SellerProfileResponse>>>;
  sellerToOnlineStoreById?: Maybe<SellerToOnlineStoreResponse>;
  sellerToOnlineStores?: Maybe<Array<Maybe<SellerToOnlineStoreResponse>>>;
  serviceOperatorProfileByUserId?: Maybe<ServiceOperatorResponse>;
  shareInformationById?: Maybe<ShareInformationResponse>;
  shareInformations?: Maybe<Array<Maybe<ShareInformationResponse>>>;
  shippingDetailById?: Maybe<ShippingDetailResponse>;
  shippingDetails?: Maybe<Array<Maybe<ShippingDetailResponse>>>;
  trackOrderItem: TrackOrderItemResponse;
  userHasVerifiedEmail?: Maybe<Scalars['Boolean']>;
  wishListById?: Maybe<WishListResponse>;
  wishLists?: Maybe<Array<Maybe<WishListResponse>>>;
};


/** QUERIES */
export type QueryAddressByIdArgs = {
  addressId: Scalars['ID'];
};


/** QUERIES */
export type QueryAddressByIdForGuestBuyerArgs = {
  addressId: Scalars['ID'];
  guestBuyerId: Scalars['ID'];
};


/** QUERIES */
export type QueryBillingDetailsByBuyerIdArgs = {
  buyerId: Scalars['ID'];
};


/** QUERIES */
export type QueryBillingDetailsByGuestBuyerIdArgs = {
  guestBuyerId: Scalars['ID'];
};


/** QUERIES */
export type QueryBillingDetailsByIdArgs = {
  billingDetailsId: Scalars['ID'];
};


/** QUERIES */
export type QueryBuyerHasVerifiedPhoneNumberArgs = {
  userId: Scalars['ID'];
};


/** QUERIES */
export type QueryBuyerProfileArgs = {
  buyerId: Scalars['ID'];
};


/** QUERIES */
export type QueryBuyerProfileByUserIdArgs = {
  userProfileId: Scalars['ID'];
};


/** QUERIES */
export type QueryChatByIdArgs = {
  chatId: Scalars['ID'];
};


/** QUERIES */
export type QueryChatMessageByIdArgs = {
  chatMessageId: Scalars['ID'];
};


/** QUERIES */
export type QueryChatSubscriberByIdArgs = {
  buyerId: Scalars['ID'];
  chatId: Scalars['ID'];
};


/** QUERIES */
export type QueryCoordinatesForAddressRequestArgs = {
  address: AddressRequestToGetCoordinates;
};


/** QUERIES */
export type QueryCoordinatesForAddressRequestFromAddressIdArgs = {
  addressId: Scalars['ID'];
};


/** QUERIES */
export type QueryDefaultPaymentDetailByBuyerIdArgs = {
  buyerId: Scalars['ID'];
};


/** QUERIES */
export type QueryDeliveryAddressForBuyerArgs = {
  buyerId: Scalars['ID'];
};


/** QUERIES */
export type QueryDeliveryAddressForGuestBuyerArgs = {
  buyerId: Scalars['ID'];
};


/** QUERIES */
export type QueryDeliveryAddressGeoCoordinateByIdArgs = {
  addressId: Scalars['ID'];
};


/** QUERIES */
export type QueryDeliveryAddressToOnlineStoreByIdArgs = {
  addressId: Scalars['ID'];
  storeId: Scalars['ID'];
};


/** QUERIES */
export type QueryDeliveryAddressesByOnlineStoresArgs = {
  storeIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


/** QUERIES */
export type QueryFindReviewsArgs = {
  reviewSearchOptions: ReviewSearchOptions;
};


/** QUERIES */
export type QueryGetBuyerAddressByTypeArgs = {
  addressType?: InputMaybe<AddressType>;
  buyerId: Scalars['ID'];
};


/** QUERIES */
export type QueryGetBuyerAddressesByIdArgs = {
  buyerId: Scalars['ID'];
};


/** QUERIES */
export type QueryGetBuyerDefaultAddressByBuyerIdArgs = {
  buyerId: Scalars['ID'];
};


/** QUERIES */
export type QueryGetGuestBuyerAddressByTypeArgs = {
  addressType?: InputMaybe<AddressType>;
  guestBuyerId: Scalars['ID'];
};


/** QUERIES */
export type QueryGetGuestBuyerAddressesByIdArgs = {
  buyerId: Scalars['ID'];
};


/** QUERIES */
export type QueryGetGuestBuyerDefaultAddressByBuyerIdArgs = {
  buyerId: Scalars['ID'];
};


/** QUERIES */
export type QueryGetListingsArgs = {
  searchOptions?: InputMaybe<SearchOptions>;
};


/** QUERIES */
export type QueryGetOrderItemDetailsArgs = {
  orderItemId: Scalars['ID'];
};


/** QUERIES */
export type QueryGetOrderReturnArgs = {
  orderReturnId: Scalars['String'];
};


/** QUERIES */
export type QueryGetOrderReturnStatusArgs = {
  orderReturnId: Scalars['String'];
};


/** QUERIES */
export type QueryGetPreferredCategoriesArgs = {
  buyerId: Scalars['ID'];
};


/** QUERIES */
export type QueryGetProductByProductIdArgs = {
  productId: Scalars['String'];
};


/** QUERIES */
export type QueryGetProductReviewSummaryResponseArgs = {
  productId: Scalars['ID'];
};


/** QUERIES */
export type QueryGetProductsArgs = {
  pageable?: InputMaybe<ProductPageable>;
};


/** QUERIES */
export type QueryGetRefundSalamiCreditArgs = {
  buyerId: Scalars['ID'];
};


/** QUERIES */
export type QueryGetRelatedProductsArgs = {
  productId: Scalars['ID'];
};


/** QUERIES */
export type QueryGetSellerAddressByTypeArgs = {
  addressType?: InputMaybe<AddressType>;
  sellerId: Scalars['ID'];
};


/** QUERIES */
export type QueryGetSellerAddressesByIdArgs = {
  sellerId: Scalars['ID'];
};


/** QUERIES */
export type QueryGetSellerDefaultAddressBySellerIdArgs = {
  sellerId: Scalars['ID'];
};


/** QUERIES */
export type QueryGetSellerDocumentKeysArgs = {
  sellerId: Scalars['ID'];
};


/** QUERIES */
export type QueryGetSellerListingArgs = {
  options: SellerFilterOptions;
  productId?: InputMaybe<Scalars['String']>;
};


/** QUERIES */
export type QueryGetSellerListingDetailsArgs = {
  listingId: Scalars['String'];
};


/** QUERIES */
export type QueryGetSellerListingForAcceptOrRejectArgs = {
  options: SellerFilterOptions;
};


/** QUERIES */
export type QueryGetSellerListingGroupByProductArgs = {
  options: SellerFilterOptions;
};


/** QUERIES */
export type QueryGetSellerListingOrdersArgs = {
  options: ListingOrderOptions;
};


/** QUERIES */
export type QueryGetSellerOrderReturnsArgs = {
  options: OrderReturnOptions;
};


/** QUERIES */
export type QueryGetSellerOrdersArgs = {
  options: SellerOrderOption;
};


/** QUERIES */
export type QueryGetSellerReviewSummaryResponseArgs = {
  sellerId: Scalars['ID'];
};


/** QUERIES */
export type QueryGetShareInformationByProductIdArgs = {
  productId?: InputMaybe<Scalars['String']>;
};


/** QUERIES */
export type QueryGetStatesByCountryIdArgs = {
  countryId: Scalars['ID'];
};


/** QUERIES */
export type QueryGetStoreByNameArgs = {
  name: Scalars['String'];
};


/** QUERIES */
export type QueryGetStoresArgs = {
  pageable: StorePageable;
};


/** QUERIES */
export type QueryGetStoresByCityOrProvinceArgs = {
  pageable: StorePageable;
  place: Scalars['String'];
};


/** QUERIES */
export type QueryGuestBuyerProfileArgs = {
  guestBuyerId: Scalars['ID'];
};


/** QUERIES */
export type QueryIsListingAvailableArgs = {
  listings?: InputMaybe<Array<InputMaybe<IsListingAvailableInput>>>;
};


/** QUERIES */
export type QueryIsProductInWishlistArgs = {
  buyerId: Scalars['String'];
  productId: Scalars['String'];
};


/** QUERIES */
export type QueryNotificationByIdArgs = {
  notificationId: Scalars['ID'];
};


/** QUERIES */
export type QueryOneClickBuyArgs = {
  buyerId: Scalars['ID'];
};


/** QUERIES */
export type QueryOnlineStoreByGeoCoordinatesArgs = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  pageable: StorePageable;
};


/** QUERIES */
export type QueryOnlineStoresForSellerArgs = {
  sellerId: Scalars['ID'];
};


/** QUERIES */
export type QueryPaymentDetailByIdArgs = {
  paymentDetailId: Scalars['ID'];
};


/** QUERIES */
export type QueryPaymentDetailsByBuyerIdArgs = {
  buyerId: Scalars['ID'];
};


/** QUERIES */
export type QueryPreferenceByIdArgs = {
  preferenceId: Scalars['ID'];
};


/** QUERIES */
export type QuerySearchBuyerOrdersArgs = {
  options: BuyerOrderOption;
};


/** QUERIES */
export type QuerySearchStoreByNameArgs = {
  nameSearchString: Scalars['String'];
  pageable: StorePageable;
  searchType: SearchStringType;
};


/** QUERIES */
export type QuerySellerBillingDetailsByIdArgs = {
  billingDetailsId: Scalars['ID'];
};


/** QUERIES */
export type QuerySellerBillingDetailsForSellerArgs = {
  sellerId: Scalars['ID'];
};


/** QUERIES */
export type QuerySellerContactByIdArgs = {
  contactId: Scalars['ID'];
};


/** QUERIES */
export type QuerySellerContactsBySellerArgs = {
  sellerId: Scalars['ID'];
};


/** QUERIES */
export type QuerySellerProfileArgs = {
  sellerId: Scalars['ID'];
};


/** QUERIES */
export type QuerySellerProfileByUserIdArgs = {
  userProfileId: Scalars['ID'];
};


/** QUERIES */
export type QuerySellerToOnlineStoreByIdArgs = {
  sellerId: Scalars['ID'];
  storeId: Scalars['ID'];
};


/** QUERIES */
export type QueryServiceOperatorProfileByUserIdArgs = {
  userProfileId: Scalars['ID'];
};


/** QUERIES */
export type QueryShareInformationByIdArgs = {
  shareInformationId: Scalars['ID'];
};


/** QUERIES */
export type QueryShippingDetailByIdArgs = {
  shippingId: Scalars['ID'];
};


/** QUERIES */
export type QueryTrackOrderItemArgs = {
  orderItemId: Scalars['ID'];
};


/** QUERIES */
export type QueryUserHasVerifiedEmailArgs = {
  userId: Scalars['ID'];
};


/** QUERIES */
export type QueryWishListByIdArgs = {
  wishListId: Scalars['ID'];
};

export type RatingDetail = {
  __typename?: 'RatingDetail';
  fiveStar?: Maybe<Scalars['Int']>;
  fourStar?: Maybe<Scalars['Int']>;
  oneStar?: Maybe<Scalars['Int']>;
  sixAndMoreStar?: Maybe<Scalars['Int']>;
  threeStar?: Maybe<Scalars['Int']>;
  twoStar?: Maybe<Scalars['Int']>;
  zeroStar?: Maybe<Scalars['Int']>;
};

export type RecurringListingInput = {
  durationInDays: Scalars['Int'];
  listingId: Scalars['String'];
  minSoldQuantity: Scalars['Int'];
  numberOfRecurring: Scalars['Int'];
  startDate: Scalars['DateTime'];
  variants: Array<ListingVariantInput>;
};

export type ReduceWalletResponse = {
  __typename?: 'ReduceWalletResponse';
  orderAmount?: Maybe<Scalars['Float']>;
  remainingOrderAmount?: Maybe<Scalars['Float']>;
  usedGiftAmount?: Maybe<Scalars['Float']>;
  usedWalletAmount?: Maybe<Scalars['Float']>;
};

export enum RegistrationRejectedReason {
  FalseInformation = 'FALSE_INFORMATION',
  NoNationalIdCardSupplied = 'NO_NATIONAL_ID_CARD_SUPPLIED',
  NoTaxNumberCardSupplied = 'NO_TAX_NUMBER_CARD_SUPPLIED',
  OffensiveShopOrSellerName = 'OFFENSIVE_SHOP_OR_SELLER_NAME',
  Undefined = 'UNDEFINED'
}

export type ReportReviewInput = {
  description?: InputMaybe<Scalars['String']>;
  reportReason: ReportReviewReason;
  reviewId: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
};

export enum ReportReviewReason {
  Inappropriate = 'INAPPROPRIATE',
  Irrelevant = 'IRRELEVANT',
  Misleading = 'MISLEADING'
}

export type ReportReviewResponse = {
  __typename?: 'ReportReviewResponse';
  description?: Maybe<Scalars['String']>;
  postedBy: Scalars['ID'];
  reportReason: ReportReviewReason;
  reviewId: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type RequestForProductInput = {
  productId: Scalars['ID'];
  requestCount: Scalars['Int'];
  storeId: Scalars['ID'];
};

export type RequestForProductResponse = {
  __typename?: 'RequestForProductResponse';
  productId: Scalars['ID'];
  requestsCount?: Maybe<Scalars['Int']>;
  storeId: Scalars['ID'];
};

export type ResendCodeResponse = {
  __typename?: 'ResendCodeResponse';
  extraMessage?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

export enum ReturnEventType {
  Closed = 'CLOSED',
  RefundComplete = 'REFUND_COMPLETE',
  Registered = 'REGISTERED',
  ReplacementComplete = 'REPLACEMENT_COMPLETE',
  SellerApproved = 'SELLER_APPROVED',
  SellerDenied = 'SELLER_DENIED',
  SellerFulfilled = 'SELLER_FULFILLED',
  SellerReceived = 'SELLER_RECEIVED',
  WaitingBuyerReturn = 'WAITING_BUYER_RETURN',
  WaitingSellerApproval = 'WAITING_SELLER_APPROVAL'
}

export enum ReturnOption {
  GetRefund = 'GET_REFUND',
  GetReplacement = 'GET_REPLACEMENT'
}

export type ReturnPolicyInput = {
  name: Scalars['String'];
  value: Scalars['String'];
};

export enum ReviewFilterType {
  ByProduct = 'BY_PRODUCT',
  BySeller = 'BY_SELLER',
  Undefined = 'UNDEFINED'
}

export type ReviewResponse = {
  __typename?: 'ReviewResponse';
  avatarUrl?: Maybe<Scalars['String']>;
  buyerName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  productName?: Maybe<Scalars['String']>;
  ratingVote?: Maybe<Scalars['Int']>;
  sellerName?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ReviewSearchOptions = {
  filter: ReviewFilterType;
  filterParams: FilterParams;
  pageNo: Scalars['Int'];
  pageSize: Scalars['Int'];
  sortBy: SortType;
  sortDirection: SortDirection;
};

export type ReviewSummaryResponse = {
  __typename?: 'ReviewSummaryResponse';
  numberOfReviews?: Maybe<Scalars['Int']>;
  numberOfStars?: Maybe<Scalars['Float']>;
  photo?: Maybe<Scalars['String']>;
  productLongName?: Maybe<Scalars['String']>;
  productName?: Maybe<Scalars['String']>;
  ratingDetail?: Maybe<RatingDetail>;
  sellerName?: Maybe<Scalars['String']>;
};

export type ReviewView = {
  __typename?: 'ReviewView';
  description?: Maybe<Scalars['String']>;
  helpfulCount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  postedBy?: Maybe<Scalars['ID']>;
  productId?: Maybe<Scalars['ID']>;
  ratingVote?: Maybe<Scalars['Int']>;
  sellerId?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
};

export type SalamiWalletGiftTransactionResponse = {
  __typename?: 'SalamiWalletGiftTransactionResponse';
  giftExpiryDate?: Maybe<Scalars['Date']>;
  giftParentTransactionId?: Maybe<Scalars['ID']>;
  giftTransactionId?: Maybe<Scalars['ID']>;
  transactionAmount?: Maybe<Scalars['Float']>;
  transactionReference?: Maybe<Scalars['ID']>;
  transactionTimestamp?: Maybe<Scalars['DateTime']>;
  transactionType?: Maybe<WalletTransactionType>;
  walletId?: Maybe<Scalars['ID']>;
};

export type SalamiWalletResponse = {
  __typename?: 'SalamiWalletResponse';
  buyerId?: Maybe<Scalars['ID']>;
  giftBalance?: Maybe<Scalars['Float']>;
  walletBalance?: Maybe<Scalars['Float']>;
  walletId?: Maybe<Scalars['ID']>;
};

export type SalamiWalletTransactionResponse = {
  __typename?: 'SalamiWalletTransactionResponse';
  transactionAmount?: Maybe<Scalars['Float']>;
  transactionId?: Maybe<Scalars['ID']>;
  transactionReference?: Maybe<Scalars['ID']>;
  transactionTimestamp?: Maybe<Scalars['DateTime']>;
  transactionType?: Maybe<WalletTransactionType>;
  walletId?: Maybe<Scalars['ID']>;
};

export type SearchOptions = {
  filter?: InputMaybe<FilterType>;
  /** default ALL */
  filterParams?: InputMaybe<FilterParams>;
  /** default DESCENDING */
  pageNo?: InputMaybe<Scalars['Int']>;
  /** default 0 */
  pageSize?: InputMaybe<Scalars['Int']>;
  /** default new FilterParams() */
  sortBy?: InputMaybe<SortType>;
  /** default DATE */
  sortDirection?: InputMaybe<SortDirection>;
};

export enum SearchStringType {
  StartsWith = 'STARTS_WITH'
}

export type SellerAddressRequestForCreate = {
  areaCode?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  provinceState?: InputMaybe<Scalars['String']>;
  streetAddress1?: InputMaybe<Scalars['String']>;
  streetAddress2?: InputMaybe<Scalars['String']>;
  townCity?: InputMaybe<Scalars['String']>;
};

export type SellerBillingDetailsRequest = {
  accountName?: InputMaybe<Scalars['String']>;
  accountNumber?: InputMaybe<Scalars['String']>;
  bankAddress?: InputMaybe<Scalars['String']>;
  bankName?: InputMaybe<Scalars['String']>;
  billingDetailsId: Scalars['ID'];
  domesticRoutingCode?: InputMaybe<Scalars['String']>;
  ifscCode?: InputMaybe<Scalars['String']>;
  internationalRoutingCode?: InputMaybe<Scalars['String']>;
  sellerId: Scalars['ID'];
};

export type SellerBillingDetailsRequestForCreate = {
  accountName?: InputMaybe<Scalars['String']>;
  accountNumber?: InputMaybe<Scalars['String']>;
  bankAddress?: InputMaybe<Scalars['String']>;
  bankName?: InputMaybe<Scalars['String']>;
  domesticRoutingCode?: InputMaybe<Scalars['String']>;
  ifscCode?: InputMaybe<Scalars['String']>;
  internationalRoutingCode?: InputMaybe<Scalars['String']>;
  sellerId?: InputMaybe<Scalars['ID']>;
};

export type SellerBillingDetailsResponse = {
  __typename?: 'SellerBillingDetailsResponse';
  accountName?: Maybe<Scalars['String']>;
  accountNumber?: Maybe<Scalars['String']>;
  bankAddress?: Maybe<Scalars['String']>;
  bankName?: Maybe<Scalars['String']>;
  billingDetailsId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  domesticRoutingCode?: Maybe<Scalars['String']>;
  ifscCode?: Maybe<Scalars['String']>;
  internationalRoutingCode?: Maybe<Scalars['String']>;
  sellerId?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SellerContactRequest = {
  contactEmail?: InputMaybe<Scalars['String']>;
  contactId: Scalars['ID'];
  contactName?: InputMaybe<Scalars['String']>;
  contactPhoneNumber?: InputMaybe<Scalars['String']>;
  sellerId: Scalars['ID'];
  supportEmail?: InputMaybe<Scalars['String']>;
  supportPhoneNumber?: InputMaybe<Scalars['String']>;
};

export type SellerContactRequestForCreate = {
  contactEmail?: InputMaybe<Scalars['String']>;
  contactName?: InputMaybe<Scalars['String']>;
  contactPhoneNumber?: InputMaybe<Scalars['String']>;
  sellerId?: InputMaybe<Scalars['ID']>;
  supportEmail?: InputMaybe<Scalars['String']>;
  supportPhoneNumber?: InputMaybe<Scalars['String']>;
};

export type SellerContactResponse = {
  __typename?: 'SellerContactResponse';
  contactEmail?: Maybe<Scalars['String']>;
  contactId?: Maybe<Scalars['ID']>;
  contactName?: Maybe<Scalars['String']>;
  contactPhoneNumber?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  sellerId?: Maybe<Scalars['ID']>;
  supportEmail?: Maybe<Scalars['String']>;
  supportPhoneNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SellerDirectDeliveryDetailView = {
  __typename?: 'SellerDirectDeliveryDetailView';
  announcementId: Scalars['ID'];
  deliveryDate: Scalars['Date'];
};

export type SellerDirectDeliveryInput = {
  deliveryDate?: InputMaybe<Scalars['Date']>;
  listingId?: InputMaybe<Scalars['String']>;
};

export type SellerDirectDeliveryResponse = {
  __typename?: 'SellerDirectDeliveryResponse';
  announcementId?: Maybe<Scalars['ID']>;
  deliveryDate?: Maybe<Scalars['Date']>;
  referenceId?: Maybe<Scalars['ID']>;
};

export type SellerDocumentResponse = {
  __typename?: 'SellerDocumentResponse';
  documentKey?: Maybe<Scalars['String']>;
};

export type SellerFilterOptions = {
  filterType: SellerFilterType;
  listingStatus?: InputMaybe<ProductListingStatus>;
  pageOption: SellerPageOption;
  storeIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export enum SellerFilterType {
  ListingStatus = 'LISTING_STATUS',
  None = 'NONE',
  Store = 'STORE',
  StoreAndListingStatus = 'STORE_AND_LISTING_STATUS'
}

export type SellerListingDetailView = {
  __typename?: 'SellerListingDetailView';
  collectionPoint?: Maybe<CollectionPointPickupDetailView>;
  courierDelivery?: Maybe<CourierDeliveryDetailView>;
  deliveryOption: DeliveryOption;
  listingId: Scalars['ID'];
  minSoldQuantity?: Maybe<Scalars['Int']>;
  openUntil?: Maybe<Scalars['Date']>;
  product: SellerProductDetailView;
  productListingStatus: ProductListingStatus;
  productListingType?: Maybe<ProductListingType>;
  sellerDirectDelivery?: Maybe<SellerDirectDeliveryDetailView>;
  sellerLocation?: Maybe<SellerLocationPickupDetailView>;
  startDate?: Maybe<Scalars['DateTime']>;
  store?: Maybe<SellerListingStore>;
  variants: Array<SellerListingVariant>;
};

export type SellerListingGroupResponse = {
  __typename?: 'SellerListingGroupResponse';
  content?: Maybe<Array<Maybe<SellerListingGroupView>>>;
  pageNo: Scalars['Int'];
  pageSize: Scalars['Int'];
  totalElements: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type SellerListingGroupView = {
  __typename?: 'SellerListingGroupView';
  active: Scalars['Int'];
  ended: Scalars['Int'];
  mainImageUrl?: Maybe<Scalars['String']>;
  productId: Scalars['ID'];
  shortName?: Maybe<Scalars['String']>;
  total: Scalars['Int'];
};

export type SellerListingOrder = {
  __typename?: 'SellerListingOrder';
  defaultVariantId: Scalars['ID'];
  defaultVariantPriceId: Scalars['ID'];
  delivered: Scalars['Int'];
  listingId: Scalars['ID'];
  listingStatus: ProductListingStatus;
  longName?: Maybe<Scalars['String']>;
  mainImagePath?: Maybe<Scalars['String']>;
  productId: Scalars['ID'];
  retailPrice: Scalars['Float'];
  returns: Scalars['Int'];
  sellerId: Scalars['ID'];
  shortName: Scalars['String'];
  storeId: Scalars['ID'];
  total: Scalars['Int'];
  wholeSalePrice: Scalars['Float'];
};

export type SellerListingOrderResponse = {
  __typename?: 'SellerListingOrderResponse';
  content: Array<SellerListingOrder>;
  pageNo: Scalars['Int'];
  pageSize: Scalars['Int'];
  totalElements: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type SellerListingResponse = {
  __typename?: 'SellerListingResponse';
  content: Array<SellerListingView>;
  pageNo: Scalars['Int'];
  pageSize: Scalars['Int'];
  totalElements: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type SellerListingStore = {
  __typename?: 'SellerListingStore';
  area?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  onlineStoreType?: Maybe<OnlineStoreType>;
  provinceState?: Maybe<Scalars['String']>;
  storeId?: Maybe<Scalars['ID']>;
};

export type SellerListingVariant = {
  __typename?: 'SellerListingVariant';
  defaultVariant: Scalars['Boolean'];
  itemsAvailable: Scalars['Int'];
  itemsInStock: Scalars['Int'];
  itemsSold: Scalars['Int'];
  options?: Maybe<Array<Maybe<KeyValuePair>>>;
  photoUrl?: Maybe<Scalars['String']>;
  priceId: Scalars['ID'];
  retailPrice: Scalars['Float'];
  sellerSku?: Maybe<Scalars['String']>;
  variantId: Scalars['ID'];
  wholeSalePrice: Scalars['Float'];
};

export type SellerListingView = {
  __typename?: 'SellerListingView';
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  closedDate?: Maybe<Scalars['Date']>;
  daysLeft?: Maybe<Scalars['Int']>;
  discountPercentage?: Maybe<Scalars['Float']>;
  listingId: Scalars['ID'];
  listingStatus: ProductListingStatus;
  mainPhotoUrl?: Maybe<Scalars['String']>;
  minSoldQuantity?: Maybe<Scalars['Int']>;
  openUntil?: Maybe<Scalars['Date']>;
  priceId: Scalars['ID'];
  productId: Scalars['ID'];
  retailPrice?: Maybe<Scalars['Float']>;
  shortName: Scalars['String'];
  startDate?: Maybe<Scalars['DateTime']>;
  storeId: Scalars['ID'];
  storeName?: Maybe<Scalars['String']>;
  totalItemsAvailable?: Maybe<Scalars['Int']>;
  totalItemsSold?: Maybe<Scalars['Int']>;
  wholeSalePrice?: Maybe<Scalars['Float']>;
};

export type SellerLocationInput = {
  areaCode?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  isSameAsBusinessAddress: Scalars['Boolean'];
  listingId?: InputMaybe<Scalars['ID']>;
  provinceState?: InputMaybe<Scalars['String']>;
  streetAddress1?: InputMaybe<Scalars['String']>;
  streetAddress2?: InputMaybe<Scalars['String']>;
  townCity?: InputMaybe<Scalars['String']>;
};

export type SellerLocationPickupDetailView = {
  __typename?: 'SellerLocationPickupDetailView';
  areaCode?: Maybe<Scalars['String']>;
  collectionPointId: Scalars['ID'];
  country?: Maybe<Scalars['String']>;
  provinceState?: Maybe<Scalars['String']>;
  streetAddress1?: Maybe<Scalars['String']>;
  streetAddress2?: Maybe<Scalars['String']>;
  townCity?: Maybe<Scalars['String']>;
};

export type SellerLocationPickupResponse = {
  __typename?: 'SellerLocationPickupResponse';
  areaCode?: Maybe<Scalars['String']>;
  collectionDate?: Maybe<Scalars['Date']>;
  collectionPointId?: Maybe<Scalars['ID']>;
  contactNumber?: Maybe<Scalars['String']>;
  contactPerson?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  provinceState?: Maybe<Scalars['String']>;
  streetAddress1?: Maybe<Scalars['String']>;
  streetAddress2?: Maybe<Scalars['String']>;
  townCity?: Maybe<Scalars['String']>;
};

export enum SellerOrderFilterType {
  EventStatus = 'EVENT_STATUS',
  None = 'NONE',
  OrderDate = 'ORDER_DATE'
}

export type SellerOrderOption = {
  eventStatus?: InputMaybe<OrderItemHistoryEventType>;
  filterType: SellerOrderFilterType;
  orderDate?: InputMaybe<OrderDateParameter>;
  pageOption: PageOption;
};

export type SellerOrderResponse = {
  __typename?: 'SellerOrderResponse';
  content: Array<OrderItemDetailResponse>;
  pageNo: Scalars['Int'];
  pageSize: Scalars['Int'];
  totalElements: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type SellerOrderReturn = {
  __typename?: 'SellerOrderReturn';
  itemPrice?: Maybe<Scalars['Float']>;
  listingId?: Maybe<Scalars['ID']>;
  longName?: Maybe<Scalars['String']>;
  mainImagePath?: Maybe<Scalars['String']>;
  orderId?: Maybe<Scalars['ID']>;
  orderItemId?: Maybe<Scalars['ID']>;
  productId?: Maybe<Scalars['ID']>;
  returnId?: Maybe<Scalars['ID']>;
  returnOption?: Maybe<ReturnOption>;
  returnStatus?: Maybe<ReturnEventType>;
  shortName?: Maybe<Scalars['String']>;
};

export type SellerOrderReturnResponse = {
  __typename?: 'SellerOrderReturnResponse';
  content: Array<SellerOrderReturn>;
  pageNo: Scalars['Int'];
  pageSize: Scalars['Int'];
  totalElements: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type SellerPageOption = {
  pageNumber: Scalars['Int'];
  pageSize: Scalars['Int'];
};

export type SellerProductDetailView = {
  __typename?: 'SellerProductDetailView';
  brand?: Maybe<Scalars['String']>;
  categoryList: Array<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  highlightBullets?: Maybe<Array<Maybe<Scalars['String']>>>;
  images?: Maybe<Array<Maybe<SellerProductImage>>>;
  itemsInStock: Scalars['Int'];
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  longName: Scalars['String'];
  mainPhotoUrl?: Maybe<Scalars['String']>;
  price?: Maybe<SellerProductPrice>;
  productId: Scalars['ID'];
  productStatus?: Maybe<ProductStatus>;
  productType?: Maybe<ProductType>;
  returnPolicy: SellerReturnPolicy;
  sellerSku?: Maybe<Scalars['String']>;
  shortName: Scalars['String'];
  validationStatus?: Maybe<ProductValidationStatus>;
  variants: Array<SellerProductVariant>;
  vendorName?: Maybe<Scalars['String']>;
  vendorSku?: Maybe<Scalars['String']>;
};

export type SellerProductImage = {
  __typename?: 'SellerProductImage';
  description?: Maybe<Scalars['String']>;
  imageName?: Maybe<Scalars['String']>;
  imageType?: Maybe<Scalars['String']>;
  photoUrl?: Maybe<Scalars['String']>;
};

export type SellerProductPrice = {
  __typename?: 'SellerProductPrice';
  currency: Scalars['String'];
  priceId: Scalars['ID'];
  profit: Scalars['Float'];
  retailPrice: Scalars['Float'];
  salePercentage?: Maybe<Scalars['Float']>;
  savePercentage: Scalars['Float'];
  taxPercentage?: Maybe<Scalars['Float']>;
  totalQuantityPrice?: Maybe<Scalars['Float']>;
  wholeSalePrice: Scalars['Float'];
};

export type SellerProductVariant = {
  __typename?: 'SellerProductVariant';
  defaultVariant: Scalars['Boolean'];
  itemsInStock: Scalars['Int'];
  options: Array<KeyValuePair>;
  photoUrl: Scalars['String'];
  priceId: Scalars['ID'];
  profit: Scalars['Float'];
  retailPrice: Scalars['Float'];
  savePercentage: Scalars['Float'];
  sellerSku?: Maybe<Scalars['String']>;
  variantId: Scalars['ID'];
  wholeSalePrice: Scalars['Float'];
};

export type SellerProfileRequest = {
  avatarUrl?: InputMaybe<Scalars['String']>;
  biography?: InputMaybe<Scalars['String']>;
  brandName?: InputMaybe<Scalars['String']>;
  businessName?: InputMaybe<Scalars['String']>;
  businessType?: InputMaybe<BusinessType>;
  commChamberRegNum?: InputMaybe<Scalars['String']>;
  commChamberRegNumValidated?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  geoLocation?: InputMaybe<Scalars['String']>;
  govCompanyId?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  manufacturerBrandOwner?: InputMaybe<Scalars['Boolean']>;
  middleName?: InputMaybe<Scalars['String']>;
  nationalIdNumber?: InputMaybe<Scalars['String']>;
  nationalIdNumberValidated?: InputMaybe<Scalars['Boolean']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  productsUpcAvailable?: InputMaybe<Scalars['Boolean']>;
  registeredTrademarksOwner?: InputMaybe<Scalars['Boolean']>;
  sellerId: Scalars['ID'];
  sellerName?: InputMaybe<Scalars['String']>;
  sellerType?: InputMaybe<SellerType>;
  shortName?: InputMaybe<Scalars['String']>;
  storeName?: InputMaybe<Scalars['String']>;
  storeShortName?: InputMaybe<Scalars['String']>;
  taxNumber?: InputMaybe<Scalars['String']>;
  taxNumberValidated?: InputMaybe<Scalars['Boolean']>;
  vatCode?: InputMaybe<Scalars['String']>;
  vatCodeValidated?: InputMaybe<Scalars['Boolean']>;
  vstGstNumber?: InputMaybe<Scalars['String']>;
};

export type SellerProfileRequestForCreate = {
  aadharCardDocument?: InputMaybe<Scalars['FileUpload']>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  biography?: InputMaybe<Scalars['String']>;
  brandName?: InputMaybe<Scalars['String']>;
  businessName?: InputMaybe<Scalars['String']>;
  businessType: BusinessType;
  commChamberRegNum?: InputMaybe<Scalars['String']>;
  commChamberRegNumValidated?: InputMaybe<Scalars['Boolean']>;
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  geoLocation?: InputMaybe<Scalars['String']>;
  govCompanyId?: InputMaybe<Scalars['String']>;
  gstinNumberDocument?: InputMaybe<Scalars['FileUpload']>;
  lastName?: InputMaybe<Scalars['String']>;
  manufacturerBrandOwner: Scalars['Boolean'];
  middleName?: InputMaybe<Scalars['String']>;
  nationalIdNumber?: InputMaybe<Scalars['String']>;
  nationalIdNumberValidated?: InputMaybe<Scalars['Boolean']>;
  panCardDocument?: InputMaybe<Scalars['FileUpload']>;
  password: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
  productsUpcAvailable: Scalars['Boolean'];
  registeredTrademarksOwner: Scalars['Boolean'];
  sellerAddress: SellerAddressRequestForCreate;
  sellerBillingDetails?: InputMaybe<SellerBillingDetailsRequestForCreate>;
  sellerContact?: InputMaybe<SellerContactRequestForCreate>;
  sellerName?: InputMaybe<Scalars['String']>;
  sellerType?: InputMaybe<SellerType>;
  shortName?: InputMaybe<Scalars['String']>;
  storeName?: InputMaybe<Scalars['String']>;
  storeShortName?: InputMaybe<Scalars['String']>;
  taxNumber?: InputMaybe<Scalars['String']>;
  taxNumberValidated?: InputMaybe<Scalars['Boolean']>;
  vatCode?: InputMaybe<Scalars['String']>;
  vatCodeValidated?: InputMaybe<Scalars['Boolean']>;
  vatNumberDocument?: InputMaybe<Scalars['FileUpload']>;
  vstGstNumber?: InputMaybe<Scalars['String']>;
};

export type SellerProfileResponse = {
  __typename?: 'SellerProfileResponse';
  avatarUrl?: Maybe<Scalars['String']>;
  biography?: Maybe<Scalars['String']>;
  brandName?: Maybe<Scalars['String']>;
  businessName?: Maybe<Scalars['String']>;
  businessType?: Maybe<BusinessType>;
  commChamberRegNum?: Maybe<Scalars['String']>;
  commChamberRegNumValidated?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  escrowAccountId?: Maybe<Scalars['ID']>;
  firstName?: Maybe<Scalars['String']>;
  geoLocation?: Maybe<Scalars['String']>;
  govCompanyId?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  manufacturerBrandOwner?: Maybe<Scalars['Boolean']>;
  middleName?: Maybe<Scalars['String']>;
  nationalIdNumber?: Maybe<Scalars['String']>;
  nationalIdNumberValidated?: Maybe<Scalars['Boolean']>;
  phoneNumber?: Maybe<Scalars['String']>;
  productsUpcAvailable?: Maybe<Scalars['Boolean']>;
  registeredTrademarksOwner?: Maybe<Scalars['Boolean']>;
  registrationRejectedNotes?: Maybe<Scalars['String']>;
  registrationRejectedReason?: Maybe<RegistrationRejectedReason>;
  selectedCountry?: Maybe<CountryResponse>;
  selectedSupportedLanguage?: Maybe<SupportedLanguageResponse>;
  sellerBillingDetails?: Maybe<SellerBillingDetailsResponse>;
  sellerContacts?: Maybe<Array<Maybe<SellerContactResponse>>>;
  sellerId?: Maybe<Scalars['ID']>;
  sellerName?: Maybe<Scalars['String']>;
  sellerType?: Maybe<SellerType>;
  sellerValidationStatus?: Maybe<SellerValidationStatus>;
  shortName?: Maybe<Scalars['String']>;
  storeName?: Maybe<Scalars['String']>;
  storeShortName?: Maybe<Scalars['String']>;
  taxNumber?: Maybe<Scalars['String']>;
  taxNumberValidated?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['ID']>;
  userName?: Maybe<Scalars['String']>;
  userType?: Maybe<UserType>;
  usersRating?: Maybe<Scalars['String']>;
  validationStatusChangedBy?: Maybe<Scalars['ID']>;
  vatCode?: Maybe<Scalars['String']>;
  vatCodeValidated?: Maybe<Scalars['Boolean']>;
  vstGstNumber?: Maybe<Scalars['String']>;
};

export type SellerReturnPolicy = {
  __typename?: 'SellerReturnPolicy';
  policies?: Maybe<Array<Maybe<ProductReturnPolicy>>>;
  returnAddress?: Maybe<Scalars['String']>;
  returnLabel?: Maybe<SellerProductImage>;
};

export type SellerReviewInput = {
  description?: InputMaybe<Scalars['String']>;
  ratingVote: Scalars['Int'];
  sellerId: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
};

export type SellerToOnlineStoreRequest = {
  sellerId: Scalars['ID'];
  storeId: Scalars['ID'];
};

export type SellerToOnlineStoreRequestForCreate = {
  sellerId: Scalars['ID'];
  storeId: Scalars['ID'];
};

export type SellerToOnlineStoreResponse = {
  __typename?: 'SellerToOnlineStoreResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  sellerId: Scalars['ID'];
  storeId: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum SellerType {
  AnnouncementSeller = 'ANNOUNCEMENT_SELLER',
  MainSeller = 'MAIN_SELLER',
  Undefined = 'UNDEFINED'
}

export enum SellerValidationStatus {
  Accepted = 'ACCEPTED',
  Pending = 'PENDING',
  Rejected = 'REJECTED',
  Undefined = 'UNDEFINED'
}

export type SellerView = {
  __typename?: 'SellerView';
  avatarUrl?: Maybe<Scalars['String']>;
  brandName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  ratingCount?: Maybe<Scalars['Float']>;
  usersRating?: Maybe<Scalars['Float']>;
};

export type ServiceOperatorProfileForCreate = {
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
  roles: Array<InputMaybe<Scalars['String']>>;
  username: Scalars['String'];
};

export type ServiceOperatorResponse = {
  __typename?: 'ServiceOperatorResponse';
  serviceOperatorId?: Maybe<Scalars['ID']>;
  userProfileResponse?: Maybe<UserProfileResponse>;
};

export enum ShareChannel {
  Facebook = 'FACEBOOK',
  Google = 'GOOGLE',
  PlainLink = 'PLAIN_LINK',
  Qrcode = 'QRCODE',
  Twitter = 'TWITTER',
  Undefined = 'UNDEFINED',
  Whatsapp = 'WHATSAPP'
}

export enum ShareChannelType {
  Facebook = 'FACEBOOK',
  Google = 'GOOGLE',
  PlainLink = 'PLAIN_LINK',
  Qrcode = 'QRCODE',
  Twitter = 'TWITTER',
  Undefined = 'UNDEFINED',
  Whatsapp = 'WHATSAPP'
}

export type ShareInformation = {
  __typename?: 'ShareInformation';
  buyer?: Maybe<Buyer>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  product?: Maybe<Product>;
  productPageUrl?: Maybe<Scalars['String']>;
  shareChannel?: Maybe<ShareChannelType>;
  shareTitle?: Maybe<Scalars['String']>;
  targetEmailAddress?: Maybe<Scalars['String']>;
};

export type ShareInformationInput = {
  productId: Scalars['ID'];
  productPageUrl?: InputMaybe<Scalars['String']>;
  shareChannel: ShareChannelType;
  shareTitle?: InputMaybe<Scalars['String']>;
  targetEmailAddress?: InputMaybe<Scalars['String']>;
};

export type ShareInformationRequest = {
  buyerId: Scalars['ID'];
  hashtags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  productId: Scalars['ID'];
  productPageUrl?: InputMaybe<Scalars['String']>;
  shareChannel?: InputMaybe<ShareChannel>;
  shareInformationId: Scalars['ID'];
  shareMessage?: InputMaybe<Scalars['String']>;
  shareTitle?: InputMaybe<Scalars['String']>;
  targetEmailAddress?: InputMaybe<Scalars['String']>;
};

export type ShareInformationRequestForCreate = {
  buyerId: Scalars['ID'];
  hashtags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  productId: Scalars['ID'];
  productPageUrl?: InputMaybe<Scalars['String']>;
  shareChannel?: InputMaybe<ShareChannel>;
  shareMessage?: InputMaybe<Scalars['String']>;
  shareTitle?: InputMaybe<Scalars['String']>;
  targetEmailAddress?: InputMaybe<Scalars['String']>;
};

export type ShareInformationResponse = {
  __typename?: 'ShareInformationResponse';
  buyerId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  hashtags?: Maybe<Array<Maybe<Scalars['String']>>>;
  productId?: Maybe<Scalars['ID']>;
  productPageUrl?: Maybe<Scalars['String']>;
  shareChannel?: Maybe<ShareChannel>;
  shareInformationId?: Maybe<Scalars['ID']>;
  shareMessage?: Maybe<Scalars['String']>;
  shareTitle?: Maybe<Scalars['String']>;
  targetEmailAddress?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShippingDetailRequest = {
  carrier?: InputMaybe<Scalars['String']>;
  carrierUrl?: InputMaybe<Scalars['String']>;
  deliveryDate?: InputMaybe<Scalars['DateTime']>;
  expectedDeliveryDate?: InputMaybe<Scalars['DateTime']>;
  failedDeliveryReason?: InputMaybe<Scalars['String']>;
  orderId: Scalars['ID'];
  orderItemId: Scalars['ID'];
  shippingAddressId: Scalars['ID'];
  shippingDate?: InputMaybe<Scalars['DateTime']>;
  shippingId: Scalars['ID'];
  shippingInstructions?: InputMaybe<Scalars['String']>;
  shippingMethod?: InputMaybe<ShippingMethod>;
  shippingStatus?: InputMaybe<ShippingStatus>;
  trackingNum?: InputMaybe<Scalars['String']>;
};

export type ShippingDetailRequestForCreate = {
  carrier?: InputMaybe<Scalars['String']>;
  carrierUrl?: InputMaybe<Scalars['String']>;
  deliveryDate?: InputMaybe<Scalars['DateTime']>;
  expectedDeliveryDate?: InputMaybe<Scalars['DateTime']>;
  failedDeliveryReason?: InputMaybe<Scalars['String']>;
  orderId: Scalars['ID'];
  orderItemId: Scalars['ID'];
  shippingAddressId: Scalars['ID'];
  shippingDate?: InputMaybe<Scalars['DateTime']>;
  shippingInstructions?: InputMaybe<Scalars['String']>;
  shippingMethod?: InputMaybe<ShippingMethod>;
  shippingStatus?: InputMaybe<ShippingStatus>;
  trackingNum?: InputMaybe<Scalars['String']>;
};

export type ShippingDetailResponse = {
  __typename?: 'ShippingDetailResponse';
  carrier?: Maybe<Scalars['String']>;
  carrierUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deliveryDate?: Maybe<Scalars['DateTime']>;
  expectedDeliveryDate?: Maybe<Scalars['DateTime']>;
  failedDeliveryReason?: Maybe<Scalars['String']>;
  orderId?: Maybe<Scalars['ID']>;
  orderItemId?: Maybe<Scalars['ID']>;
  shippingAddressId?: Maybe<Scalars['ID']>;
  shippingDate?: Maybe<Scalars['DateTime']>;
  shippingId?: Maybe<Scalars['ID']>;
  shippingInstructions?: Maybe<Scalars['String']>;
  shippingMethod?: Maybe<ShippingMethod>;
  shippingStatus?: Maybe<ShippingStatus>;
  trackingNum?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShippingDetailsResponse = {
  __typename?: 'ShippingDetailsResponse';
  carrier?: Maybe<Scalars['String']>;
  carrierUrl?: Maybe<Scalars['String']>;
  deliveryDate?: Maybe<Scalars['Date']>;
  events?: Maybe<Array<Maybe<ShippingEventResponse>>>;
  expectedDeliveryDate?: Maybe<Scalars['Date']>;
  failedDeliveryReason?: Maybe<Scalars['String']>;
  shippingDate?: Maybe<Scalars['Date']>;
  shippingInstructions?: Maybe<Scalars['String']>;
  shippingStatus?: Maybe<ShippingStatus>;
  trackingNumber?: Maybe<Scalars['String']>;
};

export type ShippingEventResponse = {
  __typename?: 'ShippingEventResponse';
  eventDateTime?: Maybe<Scalars['DateTime']>;
  eventType?: Maybe<Scalars['String']>;
};

export enum ShippingMethod {
  CollectionPoint = 'COLLECTION_POINT',
  DeliveryAddress = 'DELIVERY_ADDRESS',
  Undefined = 'UNDEFINED'
}

/** ENUMS */
export enum ShippingStatus {
  Delivered = 'DELIVERED',
  DeliveryFailed = 'DELIVERY_FAILED',
  OnRoute = 'ON_ROUTE',
  OutForDelivery = 'OUT_FOR_DELIVERY',
  Shipped = 'SHIPPED',
  Undefined = 'UNDEFINED',
  WaitingForShipping = 'WAITING_FOR_SHIPPING'
}

export enum SortDirection {
  Ascending = 'ASCENDING',
  Descending = 'DESCENDING',
  Undefined = 'UNDEFINED'
}

export enum SortType {
  Date = 'DATE',
  Price = 'PRICE',
  Rating = 'RATING',
  Undefined = 'UNDEFINED'
}

export type Store = {
  __typename?: 'Store';
  area?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  onlineStoreType?: Maybe<OnlineStoreType>;
  provinceState?: Maybe<Scalars['String']>;
};

export type StoreCreateInput = {
  area: Scalars['String'];
  city: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  onlineStoreType: OnlineStoreType;
  provinceState?: InputMaybe<Scalars['String']>;
};

export type StoreInput = {
  area?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  onlineStoreType?: InputMaybe<OnlineStoreType>;
  provinceState?: InputMaybe<Scalars['String']>;
};

export type StorePageable = {
  page?: InputMaybe<Scalars['Int']>;
  sellerId?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<StoreSort>;
  sortDirection?: InputMaybe<SortDirection>;
};

export type StoreResponse = {
  __typename?: 'StoreResponse';
  content: Array<Store>;
  pageNo: Scalars['Int'];
  pageSize: Scalars['Int'];
  totalElements: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export enum StoreSort {
  City = 'CITY',
  Created = 'CREATED',
  Name = 'NAME'
}

export type SupportedLanguageResponse = {
  __typename?: 'SupportedLanguageResponse';
  id?: Maybe<Scalars['ID']>;
  language?: Maybe<Scalars['String']>;
};

export type TrackOrderItemResponse = {
  __typename?: 'TrackOrderItemResponse';
  collectionPoint?: Maybe<CollectionPointPickupResponse>;
  dateDelivered?: Maybe<Scalars['DateTime']>;
  deliveryOption: DeliveryOption;
  latestEventStatus: OrderItemHistoryEventType;
  orderItemId: Scalars['ID'];
  orderNumber: Scalars['String'];
  qrCodeAsBase64?: Maybe<Scalars['String']>;
  sellerBusinessName: Scalars['String'];
  sellerDirectDelivery?: Maybe<SellerDirectDeliveryResponse>;
  sellerLocation?: Maybe<SellerLocationPickupResponse>;
  shippingDetails?: Maybe<ShippingDetailsResponse>;
};

export type UserProfileResponse = {
  __typename?: 'UserProfileResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  geoLocation?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  selectedCountry?: Maybe<CountryResponse>;
  selectedSupportedLanguage?: Maybe<SupportedLanguageResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['ID']>;
  userName?: Maybe<Scalars['String']>;
  userType?: Maybe<UserType>;
};

export enum UserType {
  Admin = 'ADMIN',
  Buyer = 'BUYER',
  CompanyBuyer = 'COMPANY_BUYER',
  GuestBuyer = 'GUEST_BUYER',
  Seller = 'SELLER',
  Sop1 = 'SOP1',
  Sop2 = 'SOP2',
  Sop3 = 'SOP3',
  Sop4 = 'SOP4',
  Sop5 = 'SOP5',
  Sop6 = 'SOP6',
  Sop7 = 'SOP7',
  Undefined = 'UNDEFINED'
}

export type ValidateCodeRequest = {
  tokenCode: Scalars['String'];
  userId: Scalars['ID'];
  validationType: ValidationType;
};

export type ValidateCodeResponse = {
  __typename?: 'ValidateCodeResponse';
  extraMessage?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

export enum ValidationType {
  Email = 'EMAIL',
  Sms = 'SMS'
}

export type VariantPriceAndQuantityUpdateInput = {
  itemsInStock: Scalars['Int'];
  priceId: Scalars['ID'];
  retailPrice: Scalars['Float'];
  variantId: Scalars['ID'];
  wholeSalePrice: Scalars['Float'];
};

export type VariantSoldQuantityInput = {
  listingId: Scalars['String'];
  quantity: Scalars['Int'];
  variantId: Scalars['String'];
};

export enum WalletTransactionType {
  GiftPromotionExpired = 'GIFT_PROMOTION_EXPIRED',
  GiftPromotionGranted = 'GIFT_PROMOTION_GRANTED',
  GiftPromotionUsed = 'GIFT_PROMOTION_USED',
  MonthlyAggregate = 'MONTHLY_AGGREGATE',
  ProductPurchase = 'PRODUCT_PURCHASE',
  ProductRefund = 'PRODUCT_REFUND',
  SalamiCreditsRefill = 'SALAMI_CREDITS_REFILL',
  Undefined = 'UNDEFINED'
}

export type WishListRequest = {
  addedDateTime?: InputMaybe<Scalars['DateTime']>;
  productId: Scalars['ID'];
  profileId: Scalars['ID'];
  wishListId: Scalars['ID'];
};

export type WishListRequestForCreate = {
  addedDateTime?: InputMaybe<Scalars['DateTime']>;
  productId: Scalars['ID'];
  profileId: Scalars['ID'];
};

export type WishListResponse = {
  __typename?: 'WishListResponse';
  addedDateTime?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  productId?: Maybe<Scalars['ID']>;
  profileId?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  wishListId?: Maybe<Scalars['ID']>;
};

export type Wishlist = {
  __typename?: 'Wishlist';
  buyer?: Maybe<Buyer>;
  id: Scalars['ID'];
  product?: Maybe<Product>;
};

export type CreateRegistrationMutationVariables = Exact<{
  request: SellerProfileRequestForCreate;
}>;


export type CreateRegistrationMutation = { __typename?: 'Mutation', registerSeller?: { __typename?: 'SellerProfileResponse', userId?: string | null, sellerId?: string | null, userName?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, phoneNumber?: string | null, userType?: UserType | null, createdAt?: any | null, updatedAt?: any | null, businessName?: string | null, geoLocation?: string | null, brandName?: string | null, biography?: string | null, govCompanyId?: string | null, vstGstNumber?: string | null, usersRating?: string | null, sellerType?: SellerType | null, escrowAccountId?: string | null, avatarUrl?: string | null, shortName?: string | null, vatCode?: string | null, sellerName?: string | null, nationalIdNumber?: string | null, nationalIdNumberValidated?: boolean | null, taxNumber?: string | null, taxNumberValidated?: boolean | null, vatCodeValidated?: boolean | null, commChamberRegNum?: string | null, commChamberRegNumValidated?: boolean | null, selectedCountry?: { __typename?: 'CountryResponse', id?: string | null, countryName?: string | null } | null, selectedSupportedLanguage?: { __typename?: 'SupportedLanguageResponse', id?: string | null, language?: string | null } | null, sellerBillingDetails?: { __typename?: 'SellerBillingDetailsResponse', billingDetailsId?: string | null, sellerId?: string | null, accountName?: string | null, bankName?: string | null, bankAddress?: string | null, internationalRoutingCode?: string | null, domesticRoutingCode?: string | null, ifscCode?: string | null, accountNumber?: string | null, createdAt?: any | null, updatedAt?: any | null } | null, sellerContacts?: Array<{ __typename?: 'SellerContactResponse', contactId?: string | null, sellerId?: string | null, contactName?: string | null, contactEmail?: string | null, contactPhoneNumber?: string | null, supportEmail?: string | null, supportPhoneNumber?: string | null, createdAt?: any | null, updatedAt?: any | null } | null> | null } | null };

export type ValidateCodeMutationVariables = Exact<{
  request: ValidateCodeRequest;
}>;


export type ValidateCodeMutation = { __typename?: 'Mutation', validateCode?: { __typename?: 'ValidateCodeResponse', status?: boolean | null, extraMessage?: string | null } | null };


export const CreateRegistrationDocument = gql`
    mutation createRegistration($request: SellerProfileRequestForCreate!) {
  registerSeller(request: $request) {
    userId
    sellerId
    userName
    firstName
    lastName
    email
    phoneNumber
    userType
    createdAt
    updatedAt
    businessName
    geoLocation
    brandName
    biography
    govCompanyId
    vstGstNumber
    usersRating
    sellerType
    selectedCountry {
      id
      countryName
    }
    selectedSupportedLanguage {
      id
      language
    }
    escrowAccountId
    avatarUrl
    shortName
    vatCode
    sellerBillingDetails {
      billingDetailsId
      sellerId
      accountName
      bankName
      bankAddress
      internationalRoutingCode
      domesticRoutingCode
      ifscCode
      accountNumber
      createdAt
      updatedAt
    }
    sellerContacts {
      contactId
      sellerId
      contactName
      contactEmail
      contactPhoneNumber
      supportEmail
      supportPhoneNumber
      createdAt
      updatedAt
    }
    sellerName
    nationalIdNumber
    nationalIdNumberValidated
    taxNumber
    taxNumberValidated
    vatCodeValidated
    commChamberRegNum
    commChamberRegNumValidated
  }
}
    `;
export type CreateRegistrationMutationFn = Apollo.MutationFunction<CreateRegistrationMutation, CreateRegistrationMutationVariables>;

/**
 * __useCreateRegistrationMutation__
 *
 * To run a mutation, you first call `useCreateRegistrationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRegistrationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRegistrationMutation, { data, loading, error }] = useCreateRegistrationMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateRegistrationMutation(baseOptions?: Apollo.MutationHookOptions<CreateRegistrationMutation, CreateRegistrationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRegistrationMutation, CreateRegistrationMutationVariables>(CreateRegistrationDocument, options);
      }
export type CreateRegistrationMutationHookResult = ReturnType<typeof useCreateRegistrationMutation>;
export type CreateRegistrationMutationResult = Apollo.MutationResult<CreateRegistrationMutation>;
export type CreateRegistrationMutationOptions = Apollo.BaseMutationOptions<CreateRegistrationMutation, CreateRegistrationMutationVariables>;
export const ValidateCodeDocument = gql`
    mutation validateCode($request: ValidateCodeRequest!) {
  validateCode(request: $request) {
    status
    extraMessage
  }
}
    `;
export type ValidateCodeMutationFn = Apollo.MutationFunction<ValidateCodeMutation, ValidateCodeMutationVariables>;

/**
 * __useValidateCodeMutation__
 *
 * To run a mutation, you first call `useValidateCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useValidateCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [validateCodeMutation, { data, loading, error }] = useValidateCodeMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useValidateCodeMutation(baseOptions?: Apollo.MutationHookOptions<ValidateCodeMutation, ValidateCodeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ValidateCodeMutation, ValidateCodeMutationVariables>(ValidateCodeDocument, options);
      }
export type ValidateCodeMutationHookResult = ReturnType<typeof useValidateCodeMutation>;
export type ValidateCodeMutationResult = Apollo.MutationResult<ValidateCodeMutation>;
export type ValidateCodeMutationOptions = Apollo.BaseMutationOptions<ValidateCodeMutation, ValidateCodeMutationVariables>;