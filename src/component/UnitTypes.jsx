
import React, { Component } from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import '../../src/App.css'
   
class UnitType extends Component {
    
    constructor(props) {
        super(props)
        this.state = {  
          mainValue:'',
          mainUnit:""
        }
      
    }

  
    handleTopicChange = event =>{
       this.setState({
        //mainValue:event.target.value
        [event.target.name]:event.target.value
       })
       console.log("Selected Value",event.target.value+"name"+event.target.name)
       this.props.getSubUnits(event.target.value)
   }
   
   render() {
    const unit = this.props.mainUnits.map((unit,index) =>(
        <option  key={index} value={unit}>{unit}</option>
    ));
    
     
       return (
           <div >
           <form >
           <FormControl className='formControl' >
        <InputLabel id="demo-simple-select-label">Main Units</InputLabel>
        <Select
        native
        //   labelId="demo-simple-select-label"
        //   id="demo-simple-select"
          value={this.state.mainValue} onChange={this.handleTopicChange}
          label="Main Unit"
    
          inputProps={{
              name:"mainUnit",
              id:"outlined-age-native-sample"
          }}
          >
              <option disabled area-label='none' value=""/>
          {unit}
        </Select>
       </FormControl> 
         </form>  
          
           </div>
       )
   }
}

export default UnitType
