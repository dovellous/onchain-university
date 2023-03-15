const Snippets:any = {

	strings: {

	},
	arrays: {
	
	},
	objects: {
		convertToArray: (obj:any) : any => {
			//console.warn(":: OBJ ::", obj);
			const arr: any = Object.keys(obj).map((key:string) => [key, obj[key]]);
			//console.warn(":: ARR ::", arr);
			return arr;
		}
	},
	numbers: {

		formatCurrency: new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: 'USD',

				// These options are needed to round to whole numbers if that's what you want.
				//minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
				//maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
			}),
	
	},
	utils: {
	
	},
	session: {
	
	},
	cookies: {
	
	},
	storage: {
	
	},
	elements: {
		scrollTo: (id:any)=>{

			const yOffset:any = -280;
			const element:any = document.getElementById(id);
			const y:any = element.getBoundingClientRect().top + window.scrollY + yOffset;

			window.scrollTo({top: y, behavior: 'smooth'});

		}
	}
}

export default Snippets;