const Layout = () => import('@/layout/index.vue')
const Integral = () => import('@/views/integral/index.vue');

export default [
  {
    path: '/integral',
    component: Layout,
    name: 'Integral',
    meta: {
      title: '积分管理',
    },
    icon: 'el-icon-location',
    children: [
      {
        path: '',
        name: 'Integral',
        component: Integral,
        meta: {
          title: '系统管理',
        },
      },
    ],
  },
]
