import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store/counter-slice';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5)); 
  }; // {type: some_unique_identifier, payload: xx}

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const decreaseHandler = () => {
    dispatch(counterActions.decrease(5));
  };

  const toggleCounterHandler = () => {
    dispatch (counterActions.toggleCounter());
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
