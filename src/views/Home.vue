<template>
  <div class="home">
    <header class="page-header">
      <h1 class="page-header__title">Заметки</h1>

      <router-link to="/create" class="page-header__new-note">
        <span class="new-note__desktop">Новая заметка</span>
      </router-link>
    </header>
    <main class="page-main">
      <note-list></note-list>
    </main>
    <section class="confirm-delete">
      <p class="delete__text">Вы действительно хотите удалить данную заметку?</p>
      <button type="button" class="delete__button">Удалить</button>
      <button type="button" class="cancel__button">Отменить</button>
    </section>

  </div>
</template>

<script>
// @ is an alias to /src
import NoteList from "../components/NoteList";

export default {
  name: 'Home',
  components: {
    NoteList
  }
}
</script>
