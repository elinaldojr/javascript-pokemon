const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

const getPokemon = async () => {
	let pokemon = Math.floor(Math.random() * 897) + 1;
	console.log(BASE_URL+pokemon)
	try {
		const data = await fetch(BASE_URL+pokemon);
		const json = await data.json();
		return json.sprites.front_default;
	} catch (e) {
		console.log(e.message);
	}
};

const loadImg = async () => {
	const img = document.getElementsByTagName('img')[0];
	img.src = await getPokemon();
};

loadImg();

const btn = document.getElementById('change-pokemon');
btn.addEventListener('click', loadImg);
