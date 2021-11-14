import styled from 'styled-components';
import React from 'react';
import Caret from '../commons/Caret';


const IssuesTableHeaderContainer = styled.div`
    background-color: #f6f8fa;
    border: 1px solid #e1e4e8;
    border-bottom: none;
    border-radius: 3px 3px 0 0;
    margin-top: 20px;
    position: relative;
    display : flex;
    flex-direction : row;
    cursor : ponter;
        align-items: center;
    justify-content : space-between;
    
      @media (max-width: 820px) {
        flex-direction : column;
      }
`;


const otherValues = ['Author', 'Label', 'Projects', 'Milestones', 'Assignee', 'Sort'];

const DetailSpan = styled.span`
     padding-left: 15px;
     padding-right: 15px;
     padding-top: 15px;
     padding-bottom: 15px;
     color: #586069;
     &:hover {
     color : #24292e;
    }
`;
const OtherDetail = ({ value }) => (
  <DetailSpan>
    {value}
    {' '}
    <Caret />
    {' '}
  </DetailSpan>
);


const OtherDetails = styled.div`
   display : flex;
   flex-direction : row;
   
   @media (max-width: 820px) {
        flex-direction : column;
      }
   
`;


const IssuesTableHeader = () => (
  <IssuesTableHeaderContainer>
    <OtherDetails>
      {otherValues.map(value => <OtherDetail key={value} value={value} />)}
    </OtherDetails>
  </IssuesTableHeaderContainer>
);

export default IssuesTableHeader;


