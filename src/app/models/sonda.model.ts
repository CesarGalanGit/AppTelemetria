export interface Sonda {
  id: string;
  nombre: string;
  planetaDestino: string;
  bateria: number;
  distanciaKm: number;
  enLinea: boolean;
  ultimaTransmision: Date;
}
