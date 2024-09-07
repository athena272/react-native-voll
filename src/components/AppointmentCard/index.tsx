import { Text, Avatar, VStack } from 'native-base'
import BTN from '../Button'

export default function AppointmentCard() {
    return (
        <VStack w="100%" bg="white" p="5" borderRadius="lg" shadow="2">
            <VStack flexDir="row">
                <Avatar size="lg" source={{ uri: "https://github.com/andreocunha.png" }} />
                <VStack>
                    <Text>Dr. André Cunha</Text>
                    <Text>Cardiologista</Text>
                    <Text>20/04/2023</Text>
                </VStack>
            </VStack>
            <BTN mt={4}>
                Agendar consulta
            </BTN>
        </VStack>
    )
}