<script type="ts">
import { cartStrings, removeItem } from "../../stores/cart-store";
import ItemCounter from "../../pages/cart/cart-item-counter.svelte";

import { CartItemProps } from "./types";
export let item : CartItemProps;

$ : {
  //  count = item.count;
}

const erase = (e) => {
    e.preventDefault()
    removeItem(item.IDCartItem)
}

</script>

<tr class="{item.AsGift ? 'product-row product-gift' : 'product-row'}">
    <td class="product-view">
        <ul class="table-cells">
            <li class="photo">
                <img src="{item.photo}" alt="{item.name}" />
            </li>
            <li class="name">
                <a href="{item.url}" title="{item.name}">{item.name}</a>
                {#if item.Components}
                <ul class="Components">
                     {#each item.Components as component}
                          <li>{component.name}</li>
                     {/each}
                </ul>
                {/if}
            
               
            </li>
        </ul>
    </td>
    <td class="product-price">
        <ul class="table-cells">
            <li class="unit-price view-price ">
                {#if item.AsGift == false}
                    {@html item.CustomerPriceWithVat}
                    <small>{@html item.CustomerPrice} ({$cartStrings.Cart_PriceWithoutTax})</small>
                {/if}
            </li>
                <ItemCounter item={item} />
            <li class="total-price view-price ">
                <span class="PriceWithVatForRequiredAmount">{@html item.PriceWithVatForRequiredAmount}</span>
                <small>{@html item.PriceForRequiredAmount} ({$cartStrings.Cart_PriceWithoutTax})</small>
            </li>
        </ul>
    </td>
    <td class="product-remove">
        <ul class="table-cells">
            <li class="remove">
                <a on:click="{erase}" href="/#"><i class="text-icon icon-remove"></i></a>
            </li>
        </ul>
    </td>
</tr>