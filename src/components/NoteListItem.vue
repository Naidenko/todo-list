<template>
    <section class="note">
        <h3 class="note__title">{{note.title}}</h3>
        <router-link :to="'/edit/' + note.id" type="button" class="note__edit">
            <span class="visually-hidden">Изменить заметку</span>
            <svg class="edit">
                <use xlink:href="#edit"></use>
            </svg>
        </router-link>
        <button @click="$emit('delete-note', note.id)" type="button" class="note__delete">
            <span class="visually-hidden">Удалить</span>
            <svg class="delete">
                <use xlink:href="#delete"></use>
            </svg>
        </button>
        <form class="note__list">
            <div class="note__item" v-for="(item, key) in itemsPreview" :key="key">
                <input v-model="item.isDone" class="note-item__checkbox" type="checkbox" name="note-item"
                       disabled="disabled">
                <label class="note-item__label disabled">{{item.title}}</label>
            </div>
            <div class="note__item" v-if="note.items.length > 3">
                <span class="note-item__more">...</span>
            </div>
        </form>
    </section>
</template>

<script>
    export default {
        name: "NoteListItem",
        props: {
            note: {
                type: Object,
                required: true
            }
        },
        computed: {
            itemsPreview() {
                if(Object.prototype.hasOwnProperty.call(this.note, 'items') && Array.isArray(this.note.items)) {
                    return this.note.items.slice(0,3);
                }
                return [];
            }
        }
    }
</script>
