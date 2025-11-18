import { defineStore, acceptHMRUpdate } from 'pinia';
import { computed, ref } from 'vue';

const dataMap = ref<Map<string, {}>>(new Map());
const isLoading = ref<boolean>(false);
const error = ref<null | string>(null);

export const useAxiosStore = defineStore('axios', () => {
    const fetchData = async (newVal: string, cb: () => Promise<any>) => {
        try {
            // if (dataMap.value.has(newVal) && Object.keys(dataMap.value.get(newVal)!).length)
            //     return dataMap.value.get(newVal) || {};

            isLoading.value = true;
            error.value = null;
            const res = await cb();
            if (!res.data) throw new Error('Response data is empty');

            return res.data;
        } catch (e: any) {
            console.error('Ошибка: ', e.message);
            return {};
        } finally {
            isLoading.value = false;
        }
    };
    const setData = (newVal: string, newData: {}) => dataMap.value.set(newVal, newData);

    const posts = computed(() => dataMap.value.get('posts'));
    return { fetchData, setData, dataMap, isLoading, error, posts };
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAxiosStore, import.meta.hot));
}
