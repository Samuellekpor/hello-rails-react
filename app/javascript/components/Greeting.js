import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreeting } from '../redux/greeting/greeting';

const Greeting = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreeting());
  }, [dispatch]);

  const message = useSelector((state) => state.greeting);

  return (
    <div>
      <h1>Greeting</h1>
      <div>
        Message:
        {message.content}
      </div>
    </div>
  );
};

export default Greeting;
