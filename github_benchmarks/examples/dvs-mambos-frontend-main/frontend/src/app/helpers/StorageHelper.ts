import Cookies from 'universal-cookie';

const cookies = new Cookies();

const StorageHelper:any = {

	cookies: {

		getItem: (key: string): any => {

			let res = cookies.get(key);

			if (typeof res === "undefined" || res === null) {

				return localStorage.getItem(key);

			} else {

				return res;

			}

		},

		setItem: (key: string, value: any): void => {

			localStorage.setItem(key, value);

			cookies.set(key, value, {
				maxAge: 30 * 24 * 60 * 60,
				path: '/',
				domain: process.env.REACT_APP_COOKIE_DOMAIN
			});

		}

	}

}


export default StorageHelper;