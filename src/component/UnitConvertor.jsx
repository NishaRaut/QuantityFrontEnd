
    import React, { Component } from 'react'
    import '../../src/App.css'
    import UnitTypes from './UnitTypes' 
    import FormFeilds from '../component/FormFeilds'
    import {getAllMainUnits,getAllSubUnits,getConvertedValue} from '../../src/Service/Service'
import { throwStatement } from '@babel/types';
    export class UnitConvertor extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             mainUnits:[],
             subUnits:[],
             subUnit1:"",
             subUnit2:"",
             textValue1:0.0,
             textValue2:0.0,
             mainUnit:""
            
        }
    
    }
    getMainUnits = () =>{
        // console.log("hello")
        getAllMainUnits().then((response) =>{
            console.log('main unitss ',response.data.data);
            this.setState({mainUnits:response.data.data})
            }).catch((error) =>{
                console.log(error);  
        })
       
    }
    getFirstSubUnit = (event) =>{
        this.setState({
            subUnit1:event
        })
        console.log('first sub unit>',event);
    }
    
    getSecondSubUnit =(event)=>{
        this.setState({
            subUnit2:event
             
        })
        console.log('second sub unit>',event);
        console.log("object>>",this.state.mainUnit)
        const dto = {
            // units:"WEIGHT",
            // initialUnit:"FEET",
            //  initialValue:2.00,
            //   outputUnit:"INCH"
            // units:this.abc,
            units:this.state.mainUnit,
            initialUnit:this.state.subUnit1,
            outputUnit:event,
            initialValue:3
        }
    // const obj2= JSON.stringify(dto)
        console.log(dto+"dto")
        this.secondResult(dto)
    
    }
    getFirstValue = (event) =>{
        this.setState({
            textValue1:event.target.value
        })
        console.log('first value>',event.target.value);
       
    }
    // test=()=>{
    //     console.log('hello');
        
    // }
    
    getSubUnits = (event) =>{
        // this.setState({

        //     [event.target.name]:event.target.value
        //    })
        console.log(event)
this.setState({
    key:event
})
console.log(this.state.mainUnit+"key")
    getAllSubUnits(event).then((response) =>{
         console.log("Sub units",response);
        this.setState({subUnits:response.data.data})
        }).catch((error) =>{
            console.log(error);
    })
    
    }
    secondResult=(dto) =>{
        console.log("111111111111111111111111",dto)
       // this.setState({textValue1:event.target.value});
        // const dto = {
        //     initialUnit:this.state.subUnit1,
        //     outputUnit:this.state.subUnit,
        //     value:this.target.getFirstValue
        // }
        console.log("data initial unit"+dto.initialUnit)
        console.log("data output unit"+dto.outputUnit)
        console.log("data value "+dto.initialValue)
        console.log("data main unit"+dto.units)
        getConvertedValue(dto).then((response)=>{
            console.log("conversion result>>>",response)
    this.setState({
        textValue2:response.data.data
    })
        })
    }
    
    componentDidMount(){
        console.log("hello2")
        this.getMainUnits();
        this.getSubUnits();
        
    }
        render() {
            // const mainUnits = this.state.mainUnits
            const {textValue1,textValue2} = this.state
            return (
                <div className='main-div'>
                <div className='converter-div'>
                    <div className='heading'>Unit Convertor</div>
        <div className="operation-div">
        <div className="main-units">
            <UnitTypes mainUnits={this.state.mainUnits} getSubUnits={this.getSubUnits}/>
        </div>
        <div className='feilds' >
            <FormFeilds value={textValue1}  Value={this.getFirstValue}    />
            <FormFeilds  value={textValue2} />
        </div>
        <div className="equal-sign">=</div>
        <div className="sub-units">
             <UnitTypes mainUnits={this.state.subUnits} getSubUnits={this.getFirstSubUnit} />
             <UnitTypes mainUnits={this.state.subUnits} getSubUnits={this.getSecondSubUnit} /> 
             {/* <UnitTypes mainUnits={this.state.subUnits} getSubUnits={this.test} />  */}
            </div>
    </div>
                    
                </div>
            </div>
            )
        }
    }
    
    export default UnitConvertor
    
    
    
             
            