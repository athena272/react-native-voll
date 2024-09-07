import { Image, VStack, Text, Box, Link } from "native-base"
import { TouchableOpacity } from "react-native"
import { NavigationProp, useNavigation } from "@react-navigation/native"
import { RootStackParamList } from "../../@types"
import Logo from '../../assets/Logo.png'
import Title from "../../components/Title"
import BTN from "../../components/Button"
import InpuText from "../../components/InputText"

export default function Login() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>()

    function handleNavToRegister() {
        navigation.navigate('Register')
    }

    function handleNavToTabs() {
        navigation.navigate('Tabs')
    }

    return (
        <VStack flex={1} alignItems="center" justifyContent={"center"} p={5}>
            <Image source={Logo} alt="Logo Voll" />
            <Title>
                Faça login em sua conta
            </Title>
            <Box>
                {/* E-mail */}
                <InpuText
                    label="E-mail"
                    placeholder="Insira seu e-mail"
                />
                {/* Senha */}
                <InpuText
                    label="Senha"
                    placeholder="Insira sua senha"
                />
            </Box>
            <BTN onPress={handleNavToTabs}>
                Entrar
            </BTN>
            <Link href='https.:ww.alura.com.br' mt={2}>
                Esqueceu sua senha?
            </Link>
            <Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
                <Text>Ainda não tem cadastro? </Text>
                <TouchableOpacity onPress={handleNavToRegister}>
                    <Text color="blue.900" fontWeight={"bold"}>
                        Faça seu cadastro!
                    </Text>
                </TouchableOpacity>
            </Box>
        </VStack>
    )
}

