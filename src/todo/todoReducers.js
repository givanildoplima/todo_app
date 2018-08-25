const INITIAL_STATE = {
    description: 'Ler livro',
    list:[{
        __id: 1,    
        description: 'pagar fatura do cartão',
        done: true
    },
    {
        __id: 2,
        description: 'Reunião com a equipe as 10:00',
        done: false
    },
    {
        __id: 3,
        description: 'Consulta medica na tersa apos o almoço',
        done: false
    }]
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
             return { ...state, description: action.payload }
        case 'TODO_SEARCHED':
             return { ...state, list: action.payload.data }
        default:
            return state
    }
}