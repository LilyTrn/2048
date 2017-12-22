var valeurCellule_1;
var valeurCellule_2;
var valeurCellule_3;
var valeurCellule_4;
var cellule;
var somme;
var couleur;

remplirCaseVide();

document.onkeydown = deplacementFleche;

addEventListener("keydown", disableScroll, false);
/////////////////////////////////////// Remplir une case vide ///////////////////////////////////////
function remplirCaseVide(){
	var nombreRandom = Math.round((Math.random()*6)+0);
	var caseRandom = Math.round((Math.random()*16)+0);
	caseRandom = caseRandom.toString();
	var valeurCase = document.getElementById(caseRandom);
	while (valeurCase.innerHTML !== " "){
		caseRandom = Math.round((Math.random()*16)+0);
		caseRandom = caseRandom.toString();
		valeurCase = document.getElementById(caseRandom);
	}
	if (nombreRandom > 4){
		nombreRandom = 4;
	}
	else {
		nombreRandom = 2;
	}
	nombreRandom = nombreRandom.toString();
	valeurCase.innerHTML = nombreRandom;
};

/////////////////////////////////////// Faire deplacer les cases ///////////////////////////////////////
function deplacementFleche(evenement){
	var evenement = evenement || window.event;
	if (evenement.keyCode == 37) { 
		gauche();
		changementCouleur();
	}
	else if (evenement.keyCode == 38) {
		haut();
		changementCouleur();
	}
	else if (evenement.keyCode == 39) {
		droite();
		changementCouleur();
	}
	else if (evenement.keyCode == 40) {
		bas();
		changementCouleur();
	}
	remplirCaseVide();
};  

/////////////////////////////////////// Deplacement ///////////////////////////////////////
function gauche(){
	gauche_ligne1();
	gauche_ligne2();
	gauche_ligne3();
	gauche_ligne4();
};

function droite(){
	droite_ligne1();
	droite_ligne2();
	droite_ligne3();
	droite_ligne4();
};

function haut(){
	haut_ligne1();
	haut_ligne2();
	haut_ligne3();
	haut_ligne4();
};

function bas(){
	bas_ligne1();
	bas_ligne2();
	bas_ligne3();
	bas_ligne4();	
};

function gauche_ligne1(){
	valeurCellule_1 = document.getElementById("4");
	valeurCellule_2 = document.getElementById("3");
	valeurCellule_3 = document.getElementById("2");
	valeurCellule_4 = document.getElementById("1");
	deplacementCase(valeurCellule_1, valeurCellule_2, valeurCellule_3, valeurCellule_4);
};

function gauche_ligne2(){
	valeurCellule_1 = document.getElementById("8");
	valeurCellule_2 = document.getElementById("7");
	valeurCellule_3 = document.getElementById("6");
	valeurCellule_4 = document.getElementById("5");
	deplacementCase(valeurCellule_1, valeurCellule_2, valeurCellule_3, valeurCellule_4);
};

function gauche_ligne3(){
	valeurCellule_1 = document.getElementById("12");
	valeurCellule_2 = document.getElementById("11");
	valeurCellule_3 = document.getElementById("10");
	valeurCellule_4 = document.getElementById("9");
	deplacementCase(valeurCellule_1, valeurCellule_2, valeurCellule_3, valeurCellule_4);
};

function gauche_ligne4(){
	valeurCellule_1 = document.getElementById("16");
	valeurCellule_2 = document.getElementById("15");
	valeurCellule_3 = document.getElementById("14");
	valeurCellule_4 = document.getElementById("13");
	deplacementCase(valeurCellule_1, valeurCellule_2, valeurCellule_3, valeurCellule_4);
};

function droite_ligne1(){
	valeurCellule_1 = document.getElementById("1");
	valeurCellule_2 = document.getElementById("2");
	valeurCellule_3 = document.getElementById("3");
	valeurCellule_4 = document.getElementById("4");
	deplacementCase(valeurCellule_1, valeurCellule_2, valeurCellule_3, valeurCellule_4);
};

function droite_ligne2(){
	valeurCellule_1 = document.getElementById("5");
	valeurCellule_2 = document.getElementById("6");
	valeurCellule_3 = document.getElementById("7");
	valeurCellule_4 = document.getElementById("8");
	deplacementCase(valeurCellule_1, valeurCellule_2, valeurCellule_3, valeurCellule_4);
};

