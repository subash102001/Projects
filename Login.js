import React from 'react';
import './Login.scss';

function Login() {
  return (
	<div>
		<div className='bucky'>
		<div className='starck'>

         <div className='image'>
			<img src={require('./main_img.png')} alt='main_img' width={200} height={100} />
		 </div>
	

		 <div className='avengers'>
			<div className='forms'>
				
				<div>
					<form className='hello'>
						<input type='text' className='email' placeholder='Email address or phone number' /><br></br>
						<input type='text' className='password' placeholder='Password' />
					
	
					<button className='login'>Log in</button>
					<a href='/' className='forgottenpassword'>Forgotten password?</a>
					<button className='name'>create new account</button>
					</form>
					
				</div>
				

			

			</div>
			
			</div>
			<div className='ok'><p>Create a Page for a celebrity, brand or business</p></div>
			
			</div>
			
			

    
</div>
	</div>
  )
}

export default Login;