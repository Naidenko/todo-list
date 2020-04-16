<template>
    <section class="note-create">
        <note-editor :note="newItem"
                     @delete-note="deleteNote"
                     @save-note="saveNote">
        </note-editor>
    </section>
</template>

<script>
    import NoteEditor from "../components/NoteEditor";
    export default {
        name: "Create",
        components: {NoteEditor},
        data() {
            return {
                newItem: {
                    id: null,
                    title: 'Новая заметка',
                    items: [
                        {
                            title: '',
                            isDone: false
                        }
                    ]
                }
            }
        },
        methods: {
            deleteNote() {
                this.$router.push('/');
            },
            saveNote(newData){
                this.$store.dispatch('saveNote', newData);
                this.$router.push('/');
            }
        }
    }
</script>
