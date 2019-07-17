import React, { Component } from 'react'
import '../components/css/create.css'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios';


export default class Create extends Component {
  constructor(props){
    super(props)
    this.state={
      artist: "",
      song: "",
      genre: "Texas-Country",
      year: "",
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const createMusic = {
      artist: this.state.artist,
      song: this.state.song,
      genre: this.state.genre,
      year: this.state.year
    }
    
    console.log(createMusic)
    axios.post('/music', createMusic)
      .then(res=> console.log(res.data))
    window.location = '/Music'
  }
  render() {
    return (
      <div className="container-fluid " id="create">
      <div className="formWrapper container" id="createWrapper"
      style={{border: '4px solid red', borderRadius: '8px', padding:'10px'}}>
        <Form >
          <Form.Group controlId="formGroupArtist">
          <Form.Label>Artist:</Form.Label>
          <Form.Control type="text" onChange={(e)=> this.setState({ artist: e.target.value })}/>
          </Form.Group>
          <Form.Group controlId="formGroupSong">
          <Form.Label>Song:</Form.Label>
          <Form.Control type="text" onChange={(e)=> this.setState({ song:e.target.value })}/>
          </Form.Group>
          <Form.Group controlId="formGroupGenre">
          <Form.Label>Genre</Form.Label>
          <Form.Control as="select" onChange={(e)=> this.setState({ genre: e.target.value })}>
          <option>Texas-Country</option>
          <option>Bluegrass-Country</option>
          <option>Classic-Country</option>
          <option>Todays-Country</option>
          </Form.Control>
          </Form.Group>
          <Form.Group controlId="formGroupYear">
          <Form.Label>Year</Form.Label>
          <Form.Control type="text" onChange={(e)=> this.setState({ year:e.target.value })}/>
          </Form.Group>
          <Button href="#" variant="primary" type="submit" onClick={this.handleSubmit}>Add to Favorites</Button>
        </Form>
        </div>
      </div>
    )
  }
}
