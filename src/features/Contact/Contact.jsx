import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import contactData from '../../data/contactData';

const Contact = () => (
  <div
    style={{
      color: '#fff',
      marginBottom: '0.5rem',
    }}
  >
    <h2>Connect with me</h2>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
      }}
    >
      {contactData.twitter && (
      <a
        href={contactData.twitter}
        target="_blank"
        rel="noreferrer"
      >
        <TwitterIcon aria-label="Twitter" />
      </a>
      )}

      {contactData.github && (
      <a
        href={contactData.github}
        target="_blank"
        rel="noreferrer"
      >
        <GitHubIcon aria-label="github" />
      </a>
      )}

      {contactData.linkedIn && (
      <a
        href={contactData.linkedIn}
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInIcon aria-label="LinkedIn" />
      </a>
      )}

      {
        contactData.email && (
        <a href={`mailto:${contactData.email}`} target="_blank" rel="noreferrer">
          <span type="button">
            <EmailIcon />
          </span>
        </a>
        )
      }
    </div>

  </div>
);

export default Contact;
