<template>
  <default-el-dialog v-on="$listeners" v-bind="$attrs">
    <template v-for="key in Object.keys($slots)" :slot="key">
      <slot :name="key" />
    </template>
  </default-el-dialog>
</template>

<script>
  import { Dialog } from 'element-ui';
  export default {
    name: 'ElDialog',
    components: { 'default-el-dialog': Dialog },
  };
</script>

<style lang="scss" scoped>
  ::v-deep {
    .el-dialog__body {
      padding: 15px 20px;
      max-height: calc(85vh - 160px);
      overflow: auto;
    }
    .el-dialog__title {
      font-size: 14px;
      padding: 0;
    }
    .el-dialog__header {
      padding: 16px;
    }
  }
</style>
