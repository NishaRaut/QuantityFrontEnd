import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
export class FormFeilds extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          
        }
    }
    
    render() {
        const { value, Value } = this.props;
        return (
           
        <div><form className="text-feilds" noValidate autoComplete="off">
      <TextField type="text"value1={value} onChange={Value}
      id="outlined-basic" label="Outlined" variant="outlined" 
      />
    </form>
    </div>
 
        )
    }
}

export default FormFeilds
