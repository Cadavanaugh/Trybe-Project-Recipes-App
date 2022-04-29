import React from 'react';
import { useParams } from 'react-router-dom';

function FoodId() {
  const { idReceita } = useParams();

  return (
    <div>
      {idReceita}
    </div>
  );
}

export default FoodId;
