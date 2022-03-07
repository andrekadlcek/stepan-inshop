<script type="ts">
import { CartGiftItem } from "./types";
export let item : CartGiftItem;
export let IsEnabled : boolean;
</script>



<li>
    <input type="radio" id="{item.IDProduct.toString()}" name="productid" value="{item.IDProduct}" disabled={!IsEnabled} >
    <span class="name">{item.Name}</span>
</li>