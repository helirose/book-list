<script setup>
import { RouterLink, RouterView } from 'vue-router'
import DragBox from '@/components/DragBox.vue'
</script>

<template>
  <header>
    <!--<img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />-->

    <div id="nav-wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/account">Account</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
@import '@/assets/base.css';
@import '@/assets/app.css';

nav a {
  margin-right: 1em;
}
</style>
