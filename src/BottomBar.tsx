import {AnimatedTabBarNavigator} from 'react-native-animated-nav-tab-bar';
import {Text} from 'react-native-svg';

const Tabs = AnimatedTabBarNavigator();

import Icon from 'react-native-vector-icons/Feather';

const Home = () => {
  return <Text>Home Screen</Text>;
};

const BottomBar = () => {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: '#000',
        inactiveTintColor: '#222222',
      }}
      appearance={{
        dotCornerRadius: 100,
        activeTabBackgrounds: '#e7d6a6',
        floating: true,
      }}>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused, color, size}: any) => (
            <Icon
              name="home"
              size={size ? size : 24}
              color={focused ? color : '#222222'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Expenses"
        component={Home}
        options={{
          tabBarIcon: ({focused, color, size}: any) => (
            <Icon
              name="search"
              size={size ? size : 24}
              color={focused ? color : '#222222'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Add"
        component={Home}
        options={{
          tabBarIcon: ({focused, color, size}: any) => (
            <Icon
              name="plus-circle"
              size={size ? size : 24}
              color={focused ? color : '#222222'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Analysis"
        component={Home}
        options={{
          tabBarIcon: ({focused, color, size}: any) => (
            <Icon
              name="chrome"
              size={size ? size : 24}
              color={focused ? color : '#222222'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: ({focused, color, size}: any) => (
            <Icon
              name="user"
              size={size ? size : 24}
              color={focused ? color : '#222222'}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};


export default BottomBar;