import React, { Component } from "react";
import { connect } from "react-redux";
import actionCreators from "./actions/actionsCreator";
import { bindActionCreators } from "redux";
import data from "./data";
import debounce from "lodash.debounce";

const news = { id: 3, slug: "/caricaturas" };
class App extends Component {
  state = {
    news: ""
  };

  handleState(evt) {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  }

  appLoading() {
    const { loading } = this.props.news;
    this.props.loading(!loading);
  }
  componentDidMount() {
    this.appLoading();
    debounce(() => {
      this.props.fillNews(data);
      this.appLoading();
    }, 2000)();
  }

  renderLoading() {
    return <div>Espere por favor</div>;
  }

  deleteNews(id) {
    this.props.deleteNews(id);
  }

  renderList() {
    return (
      <React.Fragment>
        {this.props.news.data.map(item => (
          <li key={item.id}>
            <span>
              {item.slug} -{" "}
              <button onClick={this.deleteNews.bind(this, item.id)}>x</button>
            </span>
          </li>
        ))}
        <input
          type="text"
          name="news"
          value={this.state.news}
          onChange={this.handleState.bind(this)}
        />
        <button onClick={this.addNews.bind(this)}>Agregar noticia</button>
      </React.Fragment>
    );
  }

  addNews() {
    if (this.state.news.length > 0) {
      const id = this.props.news.data.length + 1;
      this.props.addNews({ id, slug: this.state.news });
      this.setState({ news: "" });
    }
  }

  render() {
    return (
      <div className="App">
        {this.props.news.loading === true && this.renderLoading()}
        <ul>{this.props.news.data && this.renderList()}</ul>
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
