import styled from 'styled-components';
import React from 'react';


const NavigationItemWrapper = styled.div`
    
    border-radius: 3px 3px 0 0;
    border-bottom: 3px solid transparent;
    color: ${props => (props.selected ? '#24292e' : '#586069')};
    float: left;
    padding: 7px 15px 8px;
    white-space: nowrap;
    border-color : ${props => props.selected && ' #e1e4e8 transparent #e36209 transparent '};
    cursor : pointer;
    &:hover {
     color : #000;
    }
  `;

const NavigationItemValue = styled.span`
    background-color: rgba(27,31,35,.08);
    border-radius: 20px;
    color: #000;
    display: inline-block;
    font-size: 12px;
    font-weight: 600;
    line-height: 1;
    padding: 2px 5px;
    margin-left: 2px;
`;

const NavigationItemAnchor = styled.a`
    text-decoration : none;
    color : #586069;
`;

const NavigationItem = ({
  name, selected, value, url,
}) => (
  <NavigationItemWrapper selected={selected}>
    {name === 'Code'}
    {name === 'Issues'}
    {name === 'Pull Requests'}
    {name === 'Discussions'}
    {name === 'Actions'}
    {name === 'Projects'}
    <NavigationItemAnchor href={url}>{name}</NavigationItemAnchor>
    {value
      ? <NavigationItemValue>{value}</NavigationItemValue>
      : <span>{value}</span>
    }
  </NavigationItemWrapper>
);

export default NavigationItem;
