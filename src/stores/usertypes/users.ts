import type { IUser } from "@/interfaces"
import { Horario, HorarioPassado } from "@/models/Horario"

const clienteComHorarioPodendoAlterar = {
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
} as IUser


const clienteComHorarioNaoPodendoAlterar = {
        username: "Jake Sully",
        role: 'cliente',
        email: "jakesully@email.com",
        telefone: "(52)95896-3256",
        firstName: "Jake",
        lastName: "Sully",
        img:'https://recreio.com.br/media/_versions/filmes/loak_capa_widelg.jpg',
        estado:{
            comHorario: true,
            aTempoDeAlterar: false,
            horarioMarcado: new Horario(1702684800, 1702685700),
            horariosPassados:[new HorarioPassado(1702686600, 1702687500, true),new HorarioPassado(1702688400, 1702689300, true)]
        }
    
} as IUser

const clienteSemHorario = {
    username: "Kyoshi",
    role: 'cliente',
    email: "kyoshi@email.com",
    telefone: "(86)91532-1525",
    firstName: "Kyoshi",
    lastName: "da Terra",
    img:'https://i.pinimg.com/736x/b2/5a/41/b25a41e27ac0cb24ab9651cfae35547f.jpg',
    estado:{
        comHorario: false,
        aTempoDeAlterar: false,
        horarioMarcado: null,
        horariosPassados:[new HorarioPassado(1702686600, 1702687500, true),new HorarioPassado(1702688400, 1702689300, true)]
    }

} as IUser

const admin = {
    username : "Jayne",
    role: 'admin',
    email: "jayne@email.com",
    telefone: "(44)999801704-1525",
    firstName: "Jayne",
    lastName: "de Melo Silva",
    img:'https://i.imgur.com/NrEcdXA.png',
} as IUser

const users = {admin, clienteComHorarioNaoPodendoAlterar, clienteComHorarioPodendoAlterar, clienteSemHorario}
export default users