import { ref } from 'vue'
import { defineStore } from 'pinia'

const mockMenuData = {
  "content": [
    { "id": "kanban", "name": "看板" },
    { "id": "reading", "name": "阅读" },
    { "id": "listening", "name": "听力" },
    { "id": "speaking", "name": "口语" },
    { "id": "writing", "name": "写作" },
    { "id": "vocabulary", "name": "单词背诵" },
    { "id": "weekly_report", "name": "周报总结" },
    { "id": "goal_management", "name": "目标管理" },
    { "id": "setting", "name": "设置" }
  ]
};

export const useMenuStore = defineStore('menu', () => {
  const menuData = ref<{ id: string; name: string }[]>([]);
  
  function getValue() {
    menuData.value = mockMenuData.content;
    return menuData.value;
  }
  return { getValue, menuData } ;
})

