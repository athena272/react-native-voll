import { Text, ITextProps } from "native-base"

interface TitleProps extends ITextProps {
    children: React.ReactNode
}

export default function Title({ children, ...rest }: TitleProps) {
    return (
        <Text
            fontSize="2xl"
            fontWeight="bold"
            color="gray.500"
            textAlign="center"
            mt={5}
            {...rest}
        >
            {children}
        </Text>
    )
}