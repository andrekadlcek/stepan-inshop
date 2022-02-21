import './../css/before.css'
import './../css/main.css'
import './../css/after.css'
import './../css/pages/cart.css'
import './../css/pages/showshoppingcart.css'
import SvelteCart from './pages/cart/'


new SvelteCart({
    target: document.getElementById('Cart')
})