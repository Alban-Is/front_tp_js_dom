// Changez la couleur de fond du body en #992323
// Ne modifiez pas le code HTML de la page directement
document.body.style.backgroundColor = "#992323";

// Changez la couleur du texte du body en #fff
document.body.style.color = "#fff";

// Récupérez l'élément div "workspace" par son id
// Enregistrez-le dans une variable workspace
var workspace = document.getElementById('workspace')

// Affichez dans la console le nombre d'éléments enfants que contient
// l'élément workspace
console.log(workspace.childElementCount)

// Récupérez le premier paragraphe contenu dans workspace
// vous ne devez pas ajouter d'id
// Affectez le résultat à la variable p
var p = workspace.children[0]
console.log(p);

// Ajoutez le code suivant : "<h3>Hello JS world!</h3>"
// comme enfant de workspace
// Cet élément doit être ajouté avant le premier paragraphe
// contenu dans workspace
p.innerHTML = '<h3>Hello JS world!</h3>'

const initTime = 10;

// Complétez la fonction runChrono pour qu'elle affiche un décompte
// de n à 0, dans une div (id: counter), placée sous la balise h3 précédemment ajoutée
// Vous ne devez pas toucher au code HTML, et le h3 doit continuer à s'afficher
function runChrono(n) {
  var divChrono = document.createElement('div')
  divChrono.setAttribute('id','counter')
  document.body.appendChild(divChrono)
  for(var i = 0 ; i < n ; i++){
    let currentN = document.createElement('p')
    currentN.textContent = i 
    divChrono.appendChild(currentN)
  } 
}

//console.log(runChrono(10));

// Ajoutez à l'élément workspace un bouton permettant de déclencher
// le décompte lors d'un clic, avec le texte "Start countdown"
// Le bouton doit être inséré après l'élément h3
// Vous ne devez pas utiliser l'élément p pour insérer le bouton
// Le décompte est réinitialisé lorsque l'utilisateur clique une
// nouvelle fois sur le bouton
var btn = document.createElement('button')
btn.textContent = 'Décompte'
document.body.appendChild(btn)
btn.addEventListener('click',function(){
  var divChrono = document.getElementById('counter')
  if(divChrono != null){
    divChrono.parentNode.removeChild(divChrono)
  }
  runChrono((Math.floor(Math.random() * 10))+1)
})
