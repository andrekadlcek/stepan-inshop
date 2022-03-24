<script type="ts">
import { removeItem } from "../../stores/cart-store";


import { CartItemProps } from "./types";
export let item : CartItemProps;

const erase = (e) => {
    e.preventDefault()
    removeItem(item.IDCartItem)
}

</script>

<tr class="header-cart-preview">
    <td class="count">
        {item.Count}
    </td>
    <td class="product">
        {item.name}        
        <br>
        <strong>
            {@html item.PriceWithVatForRequiredAmount}
        </strong> 
    </td>
    <td class="remove">
        <a on:click="{erase}" href="/#"><i class="text-icon icon-remove"></i></a> 
    </td>
</tr>