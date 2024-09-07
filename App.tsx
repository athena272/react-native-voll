import { NativeBaseProvider, StatusBar } from 'native-base';
import { THEMAS } from './src/styles'
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Register from './src/pages/Register/indext';

export default function App() {
  return (
    <NativeBaseProvider theme={THEMAS}>
      <StatusBar backgroundColor={THEMAS.colors.blue[800]} />
      <Register />
    </NativeBaseProvider>
  );
}
