import React, {Component} from 'react';

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import {ColorPicker} from 'primereact/colorpicker';
import {Button} from 'primereact/button';
import {Checkbox} from 'primereact/checkbox';
import {InputText} from 'primereact/inputtext';
import {SketchPicker, ChromePicker, RGBColor, ColorResult} from 'react-color';


interface CustomColorPickerProps {
  label: string;
  labelWidth: string;
  color: RGBColor;
  handleColorChange: (e:RGBColor) => void
}

interface CustomColorPickerState {
  // CHECKBOXES
  isChecked: boolean;
  displayColorPicker: boolean;
}

export default class CustomColorPicker extends Component<CustomColorPickerProps, CustomColorPickerState> {
  constructor(props:CustomColorPickerProps) {
    super(props);
    this.state = {
      isChecked: true,
      displayColorPicker: false,
    };
    this.showColorPicker = this.showColorPicker.bind(this);
  }

  showColorPicker = (event:any) => {
    this.setState({displayColorPicker: !this.state.displayColorPicker});
  }

  render() {
    return (
      <div style={{ marginLeft : 0 }} className="p-field-checkbox  p-grid">
        <Checkbox inputId="binary" checked={this.state.isChecked} onChange={(e:any) => this.setState({isChecked: e.checked})} />
        <label htmlFor="ExtendedColorPicker" className="p-col-fixed">{this.props.label} Color</label>
        {this.state.isChecked ?
                   <div className="p-col" style={{position: 'relative'}}>
                     <Button onClick={this.showColorPicker} style={{backgroundColor: `rgba(${ this.props.color.r }, ${ this.props.color.g }, ${ this.props.color.b }, ${ this.props.color.a })`}}></Button>
                     {this.state.displayColorPicker ?
                           <div style={ {position: 'absolute', zIndex: 1} }>
                             <div style={ {position: 'fixed', top: '0px', right: '0px', bottom: '0px', left: '0px'}} onClick={ () => this.setState({displayColorPicker: false}) }/>
                             <ChromePicker color={this.props.color} onChange={(e:any) => this.props.handleColorChange(e.rgb)} />
                           </div>:
                        null}
                   </div> :
              ''}
      </div>
    );
  }
}
