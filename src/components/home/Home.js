import React, { Component } from "react";
import "./Home.css";
import "./test.scss";
import { Collapse, Button, ButtonGroup } from 'reactstrap';
import Carousel from '../carousel/Carousel'

import linkedin from '../../images/linkedin_logo.png'
import github from '../../images/github_logo.png'
import facebook from '../../images/facebook_logo.png'
import profile from '../../images/profile_picture.png'
import project_placeholder from '../../images/project_placeholder.png'

const projects = [{
  id:1,
  name:'project_one',
  description: 'about project one',
  url: 'url',
  image: project_placeholder
 },{
     id:2,
     name:'project_two',
     description: 'about project two',
     url: 'url',
     image: project_placeholder
 },{
   id:3,
   name:'project_three',
   description: 'about project three',
   url: 'url',
   image: project_placeholder
 }];


 
 const links = [{
  id:1,
  url:'linkedin profile url',
  image:linkedin
  },{
  id:2,
  url:'github profile url',
  image:github
  },{
    id:3,
    url:'facebook profile url',
    image:facebook
  }];

class Home extends Component {
  constructor(props) {
    super(props);
    this.toggle_projects = this.toggle_projects.bind(this);
    this.toggle_about = this.toggle_about.bind(this);
    this.toggle_links = this.toggle_links.bind(this);
    this.state = {
      collapse_about: false,
      collapse_projects: false,
      collapse_links:false
    };
  }


  toggle_about() {
    this.setState(
      { 
        collapse_about: !this.state.collapse_about,
        collapse_projects: false,
        collapse_links: false
      }
    );
  }

  toggle_projects() {
    this.setState(
      { 
        collapse_projects: !this.state.collapse_projects,
        collapse_about: false,
        collapse_links: false
      }
    );
  }
  toggle_links() {
    this.setState(
      { 
        collapse_projects: false,
        collapse_about: false,
        collapse_links: !this.state.collapse_links
      }
    );
  }

  render() { 
    return (
      <div className="home-container">
        <header className="home-header">
          <div className="grid-container">
            <div className="grid-item">
              <h1> Name </h1>
              <h3> Title </h3>
            </div>
            <div className="grid-item" />
            <div className="grid-item">
              <img
                alt="header"
                className="header-image"
                src={profile}
              />
            </div>
          </div>
          <hr />
        </header>
        <Carousel/>


        <ButtonGroup className="bgroup">
        <Button color="success" onClick={this.toggle_about}>About</Button>
        <Button  color="success" onClick={this.toggle_projects}>Projects</Button>
        <Button color="success" onClick={this.toggle_links}>Links</Button>
        </ButtonGroup>
   

        <Collapse isOpen={this.state.collapse_about}>
        <p className="paragraph">What is Lorem Ipsum?
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        </Collapse>
        <div></div>

      
        <Collapse isOpen={this.state.collapse_projects}>
        <div className="grid-container-two"> 
        {
          projects.map(i => {
            return  <div key={i.id} className="grid-item"> 
           
            <img alt="img" src={i.image} /> <br/>
            {i.name} <br/>
            {i.description} <br/>
            {i.url}
             </div>
          })
        }
        </div>
        </Collapse>

        <Collapse isOpen={this.state.collapse_links}>
        <div className="grid-container-two"> 
        {
          links.map(i => {
            return <div key={i.id} className="grid-item">
              {i.url} <br/>
              <img alt={i.url} className="imgresize" src={i.image}/>
             </div>
          })
        }
        </div>
        </Collapse>

      </div>
    );
  }
}

export default Home;
