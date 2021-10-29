<template>
  <div>
    <button v-if="loggedIn" @click="onShow">Logout</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: 'HelloWorld',
  setup(){
    const loggedIn = ref<boolean>(false);

    const onShow = () => {
      console.log('on click');
      
    }

    return{ loggedIn, onShow }
  }
})
</script>

<style scopeds>

</style>
