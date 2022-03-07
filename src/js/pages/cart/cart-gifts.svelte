<script type="ts">

import { CartGiftsProps } from "./types";
export let item : CartGiftsProps;
</script>

<div id="OrderGift">
    <h2>Váš dárek</h2>
    <p>Vyberte si svůj dárek k objednávce</p>
    <form action="/inshop/scripts/shop.aspx?action=addgift" method="post" class="orderGift">
        <h3 class="orderGiftRange">Dárky: <span>(min. objednávka: </span></h3>
        <ul class="orderGiftList">
            <li>{item.MinOrderPriceWithVat}</li>
        </ul>
        <input type="hidden" name="jsonresult" value="1">
        <input type="hidden" name="__EVENTARGUMENT" value="Action=RecalculateCart">
        <input type="hidden" name="action" value="RecalculateCart">
    </form>
</div>