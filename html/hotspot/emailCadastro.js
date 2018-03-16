module.exports = function (nome, user, password) {
	var firebase = require('firebase');

	return new Promise(function (resolve, reject) {
		var db = firebase.database();
		firebase.auth().createUserWithEmailAndPassword(user, password).then(function(){
			firebase.auth().signInWithEmailAndPassword(user, password).then(function(auth){
				db.ref('uidMappings').child(auth.uid).set(user.replace(/\./g, ',')).then(function(){
					objtoSave = {
						email: user,
						hasLoggedInWithPassword: false,
						nome: nome,
						passwdReset: false,
						status: 0,
						timestampJoined: {
							timestamp: firebase.database.ServerValue.TIMESTAMP
						}
					}
					db.ref('Users').child(user.replace(/\./g, ',')).set(objtoSave).then(function(){
						resolve({
							type: 0,
							username: nome,
							email:user
						});
					}).catch(function(error){
						reject(error);
					});
				}).catch(function(error){
					reject(error)
				});
			}).catch(function(error){
				reject(error)
			});
		}).catch(function(error){
			reject(error)
		});
	});
}