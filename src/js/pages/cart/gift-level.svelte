<script type="ts">
import { CartGiftContentProps, CartGiftsLevelsProps } from "./types";
import GiftItem from './cart-gift-item.svelte'
import { cartGifts } from "../../stores/cart-store";
export let giftLevel : CartGiftsLevelsProps;

let giftCategoryCount = -1;
let slectedGift = false;

export const isEnabled = () => {
    for (let i = 0; i < $cartGifts.levels.length; i++) {
        giftCategoryCount++
        // console.log($cartGifts.levels[giftCategoryCount].Products.length);
        $cartGifts.levels[giftCategoryCount].Products.forEach(element => {
            if (element.IsSelected) {
                slectedGift = true
            } else {
                return
            }
            
        });
    }
}

console.log(slectedGift);
</script>

 <h3 class="orderGiftRange">
    {#if !giftLevel.IsEnabled}
            Další dárky, přiobjednáte-li ještě za {giftLevel.MissingOrderPrice}
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