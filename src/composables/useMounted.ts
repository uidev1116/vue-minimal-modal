import { onMounted, ref } from 'vue'

import type { Ref } from 'vue'

/**
 * Mounted state in ref.
 */
export const useMounted = (): Ref<boolean> => {
  const isMounted = ref(false)

  onMounted(() => {
    isMounted.value = true
  })

  return isMounted
}
