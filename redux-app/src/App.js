import React, { Component } from "react";
import { connect } from "react-redux";
import actionCreators from "./actions/actionsCreator";
import { bindActionCreators } from "redux";

class App extends Component {
  appLoading() {
    const { loading } = this.props.news;
    this.props.loading(!loading);
  }
  render() {
    return (
      <div className="App">
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
        <div>
          <button onClick={this.appLoading.bind(this)}>Loading</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  news: state.news
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
