import { Button, IButtonProps } from "native-base"

interface BTNProps extends IButtonProps {
    children: React.ReactNode
    autoSize?: boolean
    color?: string
}

export default function BTN({ children, autoSize = false, color, ...rest }: BTNProps) {
    return (
        <Button
            w={autoSize ? 'auto' : '100%'}
            bg={color || 'blue.500'}
            mt={10}
            borderRadius="lg"
            _text={{ color: 'white' }}
            {...rest}
        >
            {children}
        </Button>
    )
}