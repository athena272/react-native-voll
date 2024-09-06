import { Image, VStack } from "native-base"
import Logo from '../../assets/Logo.png'

export default function Login() {
    return (
        <VStack flex={1} alignItems="center" p={5}>
            <Image source={Logo} alt="Logo Voll"/>
        </VStack>
    )
}

