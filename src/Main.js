import React from 'react';
//import { render } from 'react-dom';
const Axios = require('axios');
import Header from './Header';
import Albums from './Albums';
import Artists from './Artists';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      albums: [],
      view: ''
    };
    this.changeView=this.changeView.bind(this);
  }
  async changeView(view){
    this.setState({ view })
    console.log('view set to', view)
  }
  async componentDidMount() {
    try{
      const _data = await Axios.get('/api/artists');
      const artists = _data.data;
      this.setState({ artists });
      }
    catch(ex){
      console.log('ERROR reading artists - ', ex);
    }
    try{
      const _data = await Axios.get('/api/albums');
      const albums = _data.data;
      this.setState({ albums });
      }
    catch(ex){
      console.log('ERROR reading albums - ', ex);
    }
    console.log('Artists:', this.state.artists);
    console.log('Albums:',this.state.albums);
  }
  render(){
    return (
      <div>
        <Header artists={ this.state.artists } albums={ this.state.albums } changeView={ this.changeView }/>
        <h1>Welcome to Acme Music World!</h1>

        { this.state.view === 'albums' 
          ?
          <Albums albums={ this.state.albums }/>   
          : this.state.view === 'artists' ?
          <Artists artists={ this.state.artists }/> : 
          <img src='https://image.shutterstock.com/image-illustration/earth-globe-musical-notes-around-260nw-1214650741.jpg' />}

      </div>
    )
  }
}

export default Main;