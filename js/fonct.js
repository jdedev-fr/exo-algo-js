
/**
 * Fonction permettant de logger du texte dans un element HTML avec id logMe
 * 
 * @param {string} texte - Texte à logger
 * @param {boolean} vide - Reinit boite de log
 */
function Affiche(texte, vide = false) {
    if (document.getElementById("logMe") != null) {
        if (vide) document.getElementById("logMe").innerHTML = "";
        document.getElementById("logMe").innerHTML += '<br>' + texte
    }
}

/**
 * Fonction permettant de demander un contenu à l'utilisateur
 * 
 * @param {string} Mess - question à poser
 * @return {string} Message de l'utilisateur
 */
function Lit(Mess) {
    return window.prompt(Mess)
}

/**
 * Fonction permettant d'ajouter un element dans un autre
 * 
 * @param {string} parentId - Id de l'élément à appeler
 * @param {string} elem - tag de l'élément à créer
 * @param {string[]} classElem - tableau de chaine de classes à ajouter
 * @param {string} contentElem - contenu de l'élément
 * @param {string} idElem - id de l'element à inserer
 * @param {onClickCallback} fonct - fonction executé sur clic souris
 */
function jdeAttachElem(parentId, elem, classElem = [], contentElem = "", idElem = "", fonct = "") {
    let elemACreer = document.createElement(elem)
    if (classElem.length > 0) {
        for (let uneClasse in classElem) {
            elemACreer.classList.add(classElem[uneClasse])
        }

    }
    if (idElem != "") {
        elemACreer.id = idElem
    }
    if (fonct != "") {
        elemACreer.addEventListener('click', fonct);
    }
    elemACreer.innerHTML += contentElem
    document.getElementById(parentId).appendChild(elemACreer)

}

/**
 * Callback à executer lors du clic souris sur un élément ajouté avec la fonction jdeAttachElem
 * @callback onClickCallback
 *
 */