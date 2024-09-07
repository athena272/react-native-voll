import { Text, Avatar, VStack } from 'native-base'
import BTN from '../Button'

type AppointmentCard = {
    name: string;
    photo: string;
    specialty: string;
    date?: string;
    hasBeAttended?: boolean;
    hasScheduled?: boolean;
}

export default function AppointmentCard({ name, photo, specialty, date, hasBeAttended, hasScheduled }: AppointmentCard) {
    return (
        <VStack w="100%" bg={hasBeAttended ? 'blue.200' : 'white'} p="5" borderRadius="lg" shadow="2" mb={5}>
            <VStack flexDir="row">
                <Avatar size="lg" source={{ uri: photo }} />
                <VStack pl={4}>
                    <Text>{name}</Text>
                    <Text>{specialty}</Text>
                    <Text>{date}</Text>
                </VStack>
            </VStack>
            <BTN mt={4}>
                {
                    hasScheduled ? 'Cancelar' : 'Agendar consulta'
                }
            </BTN>
        </VStack>
    )
}