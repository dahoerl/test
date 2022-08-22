import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import CustomColorPicker from './ExtendedColorPicker';

import PrimeTabViewElement, {PrimeTabViewElementProps as ParentProps} from './PrimeTabViewElement';
import {RGBColor} from 'react-color';
import React from 'react';

interface PrimeTabViewElementColorProps {
  label: string;
  labelWidth: string;
  value:RGBColor;
}

interface PrimeTabViewElementColorState {

}

type Props = ParentProps & PrimeTabViewElementColorProps;
type State = PrimeTabViewElementColorState;

export default class PrimeTabViewElementColor extends PrimeTabViewElement<Props, State> {
  constructor(props:Props) {
    super(props);
    this.state = {
    };
  }

    static defaultProps = {
      value: {r: 255, g: 255, b: 255, a: 1},
      labelWidth: '50px',
    };

    render() {
      return (
        <CustomColorPicker color={this.props.value} handleColorChange={(e) =>{
          /* this.props.onChangeFunctionValue(e);*/ this.props.onChange(e);
        }} label={this.props.label} labelWidth={this.props.labelWidth}/>
      );
    }
}
