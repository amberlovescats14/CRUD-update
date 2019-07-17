import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import axios from 'axios'
// import {Link} from 'react-router-dom'

export default class Matt extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    axios.get('/music')
      .then(res=>{
       
        this.setState({ data: [...res.data ] });
      })
  }
  render() {
    return (
      <div>
        <Card>
{          this.state.data.map((item, i)=> {
            return (
              <Card key={i} className="text-center" style={{width: '80%', margin:'auto'}}>
              <Card.Title><h1>{item.artist}</h1></Card.Title>
              <Card.Body>
              <ul id="ul" >
              <li>Song Name: {item.song}</li>
              <li>Genre: {item.genre}</li>
              <li>Year: {item.year}</li>
            </ul>
              {/* <h1><Link to={item.link}>{item.link}</Link></h1> */}
              </Card.Body>
            <Button variant="warning" >Delete</Button>
            
            </Card>
            )
          })}
        </Card>
      </div>
    )
  }
}
