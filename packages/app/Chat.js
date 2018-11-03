import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

// import { print } from "graphql";
import { request } from 'graphql-request'
// import gql from 'graphql-tag.macro';

const Message = ({ children }) => (
  <Text>{children}</Text>
);

const gql = str => str.join('');
const print = query => query;

// https://medium.com/@skiptomyhue/setting-up-environment-variables-for-react-native-builds-b66a2576a218
const API = process.env.API || 'http://localhost:3000/api';

const query = (query, value) => request(API, print(query), value);

export default class Chat extends Component {
  state = {
    counter: 1,
    messages: []
  };
  componentDidMount() {
    query(gql`query {
      messages {
        text
      }
    }`).then(data =>
      console.log(data) || data.messages.map(({ text }) => text)).then(messages => 
      setTimeout(() => this.setState({ messages }), 800)
    )
  }
onSend = () => query(gql`mutation($text: String!) {
      Message {
        add(input: { text: $text }) {
          text
        }
      }
  }`, { text: `Message #${this.state.counter}` }).then(data =>
    console.log(data) || data.Message.add.map(({ text }) => text)).then(messages => 
    setTimeout(() => this.setState({ counter: this.state.counter + 1, messages }), 800)
  );
  onClear = () => query(gql`mutation {
    Message {
      clear
    }
  }`).then(data =>
    console.log(data)).then(() => 
    setTimeout(() => this.setState({ messages: []}), 200)
  );

  render() {
    const { counter, messages } = this.state;
    return (
      <View style={styles.container}>
        <Button onPress={() => this.onSend()} title={`Create message #${counter}`} />
      {messages.map((message, key) => (
        <Message key={key}>{message}</Message>
      ))}
        <Button onPress={() => this.onClear()} title={`Clear messages`} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  }
});
