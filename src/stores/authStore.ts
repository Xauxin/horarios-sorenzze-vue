
import type { IUser } from '@/interfaces';
import { defineStore } from 'pinia';
import { Horario, HorarioPassado } from '@/models/Horario';

export const useAuthStore = defineStore('auth', {
    state: () =>({
        isLoggedIn: false as boolean,
        user: null as IUser|null,
    }),
    actions:{
        logarComHorarioDandoParaAlterar(){
            this.isLoggedIn = true
            this.user = {
                username: "Avatar",
                role: 'cliente',
                email: "user@email.com",
                telefone: "(44)99827-5682",
                firstName: "Aang",
                lastName: "Nomado Do Ar",
                img: "https://reactormag.com/wp-content/uploads/2024/01/avatar-the-last-airbender-flying-740x465.jpg",
                estado:{
                    comHorario: true,
                    aTempoDeAlterar: true,
                    horarioMarcado: new Horario(1734306928, 1734307228),
                    horariosPassados:[new HorarioPassado(1731715228, 1731716128, true),new HorarioPassado(1726445728, 1726446628, false)]
                }
            }
        }
    }

})