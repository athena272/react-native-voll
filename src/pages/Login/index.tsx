import { Image, VStack, Text, Box, FormControl, Input, Link } from "native-base"
import { TouchableOpacity } from "react-native"
import Logo from '../../assets/Logo.png'
import Title from "../../components/Title"
import BTN from "../../components/Button"
import InpuText from "../../components/InputText"

export default function Login() {
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
            <BTN>
                Entrar
            </BTN>
            <Link href='https.:ww.alura.com.br' mt={2}>
                Esqueceu sua senha?
            </Link>
            <Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
                <Text>Ainda não tem cadastro? </Text>
                <TouchableOpacity>
                    <Text color="blue.500">
                        Faça seu cadastro!
                    </Text>
                </TouchableOpacity>
            </Box>
        </VStack>
    )
}

