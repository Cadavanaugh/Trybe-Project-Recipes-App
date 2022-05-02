import React from 'react';
import PropTypes from 'prop-types';

const Video = ({ embedId }) => (
  <div className="video-responsive" data-testid="video">
    <iframe
      width="260"
      src={ `https://www.youtube.com/embed/${embedId}` }
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write;
        encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

Video.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default Video;

// Fonte do código: https://dev.to/bravemaster619/simplest-way-to-embed-a-youtube-video-in-your-react-app-3bk2
