<script type="ts">

import { completeData, recalculateCart } from '../../stores/cart-store'
export let showModal;

const closeModal = () => {
    showModal = false
    recalculateCart()
}
</script>

<!-- Na to gray pozadí bychom mohli dát nějaký onclick event který to zavře aby set o nemuselo dělat jen křížkem -->
{#if showModal}
    <div class="modal fade show" id="add2cartmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-modal="true" role="dialog">
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <h3 class="modal-title" style="">{$completeData.error}</h3>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <div on:click={closeModal}>X</div>
            </button>
            </div>
        </div>
        </div>
    </div>
{/if}

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