function droite_ligne3(){
	valeurCellule_1 = document.getElementById("9");
	valeurCellule_2 = document.getElementById("10");
	valeurCellule_3 = document.getElementById("11");
	valeurCellule_4 = document.getElementById("12");
	deplacementCase(valeurCellule_1, valeurCellule_2, valeurCellule_3, valeurCellule_4);
};

function droite_ligne4(){
	valeurCellule_1 = document.getElementById("13");
	valeurCellule_2 = document.getElementById("14");
	valeurCellule_3 = document.getElementById("15");
	valeurCellule_4 = document.getElementById("16");
	deplacementCase(valeurCellule_1, valeurCellule_2, valeurCellule_3, valeurCellule_4);
};

function haut_ligne1(){
	valeurCellule_1 = document.getElementById("13");
	valeurCellule_2 = document.getElementById("9");
	valeurCellule_3 = document.getElementById("5");
	valeurCellule_4 = document.getElementById("1");
	deplacementCase(valeurCellule_1, valeurCellule_2, valeurCellule_3, valeurCellule_4);
};

function haut_ligne2(){
	valeurCellule_1 = document.getElementById("14");
	valeurCellule_2 = document.getElementById("10");
	valeurCellule_3 = document.getElementById("6");
	valeurCellule_4 = document.getElementById("2");
	deplacementCase(valeurCellule_1, valeurCellule_2, valeurCellule_3, valeurCellule_4);
};

function haut_ligne3(){
	valeurCellule_1 = document.getElementById("15");
	valeurCellule_2 = document.getElementById("11");
	valeurCellule_3 = document.getElementById("7");
	valeurCellule_4 = document.getElementById("3");
	deplacementCase(valeurCellule_1, valeurCellule_2, valeurCellule_3, valeurCellule_4);
};

function haut_ligne4(){
	valeurCellule_1 = document.getElementById("16");
	valeurCellule_2 = document.getElementById("12");
	valeurCellule_3 = document.getElementById("8");
	valeurCellule_4 = document.getElementById("4");
	deplacementCase(valeurCellule_1, valeurCellule_2, valeurCellule_3, valeurCellule_4);
};

function bas_ligne1(){
	valeurCellule_1 = document.getElementById("1");
	valeurCellule_2 = document.getElementById("5");
	valeurCellule_3 = document.getElementById("9");
	valeurCellule_4 = document.getElementById("13");
	deplacementCase(valeurCellule_1, valeurCellule_2, valeurCellule_3, valeurCellule_4);
};

function bas_ligne2(){
	valeurCellule_1 = document.getElementById("2");
	valeurCellule_2 = document.getElementById("6");
	valeurCellule_3 = document.getElementById("10");
	valeurCellule_4 = document.getElementById("14");
	deplacementCase(valeurCellule_1, valeurCellule_2, valeurCellule_3, valeurCellule_4);
};

function bas_ligne3(){
	valeurCellule_1 = document.getElementById("3");
	valeurCellule_2 = document.getElementById("7");
	valeurCellule_3 = document.getElementById("11");
	valeurCellule_4 = document.getElementById("15");
	deplacementCase(valeurCellule_1, valeurCellule_2, valeurCellule_3, valeurCellule_4);
};

function bas_ligne4(){
	valeurCellule_1 = document.getElementById("4");
	valeurCellule_2 = document.getElementById("8");
	valeurCellule_3 = document.getElementById("12");
	valeurCellule_4 = document.getElementById("16");
	deplacementCase(valeurCellule_1, valeurCellule_2, valeurCellule_3, valeurCellule_4);
};

