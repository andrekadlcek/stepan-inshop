<script type="ts">

import { errorMessage, openError } from '../../stores/cart-store'
// console.log("openError", $openError);
export let headline;

</script>

<div class="modal fade show" id="add2cartmodal" on:click="{() => openError.set(false)}">
    <div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
        <h3 class="modal-title" style="">{headline}</h3>
        <button on:click="{() => openError.set(false)}" type="button" class="close" data-dismiss="modal" aria-label="Close">
            <div>X</div>
        </button>
        </div>
    </div>
    </div>
</div>


<style>
.modal {
    background-color: rgba(128, 128, 128, 0.445);
    display: flex !important;
    justify-content: center;
    align-items: center;
}
.modal-dialog {
    max-width: none;
}
.modal-content {
    width: 50vw;
    height: auto;
    gap: 10px;
}
.modal-header {
    align-items: center;
    padding: 2rem;
}
</style>