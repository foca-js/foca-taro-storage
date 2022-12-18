import type { StorageEngine } from 'foca';
import {
  getStorage,
  setStorage,
  removeStorage,
  clearStorage,
} from '@tarojs/taro';

export const taroStorage: StorageEngine = {
  getItem(key) {
    // getStorage的泛型在taro@3.0.12才加上去，但是不影响发布后的 .d.ts
    return getStorage<string>({ key }).then(
      ({ data }) => {
        return typeof data === 'string' ? data : null;
      },
      () => {
        // 使用getStorage()找不到key时，Taro会抛出异常: getStorage:fail data not found
        return null;
      },
    );
  },
  setItem(key, value) {
    return setStorage({
      key,
      data: value,
    });
  },
  removeItem(key) {
    return removeStorage({
      key,
    });
  },
  clear() {
    return clearStorage();
  },
};
