import avery from '../assets/avery.jpg'
function MiniBlog(){
	return (
		<>
			<h2>At crossroads dont turn left</h2>
			<p>Whatever you do at crossroads do NOT turn left</p>
			<div className="blogPic">
				<img src={avery} alt="img" />
			</div>
			<ul>
				<li>ARG</li>
				<li>Alpha Minecraft</li>
				<li>Wifies</li>
			</ul>
			<a href="https://www.youtube.com/watch?v=NnTycJg1MIo">OG video</a>
		</>
	);

}
export default MiniBlog;

