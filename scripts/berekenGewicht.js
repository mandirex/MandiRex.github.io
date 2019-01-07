function bereken() {
    var gewicht = 10;
	gewicht = document.forms["formGewichtBepalen"]["gewichtAarde"].value / 9.81;
    console.log("gewicht gedeeld door 9,81: " + gewicht);
	console.log("gewicht op aarde: " + document.forms["formGewichtBepalen"]["gewichtAarde"].value);


    var planeetTekst = "";


    var gekozenPlaneet = document.formGewichtBepalen.planeet.value;
    console.log(gekozenPlaneet);
    switch (gekozenPlaneet) {
        case "0":
            planeetTekst ="de zon"
            gewicht *= 274;
            break;
        case "1":
            planeetTekst = "Mercurius";
            gewicht*= 3.7;
            break;
        case "2":
            planeetTekst = "Venus";
            gewicht*= 8.87;
            break;
        case "3":
            planeetTekst = "Aarde";
            gewicht*= 9.81;
            break;
        case "4":
            planeetTekst = "Mars";
            gewicht*= 3.7;
            break;
        case "5":
            planeetTekst = "Jupiter";
            gewicht*= 24.9;
            break;
        case "6":
            planeetTekst = "Saturnus";
            gewicht*= 10.4;
            break;
        case "7":
            planeetTekst = "Uranus";
            gewicht*= 8.9;
            break;
        case "8":
            planeetTekst = "Neptunus";
            gewicht*= 11.2;
            break;
    }
    console.log(planeetTekst);
    document.getElementById("uitkomst").innerHTML = "Jij zou op " + planeetTekst + " ongeveer "+ Math.round(gewicht * 100) / 100+"KG wegen.";
}
