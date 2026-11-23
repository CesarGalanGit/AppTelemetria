import { Sonda } from '../models/sonda.model';

export const SONDAS: readonly Sonda[] = [
  {
    id: 'SN-01',
    nombre: 'voyager-ix',
    planetaDestino: 'marte',
    bateria: 85,
    distanciaKm: 225000000,
    enLinea: true,
    ultimaTransmision: new Date(2026, 10, 18, 10, 30),
  },
  {
    id: 'SN-02',
    nombre: 'helio-probe',
    planetaDestino: 'venus',
    bateria: 18,
    distanciaKm: 41000000,
    enLinea: true,
    ultimaTransmision: new Date(2026, 10, 18, 9, 15),
  },
  {
    id: 'SN-03',
    nombre: 'kronos-orbiter',
    planetaDestino: 'saturno',
    bateria: 0,
    distanciaKm: 1400000000,
    enLinea: false,
    ultimaTransmision: new Date(2026, 9, 2, 18, 45),
  },
  {
    id: 'SN-04',
    nombre: 'europa-driller',
    planetaDestino: 'júpiter',
    bateria: 62,
    distanciaKm: 628000000,
    enLinea: true,
    ultimaTransmision: new Date(2026, 10, 18, 11, 5),
  },
];
