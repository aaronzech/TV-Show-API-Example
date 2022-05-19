

//Grab Form
const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function(e){
	e.preventDefault();
	const searchTerm = form.elements.query.value;
	const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
	buildPage(response.data);
	
	form.elements.query.value = '';
})

// Build page 
const buildPage = (shows) =>{
	for(let result of shows){
		if(result.show.image){
			//Make new img
			const img = document.createElement('IMG');
			img.src= result.show.image.medium;
			document.body.append(img);
		}else{
			continue;
		}
		if(result.show.rating.average){
			const textRating  = document.createElement('DIV');
			console.log(result.show);
			textRating.textContent=`Rating:${result.show.rating.average}`;
			document.body.append(textRating);
		}else{
			const textRating  = document.createElement('DIV');
			console.log(result.show.rating.average);
			textRating.textContent='Rating: NA';
			document.body.append(textRating);
		}

	}
}
