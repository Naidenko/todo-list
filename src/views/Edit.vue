<template>
    <note-editor :note="note"></note-editor>
</template>

<script>
    import NoteEditor from "../components/NoteEditor";
    export default {
        name: "Edit",
        components: {NoteEditor},
        data() {
            return {
                note: this.$store.getters.getNote(1 * this.$route.params.id)
            }
        },

    }
</script>
