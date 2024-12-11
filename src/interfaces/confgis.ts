

interface IConfigs {
duracao_min: number,
data_maxima_semanas: number,
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
    inicio:string
    fim:string
}




export type {IConfigs, ITurno, ICronograma}