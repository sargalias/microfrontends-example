type Observer<T> = (data: T) => void;

const createObserver = <T>() => {
  const observers = new Set<Observer<T>>();

  const subscribe = (observer: Observer<T>): (() => void) => {
    observers.add(observer);

    const unsubscribe = () => {
      observers.delete(observer);
    };
    return unsubscribe;
  };

  const notify = (data: T) => {
    for (const observer of observers) {
      observer(data);
    }
  };

  return { subscribe, notify };
};

export default createObserver;
