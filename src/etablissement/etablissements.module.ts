import { Module } from '@nestjs/common';
import { EtablissementsServices } from './etablissements.service';
import { EtablissementsResolvers } from './etablissements.resolvers';
import { etablissementsProviders } from './etablissements.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
    imports: [DatabaseModule],
    components: [EtablissementsServices, EtablissementsResolvers, ...etablissementsProviders],
})
export class EtablissementsModule {}
