import { reactive, toRefs } from "@vue/reactivity"

export function setup() {
    const methods = reactive({
        
    })
    const RefMethods = toRefs(methods);
    return {
        ...RefMethods
    }
}