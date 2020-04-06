import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import WatchScreen from '../screens/WatchScreen';
import MyProfileScreen from '../screens/MyProfileScreen';
import MyClassesScreen from '../screens/MyClassesScreen';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import SettingScreen from '../screens/SettingScreen';
import ActivityScreen from '../screens/ActivityScreen';
import ProfileHeader from '../components/ProfileHeader';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import FilterScreen from '../screens/FilterScreen';
import VideoDetailScreen from '../screens/VideoDetail';
import { TouchableHighlight } from 'react-native';

const Left = ({ onPress }) => (
  <TouchableHighlight onPress={onPress}>
    <Ionicons name="ios-arrow-back" size={25} color={Colors.txt} />
  </TouchableHighlight>
);

const profileNavigator = createStackNavigator({
  Profile: {
    screen: MyProfileScreen,
    navigationOptions: ({navigation}) => {
      return {
        headerTintColor: Colors.white,
        headerStatusBarHeight: 180,
        headerLeftContainerStyle: {
          marginLeft: 10
        },
        headerRightContainerStyle: {
          marginRight: 10
        },
        headerBackground: () => {
          return (
            <ProfileHeader title="Le Khoi" />
          )
        },
        headerStyle: {
          backgroundColor: Colors.profileHeader,
        },
        headerLeft: () => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
              <Ionicons name="ios-notifications" size={25} color={Colors.white} />
            </TouchableOpacity>
          )
        },
        headerRight: () => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
              <Ionicons name="ios-settings" size={25} color={Colors.white} />
            </TouchableOpacity>
          )
        },
        title: ''
      }
    }
  },
  Setting: {
    screen: SettingScreen,
    navigationOptions: {
      // headerBackTitle: ()=> <Ionicons name="ios-arrow-back" size={25} color={Colors.txt} />
    }
  },
  Activity: {
    screen: ActivityScreen,
    navigationOptions: {
    }
  },
});

const watchNavigator = createStackNavigator({
  Watch: {
    screen: WatchScreen,
    navigationOptions: {
      headerShown: false
    }
  },
  Filter: {
    screen: FilterScreen,
    navigationOptions: {
      // headerBackTitle: ()=> <Ionicons name="ios-arrow-back" size={25} />,
      headerTitle: ()=> <TextInput
        placeholder="Search Classes, Skills, Teachers"
        autoFocus
        style={{ width: 340, paddingTop: 5, paddingBottom: 5 }} />
    }
  },
  VideoDetail: {
    screen: VideoDetailScreen,
    navigationOptions: {
      headerShown: false
    }
  }
})

const stackBottomNavigator = createBottomTabNavigator({
  Watch: {
    screen: watchNavigator,
    navigationOptions: {
      tabBarLabel: 'Watch',
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name='ios-videocam' size={25} color={tabInfo.tintColor} />
        );
      },
    }
  },
  MyClasses: {
    screen: MyClassesScreen,
    navigationOptions: {
      tabBarLabel: 'My Classes',
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name='ios-albums' size={25} color={tabInfo.tintColor} />
        );
      },
    }
  },
  MyProfile: {
    screen: profileNavigator,
    navigationOptions: {
      tabBarLabel: 'Me',
      tabBarIcon: (tabInfo) => <Ionicons name='ios-person' size={25} color={tabInfo.tintColor} />,
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: Colors.activeColor,
    inactiveTintColor: Colors.white,
    activeBackgroundColor: Colors.primary,
    inactiveBackgroundColor: Colors.primary,
  },
});

export default AppNavigation = createAppContainer(stackBottomNavigator);