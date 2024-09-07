import { VStack, Image, Box, ScrollView, Text, Divider } from "native-base";
import Logo from '../../../assets/Logo.png'
import { depoimentos } from "./mock";
import BTN from "../../../components/Button"
import InpuText from "../../../components/InputText";
import Title from "../../../components/Title";

export default function Home() {
    return (
        <ScrollView flex={1} bgColor="white">
            <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
                <Image source={Logo} alt="Logo" mt={10} />
                <Title color="blue.500">Boas-vindas!</Title>

                <Box w="100%" borderRadius="lg" p={3} mt={10} shadow="1" borderRightRadius="md">
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

                <Title color="blue.800" alignSelf="center">Depoimentos</Title>
                <VStack space={3} divider={<Divider />} w="100%">
                    {
                        depoimentos.map(depoimento => (
                            <Box key={depoimento.id} w="100%" borderRadius="lg" p={3}>
                                <Text color="gray.300" fontSize="md" textAlign="justify">
                                    {depoimento.text}
                                </Text>
                                <Text color="gray.500" fontSize="lg" fontWeight="bold" alignSelf="center" mt="2">{depoimento.titulo}</Text>
                            </Box>
                        ))
                    }
                </VStack>
            </VStack>
        </ScrollView>
    )
}