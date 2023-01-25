import React from "react";
import HubspotForm from 'react-hubspot-form'
import styles from "./FormSignUp.module.scss";

const FormSignUpAlt = () => {
  return (
    <HubspotForm
       portalId='22330883'
       formId='bb029b98-d69a-4b70-9fae-e3ef61a364be'
       //onSubmit={() => console.log('Submit!')}
       //onReady={(form) => console.log('Form ready!')}
       //loading={<div>Loading...</div>}
       onReady={console.log('Form ready!')}
       target='#signup-form'
   />
  );
};

export default FormSignUpAlt;
