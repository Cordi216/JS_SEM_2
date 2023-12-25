<template>
  <div class="body">
    <layoutHeader></layoutHeader>
    <div class="container">
      <div class="img-cont" >
        <img :src="image" />
      </div>
      <div class="info" >
        <h1>{{ title }}</h1>
        <p align="justify" > {{ text }} </p>
      </div>
    </div>
    <layoutFooter></layoutFooter>
  </div>

</template>

<script>
import layoutHeader from '@/layout/header/header.vue'
import layoutFooter from '@/layout/footer/footer.vue'
export default {
  name: 'DetailView',
  components: {
    layoutHeader,
    layoutFooter
  },
  props: {
    image: String,
    title: String,
    text: String
  }
}
</script>

<style lang="css" scoped src="C:\Users\nikol\OneDrive\Рабочий стол\JS_SEM_2\тест\test\src\views\DetailView\DetailView.css"/>
