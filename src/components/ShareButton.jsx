import React, { useState } from 'react';
import copy from 'clipboard-copy';
import { useLocation } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';

function ShareButton() {
  const pathname = useLocation();
  const [copied, setCopied] = useState(false);

  const shareFunc = () => {
    copy(`http://localhost:3000${pathname.pathname}`);
    setCopied(true);
  };

  return (
    <>
      {copied && <p>Link copied!</p>}
      <button type="button" onClick={ shareFunc }>
        <img data-testid="share-btn" src={ shareIcon } alt="share Icon" />
      </button>
    </>

  );
}

export default ShareButton;
