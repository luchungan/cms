import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router ({
    routes:[
        {
            path:'/',
            redirect:'/dashboard'
        },
        {
            path:'/',
            component: ()=>import ('../components/Home.vue'),
            children:[
                {
                    path:'/dashboard',
                    component:()=>import ('../components/page/Dashboard.vue'),
                    meta:{title:"系统首页"}
                },
                {
                    path:'/table',
                    component:()=>import ('../components/page/BaseTable.vue'),
                    meta:{title:"基础表格"}
                },
                {
                    path:'/tabs',
                    component:()=>import ('../components/page/Tabs.vue'),
                    meta:{title:"tab选项卡"}
                },
                {
                    path:'/form',
                    component:()=>import ('../components/page/BaseForm.vue'),
                    meta:{title:"基本表单"}
                },
                {
                    path:'/editor',
                    component:()=>import ('../components/page/VueEditor.vue'),
                    meta:{title:"富文本编辑器"}
                },
                {
                    path:'/markdown',
                    component:()=>import ('../components/page/Markdown.vue'),
                    meta:{title:"markdown编辑器"}
                },
                {
                    path:'/upload',
                    component:()=>import ('../components/page/Upload.vue'),
                    meta:{title:'文件上传'}
                },
                {
                    path:'/icon',
                    component:()=>import ('../components/page/Icon.vue'),
                    meta:{title:"自定义图标"}
                },
                {
                    path:'/charts',
                    component:()=>import ('../components/page/BaseCharts.vue'),
                    meta:{title:"scarts表格"}

                },
                {
                    path:'/drag',
                    component:()=>import ('../components/page/DragList.vue'),
                    meta:{title:"拖拽表格"}
                },
                {
                    path:'/dialog',
                    component:()=>import ('../components/page/DragDialog.vue'),
                    meta:{title:"拖拽弹框"}
                },
                {
                    path:'/i18n',
                    component:()=>import ('../components/page/I18n.vue'),
                    meta:{title:"国际化"}
                },
                {
                    path:'/permission',
                    component:()=>import ('../components/page/Permission.vue'),
                    meta:{title:"权限测试",permission:true}
                },
                {
                    path:'/404',
                    component:()=>import ('../components/page/404.vue'),
                    meta:{title:404}
                }
            ]
        },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: { title: '登录' }
        },
        {
            path: '*',
            redirect: '/404'
        }

    ]
})