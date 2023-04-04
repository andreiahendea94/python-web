import React from 'react';
import Select, { StylesConfig } from 'react-select';

const customStyles = {
  control: (baseStyles: any, state: any) => ({
    ...baseStyles,
    borderColor: state.isFocused ? '#86b7fe' : '#ced4da',
    boxShadow: state.isFocused ? '0 0 0 0.25rem rgba(13,110,253,.25)' : '',
    fontSize: ".875rem",
    minHeight: "calc(1.5em + .5rem + 2px)",
    height: "31px"
  }),

  valueContainer: (baseStyles: any, state: any) => ({
    ...baseStyles,
    height: '30px',
    padding: '0 6px'
  }),

  input: (baseStyles: any, state: any) => ({
    ...baseStyles,
    margin: '0px',
  }),
  indicatorSeparator: (state: any) => ({
    display: 'none',
  }),
  indicatorsContainer: (baseStyles: any, state: any) => ({
    ...baseStyles,
    height: '30px',
  }),
}



export default function SimpleSelect() {
  return (
    <>
      <Select
        className="basic-single"
        classNamePrefix="select"
        isSearchable={true}
        styles={customStyles}
      />
    </>
  );
}