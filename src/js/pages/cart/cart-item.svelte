<script type="ts">
import { element } from "svelte/internal";

import { CartItemProps } from "./types";
    export let item : CartItemProps;

function dataEdit() {
    
}
</script>

<tr class="product-row">
    <td class="product-view">
        <ul class="table-cells">
            <li class="photo">
                <img src="{item.photo}" alt="" />
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
                {@html item.CustomerPriceWithVat}
                <small>{@html item.CustomerPrice} (bez DPH)</small>
            </li>
            <li class="count">
                <input bind:value={item.count} on:change={dataEdit} name="CartItem_{item.IDCartItem}" type="text" id="CartItem_{item.IDCartItem}" autocomplete="off" class="form-control" >
                ks
            </li>
            <li class="total-price view-price ">
                <span class="PriceWithVatForRequiredAmount">{@html item.PriceWithVatForRequiredAmount}</span>
                <small>{@html item.PriceForRequiredAmount} (bez DPH)</small>
            </li>
        </ul>
    </td>
    <td class="product-remove">
        <ul class="table-cells">
            <li class="remove">
                <a href="scripts/shop.aspx?action=deletecartitem&IDCartItem={item.IDCartItem}"><i class="text-icon icon-remove"></i></a>
            </li>
        </ul>
    </td>
</tr>