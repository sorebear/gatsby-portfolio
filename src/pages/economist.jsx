import React, { Component } from 'react';
import Helmet from 'react-helmet';
import axios from 'axios';

import spinner from '../images/icons/spinner.png';

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
      textSize: 18,
      workMode: false,
      noImages: false,
      reverse: false,
    };
  }

  componentDidMount() {
    const date = new Date();
    this.dateString = date.toDateString().replace(/ /g, '');

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
        printNewsList: JSON.parse(cachedPrintNewsList),
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
          localStorage.setItem(`${this.dateString}Print`, JSON.stringify(res.data));
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
      noImages,
      reverse,
      showingWeek,
      textSize,
      todaysNewsList,
      printNewsList,
      workMode,
    } = this.state;

    let wrapperClasses = 'economist';
    wrapperClasses += reverse ? ' reverse' : '';
    wrapperClasses += darkTheme ? ' dark' : ' light';
    wrapperClasses += workMode ? ' work-mode' : '';
    wrapperClasses += noImages ? ' no-images' : '';
    wrapperClasses += reverse ? ' reverse' : '';

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
        <div className={wrapperClasses}>
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
                {activeArticle.map(article => (
                  <Article key={article.headline} article={article} textSize={textSize} />
                ))}
                <div className="economist__options">
                  <button
                    onClick={() => this.setState({ darkTheme: !darkTheme })}
                  >
                    {darkTheme ? (
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="moon" className="svg-inline--fa fa-moon fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z" /></svg>
                    ) : (
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sun" className="svg-inline--fa fa-sun fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z" /></svg>
                    )}
                  </button>
                  <button
                    onClick={() => this.setState({ noImages: !noImages })}
                  >
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="image" className="svg-inline--fa fa-image fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z" /></svg>
                  </button>
                  <button
                    onClick={() => this.setState({ workMode: !workMode })}
                  >
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="code" className="svg-inline--fa fa-code fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z" /></svg>
                  </button>
                  <button
                    onClick={() => this.setState({ reverse: !reverse })}
                  >
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exchange-alt" className="svg-inline--fa fa-exchange-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 168v-16c0-13.255 10.745-24 24-24h360V80c0-21.367 25.899-32.042 40.971-16.971l80 80c9.372 9.373 9.372 24.569 0 33.941l-80 80C409.956 271.982 384 261.456 384 240v-48H24c-13.255 0-24-10.745-24-24zm488 152H128v-48c0-21.314-25.862-32.08-40.971-16.971l-80 80c-9.372 9.373-9.372 24.569 0 33.941l80 80C102.057 463.997 128 453.437 128 432v-48h360c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z" /></svg>
                  </button>
                  <button
                    onClick={() => this.setState({ textSize: textSize + 1 })}
                  >
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" className="svg-inline--fa fa-plus fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" /></svg>
                  </button>
                  <button
                    onClick={() => this.setState({ textSize: textSize <= 1 ? 1 : textSize - 1 })}
                  >
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="minus" className="svg-inline--fa fa-minus fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" /></svg>
                  </button>
                </div>
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
