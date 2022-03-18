export interface CartItemProps {
    AsGift: boolean;
    Cart_CatalogueNumber: string;
    CatalogueNumber: string;
    Count: string;
    CustomerPrice: string;
    CustomerPriceWithVat: string;
    IDCartItem: number;
    IDProduct: number;
    IsConfigurableAsembly: boolean;
    PriceForRequiredAmount: string;
    PriceWithVatForRequiredAmount: string;
    count: number;
    customerPrice: number;
    customerPriceWithVat: number;
    name: string;
    photo: string;
    priceForRequiredAmount: number;
    priceWithVatForRequiredAmount: number;
    url: string;
    viewAsLink: boolean;
    Components?: {
        count: number;
        idcomponent: number;
        name: string;
        price: number;
        priceForCount: number;
        priceWithVat: number;
        priceWithVatForCount: number;
    }[]
}

export interface CartDataProps {
    Cart_TotalPrice: {
        price: {
            Price: string;
            PriceWithVat: string;
            price: number;
            priceWithVat: number;
        }
    }
    items: CartItemProps[]
}

export interface CartResultProps {
    result: boolean;
    data: {
        Cart?: CartDataProps;
        cartisempty?: boolean;
    }
}
export interface CartGiftsConfigsProps {
    IsOrderGiftInCart: boolean;
    subtitleenabled: boolean;
    titleenabled: boolean;
}
export interface CartGiftsTextProps {
    OrderGift_Title: string;
    OrderGift_subtitle_InCart_Change: string;
    OrderGift_subtitle_InCart_OnlyOne: string;
    OrderGift_subtitle_NotInCart: string;
    OrderGift_subtitle_SmallOrder: string;
}
export interface CartGiftsLevelsProps {
    IsEnabled: boolean;
    MinOrderPriceWithVat: string;
    MissingOrderPrice: string;
    MissingOrderPriceNumber: number;
    Products?: CartGiftItem[]
}
export interface CartGiftItem {
    IDProduct: number;
    IsSelected: boolean;
    Name: string;
    Picture: string;
    Thumbnail: string
}
export interface CartGiftContentProps {
    configs?: CartGiftsConfigsProps;
    gettext?: CartGiftsTextProps;
    levels?: CartGiftsLevelsProps[];
}
export interface CartStringsProps {
    Cart_CatalogueNumber: string;
    Cart_Checkout: string;
    Cart_Continue: string;
    Cart_Count: string;
    Cart_DeleteAll: string;
    Cart_Name: string;
    Cart_PriceWithoutTax: string;
    Cart_SumPriceWithoutTax: string;
    Cart_Title: string;
    Cart_TotalPrice: string;
    Cart_TotalPriceSum: string;
    Cart_Unit_Price: string;
    LoyaltyCart_UsedPointsInThisOrderLabel: string;
    PackShortcut: string
}