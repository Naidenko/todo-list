<template>
    <div class="note__list">
        <note-list-item v-for="(note,key) in notes" :key="key" :note="note" :style="{'background-color': notesBackground[key%4]}">

        </note-list-item>
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
                    '#3f669f',
                    '#efebeb',
                ]
            }
        },
        computed: {
            notes() {
                return this.$store.state.notes;
            }
        }
    }
</script>
