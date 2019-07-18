<template lang="pug">
  .section-login
    form.login-form
      h1.title__login {{title}}
      module 
      btn
      a.login__close(href='')
        img.close-icon(src='./images/cancel.jpg')
</template>

<script>
  import btn from "./components/btn"
  import field from "./components/field"
  import module from "./components/module"

  export default {
    name: "app",
    components: {
      btn,
      module,
      field
    },
    data () {
      return {
        title: "Авторизация",
      }
    }
  }
</script>

<style src="./app-main.pcss"></style>
<style lang="postcss" src="./app.pcss"></style>