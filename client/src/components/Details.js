import React, { Component } from 'react'
import axios from 'axios'
import { Jumbotron, Card, Button } from 'react-bootstrap'

export default class Details extends Component {
  constructor(props){
    super(props);
    this.state = {
      artist: '',
      song: '',
      genre: '',
      year: 0,
      data: []
    }
  }
  componentDidMount = () => {
    axios.get('/music/'+this.props.match.params.id)
    .then(res=>{
      this.setState({ 
        artist: res.data.artist,
        song: res.data.song,
        genre: res.data.genre,
        year: res.data.year
      });
    })
  }
  render() {
    // console.log(`ARTIST: `, this.state.artist)
    return (
      <div>
        <Jumbotron>
        <h1><em>{this.state.artist}</em></h1>
        <Card style={{fontSize: '4vh', padding: '2%'}}>
          Song: {this.state.song} <br/>
          Genre: {this.state.genre} <br/>
          Year: {this.state.year}
        </Card>
        <Button variant="success" type="button" href="#" 
        onClick={()=>{ window.location = '/edit/'+this.props.match.params.id}}>
            Edit
          </Button>
        </Jumbotron>
      </div>
    )
  }
}
