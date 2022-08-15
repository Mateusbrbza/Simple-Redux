import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);

  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };

  const increaseHandler = () => {
    dispatch({ type: 'increase', amount: 5 });
  };

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };

  const decreaseHandler = () => {
    dispatch({ type: 'decrease', amount: 5 });
  };

  const toggleCounterHandler = () => {
    dispatch ({ type: 'toggleCounter' });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Aumentar</button>
        <button onClick={increaseHandler}>Aumentar 5</button>
        <button onClick={decrementHandler}>Diminuir</button>
        <button onClick={decreaseHandler}>Diminuir 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Ativar Contador</button>
    </main>
  );
};

export default Counter;
