import React from 'react';

const returnTags = (tags, theme) => {
	const styles = {
		tag: {
			background: theme.accent.primary,
			filter: 'drop-shadow(0px 0px 10px #333333)',
		},
	};
	let tagList = tags.map((tag) => {
		return (
			<span
				className='mx-2 my-1 font-bold text-white rounded-full px-3'
				style={styles.tag}>
				{tag}
			</span>
		);
	});
	return tagList;
};

function ProjectCard(props) {
	const theme = props.theme;
	const styles = {
		card: {
			background: theme.background.dark.primary,
		},
		tag: {
			background: theme.accent.primary,
		},
		btn: {
			background: theme.accent.secondary,
		},
	};
	return (
		<div
			className='project-card flex flex-col my-4 justify-between shadow-xl'
			style={styles.card}>
			<div className='main flex'>
				<div className='w-1/3 p-2 flex items-center'>
					<img src={props.cardData.img} alt='' className='' />
				</div>
				<div className='w-2/3 p-2'>
					<span className='text-xl text-white text-bold'>
						{props.cardData.name}
					</span>
					<br />
					<div className='flex flex-wrap items-center pt-2 justify-center'>
						{returnTags(props.cardData.tags, theme)}
					</div>
				</div>
			</div>
			<div className='view-more'>
				<p className='text-white p-2'>{props.cardData.desc}</p>
				<div className='p-4 repo'>
					<img
						src={`https://github-readme-stats.vercel.app/api/pin?username=marmikupadhyay&repo=${props.cardData.reponame}&bg_color=0b1622&hide_border=true&text_color=fff&icon_color=87e7b4&title_color=87e7b4`}
						alt=''
						className='cursor-pointer shadow-lg'
						onClick={() => {
							var win = window.open(
								`https://github.com/marmikupadhyay/${props.cardData.reponame}`,
								'_blank'
							);
							win.focus();
						}}
					/>
				</div>
				<div className='w-full px-4 pb-4'>
					<a
						href={props.cardData.link}
						style={styles.btn}
						className='text-white btn block w-full rounded text-center text-2xl'>
						Visit
					</a>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
