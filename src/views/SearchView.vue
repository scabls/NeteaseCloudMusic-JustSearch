<template>
  <main class="result-main padding-1">
    <el-table v-if="songs.length" :data="songs" stripe>
      <el-table-column prop="name" label="歌曲名称"></el-table-column>
      <el-table-column prop="artist" label="歌手"></el-table-column>
      <el-table-column prop="album" label="专辑"></el-table-column>
      <el-table-column prop="duration" label="歌曲时长"></el-table-column>
    </el-table>
    <h1 v-else>没有结果, 换个关键词再试一次吧</h1>
  </main>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getMusicApi } from '@/api/music'
const route = useRoute()
const keyword = computed(() => route.query.keywords)
const songs = ref([])
const getData = async () => {
  const data = await getMusicApi(keyword.value)
  songs.value = data.result.songs.map(song => ({
    name: song.name,
    artist: song.artists[0].name,
    album: song.album.name,
    duration: formatTime(song.duration),
  }))
}
const formatTime = time => {
  let second = Math.floor(time / 1000) % 60
  second = second > 9 ? second : '0' + second
  let minute = Math.floor(time / (1000 * 60))
  minute = minute > 9 ? minute : '0' + minute
  return `${minute}:${second}`
}
getData()
watch(keyword, () => getData())
</script>

<style lang="scss" scoped>
.result-main {
  background-color: #eee;
  .el-table {
    :deep(.el-table__cell .cell) {
      white-space: nowrap;
      text-align: center;
    }
  }
  h1 {
    padding: 1rem;
    color: #333;
    text-align: center;
  }
}
</style>
