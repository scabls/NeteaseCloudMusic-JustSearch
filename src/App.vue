<template>
  <PageHeader />
  <Suspense>
    <router-view></router-view>
  </Suspense>
</template>

<script setup>
import PageHeader from './components/PageHeader.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.padding-1 {
  padding: 0 8rem;
}
</style>
