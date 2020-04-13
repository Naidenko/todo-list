import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes: [
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
    ],
  },
  getters: {
    getNote: state => id => {
      return state.notes.find(note => note.id === id);
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
