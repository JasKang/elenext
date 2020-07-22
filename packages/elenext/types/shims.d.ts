declare const __DEV__: boolean

// export * from 'vue'

declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const comp: ComponentOptions
  export default comp
}

declare module '*.module.less' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.scss' {
  const classes: string
  export default classes
}

declare namespace JSX {
  interface IntrinsicAttributes {
    /**
     * support vue2 v-on
     */
    on?: {
      [key: string]: (...args: any[]) => any
    }
  }
}
