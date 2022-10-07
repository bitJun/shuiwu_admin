const Layout = () => import('@/layout/index.vue')
const Task = () => import('@/views/task/index.vue');
const TaskDetail = () => import('@/views/task/detail.vue');
const TaskAdd = () => import('@/views/task/add.vue');

export default [
  {
    path: '/task',
    component: Layout,
    name: 'Task',
    meta: {
      title: '任务管理',
    },
    icon: 'el-icon-location',
    children: [
      {
        path: 'list',
        name: 'Task',
        component: Task,
        meta: {
          title: '任务管理',
        },
      },
      {
        path: 'list/:id',
        name: 'TaskDetail',
        component: TaskDetail,
        hidden: true,
        meta: {
          title: '任务详情',
        },
      },
      {
        path: 'list/add',
        name: 'TaskAdd',
        component: TaskAdd,
        hidden: true,
        meta: {
          title: '新增任务',
        },
      },
      {
        path: 'list/edit/:id',
        name: 'TaskAdd',
        component: TaskAdd,
        hidden: true,
        meta: {
          title: '编辑任务',
        },
      },
    ],
  },
]
