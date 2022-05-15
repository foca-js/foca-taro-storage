import { store } from 'foca';
import { Component } from 'react';

/**
 * @link https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/js-support.html
 * 摘自微信小程序的文档：
 * 由于实现原因与 iOS JavaScriptCore 限制，iOS 环境下的 Promise 是一个使用 setTimeout 模拟的 Polyfill。
 * 这意味着 Promise 触发的任务为普通任务，而非微任务，进而导致 在 iOS 下的 Promise 时序会和标准存在差异。
 *
 * @link https://github.com/NervJS/taro/issues/6548
 * 路由页（包括首页）mount后，taro会立即寻找根结点。但由于恢复持久化需要时间，导致页面报错（没有找到页面实例。）
 *
 * @link https://github.com/NervJS/taro/blob/next/packages/shared/src/native-apis.ts#L263
 * 查看源码得知，getStorage在taro底层已经直接进行了Promise化处理。
 * 在以往的版本中，曾经尝试使用`getStorageSync`去代替，但是效果不佳。
 *
 * @link https://github.com/NervJS/taro/blob/next/packages/taro-plugin-react/src/runtime/connect.ts#L200
 * forceUpdate可能是同步的也可能是异步的，但getStorage一定是异步的。
 * 所以根据mount的逻辑，我们需要重写forceUpdate使得寻找节点的回调在恢复持久化之后才被执行。
 */

const forceUpdate = Component.prototype.forceUpdate;

Component.prototype.forceUpdate = function (
  this: Component,
  callback?: () => void,
) {
  forceUpdate.call(
    this,
    callback &&
      (() => {
        if (store.isReady) {
          callback();
        } else {
          store.onInitialized().then(callback);
        }
      }),
  );
};
