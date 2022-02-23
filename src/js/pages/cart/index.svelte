<script type="ts">
import { getCartAction } from "../../actions/cart-actions";
import { CardDataProps, CartResultProps } from "./types";
import CartItem from './cart-item.svelte'
import { onMount } from "svelte";

// inicializace promenne kosiku 
let cartData : CardDataProps = null
let loading : boolean = true
const CartTotalPrice = (window as any).CartTotalPrice;
const cartDelete = (window as any).cartDelete;

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
        <tr class="table-footer">
            <td colspan="3">
                <div class="nav-buttons">
                    <div class="button CartContinue">
                        <a href="/" class="btn large labeled"><i class="label icon ico icon-preview"></i> Pokračovat v nákupu </a>
                    </div>
                    <div class="button CartDeleteAll">
                        <button class="btn large labeled"><i class="label icon ico icon-trash"></i> Smazat košík</button>
                    </div>
                </div>
            </td>
        </tr>
        <tr class="table-footer total-price">
            <td class="product-view">
            </td>
            <td class="product-price ">
                <ul class="table-cells">
                    <li class="unit-price view-price">
                        <h3>
                            Cena nákupu:
                        </h3>
                    </li>
                    <li class="total-price view-price">
                            <span class="Cart_TotalPrice-PriceWithVat">{@html cartData.Cart_TotalPrice.price.PriceWithVat}</span>
                                
                                <small>
                                    <span class="Cart_TotalPrice-Price">{@html cartData.Cart_TotalPrice.price.Price}</span> (Celkem bez DPH)
                                </small>
                    </li>
                </ul>
            </td>
            <td class="product-remove">
                <ul class="table-cells">
                    <li class="remove"></li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

            {:else}
            <p>Košík je prázdny</p>
        {/if}
    {/if}
