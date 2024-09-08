import { NativeBaseProvider, StatusBar } from 'native-base';
import { THEMAS } from './src/styles'
import Routes from './src/Routes';
import { useEffect } from 'react';
import { api } from './src/services/api';

export default function App() {
  useEffect(() => {
    async function getData() {
      const result = await api.get('/paciente')
      console.log("🚀 ~ getData ~ result:", result.data)
    }

    getData()
  }, [])

  return (
    <NativeBaseProvider theme={THEMAS}>
      <StatusBar backgroundColor={THEMAS.colors.blue[800]} />
      <Routes />
    </NativeBaseProvider>
  );
}
