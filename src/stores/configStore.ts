import type { IConfigs, IExcessao } from "@/interfaces/confgis"
import { defineStore } from "pinia"

export const useConfigStore = defineStore('config',{
    state:()=>({
        configs: null as null|IConfigs,
        excessoes: null as null|IExcessao[]
    }),
    actions:{
        pegarConfigs(){
            this.configs = {
                "duracao_min": 15,
                "data_maxima_semanas": 4,
                "primeiro_horario": "08:00",
                "ultimo_horario": "17:59",
                "tempo_ate_primeiro_horario_em_min": 120,
                "intervalos_entre_horarios": null,
                "cronogramas": {
                    "segunda": {
                        "aberto": true,
                        "turnos": [{nome:'manhã' ,cor:'yellow',inicio:"08:00", fim:"12:00"}, {nome:'tarde',cor:"orange",inicio:"14:00", fim:"18:00"}]
                    },
                    "terça": {
                        "aberto": true,
                        "turnos": [{nome:'manhã' ,cor:'yellow',inicio:"08:00", fim:"12:00"}, {nome:'tarde',cor:"orange",inicio:"14:00", fim:"18:00"}]
                    },
                    "quarta": {
                        "aberto": true,
                        "turnos": [{nome:'manhã' ,cor:'yellow',inicio:"08:00", fim:"12:00"}, {nome:'tarde',cor:"orange",inicio:"14:00", fim:"18:00"}]
                    },
                    "quinta": {
                        "aberto": true,
                        "turnos": [{nome:'manhã' ,cor:'yellow',inicio:"08:00", fim:"12:00"}, {nome:'tarde',cor:"orange",inicio:"14:00", fim:"18:00"}]
                    },
                    "sexta": {
                        "aberto": true,
                        "turnos": [{nome:'manhã' ,cor:'yellow',inicio:"08:00", fim:"12:00"}, {nome:'tarde',cor:"orange",inicio:"14:00", fim:"18:00"}]
                    },
                    "sábado": {
                        "aberto": true,
                        "turnos": [{nome:'manhã' ,cor:'yellow',inicio:"09:00", fim:"13:00"}],
                    },
                    "domingo": {
                        "aberto": false,
                        "turnos": null
                    }
                }
            }
        }
    }
})