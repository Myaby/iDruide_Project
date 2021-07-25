import {  UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';



import { EtablissementsServices } from './etablissements.service';
import { EtablissementsGuard } from './etablissements.guard';


@Resolver('Etablissements')
export class EtablissementsResolvers {
    constructor(private readonly etablissementsService: EtablissementsServices) {}

    @Query("getEtablissements")
    @UseGuards(EtablissementsGuard)
    async getEtablissements(obj, args ) {
        const { limit , offset } = args;
        return await this.etablissementsService.findAll(limit , offset );
    }

    @Query("getEtablissementsByIdentifiant")
    @UseGuards(EtablissementsGuard)
    async getEtablissementsByIdentifiant(obj, args) {
        const { identifiant } = args;
        return await this.etablissementsService.findAllByIdentifiant(identifiant);
    }

    @Query("getEtablissementsByPostalCode")
    @UseGuards(EtablissementsGuard)
    async getEtablissementsByPostalCode(obj, args) {
        const { postal_code,offset,limit } = args;
        return await this.etablissementsService.findAllByPostalCode(postal_code,offset,limit);
    }

    @Query("getEtablissementsByTypeSchool")
    @UseGuards(EtablissementsGuard)
    async getEtablissementsByTypeSchool(obj, args) {
        const { typeschool,offset,limit } = args;
        return await this.etablissementsService.findAllByTypeSchool(typeschool,offset,limit);
    }

    @Query("getEtablissementsByAdministrativeDivision")
    @UseGuards(EtablissementsGuard)
    async getEtablissementsByAdministrativeDivision(obj, args) {
        const { administrative_division,offset,limit } = args;
        return await this.etablissementsService.findAllByAdministrativeDivision(administrative_division,offset,limit);
    }

    @Query("getEtablissementsByGeoloc")
    @UseGuards(EtablissementsGuard)
    async getEtablissementsByGeoloc(obj, args) {
        const { latitude, longitude} = args;
        return await this.etablissementsService.findOneByGeoloc(latitude, longitude);
    }

}
