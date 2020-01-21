import React, { Component } from 'react';

export default class HistorySample extends Component {
  // 뒤로 가기
  handleGoBack = () => {
    this.props.history.goBack();
  };

  // 홈으로 이동
  handleGoHome = () => {
    this.props.history.push('/');
  };

  componentDidMount() {
    this.unblock = this.props.history.block('wanna get out?');
    console.log('componentDidMount', this.unblock);
  }

  componentWillUnmount() {
    console.log('componentWillMount', this.unblock);
    if (this.unblock) {
      console.log(this.unblock, '언블락좀');
      this.unblock();
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleGoBack}>뒤로</button>
        <button onClick={this.handleGoHome}>홈으로</button>
      </div>
    );
  }
}
