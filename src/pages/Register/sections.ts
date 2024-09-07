export const sections = [
    // First section
    {
        id: 1,
        title: 'Insira alguns dados básicos',
        inputText: [
            {
                id: 1,
                label: 'Nome',
                placeholder: 'Digite seu nome completo'
            },
            {
                id: 2,
                label: 'E-mail',
                placeholder: 'Digite seu e-mail'
            },
        ],
        checkbox: []
    },
    // Second section
    {
        id: 2,
        title: 'Agora, mais alguns dados sobre você:',
        inputText: [
            {
                id: 1,
                label: 'CEP',
                placeholder: 'Digite seu CEP'
            }
        ],
        checkbox: []
    },
    //Third section
    {
        id: 3,
        title: 'Para finalizar, qual seu plano de saúde?',
        inputText: [],
        checkbox: [
            {
                id: 1,
                value: 'Sulamérica'
            },
            {
                id: 2,
                value: 'Unimed'
            }
        ]
    }
]