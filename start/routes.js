'use strict'

const Route = use('Route')

Route.on('/').render('home')

Route.get('/posts', 'PostController.index')

Route.get('/posts/add', 'PostController.create')

Route.get('/posts/edit/:id', 'PostController.edit')

Route.get('/posts/:id', 'PostController.show')

Route.post('/posts', 'PostController.store')

Route.put('/posts/:id', 'PostController.update')

Route.delete('/posts/:id', 'PostController.destroy')

Route
	.get('/signin', 'UserController.getSignIn')
	// .middleware(['auth'])
Route.post('/signin', 'UserController.postSignIn')

Route.get('/signup', 'AdminController.getSignUp')
Route.post('/signup', 'AdminController.postSignUp')
// Route.get('/test', () => 'Hello World')

// Route.get('/test2', function(){
//   return 'Hello There';
// })

// Route.get('/test/:id', function({ params }){
//   return `This is the id ${params.id}`;
// })
