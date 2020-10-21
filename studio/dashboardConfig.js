export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f906b5009843c0092d35025',
                  title: 'Sanity Studio',
                  name: 'lmc-3403-classwebsite-studio',
                  apiId: '4da4b2e8-e8e9-4dc4-8c6d-485bedd0e90e'
                },
                {
                  buildHookId: '5f906b50227ec6008663768d',
                  title: 'Landing pages Website',
                  name: 'lmc-3403-classwebsite',
                  apiId: 'def2c54b-4c78-4b7b-b34e-c32f0d8c9b8e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/emily-wilson/lmc3403-classwebsite',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://lmc-3403-classwebsite.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
