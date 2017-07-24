// Dependencias
import React, { Component } from 'react';
import AppBar  from 'material-ui/AppBar';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';


// Assets
//logo y css va aca

export default class NavTop extends Component {

  render() {
    return(
      <div className="rootcont" >

			  <AppBar
        title="MozApp"
				className='appbar'
				iconElementRight={
					<div style={{paddingTop: '8px' }}>
					<Link  to='/'><FlatButton
					labelStyle={{color: '#fff'}}
					label="Mi Menu" /></Link>


				<Link

				to='/mesas'><FlatButton
				labelStyle={{color: '#fff'}}
				label='Mesas'
						 /> </Link>
					</div>
				}

			/>
      </div>

    );
  }
}
