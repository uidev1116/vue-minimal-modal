# Vuedal

Accessible modal dialog component for Vue.js

## Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):


#### via npm
```sh
npm install vuedal
```

#### via yarn
```sh
yarn add vuedal
```

## API documentation

### Examples

Here is a simple example of vuedal.

```vue
<script setup lang="ts">
import { ref } from 'vue'
import Modal from 'vuedal'

const isOpen = ref(false)

const setIsOpen = (value: boolean) => {
  isOpen.value = value;
}

const openModal = () => {
  setIsOpen(true)
}

const closeModal = () => {
  setIsOpen(false)
}
</script>

<template>
  <div>
    <button
      type="button"
      @click="openModal"
    >
      Open Modal
    </button>
    <Modal
      :isOpen="isOpen"
      :onClose="closeModal"
    >
      <button type="button" @click="closeModal">Close Modal</button>
      <h2>I am Vuedal.</h2>
    </Modal>
  </div>
</template>
```

### Props
| name | description | type | default |
|:---|:---|:---|:---|
| isOpen | Boolean describing if the modal should be shown or not. | boolean |  |
| onClose | Specify a function to close modal. | function | |
| container | Set parent element that the modal will be attached to. | string \| HTMLElement | 'body' |
| shouldCloseOnBackdropClick | Boolean indicating if the backdrop should close the modal. | boolean | true |
| shouldCloseOnEsc | Boolean indicating if pressing the esc key should close the modal. | boolean | true |
| id | Id attribute to be applied to the modal div. | string | |
| className | Class attribute to be applied to the modal div. | string | 'vuedal' |
| backdropClassName | Class attribute to be applied to the backdrop div. | string | 'vuedal-backdrop' |
| dialogClassName | Class attribute to be applied to the dialog div. | string | 'vuedal-dialog' |
| preventScroll | Boolean indicating if open, prevent scrolling. | boolean | true |
| closeTimeout | Number indicating the milliseconds to wait before closing the modal. | number | 0 |
| role | Role attribute of the modal. | string | 'dialog' |
| ariaModal | Aria Modal attribute of the modal. | boolean \| 'false' \| 'true' | true |
| ariaLabelledby | Aria Labelledby attribute of the modal. | string | |
| ariaDescribedby | Aria Describedby attribute of the modal. | string | |

### Events
| name | description |
|:---|:---|
| afterOpen | When the modal opened. |
| afterClose | When the modal closed. |
