window.onload = areaUpdate;   // Zorgt ervoor dat wanneer je de pagina laadt de plaatjes om op te klikken een goede afmeting heeft.
window.onresize = areaUpdate;  // Zorgt ervoor dat wanneer iemand de browser resized dat de plaatjse geupdate worden.

function randomPlaneet() {
// De rick rol is er al uit hoor..
    console.log('Gebruiker wil graag naar een willekeurige planeet, reis wordt nu voorbereid...');
    var planetenLijst = new Array();
    planetenLijst[0] = "dick1zon.html";
    planetenLijst[1] = "dick3mercurius.html";
    planetenLijst[2] = "nigel2venus.html";
    planetenLijst[3] = "dick2aarde.html";
    planetenLijst[4] = "nigel1mars.html";
    planetenLijst[5] = "bas1jupiter.html";
    planetenLijst[6] = "bas2saturnus.html";
    planetenLijst[7] = "bas3uranus.html";
    planetenLijst[8] = "nigel3neptunus.html";


    var randomNummer = Math.round(Math.random() * 8);
    console.log("Planeet waar naar gereisd wordt is: " +planetenLijst[randomNummer]);
    parent.location = planetenLijst[randomNummer];
}


function areaUpdate(){
    
    // Verzamelt data over de pagina en hoe groot het plaatje is om daarna de klikbare delen aan te passen aan het plaatje:
	

    // X1, Y1, X2, Y2
    var comma = ",";   // Dit is makkelijker om te typen dan een ","
    var bottomLine = ",0,"; // Dit is een constante op onze site aangezien de box voor elk plaatje helemaal naar beneden gaat
    var w = document.getElementById("zonnestelsel").clientWidth;  // Dit lengte van het plaatje
    var h = document.getElementById("zonnestelsel").clientWidth;  // De hoogte van het plaatje
    var zon = "0,0,"+ w / 7 +comma+ h;
    var mercurius = w / 7 + bottomLine + w / 4.5+ comma + h;
    var venus = w / 4.5 + bottomLine + w / 3.8 + comma + h;
    var aarde = w / 3.8 +bottomLine+ w / 3+ comma + h;
    var mars = w / 3 + bottomLine + w / 2.65 + comma +  h;
    var jupiter = w/2.6 + bottomLine + w /1.9 + comma + h;
    var saturnus = w / 1.9 + bottomLine + w / 1.5 + comma + h;
    var uranus = w / 1.5 + bottomLine + w / 1.3 + comma + h;
    var neptunus = w / 1.3 + bottomLine + w + comma + h;


    // Dit zet alle coördinaten voor de klikbare dingen van de afbeelding.
    document.getElementById("zon").coords = zon;
    document.getElementById("mercurius").coords = mercurius;
    document.getElementById("venus").coords = venus;
    document.getElementById("aarde").coords = aarde;
    document.getElementById("mars").coords = mars;
    document.getElementById("jupiter").coords = jupiter;
    document.getElementById("saturnus").coords = saturnus;
    document.getElementById("uranus").coords = uranus;
    document.getElementById("neptunus").coords = neptunus;

	console.log("Resized!");
}	