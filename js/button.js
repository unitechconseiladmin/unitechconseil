document.getElementById('bold').addEventListener('click', function() {
    const marker = '*';
    const selection = window.getSelection();
    
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const selectedText = range.toString();

        let newText;

        if (selectedText.length > 0) {
            // Check if the selected text is already wrapped with the marker
            if (selectedText.startsWith(marker) && selectedText.endsWith(marker)) {
                // Remove the marker if it already exists
                newText = selectedText.slice(marker.length, -marker.length);
            } else {
                // Add the marker around the selected text
                newText = `${marker}${selectedText}${marker}`;
            }

            // Replace the selected text with the new text
            const newNode = document.createTextNode(newText);
            range.deleteContents();
            range.insertNode(newNode);
        } else {
            // If no text is selected, add the marker around the word at the cursor position
            const textNode = range.startContainer;
            const cursorPos = range.startOffset;
            const textContent = textNode.textContent;

            // Find the start and end of the word at the cursor position
            let wordStart = cursorPos;
            let wordEnd = cursorPos;

            // Move wordStart backward until a space or the start of the text node is found
            while (wordStart > 0 && textContent[wordStart - 1] !== ' ') {
                wordStart--;
            }

            // Move wordEnd forward until a space or the end of the text node is found
            while (wordEnd < textContent.length && textContent[wordEnd] !== ' ') {
                wordEnd++;
            }

            const word = textContent.slice(wordStart, wordEnd);

            if (word.startsWith(marker) && word.endsWith(marker)) {
                // Remove the marker if it already exists around the word
                newText = textContent.slice(0, wordStart) + 
                          word.slice(marker.length, -marker.length) + 
                          textContent.slice(wordEnd);
            } else {
                // Add the marker around the word
                newText = textContent.slice(0, wordStart) + 
                          marker + word + marker + 
                          textContent.slice(wordEnd);
            }

            // Replace the entire text node content with the new text
            textNode.textContent = newText;

            // Move the cursor to the correct position after the marker
            const newCursorPos = wordStart + marker.length + word.length;
            range.setStart(textNode, newCursorPos);
            range.setEnd(textNode, newCursorPos);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }
});



document.getElementById('italic').addEventListener('click', function() {
    const marker = '_';
    const selection = window.getSelection();
    
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const selectedText = range.toString();

        let newText;

        if (selectedText.length > 0) {
            // Check if the selected text is already wrapped with the marker
            if (selectedText.startsWith(marker) && selectedText.endsWith(marker)) {
                // Remove the marker if it already exists
                newText = selectedText.slice(marker.length, -marker.length);
            } else {
                // Add the marker around the selected text
                newText = `${marker}${selectedText}${marker}`;
            }

            // Replace the selected text with the new text
            const newNode = document.createTextNode(newText);
            range.deleteContents();
            range.insertNode(newNode);
        } else {
            // If no text is selected, add the marker around the word at the cursor position
            const textNode = range.startContainer;
            const cursorPos = range.startOffset;
            const textContent = textNode.textContent;

            // Find the start and end of the word at the cursor position
            let wordStart = cursorPos;
            let wordEnd = cursorPos;

            // Move wordStart backward until a space or the start of the text node is found
            while (wordStart > 0 && textContent[wordStart - 1] !== ' ') {
                wordStart--;
            }

            // Move wordEnd forward until a space or the end of the text node is found
            while (wordEnd < textContent.length && textContent[wordEnd] !== ' ') {
                wordEnd++;
            }

            const word = textContent.slice(wordStart, wordEnd);

            if (word.startsWith(marker) && word.endsWith(marker)) {
                // Remove the marker if it already exists around the word
                newText = textContent.slice(0, wordStart) + 
                          word.slice(marker.length, -marker.length) + 
                          textContent.slice(wordEnd);
            } else {
                // Add the marker around the word
                newText = textContent.slice(0, wordStart) + 
                          marker + word + marker + 
                          textContent.slice(wordEnd);
            }

            // Replace the entire text node content with the new text
            textNode.textContent = newText;

            // Move the cursor to the correct position after the marker
            const newCursorPos = wordStart + marker.length + word.length;
            range.setStart(textNode, newCursorPos);
            range.setEnd(textNode, newCursorPos);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }
});

document.getElementById('liste').addEventListener('click', function() {
    const marker = '- ';  // Le marqueur que vous voulez ajouter à gauche
    const selection = window.getSelection();
    
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const selectedText = range.toString();

        let newText;

        if (selectedText.length > 0) {
            // Vérifier si le texte sélectionné commence déjà par le marqueur
            if (selectedText.startsWith(marker)) {
                // Si le texte commence par le marqueur, on le supprime
                newText = selectedText.slice(marker.length);
            } else {
                // Sinon, on ajoute le marqueur à gauche du texte sélectionné
                newText = `${marker}${selectedText}`;
            }

            // Remplacer le texte sélectionné par le nouveau texte
            const newNode = document.createTextNode(newText);
            range.deleteContents();
            range.insertNode(newNode);
        } else {
            // Si aucun texte n'est sélectionné, ajouter le marqueur au mot à la position du curseur
            const textNode = range.startContainer;
            const cursorPos = range.startOffset;
            const textContent = textNode.textContent;

            // Trouver le début et la fin du mot à la position du curseur
            let wordStart = cursorPos;
            let wordEnd = cursorPos;

            // Boucle pour trouver le début du mot (avant un espace ou début du texte)
            while (wordStart > 0 && textContent[wordStart - 1] !== ' ') {
                wordStart--;
            }

            // Boucle pour trouver la fin du mot (avant un espace ou fin du texte)
            while (wordEnd < textContent.length && textContent[wordEnd] !== ' ') {
                wordEnd++;
            }

            const word = textContent.slice(wordStart, wordEnd);

            if (word.startsWith(marker)) {
                // Si le mot commence déjà par le marqueur, on l'enlève
                newText = textContent.slice(0, wordStart) + 
                          word.slice(marker.length) + 
                          textContent.slice(wordEnd);
            } else {
                // Sinon, ajouter le marqueur avant le mot
                newText = textContent.slice(0, wordStart) + 
                          marker + word + 
                          textContent.slice(wordEnd);
            }

            // Remplacer le contenu du noeud texte entier par le nouveau texte
            textNode.textContent = newText;

            // Déplacer le curseur après le mot modifié
            const newCursorPos = wordStart + marker.length + word.length;
            range.setStart(textNode, newCursorPos);
            range.setEnd(textNode, newCursorPos);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }
});



