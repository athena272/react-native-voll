import { Image, VStack, Text, Box, Link } from "native-base"
import { useState } from "react"
import Logo from '../../assets/Logo.png'
import { sections } from './sections'
import Title from "../../components/Title"
import BTN from "../../components/Button"
import InpuText from "../../components/InputText"

export default function Register() {
    const [numSection, setNumSection] = useState(0)

    function nextSection() {
        if (numSection < (sections.length - 1)) {
            setNumSection(prev => prev + 1)
        }
    }

    function prevSection() {
        if (numSection > 0) {
            setNumSection(prev => prev - 1)
        }
    }

    return (
        <VStack flex={1} alignItems="center" justifyContent={"center"} p={5}>
            <Image source={Logo} alt="Logo Voll" />
            <Title>
                {sections[numSection].title}
            </Title>
            <Box>
                {sections[numSection].inputText.map(input => (
                    <InpuText
                        key={input.id}
                        label={input.label}
                        placeholder={input.placeholder}
                    />
                ))}
            </Box>
            <BTN onPress={prevSection} bgColor={'gray.400'}>
                Voltar
            </BTN>
            <BTN onPress={nextSection} mt={4}>
                Avançar
            </BTN>
        </VStack>
    )
}

