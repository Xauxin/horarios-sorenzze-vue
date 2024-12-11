import type { IConfigs } from "@/interfaces/confgis";
import { Excessao } from "@/models/Excessao";
import { defineStore } from "pinia";

export const useConfigStore = defineStore("config", {
  state: () => ({
    configs: null as null | IConfigs,
    excessoes: null as null | Excessao[],
  }),
  actions: {
    pegarConfigs() {
      this.configs = {
        duracao_min: 15,
        data_maxima_semanas: 4,
        tempo_ate_primeiro_horario_em_min: 120,
        intervalos_entre_horarios: null,
        cronogramas: {
          segunda: {
            aberto: true,
            turnos: [
              { nome: "manhã", inicio: "08:00", fim: "12:00" },
              { nome: "tarde", inicio: "14:00", fim: "18:00" },
            ],
          },
          terça: {
            aberto: true,
            turnos: [
              { nome: "manhã", inicio: "08:00", fim: "12:00" },
              { nome: "tarde", inicio: "14:00", fim: "18:00" },
            ],
          },
          quarta: {
            aberto: true,
            turnos: [
              { nome: "manhã", inicio: "08:00", fim: "12:00" },
              { nome: "tarde", inicio: "14:00", fim: "18:00" },
            ],
          },
          quinta: {
            aberto: true,
            turnos: [
              { nome: "manhã", inicio: "08:00", fim: "12:00" },
              { nome: "tarde", inicio: "14:00", fim: "18:00" },
            ],
          },
          sexta: {
            aberto: true,
            turnos: [
              { nome: "manhã", inicio: "08:00", fim: "12:00" },
              { nome: "tarde", inicio: "14:00", fim: "18:00" },
            ],
          },
          sábado: {
            aberto: true,
            turnos: [{ nome: "manhã", inicio: "09:00", fim: "13:00" }],
          },
          domingo: {
            aberto: false,
            turnos: null,
          },
        },
      };
    },
    pegarExcessoes() {
      this.excessoes = [
        new Excessao(
          "Feriado 1",
          "08:00",
          "18:00",
          "Dia Especifico",
          1734145200
        ),
        new Excessao(
          "Feriado 2",
          "08:00",
          "18:00",
          "Dia Especifico",
          1734836400
        ),
        new Excessao("Psicólogo Jayne", "10:30", "12:00", "Dia da Semana", "2"),
      ];
    },
  },
});
