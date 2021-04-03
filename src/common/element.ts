import ElementPlus from 'element-plus'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'
import 'element-plus/lib/theme-chalk/index.css';

export default function initElement(App: any) {
    App.use(ElementPlus, { locale })
}
