export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '63068d55106f1f0df7be9341',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-qmjeph43',
                  apiId: '6c6d8307-358f-4f28-b57b-acbd9b329beb'
                },
                {
                  buildHookId: '63068d553b9b810d4d605e01',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-2wuem4a1',
                  apiId: 'a342532d-e676-4d49-8e79-6d8c479a11f7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jamgit/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-2wuem4a1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
