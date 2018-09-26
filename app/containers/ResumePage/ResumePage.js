/*
 * ResumePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import Typist from 'react-typist';
// import ResumePdf from './resume.pdf';
import './style.scss';

// console.log(ResumePdf);
export default class PortfolioPage extends React.Component {

  downloadResume = () => {
    console.log('hello')

  }

  render() {
    return (
      <article>
        <Helmet>
          <title>Portfolio</title>
          <meta name="description" content="Resume page for The Architect"/>
        </Helmet>
        <div id="main" className="resume-page">
          <section className="editor">
            <Typist>
              <code className="import-statement">if</code>
              <code>&#40; </code>
              <code className="syntax--function">is_recruiter</code>
              <code>&#40;&#41; </code>
              <code>&#41; </code>
              <a href="/resume.pdf" download>
                <button id="download-pdf">
                  <code>Download Resume PDF</code>
                </button>
              </a>
            </Typist>
          </section>
        </div>
      </article>
    );
  }
}
