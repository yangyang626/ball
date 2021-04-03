import { ref, onMounted } from 'vue';

export default function setup() {
    const componentName = '组合式API';
    function getTitle(name: string) {
        return `这是${name}的测试页面`;
    }
    let title = ref('')
    const setH1 = () => {
        title.value = getTitle(componentName);
    }
    const value1 = ref('');

    const resetH1 = () => {
        title.value = 'H1的初始值'
    }

    onMounted(setH1);

    return {
        value1,
        title,
        resetH1,
    }
}