<template>
    <div class="notes__list">
        <note-list-item v-for="(note,key) in notes" :key="key"
                        @delete-note="deleteNote"
                        :note="note"
                        :style="{'background-color': notesBackground[key%4]}">

        </note-list-item>
        <section class="confirm-delete">
            <p class="delete__text">Вы действительно хотите удалить данную заметку?</p>
            <button type="button" class="delete__button">Удалить</button>
            <button type="button" class="cancel__button">Отменить</button>
        </section>
    </div>

</template>

<script>
    import NoteListItem from "./NoteListItem";
    export default {
        name: "NoteList",
        components: {NoteListItem},
        data() {
            return {
                notesBackground: [
                    '#fffec9',
                    '#96b2db',
                    '#f3d69b',
                    '#efebeb',
                ]
            }
        },
        methods: {
            deleteNote(id) {
                //todo confirm popup
                this.$store.dispatch('deleteById', {id: id});
            }
        },
        computed: {
            notes() {
                return this.$store.state.notes;
            }
        }
    }
</script>
