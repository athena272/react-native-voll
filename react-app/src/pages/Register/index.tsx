import { Image, Box, Checkbox, ScrollView, Text } from "native-base"
import { useState } from "react"
import Logo from '../../assets/Logo.png'
import { sections } from './sections'
import Title from "../../components/Title"
import BTN from "../../components/Button"
import InpuText from "../../components/InputText"

export default function Register() {
    const [numSection, setNumSection] = useState(0)
    const firstSection = 0
    const lastSection = (sections.length - 1)

    function nextSection() {
        if (numSection < lastSection) {
            setNumSection(prev => prev + 1)
        }
    }

    function prevSection() {
        if (numSection > 0) {
            setNumSection(prev => prev - 1)
        }
    }

    return (
        <ScrollView flex={1} p={5}>
            <Image source={Logo} alt="Logo Voll" alignSelf={"center"} />
            <Title>
                {sections[numSection].title}
            </Title>
            <Box>
                {sections[numSection].inputText.map(input => (
                    <InpuText
                        key={input.id}
                        label={input.label}
                        placeholder={input.placeholder}
                        secureTextEntry={input.secureTextEntry}
                    />
                ))}
            </Box>
            <Box>
                {
                    numSection === lastSection &&
                    <Text color="blue.800" fontWeight="bold" fontSize="md" mt="2" mb={2}>
                        Selecione os planos:
                    </Text>
                }
                {sections[numSection].checkbox.map(input => (
                    <Checkbox
                        key={input.id}
                        value={input.value}
                    >
                        {input.value}
                    </Checkbox>
                ))}
            </Box>
            {
                numSection > firstSection &&
                <BTN onPress={prevSection} bgColor={'gray.700'}>
                    Voltar
                </BTN>
            }
            {
                numSection < lastSection &&
                <BTN onPress={nextSection} mt={numSection === firstSection ? 10 : 4} mb={20} >
                    Avançar
                </BTN>
            }
        </ScrollView>
    )
}

