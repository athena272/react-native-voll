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
            {
                id: 3,
                label: 'Crie uma senha',
                placeholder: 'Insira sua senha',
                secureTextEntry: true,
            },
            {
                id: 4,
                label: 'Confirme sua senha',
                placeholder: 'Insira sua senha',
                secureTextEntry: true,
            }
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
            },
            {
                id: 2,
                label: 'Endereço',
                placeholder: 'Insira seu endereço'
            },
            {
                id: 3,
                label: 'Número',
                placeholder: 'Insira seu número'
            },
            {
                id: 4,
                label: 'Complemento',
                placeholder: 'Insira seu complemento'
            },
            {
                id: 5,
                label: 'Telefone',
                placeholder: '(00) 00000-0000'
            },
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
            },
            {
                id: 3,
                value: 'Bradesco'
            },
            {
                id: 4,
                value: 'Amil'
            },
            {
                id: 5,
                value: 'Biosaúde'
            },
            {
                id: 6,
                value: 'Biovida'
            },
            {
                id: 7,
                value: 'Outros'
            },
            {
                id: 8,
                value: 'Não tenho plano'
            }
        ]
    }
]