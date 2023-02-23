import type { TeleportProps } from 'vue'
export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  container?: TeleportProps['to']
  shouldCloseOnBackdropClick?: boolean
  shouldCloseOnEsc?: boolean
  id?: string
  className?: string
  backdropClassName?: string
  dialogClassName?: string
  preventScroll?: boolean
  closeTimeout?: number
  role?: string
  ariaModal?: boolean | 'false' | 'true'
  ariaLabelledby?: string
  ariaDescribedby?: string
}
declare const _default: __VLS_WithTemplateSlots<
  import('vue').DefineComponent<
    __VLS_WithDefaults<
      __VLS_TypePropsToRuntimeProps<ModalProps>,
      {
        container: string
        shouldCloseOnBackdropClick: boolean
        shouldCloseOnEsc: boolean
        className: string
        backdropClassName: string
        dialogClassName: string
        preventScroll: boolean
        closeTimeout: number
        role: string
        ariaModal: boolean
      }
    >,
    {},
    unknown,
    {},
    {},
    import('vue').ComponentOptionsMixin,
    import('vue').ComponentOptionsMixin,
    {
      afterOpen: () => void
    } & {
      afterClose: () => void
    },
    string,
    import('vue').VNodeProps &
      import('vue').AllowedComponentProps &
      import('vue').ComponentCustomProps,
    Readonly<
      import('vue').ExtractPropTypes<
        __VLS_WithDefaults<
          __VLS_TypePropsToRuntimeProps<ModalProps>,
          {
            container: string
            shouldCloseOnBackdropClick: boolean
            shouldCloseOnEsc: boolean
            className: string
            backdropClassName: string
            dialogClassName: string
            preventScroll: boolean
            closeTimeout: number
            role: string
            ariaModal: boolean
          }
        >
      >
    > & {
      onAfterOpen?: (() => any) | undefined
      onAfterClose?: (() => any) | undefined
    },
    {
      container: string | import('vue').RendererElement | null
      shouldCloseOnBackdropClick: boolean
      shouldCloseOnEsc: boolean
      className: string
      backdropClassName: string
      dialogClassName: string
      preventScroll: boolean
      closeTimeout: number
      role: string
      ariaModal: boolean | 'false' | 'true'
    }
  >,
  {
    default: (_: {}) => any
  }
>
export default _default
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T
type __VLS_TypePropsToRuntimeProps<T> = {
  [K in keyof T]-?: {} extends Pick<T, K>
    ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>
      }
    : {
        type: import('vue').PropType<T[K]>
        required: true
      }
}
type __VLS_WithDefaults<P, D> = {
  [K in keyof Pick<P, keyof P>]: K extends keyof D
    ? P[K] & {
        default: D[K]
      }
    : P[K]
}
type __VLS_WithTemplateSlots<T, S> = T & {
  new (): {
    $slots: S
  }
}
//# sourceMappingURL=Modal.vue.d.ts.map
