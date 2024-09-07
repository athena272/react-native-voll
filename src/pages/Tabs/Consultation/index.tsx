import { VStack, Text } from 'native-base'
import AppointmentCard from '../../../components/AppointmentCard'

export default function Consultation() {
    return (
        <VStack p={5}>
            <Text>Consulta</Text>
            <AppointmentCard />
        </VStack>

    )
}