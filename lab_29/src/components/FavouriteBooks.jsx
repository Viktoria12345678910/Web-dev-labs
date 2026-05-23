import lockwoodAndCo from '../assets/lockwood-and-co-book.png'
import inkStory from '../assets/OIP.jpg'
import oubh from '../assets/oubh.jpg'
import kiy from '../assets/kiy.jpg'
function FavouriteBooks(){
	return(
		<>
			<h3>My favourite books</h3>
			<ol>
				<li>Lockwood&co 
					<br /> 
					<img src={lockwoodAndCo} alt="Lockwood&co book cover" /> 
					<br />  
					<button>More</button>
				</li>
				<li>Inkheart
					<br />  
					<img src={inkStory} alt="Inkhear book cover" /> 
					<br />  
					<button>More</button>
				</li>
				<li>Once upon a broken heart 
					<br /> 
					<img src={oubh} alt="Once upon a broken heart book cover" /> 
					<br />  
					<button>More</button>
				</li>
				<li>The king in yellow 
					<br /> 
					<img src={kiy} alt="The king in yellow book cover" /> 
					<br />  
					<button>More</button>
				</li>
			</ol>
		</>
	)
}
export default FavouriteBooks;
