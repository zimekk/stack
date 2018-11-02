import React, { Component } from "react";
import { request } from 'graphql-request'

const Button = ({ children, ...props }) => (
  <button {...props}>{children}</button>
);

const Message = ({ children }) => (
  <div>{children}</div>
);

export default class PingPong extends Component {
  state = {
    counter: 1,
    messages: []
  };
  componentDidMount() {
    request('/api', `{
      messages {
        text
      }
    }`).then(data =>
      console.log(data) || data.messages.map(({text}) => text)).then(messages => 
      setTimeout(() => this.setState({ messages }), 800)
    )
  }
  onSend = () => request('/api', `mutation($text: String!) {
      Message {
        add(input: {text: $text}) {
          text
        }
      }
  }`, { text: `Message #${this.state.counter}` }).then(data =>
    console.log(data) || data.Message.add.map(({text}) => text)).then(messages => 
    setTimeout(() => this.setState({ counter: this.state.counter + 1, messages }), 800)
  );
  onClear = () => request('/api', `mutation {
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
