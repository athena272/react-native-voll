import { FormControl, Input } from "native-base"

type InpuTextProps = {
    label?: string
    placeholder: string
    secureTextEntry?: boolean
    leftIcon?: React.ReactNode
}

export default function InpuText({ label, placeholder, secureTextEntry = false }: InpuTextProps) {
    return (
        <FormControl mt={3}>
            {label && <FormControl.Label>{label}</FormControl.Label>}
            <Input
                placeholder={placeholder}
                size="lg"
                w="100%"
                borderRadius="lg"
                bgColor="gray.100"
                secureTextEntry={secureTextEntry}
                shadow={3}
            />
        </FormControl>
    )
}