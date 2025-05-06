import { useEffect, useState } from 'react';
import { Bloc } from './Domine/blocBase';

export function usePlocState<S>(ploc: Bloc<S>) {
  const [state, setState] = useState(ploc.state);

  useEffect(() => {
    const stateSubscription = (state: S) => {
      setState(state);
    };

    ploc.subscribe(stateSubscription);

    return () => ploc.unsubscribe(stateSubscription);
  }, [ploc]);

  return state;
}
