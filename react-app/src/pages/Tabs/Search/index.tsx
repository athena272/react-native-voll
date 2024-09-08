import { VStack, Box, ScrollView } from "native-base";
import Title from "../../../components/Title";
import BTN from "../../../components/Button";
import InpuText from "../../../components/InputText";
import AppointmentCard from "../../../components/AppointmentCard";

export default function Search() {
    return (
        <ScrollView flex={1} bgColor="white">
            <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
                <Box w="100%" borderRadius="lg" p={3} mt={5} shadow="1" borderRightRadius="md">
                    <InpuText
                        label="Especialização"
                        placeholder="Digite a especialidade"
                    />
                    <InpuText
                        label="Localização"
                        placeholder="Digite sua localização"
                    />
                    <BTN mt={3} mb={3}>
                        Buscar
                    </BTN>
                </Box>

                <Title color="blue.500" alignSelf="center">Resultado da Busca</Title>
                {[1, 2, 3].map((_, index) => (
                    <VStack flex={1} w="100%" alignItems="flex-start" bgColor="white" key={index}>
                        <AppointmentCard
                            specialty="Cardiologia"
                            photo="https://github.com/andreocunha.png"
                            name="Dr. Cunha"
                        />
                    </VStack>
                ))}
            </VStack>
        </ScrollView>
    )
}