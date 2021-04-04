import { reactive, toRefs } from "@vue/reactivity";

export function setup() {
  const methods = reactive({
    setStyle(item: any) {
      return {
        width: item.width ? `${item.width}px` : undefined,
        minWidth: item.minWidth ? `${item.minWidth}px` : undefined,
        flex: item.minWidth ? 1 : undefined,
      };
    },
    /**
     * 设置每行每列的高度
     * @param item 每一行的值
     * @param value 当前行某一列的值
     */
    setHeight(item: any, value: any) {
      let length = 1;
      Object.keys(item).forEach((key) => {
        if (item[key] instanceof Array && item[key].length > length) {
          length = item[key].length;
        }
      });
      if (value instanceof Array) {
        return {
          height: "28px",
          lineHeight: "28px",
          color: 'red',
        };
      } else {
        return {
          height: `${28 * length}px`,
          lineHeight: `${28 * length}px`,
          color: 'green',
        };
      }
    },
    checkRow(item: any) {
      return item instanceof Array;
    },
  });
  const RefMethods = toRefs(methods);
  return {
    ...RefMethods,
  };
}
