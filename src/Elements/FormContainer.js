// Dependencies
// -----------------------------------------------
import React from 'react';
import styled from 'styled-components';

// Components
// -----------------------------------------------

const FormContainer = styled.form`

  button.btn{
    background: #00a699;
    font-weight: 200;
    font-size: 14px;
    color: #FFFFFF;
  }
  
  .form-control{
    font-weight: 200;
    font-size: 14px;
    line-height: 24px;
    color: #484848;
    background-color: #fff;
    width: 100%;
    padding: 11px 11px 9px;
    border: 1px solid #dbdbdb
    border-radius: 2px;

    &::placeholder{
      color: #dbdbdb
    }
  }
`
export default FormContainer;