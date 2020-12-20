import rnm from './img/projects/rnm.png';
import netflix from './img/projects/netflix.png';
import myos from './img/projects/myos.png';
import ib from './img/projects/invite.png';
import spotify from './img/projects/spotify.png';
import potter from './img/projects/potter.png';
import que from './img/projects/que.png';

const projects = [
	{
		img: myos,
		name: 'Make Your Own Stylesheet',
		desc:
			'A Node/ExpressJS App which allows you to create , save,upload CSS sheets easily by providing a GUI for it.',
		tags: ['Node/Express', 'Ejs', 'Mongo', 'Material'],
		link: 'http://make-your-own-style-sheet.herokuapp.com/',
		reponame: 'MakeYourOwnStylesheet',
	},
	{
		img: ib,
		name: 'Invite Book',
		desc:
			'A Node/Express App with Ejs Templating made as part of a small task.Allows User to send and accept invitations to other users for events. Better On Desktop.',
		tags: ['Node/Express', 'Ejs', 'Mongo', 'Material'],
		link: 'http://invitebook.herokuapp.com/',
		reponame: 'DeltaWDTask-3',
	},
	{
		img: rnm,
		name: 'Rick And Morty',
		desc:
			'A Simple React App that uses rick and morty API to show information about various things.',
		tags: ['React', 'Materialize', 'API'],
		link: 'https://marmikupadhyay.github.io/rick-and-morty/#/',
		reponame: 'rick-and-morty',
	},
	{
		img: netflix,
		name: 'Mock Netflix UI',
		desc:
			'A UI only Desktop React App for Netflix like video Streaming Sites.',
		tags: ['React', 'Tailwind'],
		link: 'https://marmikupadhyay.github.io/randomProjects/#/home',
		reponame: 'randomProjects',
	},
	{
		img: spotify,
		name: 'Artist Connections',
		desc:
			'A One Day Task to use the Spotify API and find the shortest relation between two artists that are related.The Repo contains some other short 1 day tasks too.',
		tags: ['Node/Express', 'API', 'EJS'],
		link: 'http://artistsofspotify.herokuapp.com/',
		reponame: 'deltaOnSites',
	},
	{
		img: potter,
		name: 'Potter Dex',
		desc:
			'A Simple Html/Css/Js Project that fetches all the information from the Harry Potter API and shows as easy to search cards. Note:- The Actual API has some downtime.',
		tags: ['API', 'Vanilla Stack', 'Material'],
		link: 'http://artistsofspotify.herokuapp.com/',
		reponame: 'potterdex',
	},
	{
		img: que,
		name: 'Que REST API',
		desc:
			'A Restful type API for the Que App as made in express and with database as MongoDB',
		tags: ['Node/Express', 'Mongo', 'API'],
		link: 'http://artistsofspotify.herokuapp.com/',
		reponame: 'QUE-backend',
	},
];

export default projects;
