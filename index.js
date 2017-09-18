'use strict';

require('babel-core/register')({
	ignore: false
});
require('./core')({
	callback : (app)=>{
		require('./app/index')(app);
	}
});
