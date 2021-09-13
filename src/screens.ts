import Home from './pages/Home';
// import AddLeave from './pages/AddLeave';

export const screenKeys = {
  Home: 'Home',
};

export const screens: {
  [name: string]: React.ComponentType;
} = { [screenKeys.Home]: Home };
