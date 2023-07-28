<template>
  <default-el-input
    v-model="innerValue"
    @input="valueChanged"
    v-on="$listeners"
    v-bind="$attrs"
    :maxlength="
      maxlength ? maxlength : type === 'textarea' ? TEXTAREA_MAX_LENGTH : INPUT_MAX_LENGTH
    "
    :type="type"
    :autosize="autosize"
    ref="default-input">
    <template v-for="key in Object.keys($slots)" :slot="key">
      <slot :name="key" />
    </template>
  </default-el-input>
</template>

<script>
  import { Input } from 'element-ui';
  const INPUT_MAX_LENGTH = 128;
  const TEXTAREA_MAX_LENGTH = 500;
  export default {
    name: 'ElInput',
    components: { 'default-el-input': Input },
    data() {
      return {
        innerValue: '',
        INPUT_MAX_LENGTH,
        TEXTAREA_MAX_LENGTH,
      };
    },
    props: {
      value: [String, Number],
      type: {
        type: String,
        default: 'text',
      },
      maxlength: {
        type: [Number, String],
        default: 0,
      },
      autosize: {
        type: [Boolean, Object],
        default() {
          return { minRows: 5, maxRows: 10 };
        },
      },
    },
    methods: {
      valueChanged(newVal) {
        this.$emit('input', newVal);
      },
      focus() {
        this.$refs['default-input'].focus();
      },
      blur() {
        this.$refs['default-input'].blur();
      },
      select() {
        this.$refs['default-input'].select();
      },
      clear() {
        this.$refs['default-input'].clear();
      },
    },
    watch: {
      value: {
        handler: function (newVal) {
          this.innerValue = newVal;
        },
        immediate: true,
      },
    },
  };
</script>

<style lang="scss" scoped>
  ::v-deep.el-input {
    .el-input__count {
      .el-input__count-inner {
        background: transparent;
      }
    }
  }
</style>
