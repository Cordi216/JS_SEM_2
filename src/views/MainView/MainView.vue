<template>
    <div class="body">
      <layoutHeader></layoutHeader>
      <div class="container">
        <div class="info">
          <h2>
            Наш сайт вдохновлен желанием раскрыть перед вами красоту нашей планеты
            и погрузить вас в уникальные моменты, когда природа раскрывает свою
            магию. Мы приглашаем вас на путешествие в мир природных чудес и
            великолепия, где каждое явление является доказательством того, что наша
            планета скрыта грандиозной красотой, ожидающей, чтобы ее открыли и
            полюбили.
          </h2>
        </div>
      </div>
      <layoutFooter></layoutFooter>
    </div>
  </template>

<script>
import layoutHeader from '@/layout/header/header.vue'
import layoutFooter from '@/layout/footer/footer.vue'
export default {
  name: 'MainView',
  components: {
    layoutHeader,
    layoutFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<style lang="css" scoped src="C:\Users\nikol\OneDrive\Рабочий стол\JS_SEM_2\тест\test\src\views\MainView\MainView.css"/>
