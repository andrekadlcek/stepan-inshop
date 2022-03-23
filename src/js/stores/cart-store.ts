import { writable } from 'svelte/store'
import { clearCartAction, getCartAction, getGiftsAction, recalculateCartAction, removeCartItemAction } from '../actions/cart-actions'
import { CartCompleteDataProps, CartDataProps, CartGiftContentProps, CartStringsProps } from '../pages/cart/types'
import cashDom from 'cash-dom'


export const cartGifts = writable<CartGiftContentProps>(null)
export const completeData = writable<CartCompleteDataProps>(null)
export const cartData = writable<CartDataProps>(null)
export const loadingCart = writable<boolean>(false)
export const openError = writable<boolean>(false)
export const errorMessage = writable<string>(null)
export const cartStrings = writable<CartStringsProps>((window as any).cartStrings)

// indikator nahravani kosiku
const setCartLoading = (data: boolean) => {
    loadingCart.set(data)
}
const getCompleteCartData = async () => {
    const res = await getCartAction()
    completeData.set(res)
    console.log(res);
}
getCompleteCartData()

// funkce pro nacteni stavu kosiku
const getCartData = async () => {
    setCartLoading(true)
    const res = await getCartAction()
    if (res.result && !res.data.cartisempty) {
        // setter pro vlozeni dat do cartData 
        cartData.set(res.data.Cart)
    }    
    setCartLoading(false)
}

// nacteni kosiku u prvniho nacteni
getCartData()

// funkce pro prepocitani kosiku
export const recalculateCart = async () => {
    const formData = cashDom('#cart-form').serialize()
    // k form data se pridavaji akce aby api poznalo ze jde o prepocet
    const res = await recalculateCartAction(formData)
    
    if (!res.result){
        openError.set(true)
        errorMessage.set(res.error)
    }
    cartData.set(res.data.Cart)
    completeData.set(res)    
    getGifts()
}

export const removeItem = async (productID: number) => {
    // setCartLoading(true)
    const res = await removeCartItemAction(productID)
    // setCartLoading(false)
    if (res.result) {
        cartData.set(res.data.Cart)
    }
    recalculateCart()
    
}
export const clearCart = async () =>{
    const res = await clearCartAction();
    if (res.result) {
        cartData.set(res.data.Cart)
    }
}

export const getGifts = async () =>{
    const res = await getGiftsAction();
    cartGifts.set(res.data)
    // console.log(res.data);
    
}

getGifts()

export const calculateGift = async () => {
    const giftData = cashDom('#orderGiftForm').serialize()
    await recalculateCartAction(giftData);

    recalculateCart()
}
