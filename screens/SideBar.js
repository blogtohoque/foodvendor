import React from 'react';
import { ScrollView, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Content, List, Left, Right, Body, ListItem,  Icon, Switch, } from 'native-base';

export default class LinksScreen extends React.Component {

  render() {
    return (
        <Content style = {{backgroundColor: '#ffffff'}}>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                height: 100,
             }}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
          <List>
            <ListItem icon>
              <Left>
                <Icon name="home" />
              </Left>
              <Body>
                <Text>Home</Text>
              </Body>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="plane" />
              </Left>
              <Body>
                <Text>Rejected Orders</Text>
              </Body>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="plane" />
              </Left>
              <Body>
                <Text>Missed Orders</Text>
              </Body>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="plane" />
              </Left>
              <Body>
                <Text>Confirmed Orders</Text>
              </Body>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="plane" />
              </Left>
              <Body>
                <Text>Notifications</Text>
              </Body>
              <Right>
                <Switch value={false} />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="plane" />
              </Left>
              <Body>
                <Text>Logout</Text>
              </Body>
              <Right>
                <Switch value={false} />
              </Right>
            </ListItem>   
          </List>
        </Content>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
