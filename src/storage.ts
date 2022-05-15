import type { StorageEngine } from 'foca';
import {
  getStorage,
  setStorage,
  removeStorage,
  clearStorage,
} from '@tarojs/taro';

export const taroStorage: StorageEngine = {
  getItem(key) {
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
