export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e9e1e7969434801a5ef9150',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-e3w6uwtj',
                  apiId: '29a9088f-f1a8-4837-aceb-01d42699dedb'
                },
                {
                  buildHookId: '5e9e1e79cf7c5302720340c3',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-vsfxrfzs',
                  apiId: '58d3fe01-abc6-49e4-95f4-696fc064b1ab'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vanessabloes/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-vsfxrfzs.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
