import { store } from 'foca';
import React, { ComponentType, useEffect, useState, forwardRef } from 'react';

// TODO: 支持ref的类型
export function persistInterceptor<T>(EntryComponent: ComponentType<T>) {
  const [ready, setReady] = useState(false);

  return forwardRef<unknown, T>((props, ref) => {
    useEffect(() => {
      store.onInitialized().then(() => {
        setReady(true);
      });
    });

    return ready ? <EntryComponent {...props} ref={ref} /> : null;
  });
}
