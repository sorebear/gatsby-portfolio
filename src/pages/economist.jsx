import React, { Component } from 'react';
import Helmet from 'react-helmet';
import axios from 'axios';

import spinner from '../images/icons/spinner.png';
import moon from '../images/fontawesome/moon-solid.svg';
import sun from '../images/fontawesome/sun-solid.svg';

import Article from '../components/article';
import ArticleTeaser from '../components/articleTeaser';
import PrintEdition from '../components/printEdition';

class Economist extends Component {
  constructor(props) {
    super(props);
    this.dateString = '';
    this.baseUrl = '/.netlify/functions/economist';
    this.fetchArticle = this.fetchArticle.bind(this);
    this.fetchFirstArticle = this.fetchFirstArticle.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.state = {
      loading: true,
      password: '',
      todaysNewsList: [],
      printNewsList: [],
      activeArticle: [],
      showingWeek: false,
      activeIndex: null,
      darkTheme: false,
    };
  }

  componentDidMount() {
    this.checkForCachedPassword();
  }

  checkForCachedPassword() {
    const cachedPassword = localStorage.getItem('economistApiPassword');

    if (cachedPassword) {
      this.setState({ password: cachedPassword }, () => {
        this.checkForCachedNews();
      });
    } else {
      this.setState({ loading: false });
    }
  }

  checkForCachedNews() {
    const date = new Date();
    this.dateString = date.toDateString().replace(/ /g, '');

    const cachedNewsList = localStorage.getItem(this.dateString);
    const cachedPrintNewsList = localStorage.getItem(`${this.dateString}Print`);

    if (cachedNewsList) {
      this.setState({
        todaysNewsList: JSON.parse(cachedNewsList),
        loading: false,
      }, this.fetchFirstArticle);
    } else {
      this.fetchArticles('/');
    }

    if (cachedPrintNewsList) {
      this.setState({
        printNewsList: JSON.parse(cachedNewsList),
        loading: false,
      });
    } else {
      this.fetchArticles('/printedition');
    }
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true });

    this.fetchArticles('/');
    this.fetchArticles('/printedition');
  }

  fetchArticles(path) {
    const { password } = this.state;

    axios.get(`${this.baseUrl}?key=${password}&page=${path}`)
      .then((res) => {
        if (path === '/') {
          localStorage.setItem(this.dateString, JSON.stringify(res.data));
          localStorage.setItem('economistApiPassword', password);

          this.setState({
            todaysNewsList: res.data,
            loading: false,
          }, this.fetchFirstArticle);
        } else if (path === '/printedition') {
          localStorage.setItem('weekly', JSON.stringify(res.data));
          localStorage.setItem('economistApiPassword', password);

          this.setState({
            printNewsList: res.data,
            loading: false,
          });
        }
      })
      .catch(err => console.log('Error: ', err));
  }

  fetchFirstArticle() {
    const { todaysNewsList } = this.state;
    const firstArticleLink = todaysNewsList[0].link;
    this.fetchArticle(firstArticleLink, 0);
  }

  fetchArticle(url, teaserIndex) {
    const { password } = this.state;

    const cachedNewsArticle = localStorage.getItem(url);

    if (cachedNewsArticle) {
      this.setState({
        activeArticle: JSON.parse(cachedNewsArticle),
        activeIndex: teaserIndex,
      }, () => window.scrollTo(0, 0));
    } else {
      axios.get(`${this.baseUrl}?key=${password}&page=${url}`)
        .then((res) => {
          this.setState({
            activeArticle: res.data,
            activeIndex: teaserIndex,
          }, () => window.scrollTo(0, 0));

          localStorage.setItem(url, JSON.stringify(res.data));
        })
        .catch(err => console.log('Error: ', err));
    }
  }

  render() {
    const {
      activeArticle,
      activeIndex,
      darkTheme,
      loading,
      showingWeek,
      todaysNewsList,
      printNewsList,
    } = this.state;
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
          {todaysNewsList.length ? (
            <div>
              <div className="economist__article-list-wrapper">
                <div className="economist__print-edition-toggle">
                  <button
                    className={showingWeek ? '' : 'active'}
                    onClick={() => this.setState({ showingWeek: false })}
                  >
                    Today
                  </button>
                  <button
                    className={showingWeek ? 'active' : ''}
                    onClick={() => this.setState({ showingWeek: true })}
                  >
                    Print Edition
                  </button>
                </div>
                {showingWeek ? (
                  <PrintEdition
                    data={printNewsList}
                    fetchArticle={this.fetchArticle}
                  />
                ) : (
                  todaysNewsList.map((newsListItem, index) => (
                    <ArticleTeaser
                      index={index}
                      activeIndex={activeIndex}
                      article={newsListItem}
                      fetchArticle={this.fetchArticle}
                      key={`article-tease-${newsListItem.number}`}
                    />
                )))}
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
                {loading ? (
                  <img src={spinner} alt="Loading Spinner" className="economist__spinner" />
                ) : (
                  <input
                    type="text"
                    onChange={e => this.setState({ password: e.target.value })}
                  />
                )}
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Economist;
