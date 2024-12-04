import {DateTime} from 'luxon'

export class Horario {

    inicio: DateTime; // ou Date, dependendo da sua API
    fim: DateTime;

  
    constructor( inicio: number, fim: number) {
      this.inicio = DateTime.fromSeconds(inicio).setZone("America/Sao_Paulo");
      this.fim = DateTime.fromSeconds(fim).setZone("America/Sao_Paulo");
    }
  
    
    getDia(){
        return this.inicio.toFormat("DDDD")
    }

    getHora(){
        return this.inicio.toFormat("HH:ss")
    }
  }
  