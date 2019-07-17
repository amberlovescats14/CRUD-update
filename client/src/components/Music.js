import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import axios from 'axios'
import '../components/css/music.css'
import { Link } from 'react-router-dom'
const Cards = props => (
  <Card  className=" container text-center bg-primary text-light" id="musicCard"
  style={{display:'flex', flexDirection: 'row', justifyContent: 'space-between'}}
  key={props.item.key}>
  <Card.Title><h1>
  <Link to={"/details/"+props.item._id}
  style={{color: 'black', textDecoration: 'underline'}}>
  {props.item.artist}</Link>  </h1></Card.Title>
  <Button variant="danger" type="button" href="#" 
  style={{width: '100px', height: '50px', marginTop:'10px'}}
  onClick={()=>{props.deleteMusic(props.item._id)}}>Delete</Button>

  </Card>
)

export default class Music extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    axios.get('/music')
      .then(res=>{
       
        this.setState({ data: [...res.data ].reverse() });
      })
  }
  
  deleteMusic = (id) => {
    axios.delete('/music/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      data: this.state.data.filter(el => el._id !== id)
    })
  }
  sendItems = () => {
   return this.state.data.map(eachItem => {
     return <Cards item={eachItem} key={eachItem.id} deleteMusic={this.deleteMusic}/>
   })
  }
  render() {
    return (
      <div id="music" className="bg-dark"
      style={{width: '100vw', height: '100vh'}}>
        <div syle={{marginTop: '450px'}}>.
        {this.sendItems()}
        </div>
      </div>
    )
  }
}











