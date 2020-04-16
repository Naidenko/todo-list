import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let notes = localStorage.getItem('notes')
if(notes === null) {
  notes = [
    {
      id: 1,
      title: 'Список покупок',
      items: [
        {
          title: 'Хлеб',
          isDone: false
        },
        {
          title: 'Картошка',
          isDone: true
        },
        {
          title: 'Молоко',
          isDone: false
        }
      ]
    },
    {
      id: 2,
      title: 'Список дел',
      items: [
        {
          title: 'Позвонить Насте',
          isDone: false
        },
        {
          title: 'Полить цветы',
          isDone: false
        },
      ]
    },
    {
      id: 3,
      title: 'Список сериалов',
      items: [
        {
          title: 'Бумажный дом',
          isDone: false
        },
        {
          title: 'Почему женщины убивают',
          isDone: false
        },
      ]
    },
    {
      id: 4,
      title: 'Список книг',
      items: [
        {
          title: 'Унесенные ветром',
          isDone: false
        },
        {
          title: 'Долгая прогулка',
          isDone: false
        },
        {
          title: 'Мизери',
          isDone: false
        },
        {
          title: 'Локвуд',
          isDone: false
        },
      ]
    },
  ]
} else {
  notes = JSON.parse(notes);
}

export default new Vuex.Store({
  state: {
    notes: notes
  },
  getters: {
    getNote: state => id => {
      return state.notes.find(note => note.id === id);
    }
  },
  mutations: {
    deleteById: (state, payload) => {
      const index = state.notes.findIndex(note => note.id === payload.id);
      if(index > -1) {
        state.notes.splice(index, 1);
        localStorage.setItem('notes', JSON.stringify(state.notes));
      }
    },
    saveNote: (state, payload) => {
      if(payload.id === null) { //saving new
        payload.id = Date.now();
        state.notes.push(payload);
      } else { //update
        const index = state.notes.findIndex(note => note.id === payload.id);
        if(index > -1) {
          state.notes[index].title = payload.title;
          state.notes[index].items = payload.items;
        }
      }
      localStorage.setItem('notes', JSON.stringify(state.notes));

    }
  },
  actions: {
    deleteById: (context, payload) => {
      context.commit('deleteById', payload);
    },
    saveNote: (context, payload) => {
      context.commit('saveNote', payload);
    }
  },
  modules: {
  }
})
