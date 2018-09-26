/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import ReposList from 'components/ReposList';
import Typist from 'react-typist';
import './style.scss';

export default class HomePage extends React.Component {

   state = {
    githubData: [],
    showLogElement: false
  }

  componentDidMount() {

    axios.get(`https://api.github.com/users/nousacademy`)
      .then(res => {
        const githubData = res.data;
        this.setState({ githubData });
      });

  }

  typingDone = () =>{
    this.setState({ showLogElement: true });
  }

  render() {

    return (
      <article>
        <Helmet>
          <title>The Architect&#39;s Portfolio Site</title>
          <meta name="description" content="Home page for The Architect" />
        </Helmet>
        <div id="main" className="home-page">
          <section className="editor">
            <Typist onTypingDone={this.typingDone}>
              <div className="container">
                <code className="import-statement">import </code>
                <code>&#123; </code>
                <code className="module-statement">Profile </code>
                <code>&#125; </code>
                <code className="import-statement">from </code>
                <code className="string-statement">"./github.com/nousacademy"</code>
                <code>;</code>
              </div>
              <div>
                <code className="entity-statement">console</code>
                <code>.</code>
                <code className="function-statement">log</code>
                <code>(Profile);</code>
              </div>
            </Typist>
            <br/>
            {this.state.showLogElement ? (
              <div className="logger">
                <code>&#123; </code>
                name : <code className="string-statement">"{this.state.githubData.name}"</code>,
                <br/>
                bio : <code className="string-statement">"{this.state.githubData.bio}"</code>,
                <br/>
                location : <code className="string-statement">"{this.state.githubData.location}"</code>,
                <br/>
                github_url : <a href={this.state.githubData.html_url} className="string-statement" target="_blank"><code>"{this.state.githubData.html_url}"</code></a>,
                <br/>
                owner_and_creator_of : <a href={this.state.githubData.blog} className="string-statement" target="_blank"><code>"{this.state.githubData.blog}"</code></a>,
                <br/>
                hireable : <code className="entity-statement">{this.state.githubData.hireable.toString()}</code>
                <code> &#125;</code>
              </div>
          ) : null }
          </section>
        </div>
      </article>
    );
  }
}
