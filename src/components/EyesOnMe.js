import React from 'react';

function EyesOnMe() {
  const handleOnFocus = (e) => {
    console.log('Good!');
  };

  const handleOnBlur = (e) => {
    console.log('Hey! Eyes on me!');
  };

  return (
    <button onFocus={handleOnFocus} onBlur={handleOnBlur}>
      Eyes on me
    </button>
  );
}

export default EyesOnMe;
