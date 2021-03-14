class JSXDemo extends React.Component {
	render(){
		function getMood(){
			const moods =['Angry', 'Hungry', 'Silly', 'Quiet', 'Happy', 'Paranoid'];
			return moods[Math.floor(Math.random() * moods.length)];
		}
		return (
			<div>
				<h1>Prague</h1>
				<p>Its population is about {2 * 326.850} peoples</p>
				<p>It's population now is kinda {getMood()}</p>
				<img src="./bg.jpg" />
			</div>
		);
	}
}