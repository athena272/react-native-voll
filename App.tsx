import { NativeBaseProvider, StatusBar } from 'native-base';
import { THEMAS } from './src/styles'
import Routes from './src/Routes';
export default function App() {
  return (
    <NativeBaseProvider theme={THEMAS}>
      <StatusBar backgroundColor={THEMAS.colors.blue[800]} />
      <Routes />
    </NativeBaseProvider>
  );
}
