import React from 'react';
import './Homes.scss';



function Homes() {
  return (
	<div>
		<div className='red'>
			<div className='containers'>
				<img src={require('./Image.png')} width={515} height={650} />
			</div>
			<div className='blue'>
				<h2>Light, Fast & Powerful</h2>
				<p className='cody'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.<br></br> Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus <br></br> 
				mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
				</p>
				<br></br>
				<br></br>
				
				<div className='green'>

				<div className='images'>
					<div className='image1'>
						<img src={require('./image1.png')} width={36} height={36} />
						<h4>Title Goes Here</h4>
						<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
					</div>
					<div className='image' id='class'>
						<img src={require('./image1.png')} width={36} height={36} />
						<h4>Title Goes Here</h4>
						<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
					</div>
					</div>
				</div>
				<br></br>
				<div className='images'>
					<div className='image1'>
						<img src={require('./image1.png')} width={36} height={36} />
						<h4>Title Goes Here</h4>
						<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
					</div>
					<div className='image1' id='class'>
						<img src={require('./image1.png')} width={36} height={36} />
						<h4>Title Goes Here</h4>
						<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
					</div>
				</div>
				</div>
			</div>
		</div>
	
  )
}

export default Homes;