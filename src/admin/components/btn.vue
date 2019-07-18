<template lang="pug">
  .wrap-btn
    button.btn-login(type="submit") {{ title }}
</template>

<script>
export default {
    data () {
      return {
        title: "Отправить"
      }
    }
    
  }
</script>

<style lang="postcss" src="../styles/btn.pcss"></style>