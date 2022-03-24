<script type="ts">

import { CartItemProps } from "./types";
export let item : CartItemProps;
</script>

<tr class="header-cart-preview">
    <td class="count">
        {item.Count}
    </td>
    <td class="product">
        {item.name}        
        <br>
        <strong>
            {item.PriceWithVatForRequiredAmount}
        </strong> 
    </td>
    <td class="remove">
        <a href="scripts/shop.aspx?action=deletecartitem&amp;IDCartItem=256"><i class="text-icon icon-remove"></i></a> 
    </td>
</tr>