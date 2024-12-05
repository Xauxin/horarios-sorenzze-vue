import type { Horario, HorarioPassado } from "@/models/Horario"

interface IUser{
    username: string,
    role: string,
    email: string,
    telefone: string,
    firstName: string,
    lastName: string
    img: string
    estado: IUserEstado
}

interface IUserEstado{
    comHorario: boolean,
    aTempoDeAlterar: boolean
    horarioMarcado: Horario|null,
    horariosPassados : HorarioPassado[]|null[]
}



export type { IUser }