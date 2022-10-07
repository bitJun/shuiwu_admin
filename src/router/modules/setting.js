const Layout = () => import('@/layout/index.vue')
const Setting = () => import('@/views/setting/index.vue');
const Permission = () => import('@/views/setting/permission/index/index.vue');

export default [
  {
    path: '/setting',
    component: Layout,
    name: 'setting',
    meta: {
      title: '系统设置',
    },
    icon: 'el-icon-location',
    children: [
      {
        path: '',
        name: 'Setting',
        component: Setting,
        meta: {
          title: '系统管理',
        },
      },
      {
        path: 'permission',
        name: 'Permission',
        component: Permission,
        meta: {
          title: '权限管理',
        },
      },
    ],
  },
]
