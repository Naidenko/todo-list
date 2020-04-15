<template>
    <div class="notes__list">
        <note-list-item v-for="(note,key) in notes" :key="key"
                        @delete-note="deleteNoteModal"
                        :note="note"
                        :style="{'background-color': notesBackground[key%4]}">

        </note-list-item>
        <delete-modal ref="deleteModal" @confirm="deleteNote">
        </delete-modal>
    </div>

</template>

<script>
    import DeleteModal from "./deleteModal";
    import NoteListItem from "./NoteListItem";
    export default {
        name: "NoteList",
        components: {NoteListItem, DeleteModal},
        data() {
            return {
                deletingItemId: null,
                confirmDelete: false,
                notesBackground: [
                    '#fffec9',
                    '#96b2db',
                    '#f3d69b',
                    '#efebeb',
                ]
            }
        },
        methods: {
            deleteNoteModal(id) {
                this.deletingItemId= id;
                this.$refs.deleteModal.show();
            },
            deleteNote() {
                this.$store.dispatch('deleteById', {id: this.deletingItemId});
            }
        },
        computed: {
            notes() {
                return this.$store.state.notes;
            }
        }
    }
</script>
