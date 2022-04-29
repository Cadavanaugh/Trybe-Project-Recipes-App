import React from 'react';
import { useParams } from 'react-router-dom';

function DrinkId() {
  const { idReceita } = useParams();

  return (
    <div>
      {idReceita}
    </div>
  );
}

export default DrinkId;
