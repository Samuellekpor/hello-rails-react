import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Greeting = () => {

  const message = useSelector((state) => state.greeting);

  return (
    <div>
      <h1>Greeting</h1>
      <div>Message: {message.content}</div>
    </div>
  );
};

export default Greeting;