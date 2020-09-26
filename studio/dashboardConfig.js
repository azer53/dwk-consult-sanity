export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5f6f5619879ac79e58d43333',
                  title: 'Sanity Studio',
                  name: 'dwk-consult-sanity-studio',
                  apiId: 'b8bd8384-5bc1-4b04-aef6-e7d1539f9a97'
                },
                {
                  buildHookId: '5f6f5619a28201c8dbb1e85a',
                  title: 'Portfolio Website',
                  name: 'dwk-consult-sanity',
                  apiId: 'd831ae63-7496-4196-8e71-9ef38871d838'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/azer53/dwk-consult-sanity',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://dwk-consult-sanity.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
