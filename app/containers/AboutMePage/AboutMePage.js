/*
 * AboutMePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import Typist from 'react-typist';
import './style.scss';

export default class AboutMePage extends React.Component {

  state = {
   showLogElement: false
 }

  howLongIveBeenAtCurrentJob = (from, to) => {
    let diff = Math.floor(to.getTime() - from.getTime()),
        day = 1000 * 60 * 60 * 24;

    let days = Math.floor(diff/day),
        months = Math.floor(days/31),
        years = Math.floor(months/12);
    return `${years} years`;
  }

  typingDone = () => {
    this.setState({ showLogElement: true });
  }

  render() {
    return (
      <article>
        <Helmet>
          <title>About</title>
          <meta name="description" content="About page for The Architect"/>
        </Helmet>
        <div id="main" className="about-me-page">
          <section className="editor">
            <Typist onTypingDone={this.typingDone}>
              <code className="syntax--comment">// About me </code>
              <br/>
              <br/>
              <code className="syntax--comment">// I currently work F/T at Pitney Bowes as a Javascript developer.</code>
              <br/>
              <code className="syntax--comment">// Been there for about {this.howLongIveBeenAtCurrentJob(new Date("7/27/2015"), new Date())} now.</code>
              <br/>
              <br/>
              <code className="syntax--comment">// If you have any cool project ideas let me know</code>
              <br/>
              <code className="syntax--comment">// You can email me at alex.elkan5@gmail.com </code>
              <br/>
              <br/>
              <code className="function-statement">laterz</code>
              <code>&#40;&#41;;</code>
            </Typist>
          </section>
          {this.state.showLogElement ?
          <div className="console-error animated bounceInDown">
            <i className="fas fa-times-circle"></i>
            <span className="error-msg">VM9159:1 Uncaught ReferenceError: laterz is not defined</span>
          </div>
            : null}
        </div>
      </article>
    );
  }
}
// laterz()
