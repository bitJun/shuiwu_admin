const Layout = () => import('@/layout/index.vue')
const StudyIndex = () => import('@/views/study/index.vue');
const Article = () => import('@/views/study/article/index/index.vue');
const ArticleDetail = () => import('@/views/study/article/detail/index.vue');
const ArticleAdd = () => import('@/views/study/article/add/index.vue');
const Vedio = () => import('@/views/study/vedio/index/index.vue');
const VedioDetail = () => import('@/views/study/vedio/detail/index.vue');
const VedioAdd = () => import('@/views/study/vedio/add/index.vue');
const Book = () => import('@/views/study/book/index/index.vue');
const BookDetail = () => import('@/views/study/book/detail/index.vue');
const BookAdd = () => import('@/views/study/book/add/index.vue');

export default [
  {
    path: '/study',
    component: Layout,
    name: 'study',
    meta: {
      title: '学习管理',
    },
    icon: 'el-icon-location',
    children: [
      {
        path: '',
        name: 'StudyIndex',
        component: StudyIndex,
        meta: {
          title: '学习管理',
        },
      },
      {
        path: 'article',
        name: 'StudyArticle',
        component: Article,
        meta: {
          title: '文章管理',
        },
      },
      {
        path: 'article/:id',
        name: 'StudyArticleDetail',
        component: ArticleDetail,
        hidden: true,
        meta: {
          title: '文章详情',
        },
      },
      {
        path: 'article/add',
        name: 'ArticleAdd',
        component: ArticleAdd,
        hidden: true,
        meta: {
          title: '新增文章',
        },
      },
      {
        path: 'article/edit/:id',
        name: 'ArticleEdit',
        component: ArticleAdd,
        hidden: true,
        meta: {
          title: '编辑文章',
        },
      },
      {
        path: 'vedio',
        name: 'StudyVedio',
        component: Vedio,
        meta: {
          title: '视频管理',
        },
      },
      {
        path: 'vedio/:id',
        name: 'StudyArticleDetail',
        component: VedioDetail,
        hidden: true,
        meta: {
          title: '视频详情',
        },
      },
      {
        path: 'vedio/add',
        name: 'StudyVedioAdd',
        component: VedioAdd,
        hidden: true,
        meta: {
          title: '新增视频',
        },
      },
      {
        path: 'vedio/edit/:id',
        name: 'StudyVedioEdit',
        component: VedioAdd,
        hidden: true,
        meta: {
          title: '编辑视频',
        },
      },
      {
        path: 'book',
        name: 'Book',
        component: Book,
        meta: {
          title: '书籍管理',
        },
      },
      {
        path: 'book/:id',
        name: 'BookDetail',
        component: BookDetail,
        hidden: true,
        meta: {
          title: '书籍详情',
        },
      },
      {
        path: 'book/add',
        name: 'BookAdd',
        component: BookAdd,
        hidden: true,
        meta: {
          title: '新增书籍',
        },
      },
      {
        path: 'book/:id',
        name: 'BookEdit',
        component: BookAdd,
        hidden: true,
        meta: {
          title: '编辑书籍',
        },
      }
    ],
  },
]
