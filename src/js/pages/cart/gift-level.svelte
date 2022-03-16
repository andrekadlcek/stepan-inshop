<script type="ts">
import { CartGiftContentProps } from "./types";
import GiftItem from './cart-gift-item.svelte'
export let giftLevel : CartGiftContentProps;


</script>

 <!-- <h3 class="orderGiftRange">
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
    </ul> -->