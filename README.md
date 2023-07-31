# reset-element-ui

## 前置

务必将目标项目`babel.config`中的 plugins -> component 删掉

## 引入样式

将目标项目初始化中引入的`import 'element-ui/lib/theme-chalk/index.css'`删除

将这个换成本项目中的`import "./reset-element-ui/style/index.scss";`

***注意*** 项目中403、404、500以及无数据用 `style/img/empty.png` 替换

```js
Element.Empty.props.image.default = require('./reset-element-ui/style/img/empty.png');
```

## 引入重置后组件

如果过是普通项目则通过
```js
import ResetUI from './reset-element-ui/components';
import Element from 'element-ui';
import Vue from 'vue'

Vue.use(Element)
Vue.use(ResetUI)
```

如果是@leaves初始化则
```js
import { createApp } from '@leaves/core/src/main'
import Element from 'element-ui';
import ResetUI from './reset-element-ui/components';


const application = createApp()
application.useAddon(Element).useAddon(ResetUI)
```

## 注意！
请尽量减少用ef开头的任何组件，这些组件不受控，不受样式重置影响，如项目中有用到ef相关的内置组件可以寻找替换方法
