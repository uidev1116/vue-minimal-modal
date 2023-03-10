<script setup lang="ts">
import { ref, watch, computed, toRefs, reactive } from 'vue'
import {
  useAriaHidden,
  useBodyScrollLock,
  useFocusTrap,
  useMounted,
} from '../composables'

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

const props = withDefaults(defineProps<ModalProps>(), {
  container: 'body',
  shouldCloseOnBackdropClick: true,
  shouldCloseOnEsc: true,
  className: 'vue-minimal-modal',
  backdropClassName: 'vue-minimal-modal-backdrop',
  dialogClassName: 'vue-minimal-modal-dialog',
  preventScroll: true,
  closeTimeout: 0,
  role: 'dialog',
  ariaModal: true,
})

const emit = defineEmits<{
  (e: 'afterOpen'): void
  (e: 'afterClose'): void
}>()

const modalRef = ref<HTMLDivElement | null>(null)

// Focus trap
const { activate, deactivate } = useFocusTrap(modalRef, {
  allowOutsideClick: true, // falseの場合、Viewerを閉じてもFocusTrapが解除されないので注意
  escapeDeactivates: false, // ESCキーを押したときの動作は自前でカスタマイズしたいのでfalse
  returnFocusOnDeactivate: true,
})

// Disable scroll of body
const { disableScroll, enableScroll } = useBodyScrollLock(modalRef)

// Hides from ARIA everything, except modal
const { hide, unhide } = useAriaHidden(modalRef)

const isMounted = useMounted()
const state = reactive({
  isOpen: false,
  beforeClose: false,
  afterOpen: false,
})

watch(
  toRefs(props).isOpen,
  (isOpen) => {
    if (isOpen) {
      state.isOpen = true
    } else if (isMounted.value) {
      state.beforeClose = true
    }
  },
  { immediate: true }
)

watch(
  () => state.isOpen,
  (isOpen, _, onCleanup) => {
    let animationFrame: number
    if (isOpen) {
      animationFrame = window.requestAnimationFrame(() => {
        state.afterOpen = true
        if (isOpen) {
          emit('afterOpen')
        }
      })
    } else if (isMounted.value) {
      if (props.preventScroll) {
        enableScroll()
      }
      deactivate()
      unhide()
    }

    onCleanup(() => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    })
  },
  { immediate: true }
)

watch(
  () => state.beforeClose,
  (beforeClose, _, onCleanup) => {
    let timeoutId: number
    if (beforeClose) {
      timeoutId = window.setTimeout(() => {
        state.isOpen = false
        state.beforeClose = false
        state.afterOpen = false
        emit('afterClose')
      }, props.closeTimeout)
    }

    onCleanup(() => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    })
  },
  { immediate: true }
)

watch(
  () => state.afterOpen,
  (afterOpen) => {
    if (afterOpen) {
      if (props.preventScroll) {
        disableScroll()
      }
      activate()
      hide()
    }
  },
  { immediate: true }
)

const classNames = computed(() => ({
  [props.className]: props.className,
  [`${props.className}--after-open`]: state.afterOpen,
  [`${props.className}--before-close`]: state.beforeClose,
}))

const shouldBeClosed = computed(() => !state.isOpen && !state.beforeClose)
</script>

<template>
  <teleport :to="container">
    <div v-if="!shouldBeClosed" :id="id" ref="modalRef" :class="classNames">
      <!-- eslint-disable-next-line vuejs-accessibility/click-events-have-key-events vuejs-accessibility/no-static-element-interactions -->
      <div
        :class="backdropClassName"
        @click.self="shouldCloseOnBackdropClick && onClose()"
      >
        <!-- eslint-disable-next-line vuejs-accessibility/no-static-element-interactions -->
        <div
          :class="dialogClassName"
          tabindex="-1"
          :role="role"
          :aria-modal="ariaModal"
          :aria-labelledby="ariaLabelledby"
          :aria-describedby="ariaDescribedby"
          @keydown.esc.stop="shouldCloseOnEsc && onClose()"
        >
          <slot></slot>
        </div>
      </div>
    </div>
  </teleport>
</template>
