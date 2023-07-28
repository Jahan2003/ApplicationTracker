import React from 'react';
import makeAnimated from 'react-select/animated';
import Select,{ StylesConfig } from 'react-select';
import "../Assets/Styles/skillselect.css";
// import { colourOptions } from '../data';

function Skillselect(){
    const colourOptions = [
        { value: 'Full stack Web development', label: 'Full stack Web development' },
        { value: 'Cloud Computing', label: 'Cloud Computing' },
        { value: 'Devops', label: 'Devops' },
        { value: 'Data Science', label: 'Data Science' },
        { value: 'Marketing', label: 'Marketing' },
        { value: 'Machine Learning', label: 'Machine Learning' },
        { value: 'Ui/Ux design', label: 'Ui/Ux design' }
      ];
      const animatedComponents = makeAnimated();
      const styles={
        select:{
            border:'1px solid #e2e4e7',
            borderRadius:'20px'
        }
      }
  return(
    <div id="select">
        <Select
  closeMenuOnSelect={false}
  components={animatedComponents}
  isMulti
  options={colourOptions}
  id='select'
  styles={{
    control: (baseStyles, state) => ({
      ...baseStyles,
      borderColor: state.isFocused ? 'green' : '#ccc',
    }),
  }}
/>
    </div>
  
  );
}
export default Skillselect;
