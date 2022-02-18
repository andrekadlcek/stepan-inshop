<script type="ts">
import { getCartAction } from "../../actions/cart-actions";
import { CardDataProps, CartResultProps } from "./types";
import CartItem from './cart-item.svelte'
import { onMount } from "svelte";

// inicializace promenne kosiku 
let cartData :CardDataProps = null
let loading : boolean = true

// funkce pro nacteni kosiku z api
const getCart = async (): Promise<CardDataProps>  => {
    const res:CartResultProps = await getCartAction()
    if(res.result && !res.data.cartisempty){
        return res.data.Cart
    }
    else{
        return null
    }
}

// u prvniho nacteni spusti
onMount( async () => {
        cartData = await getCart()
        loading = false
})

</script>


<div class="page-header">
    <h1>Košík</h1>
     {#if loading}
        <p>Pracuji</p>
    {:else}
        {#if cartData}
            <ul>
                {#each cartData.items as item}
                    <CartItem item={item} />
                {/each}
            </ul>
            {:else}
            <p>Košík je prázdny</p>
        {/if}
    {/if}
    
</div>