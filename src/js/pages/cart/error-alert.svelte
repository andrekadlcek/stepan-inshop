<script type="ts">

</script>

<!-- Na to gray pozadí bychom mohli dát nějaký onclick event který to zavře aby set o nemuselo dělat jen křížkem -->
<div class="modal fade show" id="add2cartmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-modal="true" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title" style="">U toho produktu bohužel nemáme více kusů skladem.</h3>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <a href="/kosik">X</a>
            <!-- Asi se u toho nechceme moc zdržovat jen jsem viděl nějaký tutorial kde dělali modal právě ve svelte a vypadalo to moc hezky -->
          </button>
        </div>
        <h4 style="text-align: center;">Podobné produkty</h4>
        <div class="modal-body">
        <!-- Tady by místo toho kódu byla ještě komponenta co by generovala produkty v kategorii u které produkt nebyl skladem. -->
        <!-- styly jsem zkopíroval, to by chtělo ještě doladit. -->
           <div>
               <img src="#" alt="" style="background-color: blueviolet; width: 100px; height: 100px;">
               <h4>Nazev produktu</h4>
               <div class="add-to">
	
                    <div class="buy">
                        <a class="btn large labeled call2action" href="/"> 
                            <i class="label is-icon ico ico-add2cart"></i>
                            <span>Na produkt</span>
                        </a>
                    </div>
                
                </div>
           </div>
           <div>
            <img src="#" alt="" style="background-color: blueviolet; width: 100px; height: 100px;">
            <h4>Nazev produktu</h4>
            <div class="add-to">
 
                 <div class="buy">
                     <a class="btn large labeled call2action" href="/"> 
                         <i class="label is-icon ico ico-add2cart"></i>
                         <span>Na produkt</span>
                     </a>
                 </div>
             
             </div>
        </div>
        <div>
            <img src="#" alt="" style="background-color: blueviolet; width: 100px; height: 100px;">
            <h4>Nazev produktu</h4>
            <div class="add-to">
 
                 <div class="buy">
                     <a class="btn large labeled call2action" href="/"> 
                         <i class="label is-icon ico ico-add2cart"></i>
                         <span>Na produkt</span>
                     </a>
                 </div>
             
             </div>
        </div>
        </div>
  
        <div class="modal-footer" style="display: flex;">
            <!-- <a href="#" data-dismiss="modal" class="btn cancel">Podobné produkty</a> -->
            <!-- Ověřit dostupnost by vedlo asi na konetakty nebo pokud je někde nějaký kontaktní formulář... Úplně jsem do detailu tu šablonu neprocházel ale asi by měla být možnost
                 kam toho uživatele nasměrovat když není ve skladu dost kusů -->
            <a href="/kosik" class="btn call2action">Ověřit dostupnost</a>
        </div>
      </div>
    </div>
  </div>

<style>
.modal-body {
    display: flex;
    justify-content: space-between;
}
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
}
.modal-header {
    align-items: center;
    padding: 2rem;
}
</style>