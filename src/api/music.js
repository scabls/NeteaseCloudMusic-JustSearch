import request from '@/api/request'

// 根据query获取数据 GET /search?keywords=word
const getMusicApi = word => request.get(`/search?keywords=${word}`)

// 统一导出
export { getMusicApi }
