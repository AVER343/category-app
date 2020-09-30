import {
  FormInputContainer,
  FormInputLabel,
  GroupContainer
} from './input.styles';

import React from 'react';

const FormInput = ({ handleChange, label, ...props }) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...props} />
    {label ? (
      <FormInputLabel className={props.value.length ? 'shrink' : ''}>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);
export default FormInput