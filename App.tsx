import { NativeBaseProvider, StatusBar } from 'native-base';
import Home from './src/pages/Home';
import { THEMAS } from './src/@types'

export default function App() {
  return (
    <NativeBaseProvider theme={THEMAS}>
      <StatusBar backgroundColor={THEMAS.colors.blue[800]}/>
      <Home />
    </NativeBaseProvider>
  );
}
