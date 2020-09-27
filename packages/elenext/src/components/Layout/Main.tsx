import { defineComponent } from 'vue'

const ElMain = defineComponent({
  name: 'ElMain',
  setup(_, { slots, attrs }) {
    return () => (
      <main class="el-main" {...attrs}>
        {slots.default?.()}
      </main>
    )
  }
})

export default ElMain
