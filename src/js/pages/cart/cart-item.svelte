<script type="ts">
import { element } from "svelte/internal";

import { CartItemProps } from "./types";
    export let item : CartItemProps;
    let CustomerPriceWithVat = item.CustomerPriceWithVat.replace("&nbsp;", " ");
    let CustomerPrice = item.CustomerPrice.replace("&nbsp;", " ").concat(' ( bez DPH )');
    let ProductParam = item.Components;

    function load() {
        if (ProductParam != undefined) {
            ProductParam.forEach(element => {
                return element.name  
            });
        } else {
            return ""
        }
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
                <ul class="Components">
                    <li>
                        {load()}
                        <!--
                        {#each ProductParam as detail}
                            {detail.name}
                        {/each}
                        -->
                    </li>
                </ul>
            </li>
        </ul>
    </td>
    <td class="product-price">
        <ul>{CustomerPriceWithVat}</ul>
        <ul>{CustomerPrice}</ul>
    </td>
    <td class="product-remove"></td>

</tr>