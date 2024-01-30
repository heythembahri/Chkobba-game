function find_cards() {
    let trouv = null;
    for (let i = 0; i < cartes_machine.length; i++) {
        trouv = cartesurtable.find(elt => elt.valeur === cartes_machine[i].valeur);
        if (trouv) {
            return [cartes_machine[i], trouv];
        }
    }
    return null;
}

async function tour_machine() {
    var card_mekla = find_cards();
    if (card_mekla && card_mekla.length > 0) {
        let index = cartesurtable.indexOf(card_mekla[1]);
        cartesurtable.splice(index, 1);

        let index2 = cartes_machine.indexOf(card_mekla[0]);
        cartes_machine.splice(index2, 1);

        let contenu_carte = '';
        let contenu_joueur = '';

        var joueur = document.getElementById("machine");
        var louta = document.getElementById("cartesurtable");

        louta.innerHTML = '';
        for (let i = 0; i < cartesurtable.length; i++) {
            contenu_carte += `<div class="card" id="${cartesurtable[i].nom}" onclick="selectionner_mekla('${cartesurtable[i].nom}')">
                                <span></span>
                                <div class="content" style="background-image: url(${cartesurtable[i].image});
                                    background-size: cover;
                                    background-position: center;"></div>
                             </div>`;
        }
        louta.innerHTML = contenu_carte;
        await pause(800);
        joueur.innerHTML = '';
        for (let i = 0; i < cartes_machine.length; i++) {
            contenu_joueur += `<div class="card" id="${cartes_machine[i].nom}">
                                <span></span>
                                <div class="contentback"></div>
                              </div>`;
        }
        joueur.innerHTML = contenu_joueur;
    }
    else{
           
        let jetter_card = document.getElementById(cartes_machine[cartes_machine.length - 1].nom);

        if (jetter_card) {
            
            
        
          
            cartesurtable.push(cartes_machine[cartes_machine.length - 1]);
            cartes_machine.pop();
            
            let contenu_carte = '';
        let contenu_joueur = '';

        var joueur = document.getElementById("machine");
        var louta = document.getElementById("cartesurtable");

        louta.innerHTML = '';
        for (let i = 0; i < cartesurtable.length; i++) {
            contenu_carte +=`<div class="card" id= "${cartesurtable[i].nom}" onclick="selectionner_mekla('${cartesurtable[i].nom}')" >
            <span></span>
                     <div class="content" style =" background-image: url(${cartesurtable[i].image});
                     background-size: cover;
                     background-position: center;"></div>
                 </div>`;
        }
        louta.innerHTML = contenu_carte;
        await pause(800);
        joueur.innerHTML = '';
        for (let i = 0; i < cartes_machine.length; i++) {
            contenu_joueur +=`<div class="card" id = "${cartes_machine[i].nom}">
            <span></span>
                     <div class="contentback"></div>
                 </div>` ;
        }
        joueur.innerHTML = contenu_joueur;
            
        
            
        }
        

          
       
    }
    if(cartes_machine.length==0 && cartes.length>0){
        await pause(800);
        repeter_cards();
        
    }
    if(cartes_machine.length==0 && cartes.length==0){
        
        document.getElementById("cartesurtable").innerHTML="";
        await pause(800);
        document.getElementById("fini").style.display="block";
    }


}


function close_dialog(){
    document.getElementById("fini").style.display="none";
}