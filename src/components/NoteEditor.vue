<template>
    <section class="note-edit">
        <div class="note-edit__header">
            <button @click="isConfirmShown = true" type="button" class="edit__back">
                <span class="visually-hidden">Назад</span>
                <svg class="back">
                    <use xlink:href="#back"></use>
                </svg>
            </button>
            <input class="note-edit__title" v-model="title" type="text">
        </div>
        <form class="note-edit__list" onkeydown="return event.key !== 'Enter';">
            <div class="note__item note-edit__item" v-for="(item, key) in items" :key="key">
                <div class="note__item-wrap">
                    <input :id="'note__item_' + key" v-model="item.isDone" class="note-item__checkbox" type="checkbox" name="note-item">
                    <label v-if="editItem !== key" :for="'note__item_' + key" class="note-item__label note-edit__label">{{item.title}}</label>
                    <div v-if="editItem === key" class="note-item__input-wrap">
                        <input  v-model="item.title" class="note-item__input" type="text">
                    </div>
                </div>
                <div class="note-edit__change">
                    <button v-if="editItem !== key" type="button" class="note-item__edit" @click="toggleItemEditor(key)">
                        <span class="visually-hidden">Редактировать</span>
                        <svg class="edit">
                            <use xlink:href="#edit"></use>
                        </svg>
                    </button>
                    <button v-else type="button" class="note-item__save" @click="toggleItemEditor(null)">
                        <span class="visually-hidden">Сохранить редактирование</span>
                        <svg class="save">
                            <use xlink:href="#save"></use>
                        </svg>
                    </button>
                    <button type="button" class="note-item__delete" @click="deleteItem(key)">
                        <span class="visually-hidden">Удалить</span>
                        <svg class="cross">
                            <use xlink:href="#cross"></use>
                        </svg>
                    </button>
                </div>
            </div>
            <button type="button" class="note-edit__add" @click="addItem">Добавить пункт</button>
        </form>

        <div class="control-panel">
            <button @click="undoAction" class="edit__undo edit__button">
                <span class="visually-hidden">Отменить</span>
                <svg class="undo">
                    <use xlink:href="#undo"></use>
                </svg>
            </button>
            <button @click="redoAction" class="edit__redo edit__button">
                <span class="visually-hidden">Повторить</span>
                <svg class="redo">
                    <use xlink:href="#undo"></use>
                </svg>
            </button>

            <button @click="saveNote" class="edit__save edit__button">
                <span class="visually-hidden">Сохранить изменения</span>
                <svg class="save">
                    <use xlink:href="#save"></use>
                </svg>
            </button>
            <button @click="$refs.deleteModal.show()" class="edit__delete edit__button">
                <span class="visually-hidden">Удалить заметку</span>
                <svg class="delete">
                    <use xlink:href="#delete"></use>
                </svg>
            </button>
        </div>
        <delete-modal ref="deleteModal" @confirm="deleteNote">

        </delete-modal>
        <section v-if="isConfirmShown" class="confirm-exit">
            <p class="exit__text">Вы действительно хотите выйти? <span class="exit__text--save">(Все несохраненные изменения будут потеряны)</span></p>
            <router-link to="/" type="button" class="exit__button">Выйти</router-link>
            <button type="button" class="cancel__exit" @click="isConfirmShown = false">Отменить</button>
        </section>
    </section>
</template>

<script>
    import DeleteModal from "./deleteModal";
    export default {
        name: "NoteEditor",
        components: {DeleteModal},
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
                items: newItems,
                editItem: null,
                history: [],
                isConfirmShown: false,
                hasUnsavedChanges: false,
            }
        },
        mounted() {
            this.writeHistory();
        },
        methods: {
            toggleItemEditor(key){
                this.editItem = key;
                if(key === null) {
                    this.writeHistory();
                }
            },
            deleteItem(key) {
                this.items.splice(key, 1);
                this.writeHistory();
            },
            undoAction(){
                console.log('undo')
            },
            redoAction(){
                console.log('redo')
            },
            saveNote(){
                console.log('save')
                this.$emit('save-note', this.computeNote(true));
            },
            deleteNote(){
                console.log('delete')
                this.$emit('delete-note', this.note.id);
                this.confirmDelete = false;
            },
            addItem() {
                console.log('add items')
                this.items.push({
                    title: '',
                    isDone: false,
                });
                this.toggleItemEditor(this.items.length - 1);

            },
            writeHistory() {
                let toWrite = false;
                if(this.history.length === 0) {
                    toWrite = true;
                }

                if (!toWrite) {
                    const lastState = this.history[this.history.length - 1];//todo
                    if (this.title !== lastState.title) {
                        toWrite = true;
                    } else if (this.items.length !== lastState.items.length) {
                        toWrite = true;
                    } else {
                        if (JSON.stringify(lastState.items) !== JSON.stringify(this.items)) {
                            toWrite = true;
                        }
                    }
                }

                if(toWrite) {
                    this.history.push(this.computeNote());
                }
            },
            computeNote(addId = false) {
                let newItems = [];
                this.items.forEach(function(item) {
                    newItems.push({
                        title: item.title,
                        isDone: item.isDone
                    });
                });
                const note = {
                    title: this.title,
                    items: newItems
                };
                if(addId){
                    note.id = this.note.id;
                }
                return note;
            }
        }
    }
</script>
