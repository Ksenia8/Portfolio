<template lang="pug">
    label.login__field
        .login-container
            h4.field__title {{formData.fields[0]}}
            .field__content
                .field__img
                    img.avatar-icon(src='../images/avatar.jpg')
                field(
                    placeholder="Логин"
                    type="text"
                )
            h4.field__title {{formData.fields[1]}}
            .field__content
                .field__img
                    img.avatar-icon(src='../images/Key.jpg')
                field(
                    placeholder="Пароль"
                    type="password"
                )
</template>

<script>
import field from "../components/field"

export default {
    components: {
        field
    },
    data () {
        return {
            title: "Авторизация",
            formData: {
                fields: ["Логин", "Пароль"]
            }
        }
    }
}
</script>

<style lang="postcss" src="../styles/module.pcss"></style>
