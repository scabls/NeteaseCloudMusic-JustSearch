<template>
  <header class="net-header padding-1">
    <aside class="logo">
      <router-link to="/"><div></div></router-link>
    </aside>
    <aside class="search">
      <form @submit.prevent="handleSubmit">
        <el-input v-model.trim="keyword" placeholder="音乐/视频/电台/用户" :prefix-icon="Search" />
      </form>
    </aside>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

const keyword = ref('')

const router = useRouter()

const handleSubmit = () => {
  if (!keyword.value) return
  router.push({ name: 'search', query: { keywords: keyword.value } })
  keyword.value = ''
}
</script>

<style lang="scss" scoped>
.net-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #242424;
  .logo {
    div {
      width: 176px;
      height: 69px;
      background-position: 0 0;
      background-image: url('https://s2.music.126.net/style/web2/img/frame/topbar.png?3a71b47af13f599a615e0c83079b6516');
    }
  }
  .search {
    height: 100%;
    form {
      .el-input {
        width: 15rem;
      }
    }
  }
}
</style>
