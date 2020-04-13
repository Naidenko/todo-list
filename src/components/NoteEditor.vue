<template>
    <section class="note-edit">
        <div class="note-edit__header">
            <router-link to="/" class="edit__back">
                <span class="visually-hidden">Назад</span>
                <svg class="back">
                    <use xlink:href="#back"></use>
                </svg>
            </router-link>
            <h3 class="note-edit__title">{{note.title}}</h3>
        </div>
        <form class="note-edit__list">
            <div class="note__item note-edit__item" v-for="(item, key) in items" :key="key">
                <div class="note__item-wrap">
                    <input :id="'note__item_' + key" v-model="item.isDone" class="note-item__checkbox" type="checkbox" name="note-item">
                    <label :for="'note__item_' + key" class="note-item__label note-edit__label">{{item.title}}</label>
                </div>
                <button class="note-item__delete">
                    <span class="visually-hidden">Удалить</span>
                    <svg class="cross">
                        <use xlink:href="#cross"></use>
                    </svg>
                </button>
            </div>
        </form>
        <div class="control-panel">
            <button class="edit__undo edit__button">
                <span class="visually-hidden">Отменить</span>
                <svg class="undo">
                    <use xlink:href="#undo"></use>
                </svg>
            </button>
            <button class="edit__redo edit__button">
                <span class="visually-hidden">Повторить</span>
                <svg class="redo">
                    <use xlink:href="#undo"></use>
                </svg>
            </button>

            <button class="edit__save edit__button">
                <span class="visually-hidden">Сохранить изменения</span>
                <svg class="save">
                    <use xlink:href="#save"></use>
                </svg>
            </button>
            <button class="edit__delete edit__button">
                <span class="visually-hidden">Удалить заметку</span>
                <svg class="delete">
                    <use xlink:href="#delete"></use>
                </svg>
            </button>
        </div>
    </section>
</template>

<script>
    export default {
        name: "NoteEditor",
        props: {
            note: {
                type: Object,
                required: true
            }
        },
        data(){
            let newItems = [];
            this.note.items.forEach(function(item) {
                newItems.push({
                    title: item.title,
                    isDone: item.isDone
                });
            });
            return {
                title: this.note.title,
                items: newItems
            }
        },
    }
</script>
