import ElDialog from './src/index';

/* istanbul ignore next */
ElDialog.install = function(Vue) {
  Vue.component('ElDialog', ElDialog);
};

export default ElDialog;
