import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100vh;
  overflow-y: auto;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const ProfileName = styled.h2`
  margin: 10px 0 5px;
`;

const ProfileLocation = styled.p`
  color: gray;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  width: 100%;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
  color: gray;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
`;

const SaveButton = styled.button`
  grid-column: span 2;
  padding: 10px 0;
  background-color: orange;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

function UserProfile() {
  return (
    <ProfileContainer>
      <ProfileImage src="/images/Person.jpg" alt="Profile" />
      <ProfileName>Vishal Gupta</ProfileName>
      <ProfileLocation>New York, USA</ProfileLocation>
      <Form>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" value="Vishal" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="fullName">Full Name</Label>
          <Input type="text" id="fullName" value="Gupta" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email Address</Label>
          <Input type="email" id="email" value="samplemail@gmail.com" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="phone">Phone Number</Label>
          <Input type="tel" id="phone" value="(+98) 91237XXXXX" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="location">Location</Label>
          <Input type="text" id="location" value="New York, USA" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="postalCode">Postal Code</Label>
          <Input type="text" id="postalCode" value="23728XXX" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="birthDate">Birth Date</Label>
          <Input type="date" id="birthDate" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="gender">Gender</Label>
          <Input type="text" id="gender" value="Male" />
        </FormGroup>
        <FormGroup style={{ gridColumn: 'span 2' }}>
          <Label htmlFor="bio">Bio</Label>
          <TextArea id="bio" rows="4" placeholder="Tell us something about yourself..."></TextArea>
        </FormGroup>
        <SaveButton type="button">Save Changes</SaveButton>
      </Form>
    </ProfileContainer>
  );
}

export default UserProfile;
