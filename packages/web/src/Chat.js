import React, { Component } from "react";
import { print } from "graphql";
import { request } from 'graphql-request'
import gql from 'graphql-tag.macro';

const Button = ({ children, ...props }) => (
  <button {...props}>{children}</button>
);

const Message = ({ children }) => (
  <div>{children}</div>
);

const query = (query, value) => request('/api', print(query), value);

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
      <div>
      <div>
        <Button onClick={() => this.onSend()}>Create message #{counter}</Button>
      </div>
      <div>
      {messages.map((message, key) => (
        <Message key={key}>{message}</Message>
      ))}
      </div>
      <div>
        <Button onClick={() => this.onClear()}>Clear messages</Button>
      </div>
      </div>
    );
  }
}
