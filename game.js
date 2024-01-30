var cartes_moi=[];
var cartes_machine=[];
var cartesurtable=[];
var carte_joueur={};
var somme_card=0;
var cards_a_manger=[];


function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}



function repeter_cards(){
    let content_machine = '';
    let content_moi = '';
    let machine = document.getElementById("machine");
    let moi = document.getElementById("moi");
    
for(let i =0; i<3; i++) {
    cartes_machine.push(cartes[i]);
    content_machine += `<div class="card" id = "${cartes[i].nom}">
    <span></span>
             <div class="contentback"></div>
         </div>` 

    
}
console.log(cartes_machine)
machine.innerHTML=content_machine;
cartes.splice(0,3);


for(let i =0; i<3; i++) {
    cartes_moi.push(cartes[i]);
    content_moi+=`<div class="card" onclick="select_card('${cartes[i].nom}')" id= "${cartes[i].nom}" >
    <span></span>
             <div class="content" style =" background-image: url(${cartes[i].image});
             background-size: cover;
             background-position: center;"></div>
             <button class="button" onclick="throw_card('${cartes[i].nom}')">Throw card</button>

             </div>`
         
    
}
moi.innerHTML=content_moi;
cartes.splice(0,3);

}


function pause(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}







function start(){
    shuffle(cartes);
    let content_machine = '';
    let content_moi = '';
    let content_cartesurtable = '';
    let machine = document.getElementById("machine");
    let west = document.getElementById("cartesurtable");
    let moi = document.getElementById("moi");


for(let i =0; i<3; i++) {
    cartes_machine.push(cartes[i]);
    content_machine += `<div class="card" id = "${cartes[i].nom}">
    <span></span>
             <div class="contentback"></div>
         </div>` 

    
}
console.log(cartes_machine)
machine.innerHTML=content_machine;
cartes.splice(0,3);

for(let i =0; i<3; i++) {
    cartes_moi.push(cartes[i]);
    content_moi+=`<div class="card" onclick="select_card('${cartes[i].nom}')" id= "${cartes[i].nom}" >
    <span></span>
             <div class="content" style =" background-image: url(${cartes[i].image});
             background-size: cover;
             background-position: center;"></div>
             <button class="button" onclick="throw_card('${cartes[i].nom}')">Throw card</button>

             </div>`
         
    
}
moi.innerHTML=content_moi;
cartes.splice(0,3);
console.log(cartes_moi)

for(let i =0; i<4; i++) {
    cartesurtable.push(cartes[i]);
    content_cartesurtable+=`<div class="card" id= "${cartes[i].nom}" onclick="selectionner_mekla('${cartes[i].nom}')" >
    <span></span>
             <div class="content" style =" background-image: url(${cartes[i].image});
             background-size: cover;
             background-position: center;"></div>
         </div>`
}
west.innerHTML=content_cartesurtable;
cartes.splice(0,4);
console.log(cartesurtable)
}

function select_card(nom){
    carte_joueur={};
    let cardIndex = cartes_moi.findIndex(elt => elt.nom === nom);
    carte_joueur=cartes_moi[cardIndex];
    let buttons= document.getElementsByClassName("button");
    for(let j = 0;j<buttons.length;j++){
        buttons[j].style.display='none';
    }
    let card=document.getElementById(nom);
    card.children[2].style.display='block';


}

function throw_card(id) {
    let cardIndex = cartes_moi.findIndex(elt => elt.nom === id);
    somme_card=0;
    if (cardIndex !== -1) {
        let card = cartes_moi[cardIndex];
        cartes_moi.splice(cardIndex, 1);
        cartesurtable.push(card);

        let contenu_carte = '';
        let contenu_joueur = '';
        
        var joueur = document.getElementById("moi");
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

        joueur.innerHTML = '';
        for (let i = 0; i < cartes_moi.length; i++) {
            contenu_joueur += `<div class="card" onclick="select_card('${cartes_moi[i].nom}')" id= "${cartes_moi[i].nom}" >
            <span></span>
                     <div class="content" style =" background-image: url(${cartes_moi[i].image});
                     background-size: cover;
                     background-position: center;"></div>
                     <button class="button" onclick="throw_card('${cartes_moi[i].nom}')">Throw card</button>
        
        </div>
          `;
        }
        joueur.innerHTML = contenu_joueur;
    }
    tour_machine();
}








function selectionner_mekla(id) {

    let cardIndex = cartesurtable.findIndex(elt => elt.nom === id);
    cards_a_manger.push(cartesurtable[cardIndex]);
    somme_card+=cartesurtable[cardIndex].valeur;
    console.log(somme_card);
    console.log(cards_a_manger);

    
    if (carte_joueur && carte_joueur.valeur === cartesurtable[cardIndex].valeur) {
        somme_card=0;
        cards_a_manger=[];
        cartesurtable.splice(cardIndex, 1);
        let joueurIndex = cartes_moi.indexOf(carte_joueur);

        if (joueurIndex !== -1) {
            cartes_moi.splice(joueurIndex, 1);
        }

        console.log(cartesurtable);
        let contenu_carte = '';
        let contenu_joueur = '';

        var joueur = document.getElementById("moi");
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

        joueur.innerHTML = '';
        for (let i = 0; i < cartes_moi.length; i++) {
            contenu_joueur += `<div class="card" onclick="select_card('${cartes_moi[i].nom}')" id= "${cartes_moi[i].nom}" >
            <span></span>
                     <div class="content" style =" background-image: url(${cartes_moi[i].image});
                     background-size: cover;
                     background-position: center;"></div>
                     <button class="button" onclick="throw_card('${cartes_moi[i].nom}')">Throw card</button>
        
        </div>
          `;
        }
        joueur.innerHTML = contenu_joueur;
        tour_machine();
    }
    else if(carte_joueur && carte_joueur.valeur===somme_card ){
        var joueur = document.getElementById("moi");
        var louta = document.getElementById("cartesurtable");
        let contenu_carte = '';
        let contenu_joueur = '';
        somme_card=0;
        let joueurIndex = cartes_moi.indexOf(carte_joueur);

        if (joueurIndex !== -1) {
            cartes_moi.splice(joueurIndex, 1);
        }
      
        joueur.innerHTML = '';
        for (let i = 0; i < cartes_moi.length; i++) {
            contenu_joueur += `<div class="card" onclick="select_card('${cartes_moi[i].nom}')" id= "${cartes_moi[i].nom}" >
            <span></span>
                     <div class="content" style =" background-image: url(${cartes_moi[i].image});
                     background-size: cover;
                     background-position: center;"></div>
                     <button class="button" onclick="throw_card('${cartes_moi[i].nom}')">Throw card</button>
        
        </div>
          `;
        }
        joueur.innerHTML = contenu_joueur;
        for (let j = 0; j < cards_a_manger.length; j++) {
            let index_supp = cartesurtable.findIndex(elt => elt.nom === cards_a_manger[j].nom);
            if (index_supp !== -1) {
                cartesurtable.splice(index_supp, 1);
            }
        }
        cards_a_manger=[];
        somme_card=0;
        

        louta.innerHTML = '';
        for (let i = 0; i < cartesurtable.length; i++) {
            contenu_carte += `<div class="card" id= "${cartesurtable[i].nom}" onclick="selectionner_mekla('${cartesurtable[i].nom}')" >
            <span></span>
                     <div class="content" style =" background-image: url(${cartesurtable[i].image});
                     background-size: cover;
                     background-position: center;"></div>
                 </div>`;
        }
        louta.innerHTML = contenu_carte;
        tour_machine();



    }
}


window.onload=function(){
    start();
}

