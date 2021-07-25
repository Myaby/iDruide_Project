import { Component, UseGuards } from '@nestjs/common';
import { Query, Mutation, Resolver, DelegateProperty, Subscription } from '@nestjs/graphql';



import { Etablissement } from './etablissement.entity';
import { EtablissementsServices } from './etablissements.service';
import { EtablissementsGuard } from './etablissements.guard';


@Resolver('Etablissements')
export class EtablissementsResolvers {
    constructor(private readonly etablissementsService: EtablissementsServices) {}

    @Query()
    @UseGuards(EtablissementsGuard)
    async getEtablissements() {
        return await this.etablissementsService.findAll();
    }

    @Query("getEtablissementsByIdentifiant")
    @UseGuards(EtablissementsGuard)
    async getEtablissementsByIdentifiant(obj, args, context, info) {
        const { identifiant } = args;
        return await this.etablissementsService.findAllByIdentifiant(identifiant);
    }

    @Query("getEtablissementsByPostalCode")
    @UseGuards(EtablissementsGuard)
    async getEtablissementsByPostalCode(obj, args, context, info) {
        const { postal_code,offset,limit } = args;
        return await this.etablissementsService.findAllByPostalCode(postal_code,offset,limit);
    }

    @Query("getEtablissementsByTypeSchool")
    @UseGuards(EtablissementsGuard)
    async getEtablissementsByTypeSchool(obj, args, context, info) {
        const { typeschool,offset,limit } = args;
        return await this.etablissementsService.findAllByTypeSchool(typeschool,offset,limit);
    }

    @Query("getEtablissementsByAdministrativeDivision")
    @UseGuards(EtablissementsGuard)
    async getEtablissementsByAdministrativeDivision(obj, args, context, info) {
        const { administrative_division,offset,limit } = args;
        return await this.etablissementsService.findAllByAdministrativeDivision(administrative_division,offset,limit);
    }

    @Query("getEtablissementsByGeoloc")
    @UseGuards(EtablissementsGuard)
    async getEtablissementsByGeoloc(obj, args, context, info) {
        const { latitude, longitude,offset,limit } = args;
        return await this.etablissementsService.findOneByGeoloc(latitude, longitude);
    }

}
