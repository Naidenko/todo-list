<template>
    <section v-if="isShown" class="confirm-delete">
        <p class="delete__text">Вы действительно хотите удалить данную заметку?</p>
        <button type="button" class="delete__button" @click="confirm">Удалить</button>
        <button type="button" class="cancel__button" @click="cancel">Отменить</button>
    </section>
</template>

<script>
    export default {
        name: "deleteModal",
        data() {
            return {
                isShown: false,
            }
        },
        methods: {
            show(){
                this.isShown = true
            },
            confirm() {
                this.isShown = false
                this.$emit('confirm')
            },
            cancel() {
                this.isShown = false
                this.$emit('cancel')
            }
        }
    }
</script>

<style scoped>

</style>
