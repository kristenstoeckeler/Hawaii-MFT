import React,{ Component } from 'react';
import { connect } from 'react-redux';

//React-bootstrap import
import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";



class ContactInfo extends Component{
// create the state
           state = {
               island_id:'',
               zip_code:'',
            business_number:'',
            personal_number:'',
            email:'',
            personal_email:'',
            website:'',
            address_office:'',
            address_home:'',
            address_mailing:'',
            city:'',
           }

           componentDidMount (){
            this.props.dispatch({
                type:'FETCH_ISLANDS'
            })
           }
    handleBack = (event) => {
        event.preventDefault()
        this.props.history.push('/create-profile')
    }

    handleNext = (event) => {
        event.preventDefault()
        this.props.history.push('/practice')
    }
    handleInputChangeFor = propertyName => (event) =>{
        this.setState({
          [propertyName]:event.target.value
        })
      } 

      handleSave =(event) =>{
        event.preventDefault();
        this.addContactInfo();
       this.addAddress()
      }
      addContactInfo = () =>{
          this.props.dispatch({type:'ADD_CONTACTINFO', 
                              payload:{island_id: this.state.island_id, 
                                        email: this.state.email,
                                        personal_email:this.state.personal_email,
                                        business_number:this.state.business_number,
                                        personal_number:this.state.personal_number,
                                        address_office:this.state.address_office,
                                        address_home:this.state.address_home,
                                        address_mailing:this.state.address_mailing,
          }});
                        
     }
    addAddress = () =>{
      this.props.dispatch({type:'ADD_ADDRESS',
                          payload:{zip_code: this.state.zip_code,
                                       city: this.state.city,
                                    website: this.state.website}})
    }

  
      
    render (){
        return(
            <>
            <div className='container'>
            <header><h1>Contact Info</h1></header>
             <br/>
            <ProgressBar now={50} />
            <Form onSubmit={this.handleSave}>
             <label>Island</label>
             <br/>
             <Form.Control
                 as="select" onChange={this.handleInputChangeFor("island_id")}>
             {this.props.islands &&
                   
                   <>
                   <option defaultValue='Select your Island'>Select your Island</option>
                   {this.props.islands.map(island =>
                    <option value={island.island_id}
        
                  key={island.island_id}>{island.title}</option>
                    )}
                   </>
                   } 
             </Form.Control>
             <br/>
             <br/>
             <Form.Label>Zip Code</Form.Label>
             <br/>
             <input type="number"
                  name="zip_code"
                  value={this.state.zip_code}
                  onChange={this.handleInputChangeFor("zip_code")}/>
                <br/>
             <Form.Label>Phone Number - Business</Form.Label>
             <br/>
             <input type="number"
                  name="number"
                  value={this.state.number}
                  onChange={this.handleInputChangeFor("number")}/>
             <br/>
             <br/>
             <Form.Label>Phone Number - Personal</Form.Label>
             <br/>
             <input type="number"
                  name="number"
                  value={this.state.personal_number}
                  onChange={this.handleInputChangeFor("personal_number")}/>
                <br/>
             <Form.Label>Email Address - Business</Form.Label>
             <br/>
             <input type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInputChangeFor("email")}/>
             <br/>
             <Form.Label>Email Address - Personal</Form.Label>
             <br/>
             <input type="text"
                  name="personal_email"
                  value={this.state.personal_email}
                  onChange={this.handleInputChangeFor("personal_email")}/>
             <br/>
             <Form.Label>Website</Form.Label>
             <br/>
             <input type="text"
                  name="website"
                  value={this.state.website}
                  onChange={this.handleInputChangeFor("website")}/>
             <br/>
             <Form.Label>Address - Office</Form.Label>
             <br/>
             <input type="text"
                  name="address"
                  value={this.state.address}
                  onChange={this.handleInputChangeFor("address")}/>
             <br/>
             <Form.Label>Address - Home</Form.Label>
             <br/>
             <input type="text"
                  name="home_address"
                  value={this.state.home_address}
                  onChange={this.handleInputChangeFor("homeaddress")}/>
             <br/>
             <Form.Label>Address - Mailing</Form.Label>
             <br/>
             <input type="text"
                  name="mailing_address"
                  value={this.state.mailing_address}
                  onChange={this.handleInputChangeFor("mailing_address")}/>
             <br/>
             <br/>
             <Form.Label>City</Form.Label>
             <br/>
             <input type="text"
                  name="city"
                  value={this.state.city}
                  onChange={this.handleInputChangeFor("city")}/>
             <br/>
             <br/>
            
           <button>Save</button>
            </Form>
            <Button onClick={this.handleBack}>Back</Button>
            <Button onClick={this.handleNext}>Save and Next Page</Button>
           

            </div>
           

            </>
        )
    }

}
const mapStateToProps = reduxstate => ({
    reduxstate,
    islands: reduxstate.islands,
    user: reduxstate.user
  });
export default connect (mapStateToProps)(ContactInfo);