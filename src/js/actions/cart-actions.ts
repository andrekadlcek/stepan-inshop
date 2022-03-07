import axios from 'axios'



export const getCartAction = () => {
    return axios.get('/inshop/scripts/shop.aspx?action=showshoppingcart&jsonresult=1').then(res => res.data)
}


export const recalculateCartAction = (data) => {
    return axios.post('/inshop/scripts/shop.aspx', data).then(res => res.data)
}


export const removeCartItemAction = (IDCartItem) => {
    return axios.get(`/inshop/scripts/shop.aspx?action=deletecartitem&IDCartItem=${IDCartItem}&jsonresult=1`).then(res => res.data)
}

export const clearCartAction = () => {
    return axios.get(`/inshop/scripts/shop.aspx?action=ClearCart&ajax=1&jsonresult=1`).then(res => res.data)
}

export const getGiftsAction = () => {
    return axios.get('/inshop/scripts/shop.aspx?action=ViewTemplate&Path=OrderGiftJson&LayoutNotIncluded=1&ajax=1').then(res => res)
}