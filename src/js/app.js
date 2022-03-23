import './../css/before.css'
import './../css/main.css'
import './../css/after.css'
import SvelteCart from './pages/cart/'
import SvelteHeaderCart from './pages/cart/header-cart.svelte'


new SvelteCart({
    target: document.getElementById('Cart')
})

document.querySelector('div.block.cart').innerHTML = ""
new SvelteHeaderCart({
    target: document.querySelector('div.block.cart')
})

// #header > div.content > div > div > div > div.blocks > div.block-list > div.block.cart