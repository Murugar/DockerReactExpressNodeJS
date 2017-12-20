import request from 'superagent';

function login({ username }) {
	return new Promise((resolve, reject) => {
		resolve({
			username
			
		});
	});
}

function logout() {
	return new Promise((resolve, reject) => {
		resolve();
	});
}

export default function (name, values) {
	switch (name) {
		case 'login':
			return login(values);
		case 'logout':
			return logout(values);
	}
}
