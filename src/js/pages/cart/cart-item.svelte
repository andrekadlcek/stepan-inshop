<script type="ts">
import { element } from "svelte/internal";

import { CartItemProps } from "./types";
    export let item : CartItemProps;

    let productCount = 1;
    
    function totalPrice(count:number, price:any) {
        price = parseInt(price.replace("&nbsp;Kč", "").replace(/\s+/g, ''));
        let total = count * price;
        return total + " Kč";
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
                <input bind:value={productCount} name="CartItem_10" type="text" id="CartItem_10" autocomplete="off" class="form-control" >
                ks
            </li>
            <li class="total-price view-price ">
                <span class="PriceWithVatForRequiredAmount" data-catnumber="019" data-idcartitem="10">{totalPrice(productCount, item.CustomerPriceWithVat)}</span>
                <small>{totalPrice(productCount, item.CustomerPrice)} (bez DPH)</small>
            </li>
        </ul>
    </td>
    <td class="product-remove">
        <ul class="table-cells">
            <li class="remove">
                <a href="/"><i class="text-icon icon-remove"></i></a>
            </li>
        </ul>
    </td>
</tr>