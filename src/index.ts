import type { StorageEngine } from 'foca';
import Taro from '@tarojs/taro';

export const taroStorage: StorageEngine = {
  getItem(key) {
    return Taro.getStorage({ key })
      .then(({ data }) => {
        return typeof data === 'string' ? data : null;
      })
      .catch(() => {
        // 找不到key时，小程序会抛出异常: getStorage:fail data not found
        return null;
      });
  },
  setItem(key, value) {
    return Taro.setStorage({
      key,
      data: value,
    });
  },
  removeItem(key) {
    return Taro.removeStorage({
      key,
    });
  },
  clear() {
    return Taro.clearStorage();
  },
};
