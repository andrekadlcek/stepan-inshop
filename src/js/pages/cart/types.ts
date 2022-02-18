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
}

export interface CardDataProps {
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
        Cart?: CardDataProps;
        cartisempty?: boolean;
    }
}