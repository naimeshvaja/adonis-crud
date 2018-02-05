'use strict'

const Hash = use('Hash')
const { validate } = use('Validator')
const auth
const Admin = use('App/Models/Admin')

class AdminController {
	async getSignIn({ view }) {
		return view.render('signin', {
			title: 'Signin Page'
		})
	}

	async postSignIn({ request, response, session }) {
		const validation = await validate(request.all(), {
			email: 'required|email|min:3|max:255',
			password: 'required'
		})

		if(validation.fails()){
			session.withErrors(validation.messages()).flashAll()
			return response.redirect('back')
		}

		const { email, password } = request.all()
		await auth.attempt(email, password)

		return 'Logged in successfully'
		return response.redirect('/welcome')
	}	

	async getSignUp({ view }) {
		return view.render('signup', {
			title: 'Signup Page'
		})
	}

	async postSignUp({ request, response, session }) {
		const validation = await validate(request.all(), {
			name: 'required',
			email: 'required|email|min:3|max:255',
			password: 'required'
		})

		if(validation.fails()){
			session.withErrors(validation.messages()).flashAll()
			return response.redirect('back')
		}

		const admin = new Admin()
		admin.name = request.input('name')
		admin.email = request.input('email')
		admin.password = await Hash.make(request.input('password'))
		await admin.save()

		session.flash({ notification: 'Admin added!' })
		return response.redirect('/signup')
	}
}

module.exports = AdminController
