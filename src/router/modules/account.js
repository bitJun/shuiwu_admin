const Layout = () => import('@/layout/index.vue')
const Account = () => import('@/views/account/index.vue');

export default [
  {
    path: '/account',
    component: Layout,
    name: 'account',
    meta: {
      title: '账户管理',
    },
    icon: 'el-icon-location',
    children: [
      {
        path: '',
        name: 'Account',
        component: Account,
        meta: {
          title: '账户管理',
        },
      },
    ],
  },
]
