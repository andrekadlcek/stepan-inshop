<script type="ts">
import { CartGiftsProps } from "./types";
import GiftItem from './cart-gift-item.svelte'
export let giftLevel : CartGiftsProps;

const groupGifts = true
let level

if (giftLevel.IsEnabled) {
    level = giftLevel
}
</script>

 <h3 class="orderGiftRange">
        {#if !giftLevel.IsEnabled}
             Další dárky, přiobjednáte-li ještě za {giftLevel.MissingOrderPrice} 
             {:else}
            <p class="orderGiftMissingPrice">Vyberte si k Vašemu nákupu jeden z následujících dárků</p>
        {/if}
        <span>(min. objednávka: {giftLevel.MinOrderPriceWithVat})</span>
    </h3>
    
    <ul class="orderGiftList {!giftLevel.IsEnabled && 'disabled'}">
        {#each giftLevel.Products as item}
            <GiftItem item={item} IsEnabled={giftLevel.IsEnabled}  />
        {/each}
    </ul>