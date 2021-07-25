# Project iDruide Test

nestjs etablissement CRUD application with graphql Mysql Apollo Sequelize implementation

## Getting Started

you need node installed first
got to https://nodejs.org/en/download/ and follow instructions there to install node

### Installing and running mysql 
#### Windows
To install on windows you download Xampp from this link and follow the installation

* [Xampp](https://www.apachefriends.org/xampp-files/8.0.8/xampp-windows-x64-8.0.8-1-VS16-installer.exe)

When it's done.
    
    Launch Mysql from Xampp application to run it on port 3306 (default)


#### Linux debian

Please to follow this guide to install it.

* [mysql](https://linuxize.com/post/how-to-install-mysql-on-debian-10/)

#### Linux ubuntu

Please to follow this guide to install it.

* [mysql](https://doc.ubuntu-fr.org/mysql)

### Installer database and deploy dump

#### Launch mysql prompt

On windows :

```  c:\xampp\mysql\bin\mysql.exe  --user=root --password="" ```

On linux :

```  mysql -u root ```

```     with -p if you put a password ```

 ```    mysql -u root -p password ```

#### Create database

On the mysql prompt execute the following line :

```     create database etablissements ```

#### Select database etablissements

```   use etablissements ```

#### Executed script to deploy the dump

Info : etablissement.sql location's is in the repository in "iDruide_Project/script_sql/etablissement.sql"

``` etablissements < source absolut_path/iDruide Project/script_sql/etablissement.sql ```

### Installing and running server app

``` git clone https://github.com/gmasnestjs-mysql-graphql-sequelize-typescript.git```

``` cd nestjs-mysql-graphql-sequelize-typescript```

``` npm install```

``` npm start```

navigate to browser http://localhost:3000/graphiql

### request available

#### 1 : all list 
This request pull all the database. 
``` 
query {
  getEtablissements{
  }
}
``` 
#### 2 : find one by identifiant
This request fetch the entry .
``` 
query {
  getEtablissementsByIdentifiant(identifiant : string)
}
``` 
#### 3 : find all by Postal_code
This request fetch the entry .
``` 
query {
  getEtablissementsByPostalCode(postal_code : string, limit : int, offset:int)
}
``` 

#### 4 : find all by type of school
This request fetch the entry .
``` 
query {
  getEtablissementsByTypeSchool(typeschool : string, limit : int, offset:int)
}
``` 

#### 5 : find all by Administrative Division
This request fetch the entry .
``` 
query {
  getEtablissementsByAdministrativeDivision(administrative_division : string, limit : int, offset:int)
}
``` 

#### 5 : find the nearest from gps coordinates
This request fetch the entry .
``` 
query {
  getEtablissementsByAdministrativeDivision(latitude: Floatlongitude: Float)
}
``` 

#### response example for request 5 : find the nearest from gps coordinates
``` 
query{
  getEtablissementsByGeoloc(latitude :41.3864931217, longitude :9.15696039508)
  }
  ``` 
``` 
{
  "data": {
    "getEtablissementsByGeoloc": {
      "ID": 31130,
      "Identifiant_de_l_etablissement": "6200088B",
      "Nom_etablissement": "Ecole primaire Bonifacio",
      "Type_etablissement": "Ecole",
      "Statut_public_prive": "Public",
      "Adresse_1": "Place Castellettu",
      "Adresse_2": "",
      "Adresse_3": "20169 BONIFACIO",
      "Code_postal": "20169",
      "Code_commune": "2A041",
      "Nom_commune": "Bonifacio",
      "Code_departement": "02A",
      "Code_academie": "27",
      "Code_region": "94",
      "Ecole_maternelle": "1",
      "Ecole_elementaire": "1",
      "Voie_generale": "",
      "Voie_technologique": "",
      "Voie_professionnelle": "",
      "Telephone": "495730198",
      "Fax": "",
      "Web": "",
      "Mail": "ce.6200088B@ac-corse.fr",
      "Restauration": "1",
      "Hebergement": "0",
      "ULIS": "1",
      "Apprentissage": "",
      "Segpa": "",
      "Section_arts": "",
      "Section_cinema": "",
      "Section_theatre": "",
      "Section_sport": "",
      "Section_internationale": "",
      "Section_europeenne": "",
      "Lycee_Agricole": "",
      "Lycee_militaire": "",
      "Lycee_des_metiers": "",
      "Post_BAC": "",
      "Appartenance_Education_Prioritaire": "",
      "GRETA": "",
      "SIREN_SIRET": "21200041800047",
      "Nombre_d_eleves": "191",
      "Fiche_onisep": "",
      "position": "41.3864931217,9.15696039506",
      "Type_contrat_prive": "SANS OBJET",
      "Libelle_departement": "Corse-du-Sud",
      "Libelle_academie": "Corse",
      "Libelle_region": "Corse",
      "coordonnee_X": "1215970.4",
      "coordonnee_Y": "6051753.8",
      "epsg": "EPSG:2154",
      "nom_circonscription": "Circonscription 1er degré Porto Vecchio",
      "latitude": 41.38649312174259,
      "longitude": 9.156960395056084,
      "precision_localisation": "Numéro de rue",
      "date_ouverture": "26/04/1969",
      "date_maj_ligne": "21/07/2021",
      "etat": "OUVERT",
      "ministere_tutelle": "MINISTERE DE L'EDUCATION NATIONALE",
      "etablissement_multi_lignes": "0",
      "rpi_concentre": "0",
      "rpi_disperse": "",
      "code_nature": "151",
      "libelle_nature": "ECOLE DE NIVEAU ELEMENTAIRE",
      "Code_type_contrat_prive": "99",
      "PIAL": "",
      "etablissement_mere": "",
      "type_rattachement_etablissement_mere": "",
      "code_bassin_formation": "",
      "libelle_bassin_formation": ""
    }
  }
}

``` 
## Built With

* [Nestjs](https://nestjs.com/)
* [Sequelize](https://sequelize.org/)
* [Graphql](https://graphql.org/)




## Authors

* **Guillaume MAS** - 


## License

free

## Acknowledgments

* Nestjs Fraternity for building and maintaining this great framework read more at https://docs.nestjs.com/


