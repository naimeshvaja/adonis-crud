'use strict'

const Model = use('Model')

class Admin extends Model {
	tokens () {
		return this.hasMany('App/Models/Token')
	}
}

module.exports = Admin