/////////////////////////////////////// Fonction deplacement generale ///////////////////////////////////////
function deplacementCase(valeur_1, valeur_2, valeur_3, valeur_4){
	if (valeur_4.innerHTML === " "){
		if (valeurCellule_3.innerHTML === " "){
			if (valeurCellule_2.innerHTML === " "){
				if (valeurCellule_1.innerHTML === " "){
					console.log(" ");
				}
				else if (valeurCellule_1.innerHTML !== " "){
					valeurCellule_4.innerHTML = +valeurCellule_1.innerHTML;
					valeurCellule_1.innerHTML = " ";
				}
			}
			else if (valeurCellule_2.innerHTML !== " "){
				if (valeurCellule_1.innerHTML === " "){
					valeurCellule_4.innerHTML = +valeurCellule_2.innerHTML;
					valeurCellule_2.innerHTML = " ";
				}
				else if (valeurCellule_1.innerHTML !== " "){
					if (valeurCellule_2.innerHTML === +valeurCellule_1.innerHTML){
						somme = +valeurCellule_2 + +valeurCellule_1.innerHTML;
						valeurCellule_4.innerHTML = +somme;
						valeurCellule_2.innerHTML = " ";
						valeurCellule_1.innerHTML = " ";
						score += somme;
					}
					else{
						valeurCellule_4.innerHTML = +valeurCellule_2.innerHTML;
						valeurCellule_3.innerHTML = +valeurCellule_1.innerHTML;
						valeurCellule_2.innerHTML = " ";
						valeurCellule_1.innerHTML = " ";
					}
				}
			}
		}
		else if (valeurCellule_3.innerHTML !== " "){
			if (valeurCellule_2.innerHTML === " "){
				if (valeurCellule_1.innerHTML === " "){
					valeurCellule_4.innerHTML = +valeurCellule_3.innerHTML;
					valeurCellule_3.innerHTML = " ";
				}
				else if (valeurCellule_1.innerHTML !== " "){
					if (valeurCellule_3.innerHTML === valeurCellule_1.innerHTML){
						somme = +valeurCellule_3.innerHTML + +valeurCellule_1.innerHTML;
						valeurCellule_4.innerHTML = +somme ;
						valeurCellule_3.innerHTML = " ";
						valeurCellule_1.innerHTML = " ";
					}
					else {
						valeurCellule_4.innerHTML = +valeurCellule_3.innerHTML;
						valeurCellule_3.innerHTML = +valeurCellule_1.innerHTML;
						valeurCellule_1.innerHTML = " ";
					}
				}
			}
			else if (valeurCellule_2.innerHTML !== " "){
				if (valeurCellule_1.innerHTML === " "){
					if (valeurCellule_2.innerHTML === valeurCellule_3.innerHTML){
						somme = +valeurCellule_2.innerHTML + +valeurCellule_3.innerHTML;
						valeurCellule_4.innerHTML = +somme;
						valeurCellule_3.innerHTML = " ";
						valeurCellule_2.innerHTML = " ";
					}
					else {
						valeurCellule_4.innerHTML = +valeurCellule_3.innerHTML;
						valeurCellule_3.innerHTML = +valeurCellule_2.innerHTML;
						valeurCellule_2.innerHTML = " ";
					}
				}
				else if (valeurCellule_1.innerHTML !== " "){
					if (valeurCellule_2.innerHTML === valeurCellule_3.innerHTML){
						somme = +valeurCellule_2.innerHTML + +valeurCellule_3.innerHTML;
						valeurCellule_4.innerHTML = +somme;
						valeurCellule_3.innerHTML = +valeurCellule_1.innerHTML;
						valeurCellule_2.innerHTML = " ";
						valeurCellule_1.innerHTML = " ";
					}
					else if (valeurCellule_2.innerHTML === valeurCellule_1.innerHTML && valeurCellule_2.innerHTML !== valeurCellule_3.innerHTML){
						somme = +valeurCellule_2.innerHTML + +valeurCellule_1.innerHTML;
						valeurCellule_4.innerHTML = +valeurCellule_3.innerHTML;
						valeurCellule_3.innerHTML = +somme;
						valeurCellule_2.innerHTML = " ";
						valeurCellule_1.innerHTML = " ";
					}
					else {
						valeurCellule_4.innerHTML = +valeurCellule_3.innerHTML;
						valeurCellule_3.innerHTML = +valeurCellule_2.innerHTML;
						valeurCellule_2.innerHTML = +valeurCellule_1.innerHTML;
						valeurCellule_1.innerHTML = " ";
					}
				}
			}	
		}
	}
	else if (valeurCellule_4.innerHTML !== " "){
		if (valeurCellule_3.innerHTML === " "){
			if (valeurCellule_2.innerHTML === " "){
				if (valeurCellule_1.innerHTML === " "){
					console.log(" ");
				}
				else if (valeurCellule_1.innerHTML !== " "){
					if (valeurCellule_1.innerHTML === valeurCellule_4.innerHTML){
						somme = +valeurCellule_1.innerHTML + +valeurCellule_4.innerHTML;
						valeurCellule_4.innerHTML = +somme;
						valeurCellule_1.innerHTML = " ";
					}
					else {
						valeurCellule_3.innerHTML = +valeurCellule_1.innerHTML;
						valeurCellule_1.innerHTML = " ";
					}
				}
			}
			else if (valeurCellule_2.innerHTML !== " "){
				if (valeurCellule_1.innerHTML === " "){
					if (valeurCellule_2.innerHTML === valeurCellule_4.innerHTML){
						somme = +valeurCellule_2.innerHTML + +valeurCellule_4.innerHTML;
						valeurCellule_4.innerHTML = +somme;
						valeurCellule_2.innerHTML = " ";
					}
					else{
						valeurCellule_3.innerHTML = +valeurCellule_2.innerHTML;
						valeurCellule_2.innerHTML = " ";
					}
				}
				else if (valeurCellule_1.innerHTML !== " "){
					if (valeurCellule_2.innerHTML === valeurCellule_4.innerHTML){
						somme = +valeurCellule_2.innerHTML + +valeurCellule_4.innerHTML;
						valeurCellule_4.innerHTML = +somme;
						valeurCellule_3.innerHTML = +valeurCellule_1.innerHTML;
						valeurCellule_2.innerHTML = " ";
						valeurCellule_1.innerHTML = " ";
						}
					else if (valeurCellule_2.innerHTML !== valeurCellule_4.innerHTML && valeurCellule_2.innerHTML === valeurCellule_1.innerHTML){
						somme = +valeurCellule_2.innerHTML + +valeurCellule_1.innerHTML;
						valeurCellule_3.innerHTML = +somme;
						valeurCellule_2.innerHTML = " ";
						valeurCellule_1.innerHTML = " ";
					}
					else {
						valeurCellule_3.innerHTML = +valeurCellule_2.innerHTML;
						valeurCellule_2.innerHTML = +valeurCellule_1.innerHTML;
						valeurCellule_1.innerHTML = " ";
					}
				}
			}
		}
		else if (valeurCellule_3.innerHTML !== " "){
			if (valeurCellule_2.innerHTML === " "){
				if (valeurCellule_1.innerHTML === " "){
					if (valeurCellule_3.innerHTML === valeurCellule_4.innerHTML){
						somme = +valeurCellule_3.innerHTML + +valeurCellule_4.innerHTML;
						valeurCellule_4.innerHTML = +somme;
						valeurCellule_3.innerHTML = " ";
					}
					else {
						console.log(" ");
					}
				}
				else if (valeurCellule_1.innerHTML !== " "){
					if (valeurCellule_3.innerHTML === valeurCellule_4.innerHTML){
						somme = +valeurCellule_3.innerHTML + +valeurCellule_4.innerHTML;
						valeurCellule_4.innerHTML = +somme;
						valeurCellule_3.innerHTML = +valeurCellule_1.innerHTML;
						valeurCellule_1.innerHTML = " ";
						score += somme;
					}
					else if (valeurCellule_3.innerHTML !== valeurCellule_4.innerHTML && valeurCellule_3.innerHTML === valeurCellule_1.innerHTML){
						somme = +valeurCellule_3.innerHTML + +valeurCellule_1.innerHTML;
						valeurCellule_3.innerHTML = +somme;
						valeurCellule_1.innerHTML = " ";
					}
					else {
						valeurCellule_2.innerHTML = +valeurCellule_1.innerHTML;
						valeurCellule_1.innerHTML = " ";
					}
				}
			}
			else if (valeurCellule_2.innerHTML !== " "){
				if (valeurCellule_1.innerHTML === " "){
					if (valeurCellule_3.innerHTML === valeurCellule_4.innerHTML) {
						somme = +valeurCellule_3.innerHTML + +valeurCellule_4.innerHTML;
						valeurCellule_4.innerHTML = +somme;
						valeurCellule_3.innerHTML = valeurCellule_2.innerHTML;
						valeurCellule_2.innerHTML = " ";
					}
					else if (valeurCellule_3.innerHTML !== valeurCellule_4.innerHTML && valeurCellule_2.innerHTML === valeurCellule_3.innerHTML){
						somme = +valeurCellule_3.innerHTML + +valeurCellule_2.innerHTML;
						valeurCellule_3.innerHTML = +somme;
						valeurCellule_2.innerHTML = " ";
					}
					else{
						console.log(" ");
					}
				}
				else if (valeurCellule_1.innerHTML !== " "){
					if (valeurCellule_4.innerHTML === valeurCellule_3.innerHTML){
						if (valeurCellule_1.innerHTML === valeurCellule_2.innerHTML){
							somme = +valeurCellule_4.innerHTML + +valeurCellule_3.innerHTML;
							valeurCellule_4.innerHTML = +somme;
							somme = +valeurCellule_2.innerHTML + +valeurCellule_1.innerHTML;
							valeurCellule_3.innerHTML = +somme;
							valeurCellule_2.innerHTML = " ";
							valeurCellule_1.innerHTML = " ";
						}
						else{
							somme = +valeurCellule_4.innerHTML + +valeurCellule_3.innerHTML;
							valeurCellule_4.innerHTML = +somme;
							valeurCellule_3.innerHTML = +valeurCellule_2.innerHTML;
							valeurCellule_2.innerHTML = +valeurCellule_1.innerHTML;
							valeurCellule_1.innerHTML = " ";
						}
					}
					else if (valeurCellule_4.innerHTML !== valeurCellule_3.innerHTML){
						if (valeurCellule_2.innerHTML === valeurCellule_3.innerHTML){
							somme = +valeurCellule_2.innerHTML + +valeurCellule_3.innerHTML;
							valeurCellule_3.innerHTML = +somme;
							valeurCellule_2.innerHTML = +valeurCellule_1.innerHTML;
							valeurCellule_1.innerHTML = " ";
						}
						else if (valeurCellule_1.innerHTML === valeurCellule_2.innerHTML){
							somme = +valeurCellule_2.innerHTML + +valeurCellule_1.innerHTML;
							valeurCellule_2.innerHTML = +somme;
							valeurCellule_1.innerHTML = " ";
						}
						else{
							console.log(" ");
						}
					}
					else {
						console.log(" ");
					}
				}
			}	
		}
	}
};

