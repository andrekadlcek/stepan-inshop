<script type="ts">

import Item from '../cart/header-cart-item.svelte'
import { cartData, cartStrings } from "../../stores/cart-store";

</script>

{#if $cartData}
     
<a href="/inshop/scripts/shop.aspx?action=showshoppingcart" class="inner bdr">
    <div class="is-icon icon-cart bdr">  </div> <!-- icon -->
    <div class="summary">
        <span class="monitor">
            <strong>{$cartStrings.Cart_Title}</strong>
            <span id="headerCartCount">{$cartData.items.filter(i => i).length}</span> položek
            <span id="headerCartPrice" class="price">{@html $cartData.Cart_TotalPrice.price.PriceWithVat}</span>
        </span>
        <span class="device"><strong>{$cartData.items.filter(i => i).length}</strong></span>
    </div> <!-- summary -->
</a> <!-- inner -->
<div id="cartPreview" class="cart-preview">
    <table>
        <tbody>
            {#each $cartData.items as item}
                    <Item item={item} />
            {/each}
        </tbody>
    <tfoot>
        <tr>
            <td></td>
            <td class="summprice" colspan="2">
                <span id="cartHeaderSummprice">{@html $cartData.Cart_TotalPrice.price.PriceWithVat}</span>
                <small>
                    <span id="cartHeaderSummpriceWithoutVat">{@html $cartData.Cart_TotalPrice.price.Price}</span> ({$cartStrings.Cart_SumPriceWithoutTax})
                </small>
            </td>
        </tr>
    </tfoot>
    </table>
    <div class="go2cart">
        <a class="btn btn-primary large" href="/inshop/scripts/shop.aspx?action=showshoppingcart"><span>{$cartStrings.Cart_Title}</span></a>
    </div> <!-- go2cart -->
</div> <!-- cart-preview -->
{/if}
