<template>
  <transition name="slide-fade">
    <div class="base-modal" v-if="isShow">
      <div class="base-modal__wrapper">
        <div class="base-modal__container">
          <slot name="header">
            <div class="base-modal__header">header</div>
          </slot>
          <div class="base-modal__body"><slot></slot></div>
          <div class="base-modal__footer"><slot name="footer"></slot></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  props: {
    isShow: {
      type: Boolean,
      defualt: false,
    },
  },
  //   setup(props, { slot }) {
  //       onMounted(() => {
  //           console.log(slot[footer]);

  //       })
  //   },
});
</script>

<style lang="scss" scoped>
.base-modal {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
  backdrop-filter: blur(5px);
  &__wrapper {
    display: table-cell;
    vertical-align: middle;
  }
  &__container {
    width: 40%;
    min-width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
  }
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}
</style>
