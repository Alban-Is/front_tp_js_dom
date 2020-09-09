// En utilisant l'API Fetch, récupérez sous la forme d'un objet
// JSON la table d'utilisateurs disponible à l'adresse suivante :
// https://jsonplaceholder.typicode.com/users
// Afficher la taille en octets de la réponse
// Afficher la réponse dans la console
// Ajoutez au DOM une table affichant pour tous les utilisateurs
// les valeurs des propriétés suivantes : id, nom, nom de l'entreprise
// La table sera créée comme nouvel enfant de la div d'id workspace

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(response => traitement(JSON.stringify(response)))
.catch(error => alert("Erreur : " + error));


function traitement(reponse){
    var data = JSON.parse(reponse)
    var div_table = document.createElement('div')
    document.body.appendChild(div_table)
    var table = document.createElement('table')
    table.style.height = "250px" ; 
    table.style.display = "block" ; 
    table.style.overflowY = 'scroll';
    table.style.backgroundColor = "252525"
    div_table.appendChild(table)
    data.forEach(ligne => {
        for (const key in ligne) {
            if (ligne.hasOwnProperty(key)) {
                const item = ligne[key];
                var tr = document.createElement('tr')
                var td_key = document.createElement('td')
                td_key.style.fontWeight = 'bold'
                var td_val = document.createElement('td')
                td_key.textContent = key
                td_val.textContent = item   
                tr.appendChild(td_key)            
                tr.appendChild(td_val)       
            }
            table.appendChild(tr)
        }
    });

}
