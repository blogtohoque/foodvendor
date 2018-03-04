import React, { Component } from "react";
import { ListView, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  List,
  ListItem,
  Text,
  Thumbnail,
  Left,
  Right,
  Body
} from "native-base";
// import styles from "./styles";
const pratik = require("../../assets/contacts/pratik.png");
const sanket = require("../../assets/contacts/sanket.png");
const megha = require("../../assets/contacts/megha.png");
const atul = require("../../assets/contacts/atul.png");
const saurabh = require("../../assets/contacts/saurabh.png");
const varun = require("../../assets/contacts/varun.png");
const datas = [
  {
    img: pratik,
    text: "Kumar Pratik",
    note: "Its time to build a difference . .",
    time: "3:43 pm"
  },
  {
    img: sanket,
    text: "Kumar Sanket",
    note: "One needs courage to be happy and smiling all time . . ",
    time: "1:12 pm"
  },
  {
    img: megha,
    text: "Megha",
    note: "Live a life style that matchs your vision",
    time: "10:03 am"
  },
  {
    img: atul,
    text: "Atul Ranjan",
    note: "Failure is temporary, giving up makes it permanent",
    time: "5:47 am"
  },
  {
    img: saurabh,
    text: "Saurabh Sahu",
    note: "The biggest risk is a missed opportunity !!",
    time: "11:11 pm"
  },
];

class MultiListSwipe extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: datas
    };
  }
  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button 
            transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body style={{ flex: 3 }}>
            <Title>Incoming Orders</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <List
            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
            renderRow={data =>
              <ListItem avatar>
              <Left>
                  <Thumbnail small source={data.img} />
                </Left>
                <Body>
                  <Text>
                    {data.text}
                  </Text>
                  <Text numberOfLines={1} note>
                    {data.note}
                  </Text>
                </Body>
                <Right>
                  <Text note>
                    {data.time}
                  </Text>
                </Right>
              </ListItem>}
            renderLeftHiddenRow={data =>
              <Button
                full
                onPress={() => this.props.navigation.navigate('OrderDetail')}
                style={{
                  backgroundColor: "#CCC",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Icon active name="information-circle" />
              </Button>}
            renderRightHiddenRow={(data, secId, rowId, rowMap) =>
              <Button
                full
                danger
                onPress={_ => this.deleteRow(secId, rowId, rowMap)}
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Icon active name="trash" />
              </Button>}
            leftOpenValue={75}
            rightOpenValue={-75}
          />
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  },
  text: {
    alignSelf: "center",
    marginBottom: 7
  },
  mb: {
    marginBottom: 15
  }
}
);


export default MultiListSwipe;
