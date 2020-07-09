import Home from './pages/Home';

export const screenKeys = {
  Home: 'Home',
};

export const screens: {
  [name: string]: React.ComponentType;
} = { [screenKeys.Home]: Home };
