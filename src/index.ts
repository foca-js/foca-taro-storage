import type { StorageEngine } from 'foca';
import {
  getStorage,
  getStorageSync,
  setStorage,
  removeStorage,
  clearStorage,
} from '@tarojs/taro';

/**
 * 持久化必须在小程序onLoad之前完成，否则页面报错
 * @link https://github.com/NervJS/taro/issues/6548#issuecomment-717896033
 */
const isMiniProgram =
  process.env.TARO_ENV !== 'rn' &&
  process.env.TARO_ENV !== 'h5' &&
  process.env.TARO_ENV !== 'quickapp';

export const taroStorage: StorageEngine = {
  getItem(key) {
    let promise: Promise<string | null>;

    if (isMiniProgram) {
      try {
        promise = Promise.resolve(getStorageSync<string>(key));
      } catch {
        promise = Promise.resolve(null);
      }
    } else {
      promise = getStorage<string>({ key }).then(({ data }) => data);
    }

    return promise.then(
      (data) => {
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
