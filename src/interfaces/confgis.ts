
interface IConfigs {
duracao_min: number,
data_maxima_semanas: number,
primeiro_horario: string,
ultimo_horario: string,
tempo_ate_primeiro_horario_em_min: number,
intervalos_entre_horarios: null|number,
cronogramas: Record<string,ICronograma>;
}

interface ICronograma{
    aberto: boolean
    turnos : ITurno[]|null
}

interface ITurno{
    nome: string
    cor:string
    inicio:string
    fim:string
}

interface IExcessao{
    nome:string
    inicio:string
    fim:string
    ocorencia:string
    dia:number|null
}

export type {IConfigs,IExcessao, ITurno}