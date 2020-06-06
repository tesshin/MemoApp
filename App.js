
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';


const App = createStackNavigator({
  HOME:       { screen: MemoListScreen },
  MemoDetail: { screen: MemoDetailScreen },
  MemoEdit:   { screen: MemoEditScreen },
  Signup:     { screen: SignupScreen },
  Login:      { screen: LoginScreen },
}, {
  defaultNavigationOptions: { 
    headerTitle: 'MEMOT',
    headerStyle: {
      backgroundColor: '#265366',
    },
    headerTitleStyle: {
      color: '#fff',
    },
  },
});


export default createAppContainer(App);
