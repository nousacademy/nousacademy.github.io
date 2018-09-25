/*
 * PortfolioPage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import Typist from 'react-typist';
import PortfolioData from './PortfolioData.js';
import './style.scss';

export default class PortfolioPage extends React.Component {

  state = {
   prtfolioData: PortfolioData,
   showLogElement: false,
   activeId: null
 }

 typingDone = () => {
   this.setState({ showLogElement: true });
 }

 showFullObject = (id) => {
   if(id === this.state.activeId){
     this.setState({activeId: null});
   }else{
     this.setState({activeId: id})
   }
}

  render() {

    return (
      <article>
        <Helmet>
          <title>Portfolio</title>
          <meta name="description" content="Portfolio page of React.js Boilerplate application"/>
        </Helmet>
        <div id="main" className="portfolio-page">
          <section className="editor">
            <Typist onTypingDone={this.typingDone}>
              <div className="container">
                <code className="import-statement">import </code>
                <code>&#123; </code>
                <code className="module-statement">GithubPortfolio </code>
                <code>&#125; </code>
                <code className="import-statement">from </code>
                <code className="string-statement">"./github.com/nousacademy"</code>
                <code>;</code>
                <br/>
                <code className="import-statement">import </code>
                <code>&#123; </code>
                <code className="module-statement">LinkedinPortfolio </code>
                <code>&#125; </code>
                <code className="import-statement">from </code>
                <code className="string-statement">"./linkedin.com/nousacademy"</code>
                <code>;</code>
                <br/>
                <br/>
                <code className="import-statement">const </code>
                <code className="syntax--constant">allPortfolioProjs </code>
                <code className="syntax--operator">= </code>
                <code>[</code>
                <code className="syntax--operator">...</code>
                <code>GithubPortfolio, </code>
                <code className="syntax--operator">...</code>
                <code>LinkedinPortfolio];</code>
                <br/>
                <br/>
                <code className="module-statement">allPortfolioProjs</code>
                <code>.</code>
                <code className="syntax--operator">forEach</code>
                <code>((element) </code>
                <code className="import-statement">=> </code>
                <code className="entity-statement">console</code>
                <code>.</code>
                <code className="function-statement">log</code>
                <code>(element));</code>
              </div>
            </Typist>
            <br/>
            {this.state.prtfolioData.map((item, index) => {
                    return(
                        <div className="logger" key={index}>
                            {this.state.showLogElement ?
                                <div className="object-items">
                                  <i className="fas fa-caret-right" onClick={() => this.showFullObject(index)}></i>
                                  <code> &#123; </code>
                                  <code>project_type: </code>
                                  <code className="string-statement">"{item.project_type}" </code>
                                  <code>&#125; </code>
                                    <div className={index === this.state.activeId ? "object-items show-details" : "object-items hide-details"}>
                                      <code>framework</code>
                                      <code className="syntax--operator">: </code>
                                      <code className="string-statement">"{item.framework}"</code>
                                      <br/>
                                      <code>is_project_live</code>
                                      <code className="syntax--operator">: </code>
                                      <code className="entity-statement">{item.is_project_live.toString()}</code>
                                      <br/>
                                      <code>project_goal</code>
                                      <code className="syntax--operator">: </code>
                                      <code className="string-statement">"{item.project_goal}"</code>
                                      <br/>
                                      <code>project_type</code>
                                      <code className="syntax--operator">: </code>
                                      <code className="string-statement">"{item.project_type}"</code>
                                      <br/>
                                      <code>project_url</code>
                                      <code className="syntax--operator">: </code>
                                      <a href={item.project_url} className="string-statement" target="_blank"><code>"{item.project_url}"</code></a>
                                    </div>
                                </div>
                            : null}
                        </div>
                    )
                })}
          </section>
        </div>
      </article>
    );
  }
}
