// Écouter les changements dans le <select>
document.getElementById('select').addEventListener('change', function() {
    // Masquer tous les contenus au départ
    
    // Vérifier la valeur sélectionnée
    const selectedPlatform = this.value;
    
    if (selectedPlatform === 'whatsapp') {
        document.querySelector('.whatsapp').style.display = 'block';
        document.querySelector('.twitter').style.display = 'none';
    
        const editor = document.getElementById('editor');
        const charCountDisplay = document.getElementById('charCount');
    
        // Écouter les modifications dans l'éditeur
        editor.addEventListener('input', function() {
            var htag = document.querySelector('.htag').innerHTML;
            const text = editor.innerText; // Récupérer uniquement le texte sans HTML
            const textLength = text.length + htag.length;
    
            console.log(htag.length);
    
            // Mettre à jour le compteur de caractères (sans limite ici)
            charCountDisplay.innerText = `${textLength} caractères`;
    
            // Mettre à jour le curseur à la fin du texte
            moveCursorToEnd(editor);
        });
    
        // Fonction pour replacer le curseur à la fin du texte après la modification
        function moveCursorToEnd(contentEditableElement) {
            const range = document.createRange();
            const selection = window.getSelection();
            range.selectNodeContents(contentEditableElement);
            range.collapse(false); // Positionner le curseur à la fin
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }
     else if (selectedPlatform === 'twitter') {
        alert('twitter'); 
        document.querySelector('.twitter').style.display='block';
        document.querySelector('.twitter').style.backgroundColor='blue';
        document.querySelector('.twitter').style.backgroundColor='rgb(10, 123, 253)';
        document.querySelector('.whatsapp').style.display='none';

        const editor = document.getElementById('editor');
        const maxChars = 280; // Limite de caractères
        const charCountDisplay = document.getElementById('charCount');
    
        // Écouter les modifications dans l'éditeur
        editor.addEventListener('input', function() {
            var htag=document.querySelector('.htag').innerHTML;
            const text = editor.innerText; // Récupérer uniquement le texte sans HTML
            const textLength = text.length  + htag.length;
            console.log(htag.length);
            if (textLength > maxChars) {
                // Empêcher plus de saisie en coupant à la limite
                editor.innerText = text.substring(0, maxChars);
                alert('Vous avez atteint la limite de caractères !');
            }
    
            // Mettre à jour le curseur à la fin du texte
            moveCursorToEnd(editor);
    
            // Mettre à jour le compteur de caractères
            charCountDisplay.innerText = `${Math.min(textLength, maxChars)}/${maxChars}`;
        });
    
        // Fonction pour replacer le curseur à la fin du texte après la modification
        function moveCursorToEnd(contentEditableElement) {
            const range = document.createRange();
            const selection = window.getSelection();
            range.selectNodeContents(contentEditableElement);
            range.collapse(false); // Positionner le curseur à la fin
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }else if (selectedPlatform === 'facebook'){
        const editor = document.getElementById('editor');
        const charCountDisplay = document.getElementById('charCount');
    
        // Écouter les modifications dans l'éditeur
        editor.addEventListener('input', function() {
            var htag = document.querySelector('.htag').innerHTML;
            const text = editor.innerText; // Récupérer uniquement le texte sans HTML
            const textLength = text.length + htag.length;
    
            console.log(htag.length);
    
            // Mettre à jour le compteur de caractères (sans limite ici)
            charCountDisplay.innerText = `${textLength} caractères`;
    
            // Mettre à jour le curseur à la fin du texte
            moveCursorToEnd(editor);
        });
    
        // Fonction pour replacer le curseur à la fin du texte après la modification
        function moveCursorToEnd(contentEditableElement) {
            const range = document.createRange();
            const selection = window.getSelection();
            range.selectNodeContents(contentEditableElement);
            range.collapse(false); // Positionner le curseur à la fin
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }

});

function partage() {

    // Récupérer le contenu du titre et de l'éditeur
   // Récupérer le contenu du titre et de l'éditeur
   const title = document.getElementById('title').value.trim();  // Utilisation de trim() pour supprimer les espaces inutiles
   const content = document.getElementById('editor').innerHTML.trim();
   const htag = document.querySelector('.htag').textContent.trim();
   const about = document.querySelector('.about').textContent.trim();

    // Récupérer la valeur sélectionnée du select
    const selectedPlatform = document.getElementById('select').value;
   
    
    if (selectedPlatform === 'whatsapp') {
        // Combiner le titre et le contenu à partager
        const textToShare = `${title}\n${content}\n${about}`.trim();  // Utilisation de trim() après la combinaison
        const aboutToShare = `${about}`;
        
        // Partage via WhatsApp
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(textToShare)}`;
        window.open(whatsappUrl, '_blank');
        
    } else if (selectedPlatform === 'twitter') {
        // Combiner le titre et le contenu à partager
        const textToShare = `${title}\n\n${content}\n\n${htag}`;
        
        // Partage via Twitter
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(textToShare)}&hashtags=${encodeURIComponent(htag)}`;
        window.open(twitterUrl, '_blank');
        
    } else if (selectedPlatform === 'facebook') {
          // Partage via Facebook
          const textToShare = `${title} - ${about} - ${htag}`;  // Texte à partager sur Facebook
          const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(textToShare)}`;
          window.open(facebookUrl, '_blank');
    }
}


function copie() {
    // Récupérer le contenu du titre et de l'éditeur
    const title = document.getElementById('title').value;
    const content = document.getElementById('editor').textContent;
    const htag = document.querySelector('.htag').textContent;

    // Combiner le titre et le contenu à copier
    const textToCopy = `${title}\n\n${content}\n\n${htag}`;

    // Créer un élément temporaire pour stocker le texte à copier
    const tempElement = document.createElement('textarea');
    tempElement.value = textToCopy;

    // Ajouter l'élément temporaire au document
    document.body.appendChild(tempElement);

    // Sélectionner et copier le contenu
    tempElement.select();
    document.execCommand('copy');

    // Supprimer l'élément temporaire après la copie
    document.body.removeChild(tempElement);

    alert('Texte copié avec succès !');
}


// Fonction pour sauvegarder les éléments dans le stockage local
function addItem() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('editor').innerHTML;
    //const wha = document.getElementById('wha').innerHTML;
    const wha = document.getElementById('select').value;
    const date = new Date().toLocaleString(); // Ajout de la date

    if (title && (content)) {
        const newItem = { title, content, wha, date };

        // Récupérer les éléments existants du stockage local
        const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];

        // Vérifier si un élément avec le même titre existe déjà
        const existingIndex = savedItems.findIndex(item => item.title === title);
        if (existingIndex > -1) {
            savedItems[existingIndex] = newItem; // Mettre à jour l'élément existant
        } else {
            savedItems.push(newItem); // Ajouter le nouvel élément
        }

        // Sauvegarder la liste mise à jour
        localStorage.setItem('savedItems', JSON.stringify(savedItems));
        displaySavedItems(); // Afficher la liste mise à jour
        saveText();
        clearEditor(); // Réinitialiser l'éditeur
    } else {
        alert('Veuillez entrer un titre, du contenu, une image ou un audio.');
    }
}

  // Fonction pour afficher les éléments sauvegardés avec filtres
  function displaySavedItems() {
    const itemList = document.getElementById('itemList');
    const filterTitle = document.getElementById('filterBar').value.toLowerCase(); // Filtre par titre
    const filterWha = document.getElementById('filterSelect').value.toLowerCase(); // Filtre par wha
    itemList.innerHTML = '';
    const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];

    // Filtrer les éléments en fonction du titre et de 'item.wha'
    const filteredItems = savedItems.filter(item => 
        item.title.toLowerCase().includes(filterTitle) && 
        item.wha.toLowerCase().includes(filterWha)
    );

    // Afficher les éléments filtrés
    filteredItems.forEach((item, index) => {
        const listItem = document.createElement('div');
        listItem.innerHTML = `
            <h4><input type="checkbox" class="item-checkbox" data-index="${index}"> ${item.title}</h4>
            <span>${item.content}</span>
            <div class="libar">
                <span><i class="fa fa-clock"></i> ${item.date}</span>
                <span>${item.wha}</span>
                <button onclick="editItem(${index})"><i class="fa fa-pen"></i></button>
                <button onclick="deleteItem(${index})"><i class="fa fa-trash"></i></button>
            </div>
        `;
        itemList.appendChild(listItem);
    });
}

// Charger les éléments au démarrage
displaySavedItems();

// Fonction pour supprimer un élément
function deleteItem(index) {
    let savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
    savedItems.splice(index, 1);
    localStorage.setItem('savedItems', JSON.stringify(savedItems));
    displaySavedItems();
}

// Fonction pour réinitialiser l'éditeur
function clearEditor() {
    document.getElementById('title').value = '';
    document.getElementById('editor').innerHTML = '';
    document.getElementById('myImage').src = '';
    document.getElementById('myAudio').src = '';
}

// Charger les éléments lors du chargement de la page
window.onload = displaySavedItems;




function detectDeviceType() {
    const userAgent = navigator.userAgent;

    if (/Mobi|Android/i.test(userAgent)) {
        return "Mobile";
    } else if (/Tablet|iPad/i.test(userAgent)) {
        return "Tablet";
    } else {
        return "Desktop";
    }
}

console.log(detectDeviceType()); // Affichera "Mobile", "Tablet" ou "Desktop"


// Fonction pour modifier un élément
// Fonction pour modifier un élément
function editItem(index) {
    const screenWidth = window.innerWidth;

    // Détection de la largeur d'écran et exécution des fonctions appropriées
    if (screenWidth <= 420) { // Si la largeur est égale ou inférieure à 420px (mobile)
        closeListe(); // Appelle la fonction pour fermer la liste sur mobile
    } else if (screenWidth > 420 && screenWidth <= 768) { // Tablette
        closeListe(); // Appelle la fonction pour fermer la liste sur tablette
    } else {
        openListe(); // Appelle la fonction pour ouvrir la liste sur bureau
    }

    // Récupérer les éléments sauvegardés depuis le localStorage
    const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
    const item = savedItems[index];

    // Mise à jour des champs avec les valeurs de l'élément sélectionné
    if (item) {
        document.getElementById('title').value = item.title;
        document.getElementById('editor').innerHTML = item.content;
    } else {
        console.error('Aucun élément trouvé à l\'index spécifié');
    }
}


// Fonction pour sélectionner ou désélectionner tous les éléments
function toggleSelectAll() {
    const selectAll = document.getElementById('selectAll').value;
    const checkboxes = document.querySelectorAll('.item-checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.checked = selectAll === 'select';
    });
}

// Fonction pour supprimer tous les éléments sélectionnés
function deleteSelectedItems() {
    let savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
    const checkboxes = document.querySelectorAll('.item-checkbox');
    savedItems = savedItems.filter((item, index) => !checkboxes[index].checked);
    localStorage.setItem('savedItems', JSON.stringify(savedItems));
    displaySavedItems();
}





async function saveText() {
    const title = document.getElementById('title').value || 'document'; // Utilise 'document' si le titre est vide
    const content = document.getElementById('editor').innerHTML;
    const blob = new Blob([`${title}\n${content}`], { type: 'text/html' });

    // Utilisation de la File System Access API
    try {
        const handle = await window.showSaveFilePicker({
            suggestedName: `${title}.html`,
            types: [{
                description: 'HTML files',
                accept: {
                    'text/html': ['.html']
                }
            }]
        });

        const writable = await handle.createWritable();
        await writable.write(blob);
        await writable.close();
        alert('Fichier sauvegardé avec succès !');
    } catch (err) {
        console.error('Erreur de sauvegarde :', err);
    }
}

// Fonction pour charger un fichier texte
function uploadText() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('title').value = file.name;
            document.getElementById('editor').innerHTML = e.target.result;
        };
        reader.readAsText(file);
    }
}

function closeListe(){
    document.querySelector('.list').style.display='none';
}
function openListe(){
    document.querySelector('.list').style.display='block';
}



// Fonction qui sera appelée toutes les 5 secondes
function performAction() {
    console.log("Action déclenchée !");
    addItem();
    // Ajoutez ici le code pour l'action que vous souhaitez effectuer
}

// Déclenchement automatique toutes les 5 secondes (5000 millisecondes)
//const intervalId = setInterval(performAction, 5000);

// Si vous souhaitez arrêter le compteur à un moment donné, vous pouvez utiliser clearInterval(intervalId);
// clearInterval(intervalId);
// Fonction déclenchée chaque fois que du texte est saisi dans l'éditeur
// Fonction pour vérifier si le titre et l'éditeur ne sont pas vides
function performAction() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('editor').innerHTML;

    // Vérifier si le titre et le contenu de l'éditeur ne sont pas vides
    if (title.trim() !== '' && content.trim() !== '') {
        // Récupérer les éléments existants du stockage local
        const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];

        // Vérifier si un élément avec le même titre existe déjà
        const existingItem = savedItems.find(item => item.title === title);

        if (existingItem) {
            // Si le titre existe, déclencher la sauvegarde de l'éditeur
            const date = new Date().toLocaleString(); // Ajout de la date
            
            // Mettre à jour l'élément existant avec le nouveau contenu
            existingItem.content = content;
            existingItem.date = date;

            // Sauvegarder la liste mise à jour dans le stockage local
            localStorage.setItem('savedItems', JSON.stringify(savedItems));

            // Afficher les éléments sauvegardés
            displaySavedItems();
            
            // Réinitialiser l'éditeur (facultatif)
            // clearEditor();
        } else {
            console.log("Le titre n'existe pas. Aucune action déclenchée.");
        }
    } else {
        //alert('Veuillez entrer un titre et du contenu.');
    }
}


// Déclenchement automatique toutes les 5 secondes (5000 millisecondes)
const intervalId = setInterval(performAction, 5000);

// Ajoutez un écouteur d'événements sur l'éditeur pour déclencher l'action
document.getElementById('editor').addEventListener('input', performAction);

// Ajoutez un écouteur d'événements sur le titre pour déclencher l'action
//document.getElementById('title').addEventListener('input', performAction);

