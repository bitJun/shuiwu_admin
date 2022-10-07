const Layout = () => import('@/layout/index.vue')
const Dictionary = () => import('@/views/dictionary/index.vue');
const Department = () => import('@/views/dictionary/department/index/index.vue');
const DepartmentDetail = () => import('@/views/dictionary/department/detail/index.vue');
const Category = () => import('@/views/dictionary/category/index/index.vue');
const CategoryDetail = () => import('@/views/dictionary/category/detail/index.vue');
const Label = () => import('@/views/dictionary/label/index/index.vue');
const LabelDetail = () => import('@/views/dictionary/label/detail/index.vue');

export default [
  {
    path: '/dictionary',
    component: Layout,
    name: 'Dictionary',
    meta: {
      title: '数据字典',
    },
    icon: 'el-icon-location',
    children: [
      {
        path: '',
        name: 'Dictionary',
        component: Dictionary,
        meta: {
          title: '数据管理',
        },
      },
      {
        path: 'department',
        name: 'DepartmentIndex',
        component: Department,
        meta: {
          title: '部门管理',
        },
      },
      {
        path: 'department/:id',
        name: 'DepartmentDetail',
        component: DepartmentDetail,
        hidden: true,
        meta: {
          title: '部门管理',
        },
      },
      {
        path: 'category',
        name: 'Category',
        component: Category,
        meta: {
          title: '类目管理',
        },
      },
      {
        path: 'category/:id',
        name: 'CategoryDetail',
        component: CategoryDetail,
        hidden: true,
        meta: {
          title: '类目管理',
        },
      },
      {
        path: 'label',
        name: 'Label',
        component: Label,
        meta: {
          title: '标签管理',
        },
      },
      {
        path: 'label/:id',
        name: 'LabelDetail',
        component: LabelDetail,
        hidden: true,
        meta: {
          title: '标签管理',
        },
      },
    ],
  },
]
