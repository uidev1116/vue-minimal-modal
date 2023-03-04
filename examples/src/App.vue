<script setup lang="ts">
import { ref } from 'vue'
import VueModal from '../../dist/vue-minimal-modal'

const isOpen = ref(false)

const setIsOpen = (value: boolean) => {
  isOpen.value = value
}

const openModal = () => {
  console.log('open button clicked!')
  setIsOpen(true)
}

const closeModal = () => {
  setIsOpen(false)
  console.log('close modal')
}

const handleAfterOpen = () => {
  console.log('after open!')
}

const handleAfterClose = () => {
  console.log('after close!')
}
</script>

<style src="/css/vue-minimal-modal.css"></style>

<template>
  <div>
    <button type="button" @click="openModal">Open Modal</button>
    <VueModal
      :isOpen="isOpen"
      :onClose="closeModal"
      @afterOpen="handleAfterOpen"
      @afterClose="handleAfterClose"
    >
      <button type="button" @click="closeModal">Close Modal</button>
      <h2>I am Vue Modal.</h2>
    </VueModal>
  </div>
</template>
