Promise.then({
	Promise.resolve({
		//returns the promise resolved
	});
}).catch((err) => {
	console.error(err); // never is called
})

// 'automatic' resolves to promises using .resolve
