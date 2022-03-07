export interface CartItemProps {
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

export interface CartGiftItem {
    IDProduct: number;
    IsSelected: boolean;
    Name: string;
    Picture: string;
    Thumbnail: string
}

export interface CartGiftsProps {
    IsEnabled: boolean;
    MinOrderPriceWithVat: string;
    MissingOrderPrice: string;
    MissingOrderPriceNumber: number;
    Products?: CartGiftItem[]
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