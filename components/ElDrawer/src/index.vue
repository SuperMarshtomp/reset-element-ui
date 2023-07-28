<template>
  <default-el-drawer v-on="$listeners" v-bind="$attrs" :append-to-body="true">
    <template #title>
      <slot name="title" />
    </template>
    <div class="ef-drawer-body">
      <slot />
    </div>
    <div class="ef-drawer-footer" v-if="$slots.footer">
      <slot name="footer" />
    </div>
  </default-el-drawer>
</template>

<script>
  import { Drawer } from 'element-ui';
  export default {
    name: 'ElDrawer',
    components: { 'default-el-drawer': Drawer },
  };
</script>
