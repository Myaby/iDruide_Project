# Project iDruide Test

Node/Nestjs etablissement CRUD application with graphql, Mysql, Apollo and Sequelize implementation.

## Getting Started

you need node installed first
got to https://nodejs.org/en/download/ and follow instructions there to install node

### Installing and running mysql 
#### Windows
To install on Windows you should download Xampp from this link and follow the installation

* [Xampp](https://www.apachefriends.org/fr/index.html)

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

On Windows :

```  c:\xampp\mysql\bin\mysql.exe  --user=root --password="" ```

On linux :

```  mysql -u root ```

with -p if you put a password 

 ```    mysql -u root -p password ```

#### Create database

On the mysql prompt execute the following line :

```     create database etablissements ```

#### Select database etablissements

```   use etablissements ```

#### Executed script to deploy the dump

Info : etablissement.sql location's is in the repository in "iDruide_Project/script_sql/etablissement.sql"
Info : switch %absolut_path% by you own path
``` etablissements < source %absolut_path%/iDruide Project/script_sql/etablissement.sql ```

then

``` exit ```

### Only if your configuration of mysql is not the default one  

you can on the next file configure the application with you own parameters:

./src/database/database.provider.ts

```
 const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'etablissements',
 });
```

### Installing and running server app

``` git clone https://github.com/Myaby/iDruide_Project.git```

``` cd iDruide_Project ```

``` npm install```

``` npm start```

navigate to browser http://localhost:3000/graphiql

## requests available

For each request with limit and offset parameters, these parameters are optionals

### 1 : all list 
This request fetch all entries in the table etablissement. 
Pagination is available with (limit/offset parameters).
``` 
query {
  getEtablissements(limit : int, offset:int)
}
``` 
### 2 : find one by identifiant
This request fetch the entry with the strictly same indentifiant.
The search is on the "Identifiant_de_l_etablissement" column
The result is maximum one etablissement 
No pagination on this request.
``` 
query {
  getEtablissementsByIdentifiant(identifiant : string)
}
``` 
### 3 : find all by Postal_code
The search is on the "Code_postal" column
This request fetch the entry .
The result is an array of etablissements.
Pagination is available with (limit/offset parameters).
``` 
query {
  getEtablissementsByPostalCode(postal_code : string, limit : int, offset:int)
}
``` 

### 4 : find all by type of school
The search is on the "Type_etablissement" column
This request fetch the entry .
The result is an array of etablissements.
Pagination is available with (limit/offset parameters).
``` 
query {
  getEtablissementsByTypeSchool(typeschool : string, limit : int, offset:int)
}
``` 

### 5 : find all by Administrative Division

The search is on the "code_bassin_formation" column or "libelle_bassin_formation" column
All entry which contain the pattern "administrative_division : string" are accepted
The result is an array of etablissements.
Pagination is available with (limit/offset parameters).
``` 
query {
  getEtablissementsByAdministrativeDivision(administrative_division : string, limit : int, offset:int)
}
``` 

### 6 : find the nearest from gps coordinates
The search will calculate the nearest entry between latitude/longitude parameters and latitude/longitude columns in database
The result is maximum one etablissement
No pagination on this request.
``` 
query {
  getEtablissementsByAdministrativeDivision(latitude: Float,longitude: Float)
}
``` 

#### response example for request 6 : find the nearest from gps coordinates
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
* [ApolloGraphql](https://www.apollographql.com/docs/)



## Authors

* **Guillaume MAS** - 


## License

free


