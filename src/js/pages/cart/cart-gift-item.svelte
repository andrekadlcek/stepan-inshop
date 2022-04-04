<script type="ts">
import { calculateGift } from "../../stores/cart-store";

import { CartGiftItem } from "./types";
export let item : CartGiftItem;
export let IsEnabled : boolean;

</script>



<li >
    <label>
        <input type="radio" on:click="{calculateGift}"  checked="{item.IsSelected}" id="{item.IDProduct.toString()}" name="productid" value="{item.IDProduct}" disabled={!IsEnabled} />
    {#if item.Picture != ""}
        <picture>
            <img class="img-responsive ls-is-cached lazyloaded" src="{item.Picture}" alt="{item.Name}">
        </picture>
    {/if}
    <span class="name">{item.Name}</span>
    </label>
</li>