<script type="ts">
import { getCartAction } from "../../actions/cart-actions";
import { CardDataProps, CartResultProps } from "./types";
import CartItem from './cart-item.svelte'
import { onMount } from "svelte";

// inicializace promenne kosiku 
let cartData : CardDataProps = null
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
</div>

    {#if loading}
        <p>Pracuji</p>
    {:else}
        {#if cartData}
            <table class="cart-list">
    <tbody>
        <tr class="table-header">
            <td class="product-view">
                <ul class="table-cells">
                    <li class="photo"></li>
                    <li class="name">
                        Název
                    </li>
                </ul>
            </td>
            <td class="product-price">
                <ul class="table-cells">
                    <li class="unit-price view-price">Jednotková cena</li>
                    <li class="unit-price view-price">Počet</li>
                    <li class="unit-price view-price">Celková cena</li>
                </ul>
            </td>
            <td class="product-remove">
                <ul class="table-cells">
                    <li class="remove"></li>
                </ul>
            </td>
        </tr>
           {#each cartData.items as item}
                    <CartItem item={item} />
            {/each}
    </tbody>
</table>

            {:else}
            <p>Košík je prázdny</p>
        {/if}
    {/if}
