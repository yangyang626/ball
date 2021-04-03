import { reactive, toRefs } from "@vue/reactivity"

export function setup() {
    const methods = reactive({
        setStyle(item: any) {
            return {width: item.width ? `${item.width}px` : undefined, minWidth: item.minWidth ? `${item.minWidth}px` : undefined}
        }
    })
    const RefMethods = toRefs(methods);
    return {
        ...RefMethods
    }
}