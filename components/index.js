import ElInput from "./ElInput"
import ElDialog from "./ElDialog"
import ElDrawer from "./ElDrawer"

const components = [ElInput, ElDialog, ElDrawer]

const install = function (Vue, opts = {}) {
  components.forEach((comp) => {
    Vue.use(comp)
  })
}

export default {
  install,
}
