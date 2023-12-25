<template>
  <header>
    <div v-for="img in images" :key="img.id" class="cont-img">
      <router-link :to="{ name: 'element', params: { element: img.alt } }">
        <button class="glow-on-hover-img">
          <img :src="img.src" :alt="img.alt" />
        </button>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'layoutHeader',
  data () {
    return {
      images: [
        {
          id: 1,
          src: require('../../../public/img/head_img/air.png'),
          alt: 'air'
        },
        {
          id: 2,
          src: require('../../../public/img/head_img/fire.png'),
          alt: 'fire'
        },
        {
          id: 3,
          src: require('../../../public/img/head_img/earth.png'),
          alt: 'earth'
        },
        {
          id: 4,
          src: require('../../../public/img/head_img/water.png'),
          alt: 'water'
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped src="C:\Users\nikol\OneDrive\Рабочий стол\JS_SEM_2\тест\test\src\layout\header\header.css"/>
