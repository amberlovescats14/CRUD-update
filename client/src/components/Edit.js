import React, { Component } from 'react'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'
import '../components/css/edit.css'

export default class Edit extends Component {
  constructor(props){
    super(props)
    this.state = {
      artist: "",
      song: "",
      genre: "",
      year: 0
    }
  }
  componentDidMount() {
    axios.get('/music/'+this.props.match.params.id)
      .then(res => {
        this.setState({ 
         artist : res.data.artist,
         song: res.data.song,
         genre: res.data.genre,
         year: res.data.year
          });
      })
  }
  handleSubmit = (e) => {
    e.preventDefault()

    const update = {
      artist: this.state.artist,
      song: this.state.song,
      genre: this.state.genre,
      year: this.state.year
    }
    axios.put('/music/'+this.props.match.params.id, update)
      .then(res=> console.log(res.json))
      .catch(err=> console.error(err.message))

      window.location ='/music'
  }

  
  render() {
    return (
      <div className="container-fluid"  id="edit">
      <div className="formWrapper" id="editWrapper"
      style={{border: '4px solid red', borderRadius: '8px', padding:'10px'}}>
        <Form>
          <Form.Group controlId="formGroupArtist">
          <Form.Label>Artist:</Form.Label>
          <Form.Control type="text" value={this.state.artist}
          onChange={(e)=> this.setState({ artist: e.target.value })}/>
          </Form.Group>
          <Form.Group controlId="formGroupSong">
          <Form.Label>Song:</Form.Label>
          <Form.Control type="text" value={this.state.song}
          onChange={(e)=> this.setState({ song:e.target.value })}/>
          </Form.Group>
          <Form.Group controlId="formGroupGenre">
          <Form.Label>Genre</Form.Label>
          <Form.Control as="select" value={this.state.genre}
          onChange={(e)=> this.setState({ genre: e.target.value })}>
          <option>Texas-Country</option>
          <option>Bluegrass-Country</option>
          <option>Classic-Country</option>
          <option>Todays-Country</option>
          </Form.Control>
          </Form.Group>
          <Form.Group controlId="formGroupYear">
          <Form.Label>Year</Form.Label>
          <Form.Control type="text" value={this.state.year}
          onChange={(e)=> this.setState({ year:e.target.value })}/>
          </Form.Group>
          <Button href="#" variant="primary" type="submit" onClick={this.handleSubmit}>Update</Button>
        </Form>
        </div>
      </div>
    )
  }
}
