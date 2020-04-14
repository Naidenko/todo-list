<template>
    <note-editor :note="note"
                 @delete-note="deleteNote"
                @save-note="saveNote"></note-editor>
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
        methods: {
            deleteNote(id) {
                this.$store.dispatch('deleteById', {id: id});
                this.$router.push('/');
            },
            saveNote(newData){
                this.$store.dispatch('saveNote', newData);
                this.$router.push('/');
            }
        }

    }
</script>
