Router.configure layoutTemplate: 'layout'
Router.plugin 'dataNotFound', notFoundTemplate: 'notFound'
Router.plugin 'loading',  loadingTemplate: 'loading'

# Route declaration
Router.route '/', name: 'index'
Router.route '/mainPosts'

# End of route declaration, ensure that not found pages are displayed
Router.route '/:others', name: 'notFound'
