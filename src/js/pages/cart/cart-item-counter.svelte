<script type="ts">
import { useEffect } from "../../hooks/useeffect";
import { errorMessage, openError, recalculateCart } from "../../stores/cart-store";
import { CartItemProps } from "./types";
export let item : CartItemProps;

let timer;
let count = item.count

// on change event
const inputSet = (event) => {
        let _count
        // obrana aby neslo vlozit negativni hodnoty
        if(+event.target.value > 1){
            _count = +event.target.value
        }
        else{
            _count = 1
        }
}

const increase = () => {
     count++
    
}
const decrease = () => {
     count--
}




useEffect(() => {
    if(item.count !== count){

        if(count < item.PieceAmount){
            count = item.PieceAmount
            openError.set(true)
            errorMessage.set(`Min ${item.PieceAmount}`)
        }

        clearTimeout(timer);
        timer = setTimeout(() => {
            recalculateCart();
        }, 750);
    }
}, () => [count]);



useEffect(() => {
		count = item.count
	}, () => [item]);
</script>

<li class="count">
    {#if item.AsGift == false}
        <div class="cart-counter--container">
            <div on:click="{decrease}" class="cart-counter--arrow"><p>-</p></div>
                <input bind:value={count} on:input="{inputSet}" type=number name="CartItem_{item.IDCartItem}" id="CartItem_{item.IDCartItem}" autocomplete="off" class="form-control cart-counter--input" >
            <div on:click="{increase}" class="cart-counter--arrow"><p>+</p></div>
        </div>
        {:else}
        <input value="1" type=number name="CartItem_{item.IDCartItem}" id="CartItem_{item.IDCartItem}" autocomplete="off" class="form-control" disabled>                    
    {/if}
</li>

<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
.cart-counter--container {
    border: 1px solid rgb(160, 160, 160);
    width: 100px;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
}
.cart-counter--arrow {
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    transition: 200ms;
    cursor: pointer;
}
.cart-counter--arrow:hover {
    background-color: gainsboro;
}
.cart-counter--input {
    border: none;
    padding: 0;
    width: 35px !important;
}
.cart-counter--input:focus {
    outline: none;
}
</style>