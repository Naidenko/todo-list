import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes: [
      {
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
        ]
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