///////////////////////////////////////Changement de couleur ///////////////////////////////////////
function changementCouleur(){
	for (var cell = 1; cell < 17; cell++){
		cell = cell.toString();
		cellule = document.getElementById(cell);
		if (cellule.innerHTML <= 2 ){
			cellule.style.backgroundColor = "#FFF8DC"; //Barbe de maïs
		}
		else if (cellule.innerHTML == 4 ){
			cellule.style.backgroundColor = "#F0E68C"; //Khaki
		}
		else if (cellule.innerHTML == 8 ){
			cellule.style.backgroundColor = "#D2691E"; //Chocolat
		}
		else if (cellule.innerHTML == 16){
			cellule.style.backgroundColor = "#FF7F50"; //Corail
		}
		else if (cellule.innerHTML == 32){
			cellule.style.backgroundColor = "#D19275"; //Feldspath
		}
		else if (cellule.innerHTML == 64){
			cellule.style.backgroundColor = "#FFA07A"; //Saumon clair
		}
		else if (cellule.innerHTML == 128){
			cellule.style.backgroundColor = "#F08080"; //Corail clair
		}
		else if (cellule.innerHTML == 256){
			cellule.style.backgroundColor = "#CD5C5C"; //Rouge indien
		}
		else if (cellule.innerHTML == 512){
			cellule.style.backgroundColor = "#FF6347"; //Tomate
		}
		else if (cellule.innerHTML == 1024){
			cellule.style.backgroundColor = "#FF7F50"; //Corail
		}
		else if (cellule.innerHTML == 2048){
			cellule.style.backgroundColor = "FFD700"; //Gold
		}
		else if (cellule.innerHTML == 4096 || cellule.innerHTML >= 8182){
			cellule.style.backgroundColor = "#FF4500"; //Rouge orange
		}
	}
};

/////////////////////////////////////// Bloquer le scroll vertical a cause des fleches ///////////////////////////////////////
function disableScroll(e){
	if (e.keyCode) {
		/^(32|33|34|35|36|38|40)$/.test(e.keyCode) && e.preventDefault();
	}
	else {
		e.preventDefault();
	}
};