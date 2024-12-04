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
    horarioMarcado: IHorario|null,
    horariosPassados : IHorario[]|null[]
}

interface IHorario{
    inicio: number,
    fim: number
}

export type { IUser }