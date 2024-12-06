
import type { IUser } from '@/interfaces';
import { defineStore } from 'pinia';
import  users  from './usertypes/users'

export const useAuthStore = defineStore('auth', {
    state: () =>({
        isLoggedIn: false as boolean,
        user: null as IUser|null,
    }),
    actions:{
        login(numero:string){
            sessionStorage.setItem('login', numero)
            if (numero == '1'){
                this.logarAdmin()
            } else if (numero == '2'){
                this.logarComHorarioDandoParaAlterar()
            } else if (numero == '3'){
                this.logarComHorarioNaoPodendoAlterar()
            } else if (numero == '4'){
                this.logarSemHorario()
            }
        },
        logarComHorarioDandoParaAlterar(){
            this.isLoggedIn = true
            this.user = users.clienteComHorarioPodendoAlterar
            },
        logarComHorarioNaoPodendoAlterar(){
            this.isLoggedIn = true
            this.user = users.clienteComHorarioNaoPodendoAlterar
        },
        logarSemHorario(){
            this.isLoggedIn = true
            this.user = users.clienteSemHorario
        },
        logarAdmin(){
            this.isLoggedIn = true
            this.user = users.admin
        },
        logout(){
            sessionStorage.clear()
            this.isLoggedIn = false
            this.user = null
        }

    }
})