import React from 'react';
import logo from './images/main.png';
import './Main.scss';

function Main() {
  return (
	<div>
		<div className='container'>
		<div className='body'>
			<div className='main'>
				<div>

					<img src={require('./images/main.png')} alt='main_img' width={320} height={130} />
					<h2 className='heading'>Facebook helpsyou connect and share with the people in your life</h2>
				</div>
			</div>


         <div className='main-form'>
			<div className='form'>
				<div>
					<form className='#'>
						<input type='text' className='email' placeholder='Email address or phone number' /><br></br>
						<input type='text' className='password' placeholder='Password' />
					
	
					<button className='login'>Log in</button>
					<a href='/' className='forgotpassword'>Forgotten password?</a>
					<div className='horizontal'></div>
					

					<button className='create'>Create new account</button>
					</form>
				</div>

				

			</div>
			<p className='create-new-account'><a href=''>Create a page </a>for a celebrity, brand or business.</p>
			</div>
			
			
</div>
		</div>
	</div>
  )
}

export default Main;