<script type="ts">
import { useEffect } from "../../hooks/useeffect";
import { recalculateCart } from "../../stores/cart-store";

import { CartItemProps } from "./types";
export let item : CartItemProps;
let timer;
let count = item.count

// on change event
const change = (event) => {
        let _count
        // obrana aby neslo vlozit negativni hodnoty
        if(+event.target.value > 1){
            _count = +event.target.value
        }
        else{
            _count = 1
        }

        // timer aby se prepocital kosik po 0.7 sekund - scenar kdy zakaznik zada dvouciferne cislo aby neprepocitaval hned u prvniho
        clearTimeout(timer);
		timer = setTimeout(() => {
            count = _count
		}, 750);
}

const erase = (e) => {
    e.preventDefault()
    console.log(`akce vymaze item id: ${item.IDProduct}`);
    
}
 useEffect(() => {
		return () => recalculateCart();
	}, () => [count]);

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
                <input bind:value={count} on:input="{change}" type=number name="CartItem_{item.IDCartItem}" id="CartItem_{item.IDCartItem}" autocomplete="off" class="form-control" >
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
                <a on:click="{erase}" href="/#"><i class="text-icon icon-remove"></i></a>
            </li>
        </ul>
    </td>
</tr>