const navigation = () => {
  return [
    {
      title: 'Dashboards',
      icon: 'mdi:home-outline'
    },
    {
      sectionTitle: 'Apps & Pages'
    },
    {
      title: 'Smart Cashier',
      icon: 'mdi:add-bold',
      path: '/apps/smartCashier'
    },
    {
      title: 'Add Lesson',
      icon: 'mdi:pen',
      path: '/apps/lesson'
    },
    {
      title: 'Lesson List',
      icon: 'mdi:file-document-outline',
      path: '/apps/lesson/list'
    },
    {
      title: 'Add Student',
      icon: 'mdi:person-add-outline',
      path: '/apps/student'
    },
    {
      title: 'Student List',
      icon: 'mdi:file-document-outline',
      path: '/apps/student/list'
    },
    {
      title: 'Add Class',
      icon: 'ic:outline-add-to-queue',
      path: '/apps/class'
    },
    {
      title: 'Class List',
      icon: 'mdi:file-document-outline',
      path: '/apps/class/list'
    },
    {
      title: 'Add Teacher',
      icon: 'ic:outline-add-to-queue',
      path: '/apps/teacher'
    },
    {
      title: 'Add Subject',
      icon: 'zondicons:add-outline',
      path: '/apps/subject'
    },
    {
      title: 'Add Grade',
      icon: 'zondicons:add-outline',
      path: '/apps/grade'
    },
    {
      title: 'Add MCQ',
      icon: 'mdi:message-group',
      path: '/apps/mcq'
    },
    {
      title: 'MCQ Manager',
      icon: 'fluent-mdl2:page-list',
      path: '/apps/mcq/manager'
    },
    {
      title: 'Branding',
      icon: 'material-symbols:menu-book-outline',
      path: '/apps/branding'
    }
  ]
}

export default navigation
