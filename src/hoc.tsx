import { store } from 'foca';
import hoistStatics from 'hoist-non-react-statics';
import React, { ComponentType, useEffect, useState, FC } from 'react';

// 路由入口没有ref的需求，所以不需要增加forwardRef
export function persistInterceptor<T>(EntryComponent: ComponentType<T>) {
  const HOC: FC<T> = (props) => {
    const [ready, setReady] = useState(false);

    useEffect(() => {
      store.onInitialized().then(() => {
        setReady(true);
      });
    }, []);

    return ready ? <EntryComponent {...props} /> : null;
  };

  return hoistStatics(HOC, EntryComponent);
}
