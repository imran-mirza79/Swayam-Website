import React from 'react'
import '../Stylesheets/HomeContainer.css'

const homeComponent = (props) =>
{
	const divclickhandler = (event) =>
	{
		//configure the click handler user React.history.push or something better
	}
	return(
		<React.Fragment>
		<div className='home-div-main'>
			<div className='home-div-sec' onClick={divclickhandler}>
				<div className='home-div-ter'>
					Incubator
				</div>
			</div>
			<div className='home-div-sec'>
				<div className='home-div-ter'>
					Swayam
				</div>
			</div>
		</div>
		<div className='home-div-abt'>
			<div className='home-div-abt-sec'>
				<p className='home-p-abt'>
					What is Swayam?
				</p>
				<div className='home-abt-wrapper'>
					<div className='home-img-abt'>

					</div>
				<p className='home-p-content'>
				Contrary to popular belief, Lorem Ipsum is not simply random text.
				It has roots in a piece of classical Latin literature from 45 BC,
				making it over 2000 years old. Richard McClintock, a Latin professor at
				Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
				consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
				discovered the undoubtable source.
				Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
				(The Extremes of Good and Evil) by Cicero, written in 45 BC.
				This book is a treatise on the theory of ethics,
				very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
				comes from a line in section 1.10.32.
				</p>
				</div>
			</div>
			<div className='home-div-abt-sec'>
				<p className='home-p-abt-alt'>
					How Does it Work?
				</p>
				<div className='home-abt-wrapper'>
				<p className='home-p-content-alt'>
				Contrary to popular belief, Lorem Ipsum is not simply random text.
				It has roots in a piece of classical Latin literature from 45 BC,
				making it over 2000 years old. Richard McClintock, a Latin professor at
				Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
				consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
				discovered the undoubtable source.
				Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
				(The Extremes of Good and Evil) by Cicero, written in 45 BC.
				This book is a treatise on the theory of ethics,
				very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
				comes from a line in section 1.10.32.
				</p>
				<div className='home-img-abt-2'>

				</div>
				</div>
			</div>
			<div className='home-div-abt-sec'>
				<p className='home-p-abt'>
					What is Swayam?
				</p>
				<div className='home-abt-wrapper'>
					<div className='home-img-abt'>

					</div>
				<p className='home-p-content'>
				Contrary to popular belief, Lorem Ipsum is not simply random text.
				It has roots in a piece of classical Latin literature from 45 BC,
				making it over 2000 years old. Richard McClintock, a Latin professor at
				Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
				consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
				discovered the undoubtable source.
				Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
				(The Extremes of Good and Evil) by Cicero, written in 45 BC.
				This book is a treatise on the theory of ethics,
				very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
				comes from a line in section 1.10.32.
				</p>
				</div>
			</div>
		</div>
		</React.Fragment>
		
	)
}

export default homeComponent