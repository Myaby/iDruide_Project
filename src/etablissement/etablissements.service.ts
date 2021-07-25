import { Component, Inject  } from '@nestjs/common';
import { Etablissement } from './etablissement.entity';
import { Op } from 'sequelize';
import * as sequelize from "sequelize";

@Component()
export class EtablissementsServices {

    constructor(
        @Inject('EtablissementsRepository') private readonly etablissementsRepository: typeof Etablissement
    ) {}

    async findAll(limit : number , offset : number): Promise<Etablissement[]> {
        return await this.etablissementsRepository.findAll<Etablissement>({
            limit : limit,
            offset : offset
        });
    }

    async findAllByIdentifiant(identifiant : string): Promise<Etablissement> {
        return await this.etablissementsRepository.findOne<Etablissement>({
            where : {
                "Identifiant_de_l_etablissement" : identifiant
            }
        });
    }

    async findAllByPostalCode(postal_code : string ,offset : number  ,limit : number ): Promise<Etablissement[]> {
        return await this.etablissementsRepository.findAll<Etablissement>({
            limit : limit,
            offset : offset,
            where : {
                "Code_postal" : postal_code
            }
        });
    }

    async findAllByTypeSchool(typeschool : string ,offset  : number ,limit : number ): Promise<Etablissement[]> {
        return await this.etablissementsRepository.findAll<Etablissement>({
            limit : limit,
            offset : offset,
            where : {
                "Type_etablissement" : typeschool
            }
        });
    }

    async findAllByAdministrativeDivision(administrative_division : string ,offset  : number ,limit : number ): Promise<Etablissement[]> {
        return await this.etablissementsRepository.findAll<Etablissement>({
            limit : limit,
            offset : offset,
            where : {
                [Op.or] : [{
                    "code_bassin_formation" : {[ Op.like] : "%" +administrative_division + "%"}
                },{
                    "libelle_bassin_formation" : {[ Op.like] : "%" +administrative_division + "%"}
                }]
            }
        });
    }

    async findOneByGeoloc(latitude : number , longitude : number  ): Promise<Etablissement> {

        let radlat1 = "PI() * "+latitude +"/180";
        let radlat2 = "PI() * latitude /180";
        let theta = "(" +longitude +"-longitude)";
        let radtheta = "PI() * ("+theta+"/180)";
        let distance = "acos(sin("+radlat1+") * sin("+radlat2+") + cos("+radlat1+") * cos("+radlat2+") * cos("+radtheta+"))*180/pi()*60*1.1515*1.609344";

        let dist = await this.etablissementsRepository.findOne<Etablissement>({
            attributes: [[sequelize.literal( distance),"distance"],"ID"],
            where : {
                longitude : {
                    [Op.not] : 0
                },
                latitude : {
                    [Op.not] : 0
                }
            },
            order : [sequelize.literal( "distance")]
        });
        return await this.etablissementsRepository.findOne<Etablissement>({
            where :{
                "ID" : dist.ID
            }
        });
    }

}
