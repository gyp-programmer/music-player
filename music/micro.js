((global) => {
    global['music'] = {
      bootstrap: () => {
        return Promise.resolve();
      },
      mount: () => {
        console.log('music mount');
        // render不需要写，页面所有的渲染都已用原声写完了，这里只是用来qiankun框架在运行loadApp 的时候，读取微应用的这个方法
      },
      unmount: () => {
        console.log('music unmount');
        return Promise.resolve();
      }
    };
  })(window);
