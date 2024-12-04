
import type { IUser } from '@/interfaces';
import { defineStore } from 'pinia';
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
                    horarioMarcado: {inicio:1734306928, fim:1734307228},
                    horariosPassados:[{inicio:1731715228, fim:1731716128},{inicio:1726445728, fim:1726446628}]
                }
            }
        }
    }

})