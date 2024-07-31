import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.1);

  &:nth-child(1),
  &:nth-child(2) {
    grid-column: span 3;
  }

  &:nth-child(3),
  &:nth-child(4),
  &:nth-child(5) {
    grid-column: span 1;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

   h2 {
    margin-bottom: 15px;
    font-size: 1.2em;
    color: #333;
  }
`;

function Cards() {
  return (
    <>
      <Card><h2>Monthly Study Time</h2>
        <img src="./Graph1.png" alt="Monthly Study Time" />
      </Card>
      <Card><h2>Type of Courses</h2>
        <img src="./Graph3.png" alt="Type of Courses" />
      </Card>
      <Card><h2>Day-wise Progress</h2>
        <img src="./Graph2.png" alt="Day-wise Progress" />
      </Card>
      <Card><h2>Total Badges Gained</h2>
        <img src="./Graph1.png" alt="Total Badges Gained" />
      </Card>
      <Card><h2>Learning Streak</h2>
        <img src="./Graph.jpeg" alt="Learning Streak" />
      </Card>
    </>
  );
}

export default Cards;
