import { useEffect, useState } from "react"
import { Image, VStack, Text, Box, Link, useToast } from "native-base"
import { TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import AsyncStorage from "@react-native-async-storage/async-storage"
import { jwtDecode } from "jwt-decode"
import { RootStackParamList } from "../../@types"
import Logo from '../../assets/Logo.png'
import Title from "../../components/Title"
import BTN from "../../components/Button"
import InpuText from "../../components/InputText"
import { login } from "../../services/Authentication"

export default function Login() {
    //Navigation logic
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    function handleNavToRegister() {
        navigation.navigate('Register')
    }

    async function handleNavToTabs() {
        const result = await login({ email: form.email, password: form.password })
        if (result) {
            const { token } = result
            AsyncStorage.setItem('token', token)

            const decodeToken = jwtDecode(token) as any
            const pacienteId = decodeToken.id
            AsyncStorage.setItem('pacienteId', pacienteId)

            navigation.replace('Tabs')
        }
        else {
            toast.show({
                title: 'Erro no login',
                description: 'Credenciais inválidas',
                backgroundColor: 'red.500',
            })
        }
    }

    useEffect(() => {
        async function checkLogin() {
            const token = await AsyncStorage.getItem('token')
            if (token) {
                navigation.replace('Tabs')
            }

            setLoading(false)
        }
        checkLogin()
    }, [])

    //Login logic
    const toast = useToast()
    const [loading, setLoading] = useState(true)
    const [form, setFormm] = useState({
        email: '',
        password: '',
    })

    function handleChange(name: string, value: string) {
        setFormm({
            ...form,
            [name]: value
        })
    }

    if (loading) {
        return (
            <VStack flex={1} alignItems="center" justifyContent={"center"}>
                <Title>
                    Carregando...
                </Title>
            </VStack>
        )
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
                    value={form.email}
                    onChangeText={(text) => handleChange('email', text)}
                />
                {/* Senha */}
                <InpuText
                    label="Senha"
                    placeholder="Insira sua senha"
                    value={form.password}
                    onChangeText={(text) => handleChange('password', text)}
                    secureTextEntry
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

