import ElDrawer from './src/index';

/* istanbul ignore next */
ElDrawer.install = function(Vue) {
  Vue.component('ElDrawer', ElDrawer);
};

export default ElDrawer;
