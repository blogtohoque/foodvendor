import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';
import HomeScreen from '../screens/HomeScreen';
import BasicTab from '../screens/tab/basicTab';
import ConfigTab from '../screens/tab/configTab';
import ScrollableTab from '../screens/tab/scrollableTab';
import Home from '../screens/home';
import SideBar from '../screens/sidebar';
import NHTab from '../screens/tab';
import MultiListSwipe from '../screens/listSwipe/multi-list-swipe';
import NHListAvatar from '../screens/list/list-avatar';
import MissedOrders from '../screens/miss/missedOrders';
import RejectedOrders from '../screens/reject/rejectedOrders';
import OrderDetail from '../screens/OrderDetail';

const Drawer = DrawerNavigator(
  {
    Home: {
      screen: Home
    },
    NHTab: {
      screen: NHTab
    },
    MultiListSwipe:{
      screen: MultiListSwipe
    },
    NHListAvatar: { 
      screen: NHListAvatar 
    },
    MissedOrders:{
      screen: MissedOrders
    },
    RejectedOrders:{
      screen: RejectedOrders
    }
   
  },
  {
    initialRouteName: "MultiListSwipe",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);



const RootStackNavigator = StackNavigator(
  {
    Drawer: {
      screen: Drawer
    },
    BasicTab: {
      screen: BasicTab
    },
    ConfigTab: {
      screen: ConfigTab
    },
    ScrollableTab: {
      screen: ScrollableTab
    },
    OrderDetail: {
      screen: OrderDetail
    },
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  },
  // {
  //   navigationOptions: () => ({
  //     headerTitleStyle: {
  //       fontWeight: 'normal',
  //     },
  //   }),
  // }
);

export default class RootNavigator extends React.Component {
  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  render() {
    return <RootStackNavigator />;
  }

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = ({ origin, data }) => {
    console.log(`Push notification ${origin} with data: ${JSON.stringify(data)}`);
  };
}
