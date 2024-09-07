import FontAwesome from '@expo/vector-icons/FontAwesome'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Home from '../Home'
import Consultation from '../Consultation'
import Search from '../Search'
import Profile from '../Profile'

// Defina o tipo das rotas e seus parâmetros
export type RootStackParamList = {
    Home: undefined
    Consultation: undefined
    Search: undefined
    Profile: undefined
}

type TabsProps = {
    name: keyof RootStackParamList; // Corrigido para garantir a tipagem correta
    component: React.ComponentType<any>;
    icon: string;
    iconComponent: typeof FontAwesome | typeof FontAwesome5; // O tipo correto para o componente do ícone
}

export const tabs: TabsProps[] = [
    {
        name: 'Home',
        component: Home,
        icon: 'home',
        iconComponent: FontAwesome
    },
    {
        name: 'Consultation',
        component: Consultation,
        icon: 'calendar-alt',
        iconComponent: FontAwesome5
    },
    {
        name: 'Search',
        component: Search,
        icon: 'search',
        iconComponent: FontAwesome
    },
    {
        name: 'Profile',
        component: Profile,
        icon: 'user-alt',
        iconComponent: FontAwesome5
    },
]