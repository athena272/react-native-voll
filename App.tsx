import { NativeBaseProvider, StatusBar } from 'native-base';
import { THEMAS } from './src/styles'
import Home from './src/pages/Home';
import Login from './src/pages/Login';

export default function App() {
  return (
    <NativeBaseProvider theme={THEMAS}>
      <StatusBar backgroundColor={THEMAS.colors.blue[800]}/>
      <Login />
    </NativeBaseProvider>
  );
}
