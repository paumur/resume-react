import React from 'react';
import Hr from './Hr.jsx';
import './Default.css';
import './Links.css';

const Links = () => (
  <section className='links'>
    <h3>Links</h3>
    <Hr />
    <div>
      <div className='links__card'>
        <div>
          <img src={require('./img/linkedin.png')} alt='linkedin icon' />
        </div>
        <div>
          <a target='_blank' rel='noreferrer' href='https://linkedin.com/'>
            LINKEDIN/username
          </a>
        </div>
      </div>
      <div className='links__card'>
        <div>
          <img src={require('./img/twitter.png')} alt='twitter icon' />
        </div>
        <div>
          <a target='_blank' rel='noreferrer' href='https://twitter.com/'>
            TWITTER/@user-handle
          </a>
        </div>
      </div>
      <div className='links__card'>
        <div>
          <img src={require('./img/github.png')} alt='github icon' />
        </div>
        <div>
          <a target='_blank' rel='noreferrer' href='https://github.com/'>
            GITHUB/username
          </a>
        </div>
      </div>
      <div className='links__card'>
        <div>
          <img src={require('./img/dev.png')} alt='dev icon' />
        </div>
        <a target='_blank' rel='noreferrer' href='https://dev.to/'>
          BLOG/blog-name
        </a>
      </div>
    </div>
  </section>
);

export default Links;
