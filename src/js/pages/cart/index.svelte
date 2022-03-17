<script type="ts">
import CartItem from './cart-item.svelte'
import { cartData, cartGifts, clearCart, loadingCart } from "../../stores/cart-store";
import GiftLevel from './gift-level.svelte'

// povolení zobrazení dárků
let giftsEnabled = true;

const clearAll = (e) => {
    e.preventDefault()
    clearCart()
}

</script>

<div class="page-header">
    <h1>Košík</h1>
</div>

    {#if $loadingCart}
        <p>Pracuji</p>
    {:else}
        {#if $cartData}
<form id="cart-form" action="/inshop/scripts/shop.aspx" method="post">
    <table class="cart-list">
        <tbody>
            <tr class="table-header">
                <td class="product-view">
                    <ul class="table-cells">
                        <li class="photo"></li>
                        <li class="name">
                            Název
                        </li>
                    </ul>
                </td>
                <td class="product-price">
                    <ul class="table-cells">
                        <li class="unit-price view-price">Jednotková cena</li>
                        <li class="unit-price view-price">Počet</li>
                        <li class="unit-price view-price">Celková cena</li>
                    </ul>
                </td>
                <td class="product-remove">
                    <ul class="table-cells">
                        <li class="remove"></li>
                    </ul>
                </td>
            </tr>
            {#each $cartData.items as item}
                    <CartItem item={item} />
            {/each}
            <tr class="table-footer">
                <td colspan="3">
                    <div class="nav-buttons">
                        <div class="button CartContinue">
                            <a href="/" class="btn large labeled"><i class="label icon ico icon-preview"></i> Pokračovat v nákupu </a>
                        </div>
                        <div class="button CartDeleteAll">
                            <button on:click="{clearAll}" class="btn large labeled"><i class="label icon ico icon-trash"></i> Smazat košík</button>
                        </div>
                    </div>
                </td>
            </tr>
            <tr class="table-footer total-price">
                <td class="product-view">
                </td>
                <td class="product-price ">
                    <ul class="table-cells">
                        <li class="unit-price view-price">
                            <h3>
                                Cena nákupu:
                            </h3>
                        </li>
                        <li class="total-price view-price">
                                <span class="Cart_TotalPrice-PriceWithVat">{@html $cartData.Cart_TotalPrice.price.PriceWithVat}</span>
                                    
                                    <small>
                                        <span class="Cart_TotalPrice-Price">{@html $cartData.Cart_TotalPrice.price.Price}</span> (Celkem bez DPH)
                                    </small>
                        </li>
                    </ul>
                </td>
                <td class="product-remove">
                    <ul class="table-cells">
                        <li class="remove"></li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>
    <input type="hidden" name="jsonresult" value="1">
    <input type="hidden" name="__EVENTARGUMENT" value="Action=RecalculateCart">
    <input type="hidden" name="action" value="RecalculateCart">
    <tr class="checkout checkout-tr-button">
        <td colspan="3">
            <div class="checkout-button">
                <button class="btn xlarge btn-primary labeled labeled-right"><i class="label icon ico icon-next"></i> Přejít do pokladny</button><input name="action" type="hidden" value="ShowCheckout">
            </div>
        </td>
    </tr>
</form>

        {#if $cartGifts && giftsEnabled}
             <div id="OrderGift">
                    {#if $cartGifts.configs.titleenabled}
                        <h2>{$cartGifts.gettext.OrderGift_Title}</h2>    
                    {/if}
                    {#if !$cartGifts.levels[0].IsEnabled}
                          <p class="orderGiftMissingPrice">{$cartGifts.gettext.OrderGift_subtitle_SmallOrder.replace('{MissingOrderPrice}', $cartGifts.levels[0].MissingOrderPrice)}</p>
                          {:else if $cartGifts.levels[0].IsEnabled}
                          <p class="orderGiftMissingPrice">Vyberte si svůj dárek k objednávce</p>
                    {/if}
                   

                    <form id="orderGiftForm" action="/inshop/scripts/shop.aspx?action=addgift">
                        {#each $cartGifts.levels as item}
                                <GiftLevel giftLevel={item}/>
                        {/each}
                        <input type="hidden" name="action" value="addgift">
                        <input name="ctl01$ctl30$ctl00$ctl00$ctl02$ctl04$ctl00$ctl00$ctl01$ctl02$ctl03$ctl01$replace" type="hidden" id="ctl01_ctl30_ctl00_ctl00_ctl02_ctl04_ctl00_ctl00_ctl01_ctl02_ctl03_ctl01_replace" value="1">
                    </form>
            </div>
        {/if}

       

        {:else}
            <p>Košík je prázdny</p>
        {/if}
    {/if}
