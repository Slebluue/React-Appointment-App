import React from 'react';
import styled from 'styled-components';

const AppointmentItemContainer = styled.div`
  border-bottom: 1px solid #dbdbdb;
  padding: 16px 8px;

  &:hover{
    background: rgba(239, 239, 239, 0.3);
    cursor: pointer;
  }

  .left, .right{
    float: left;
  }

  .left{
    width: 15%;
    height: 50px;

    .icon{
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #00a699;
      margin: 0 auto;
    }
  }
  .right{
    width: 85%;
  }

  h4{
    font-size: 15px;
    font-weight: bold;
    margin: 0 0 4px;
  }
  .description{
    margin-bottom: 0px;
    font-size: 14px;
    font-style: italic;
  }
  .date{
    font-size: 12px;
    color: #dbdbdb;
    font-style: italic;
    margin: 0;
  }

  .clear{
    clear: both;
  }
`
export default AppointmentItemContainer;