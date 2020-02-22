import React, { Component } from 'react';
import Helmet from 'react-helmet';
import axios from 'axios';

import moon from '../images/fontawesome/moon-solid.svg';
import sun from '../images/fontawesome/sun-solid.svg';

import Article from '../components/article';
import ArticleTeaser from '../components/articleTeaser';

class Economist extends Component {
  constructor(props) {
    super(props);
    this.dateString = '';
    this.baseUrl = '/.netlify/functions/economist';
    this.fetchArticle = this.fetchArticle.bind(this);
    this.fetchFirstArticle = this.fetchFirstArticle.bind(this);
    this.fetchTodaysArticles = this.fetchTodaysArticles.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.state = {
      loading: false,
      password: '',
      newsList: [],
      activeArticle: [],
      activeIndex: null,
      darkTheme: false,
    };
  }

  componentDidMount() {
    this.checkForCachedNews();
  }

  checkForCachedNews() {
    const date = new Date();
    this.dateString = date.toDateString().replace(/ /g, '');

    const cachedNewsList = localStorage.getItem(this.dateString);

    if (cachedNewsList) {
      this.setState({ newsList: JSON.parse(cachedNewsList) }, this.fetchFirstArticle);
    } else {
      this.checkForCachedPassword();
    }
  }

  checkForCachedPassword() {
    const cachedPassword = localStorage.getItem('economistApiPassword');

    if (cachedPassword) {
      this.setState({ password: cachedPassword }, this.fetchTodaysArticles);
    }
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.fetchTodaysArticles();
  }

  fetchTodaysArticles() {
    const { password } = this.state;

    axios.get(`${this.baseUrl}?key=${password}&page=/`)
      .then((res) => {
        localStorage.setItem(this.dateString, JSON.stringify(res.data));
        localStorage.setItem('economistApiPassword', password);

        this.setState({ newsList: res.data }, this.fetchFirstArticle);
      })
      .catch(err => console.log('Error: ', err));
  }

  fetchFirstArticle() {
    const { newsList } = this.state;
    const firstArticleLink = newsList[0].link;
    this.fetchArticle(firstArticleLink, 0);
  }

  fetchArticle(url, teaserIndex) {
    const { password } = this.state;

    const cachedNewsArticle = localStorage.getItem(url);

    if (cachedNewsArticle) {
      this.setState({
        activeArticle: JSON.parse(cachedNewsArticle),
        activeIndex: teaserIndex,
      });
    } else {
      axios.get(`${this.baseUrl}?key=${password}&page=${url}`)
        .then((res) => {
          this.setState({
            activeArticle: res.data,
            activeIndex: teaserIndex,
          });

          localStorage.setItem(url, JSON.stringify(res.data));
        })
        .catch(err => console.log('Error: ', err));
    }
  }

  render() {
    const { activeArticle, activeIndex, darkTheme, newsList } = this.state;
    console.log(this.state);
    return (
      <div className="content-wrapper">
        <Helmet>
          <meta property="og:title" content="Economist | Soren Baird" />
          <name>Economist | Soren Baird</name>
          <meta property="og:image" content="https://res.cloudinary.com/sorebear/image/upload/v1544489724/portfolio/jamstack.png" />
          <meta property="og:url" content="https://sorenbaird.com/jamstack" />
          <meta property="og:description" content="Learn more about the JAMstack with these resources." />
        </Helmet>
        <div className={`economist ${darkTheme ? 'dark' : 'light'}`}>
          {newsList.length ? (
            <div>
              <div className="economist__article-list-wrapper">
                {newsList.map((newsListItem, index) => (
                  <ArticleTeaser
                    index={index}
                    activeIndex={activeIndex}
                    article={newsListItem}
                    fetchArticle={this.fetchArticle}
                    key={`article-tease-${newsListItem.number}`}
                  />
                ))}
              </div>
              <div className="economist__article-wrapper">
                <button
                  className="economist__dark-theme-toggle"
                  onClick={() => this.setState({ darkTheme: !darkTheme })}
                >
                  <img
                    src={darkTheme ? moon : sun}
                    alt={darkTheme ? 'Moon' : 'Sun'}
                  />
                </button>
                {activeArticle.map(article => (
                  <Article article={article} key={article.headline} />
                ))}
              </div>
            </div>
          ) : (
            <div className="economist__password-wrapper">
              <h1>The Economist</h1>
              <form onSubmit={this.handleFormSubmit}>
                <input
                  type="text"
                  onChange={e => this.setState({ password: e.target.value })}
                />
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Economist;
