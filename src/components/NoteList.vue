<template>
    <div class="note__list">
        <note-list-item v-for="(note,key) in notes" :key="key" :note="note">

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

            }
        },
        computed: {
            notes() {
                return this.$store.state.notes;
            }
        }
    }
</script>
