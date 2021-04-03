import router from "@/router";
import { reactive, toRefs } from "@vue/reactivity"

export function setup() {
    const methods = reactive({
        meunSelect(index: string) {
            console.log(index);
            router.push({name: index})
          }
    })
    const RefMethods = toRefs(methods);
    return {
        ...RefMethods
    }
}