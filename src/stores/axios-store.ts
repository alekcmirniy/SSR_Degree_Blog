import axios from 'axios';
import { defineStore, acceptHMRUpdate } from 'pinia';

export const useAxiosStore = defineStore('axios', {
  state: () => ({
    data: {}
  }),

  getters: {
    dataStringed: (state) => state.data.toString()
  },

  actions: {
    async testRequest() {
      return await axios.get('https://api.example.com/posts')
    },
    setData(newData: {}) {
        this.data = newData;
    }
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAxiosStore, import.meta.hot));
}
