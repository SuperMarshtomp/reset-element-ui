import ElInput from './src/index';

/* istanbul ignore next */
ElInput.install = function(Vue) {
  Vue.component('ElInput', ElInput);
};

export default ElInput;
