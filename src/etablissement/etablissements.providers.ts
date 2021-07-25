import { Etablissement } from './etablissement.entity';

export const etablissementsProviders = [
    {
        provide: 'EtablissementsRepository',
        useValue: Etablissement,
    },
];