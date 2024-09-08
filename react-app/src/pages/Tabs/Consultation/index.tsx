import { VStack, Divider, ScrollView } from 'native-base'
import AppointmentCard from '../../../components/AppointmentCard'
import Title from '../../../components/Title'
import BTN from '../../../components/Button'

export default function Consultation() {
    return (
        <ScrollView p={5}>
            <Title color="blue.500">Minhas consultas</Title>
            <BTN mt={5} mb={5}>Agendar nova consulta</BTN>

            <Title color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Próximas consultas</Title>
            <AppointmentCard
                name='Dr. Andre'
                specialty='Cardiologista'
                photo='https://github.com/andreocunha.png'
                date='20/04/2023'
                hasScheduled
            />
            
            <Divider mt={5} />
            <Title color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Consultas passadas</Title>
            <AppointmentCard
                name='Dr. Andre'
                specialty='Cardiologista'
                photo='https://github.com/andreocunha.png'
                date='20/04/2023'
                hasBeAttended
            />
            <AppointmentCard
                name='Dr. Andre'
                specialty='Cardiologista'
                photo='https://github.com/andreocunha.png'
                date='20/04/2023'
                hasBeAttended
            />
            <AppointmentCard
                name='Dr. Andre'
                specialty='Cardiologista'
                photo='https://github.com/andreocunha.png'
                date='20/04/2023'
                hasBeAttended
            />
        </ScrollView >
    )
}