<script type="ts">
import { element } from "svelte/internal";

import { CartItemProps } from "./types";
    export let item : CartItemProps;
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
        <ul>{@html item.CustomerPriceWithVat}</ul>
        <ul>{@html item.CustomerPrice}</ul>
    </td>
    <td class="product-remove"></td>

</tr>