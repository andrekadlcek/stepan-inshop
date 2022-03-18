<script type="ts">
import { CartGiftContentProps, CartGiftsLevelsProps } from "./types";
import GiftItem from './cart-gift-item.svelte'
import { cartGifts } from "../../stores/cart-store";
export let giftLevel : CartGiftsLevelsProps;

</script>

 <h3 class="orderGiftRange">
    {#if !giftLevel.IsEnabled}
            <p class="orderGiftMissingPrice">{$cartGifts.gettext.OrderGift_subtitle_SmallOrder.replace('{MissingOrderPrice}', giftLevel.MissingOrderPrice)}</p>
            {:else}
            Dostupné dárky
    {/if}
    <span>(min. objednávka: {giftLevel.MinOrderPriceWithVat})</span>
</h3>

<ul class="orderGiftList {!giftLevel.IsEnabled && 'disabled'}">
    {#each giftLevel.Products as item}
        <GiftItem item={item} IsEnabled={giftLevel.IsEnabled}  />
    {/each}
</ul>