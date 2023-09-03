function Eleveur(nom, prenom, adresse, telephone, cheptel, nombreBetes, traitement1, traitement2, idc) {
    this.nom = nom;
    this.prenom = prenom;
    this.adresse = adresse;
    this.telephone = telephone;
    this.cheptel = cheptel;
    this.nombreBetes = nombreBetes;
    this.traitement1 = traitement1;
    this.traitement2 = traitement2;
    this.idc = idc;
  }

  const eleveur1 = new Eleveur("Dupont", "Jean", "1 rue de la Paix", "01 23 45 67 89", "FR123456", 50, true, false, "deux passages");
const eleveur2 = new Eleveur("Durand", "Paul", "2 rue du Soleil", "01 23 45 67 90", "FR789012", 30, false, true, "un passage");