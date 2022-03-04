import { writable } from 'svelte/store'
import { clearCartAction, getCartAction, getGiftsAction, recalculateCartAction, removeCartItemAction } from '../actions/cart-actions'
import { CardDataProps } from '../pages/cart/types'
import cashDom from 'cash-dom'


export const cartGifts = writable<CardDataProps>(null)
export const cartData = writable<CardDataProps>(null)
export const loadingCart = writable<boolean>(false)

// indikator nahravani kosiku
const setCartLoading = (data: boolean) => {
    loadingCart.set(data)
}
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
    console.log(res);
    
    cartData.set(res.data.Cart)
}

export const removeItem = async (productID: number) => {
    // setCartLoading(true)
    const res = await removeCartItemAction(productID)
    // setCartLoading(false)
    if (res.result) {
        cartData.set(res.data.Cart)
    }
    
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

}

getGifts()