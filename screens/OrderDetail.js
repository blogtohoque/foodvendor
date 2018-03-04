import React, { Component } from "react";
import {
  Container,
  Content,
  Header,
  Title,
  Button,
  Icon,
  Text,
  Tabs,
  Tab,
  Right,
  Left,
  Body
} from "native-base";

class OrderDetail extends Component {
  render() {
    const { params } = this.props.navigation.state;
    const {navigate} = this.props.navigation;
    return (
      <Container>
        <Header >
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Order Details</Title>
          </Body>
          <Right />
        </Header>
            <Content>
                <Text> Work</Text>
            </Content>
      </Container>
    );
  }
}

export default OrderDetail;
