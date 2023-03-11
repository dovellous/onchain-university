import axios from 'axios'
import StorageHelper from "./StorageHelper";

const apiBaseURL: any = process.env.REACT_APP_API_BASE_URL;

const getAccessToken: Function = () : string => {

	return StorageHelper.cookies.getItem(process.env.REACT_APP_ACCESS_TOKEN_STORAGE_KEY)

}

const ApiHelper:any = {

	get: {

		getData: (endpoint: any) : any => {

			const config = {
				method: 'get',
				url: apiBaseURL + '/' + endpoint,
				headers: {
					'Authorization': 'Bearer ' + getAccessToken(),
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				}
			};

			return axios(config);

		}

	},
	post: {

		setData: (endpoint: any, payload: any) : any => {

			const config = {
				method: 'post',
				url: apiBaseURL + '/' + endpoint,
				headers: {
					'Authorization': 'Bearer ' + getAccessToken(),
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				data: payload
			};

			return axios(config);

		}
	
	},
	put: {

		setData: (endpoint: any, payload: any) : any => {

			const config = {
				method: 'put',
				url: apiBaseURL + '/' + endpoint,
				headers: {
					'Authorization': 'Bearer ' + getAccessToken(),
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				data: payload
			};

			return axios(config);

		}

	},
	delete: {
	
	}
}

export default ApiHelper;