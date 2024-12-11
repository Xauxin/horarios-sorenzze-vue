import { DateTime } from "luxon";
import { Horario } from "./Horario";

class Excessao {
  nome: string; // ou Date, dependendo da sua API
  inicio: string;
  fim: string;
  ocorrencia: string;
  dia: number | string | Horario | null;

  constructor(
    nome: string,
    inicio: string,
    fim: string,
    ocorrencia: string,
    dia: number | string | Record<string,number> | null
  ) {
    this.nome = nome;
    this.inicio = inicio;
    this.fim = fim;
    this.ocorrencia = ocorrencia
    if (typeof dia === "object" && dia !== null) {
        const hasValidKeys = typeof dia.inicio === "number" && typeof dia.fim === "number";
        if (hasValidKeys) {
          this.dia = new Horario(dia.inicio, dia.fim);
        } else {
          console.error("Objeto `dia` inválido, deve conter `inicio` e `fim` como números.");
          this.dia = null; // Valor padrão em caso de erro
        }
      } else {
        this.dia = dia;
      }
  }

  getDia(){
    if (this.dia instanceof Horario){
        return this.dia.getDia()
    } else if (typeof this.dia == 'string') {
        if(this.dia.length == 1){
                const semana = {
                    "1": "Domingo",
                    "2": "Segunda-feira",
                    "3": "Terça-feira",
                    "4": "Quarta-feira",
                    "5": "Quinta-feira",
                    "6": "Sext-feira",
                    "7": "Sábado"
                } as Record<string,string>
                return semana[this.dia]
            }
            return this.dia

    } else if (typeof this.dia == 'number'){
        return DateTime.fromSeconds(this.dia).setZone("America/Sao_Paulo").toFormat("DDDD")
    }
    
  }


}

export { Excessao };
