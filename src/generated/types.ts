export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Currency: 'USD' | 'EUR' | 'GBP';
  DateTime: Date;
};

export enum ActionType {
  Accept = 'ACCEPT',
  Archive = 'ARCHIVE',
  Cancel = 'CANCEL',
  Create = 'CREATE',
  FilterByContact = 'FILTER_BY_CONTACT',
  FilterByProperty = 'FILTER_BY_PROPERTY',
  Refuse = 'REFUSE',
  Update = 'UPDATE',
  View = 'VIEW'
}

export type ContactOffersFilter = {
  /** True - only active offers, false - only archived offers */
  archived: Scalars['Boolean'];
  /** Filter by contact id */
  contactId: Scalars['ID'];
};

export type ContactStats = {
  __typename?: 'ContactStats';
  _id: Scalars['ID'];
  closestOfferExpirations: Array<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  currency: Scalars['Currency'];
  hasAcceptedOffer: Scalars['Boolean'];
  highestOfferBid: Scalars['Float'];
  numberOfPendingOffers: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
};

export type ContactStatsFilter = {
  contactId: Scalars['ID'];
};

export type CreateOfferInput = {
  buyers: Array<Scalars['ID']>;
  financialDetails: FinancialDetailsInput;
  notes?: InputMaybe<Scalars['String']>;
  owners: Array<Scalars['ID']>;
  parentId?: InputMaybe<Scalars['String']>;
  propertyId: Scalars['ID'];
  validUntil?: InputMaybe<Scalars['DateTime']>;
};

export type FinancialDetails = {
  __typename?: 'FinancialDetails';
  /** Owner Net Amount */
  agencyTotalFee: Scalars['Float'];
  /** Buyer Fee Fixed */
  buyerFixedFee: Scalars['Float'];
  /** Buyer Gross Amount */
  buyerGrossAmount: Scalars['Float'];
  /** Buyer Fee Percentage */
  buyerPercentageFee: Scalars['Float'];
  /** Buyer Total Fee */
  buyerTotalFee: Scalars['Float'];
  /** Currency */
  currency: Scalars['Currency'];
  /** Direction */
  direction: OfferDirection;
  /** Owner Fee Fixed */
  ownerFixedFee: Scalars['Float'];
  /** Owner Gross Amount */
  ownerNetAmount: Scalars['Float'];
  /** Owner Fee Percentage */
  ownerPercentageFee: Scalars['Float'];
  /** Owner Total Fee */
  ownerTotalFee: Scalars['Float'];
  /** Transaction Amount */
  transactionAmount: Scalars['Float'];
};

export type FinancialDetailsInput = {
  buyerFixedFee: Scalars['Float'];
  buyerGrossAmount?: InputMaybe<Scalars['Float']>;
  buyerPercentageFee: Scalars['Float'];
  currency: Scalars['Currency'];
  direction: OfferDirection;
  ownerFixedFee: Scalars['Float'];
  ownerNetAmount?: InputMaybe<Scalars['Float']>;
  ownerPercentageFee: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptOffer: Offer;
  archiveOffer: Offer;
  cancelOffer: Offer;
  createOffer: Offer;
  refuseOffer: Offer;
  restoreOffer: Offer;
  updateOffer: Offer;
};


export type MutationAcceptOfferArgs = {
  offerId: Scalars['ID'];
};


export type MutationArchiveOfferArgs = {
  offerId: Scalars['ID'];
};


export type MutationCancelOfferArgs = {
  offerId: Scalars['ID'];
};


export type MutationCreateOfferArgs = {
  offerInput: CreateOfferInput;
};


export type MutationRefuseOfferArgs = {
  offerId: Scalars['ID'];
};


export type MutationRestoreOfferArgs = {
  offerId: Scalars['ID'];
};


export type MutationUpdateOfferArgs = {
  offerInput: UpdateOfferInput;
};

export type Offer = {
  __typename?: 'Offer';
  /** Accepted At */
  acceptedAt?: Maybe<Scalars['DateTime']>;
  /** Archived At */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** Buyers */
  buyers: Array<OfferContact>;
  /** Cancelled At */
  cancelledAt?: Maybe<Scalars['DateTime']>;
  /** Company ID */
  companyId: Scalars['ID'];
  /** Created At */
  createdAt: Scalars['DateTime'];
  /** Created By */
  createdBy: Scalars['ID'];
  /** Offer Financial Details */
  financialDetails: FinancialDetails;
  /** Offer ID */
  id?: Maybe<Scalars['ID']>;
  /** Notes */
  notes?: Maybe<Scalars['String']>;
  /** Owners */
  owners: Array<OfferContact>;
  /** Parent Offer Id */
  parentId?: Maybe<Scalars['String']>;
  /** Property ID */
  propertyId: Scalars['ID'];
  /** Refused At */
  refusedAt?: Maybe<Scalars['DateTime']>;
  /** Offer Status */
  status: OfferStatus;
  /** Updated At */
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** Valid Until */
  validUntil?: Maybe<Scalars['DateTime']>;
};

export type OfferContact = {
  __typename?: 'OfferContact';
  id: Scalars['ID'];
};

export enum OfferDirection {
  BuyerToOwner = 'BUYER_TO_OWNER',
  OwnerToBuyer = 'OWNER_TO_BUYER'
}

export enum OfferStatus {
  Accepted = 'ACCEPTED',
  Cancelled = 'CANCELLED',
  Pending = 'PENDING',
  Refused = 'REFUSED'
}

export type PropertyOffersFilter = {
  /** True - only active offers, false - only archived offers */
  archived: Scalars['Boolean'];
  /** Filter by property id */
  propertyId: Scalars['ID'];
};

export type PropertyStats = {
  __typename?: 'PropertyStats';
  _id: Scalars['ID'];
  closestOfferExpirations: Array<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  currency: Scalars['Currency'];
  hasAcceptedOffer: Scalars['Boolean'];
  highestOfferBid: Scalars['Float'];
  numberOfPendingOffers: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
};

export type PropertyStatsFilter = {
  propertyId: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  /** Get contact offers */
  contactOffers: Array<Offer>;
  /** Get statistics for a contact */
  contactStats?: Maybe<ContactStats>;
  /** Get offer by id */
  offer?: Maybe<Offer>;
  /** Get property offers */
  propertyOffers: Array<Offer>;
  /** Get statistics for a property */
  propertyStats?: Maybe<PropertyStats>;
  version: Scalars['String'];
};


export type QueryContactOffersArgs = {
  filter: ContactOffersFilter;
};


export type QueryContactStatsArgs = {
  filter: ContactStatsFilter;
};


export type QueryOfferArgs = {
  offerId: Scalars['ID'];
};


export type QueryPropertyOffersArgs = {
  filter: PropertyOffersFilter;
};


export type QueryPropertyStatsArgs = {
  filter: PropertyStatsFilter;
};

export type UpdateOfferInput = {
  buyers?: InputMaybe<Array<Scalars['ID']>>;
  financialDetails?: InputMaybe<FinancialDetailsInput>;
  id: Scalars['ID'];
  notes?: InputMaybe<Scalars['String']>;
  owners?: InputMaybe<Array<Scalars['ID']>>;
  validUntil?: InputMaybe<Scalars['DateTime']>;
};
