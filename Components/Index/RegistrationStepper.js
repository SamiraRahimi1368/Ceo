import { useState } from 'react';

const RegistrationStepper = () => {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      {step === 1 && (
        <div>
          <h2>Step 1: Enter your first name and last name</h2>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={handleFirstNameChange}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={handleLastNameChange}
          />
          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>Step 2: Enter your age</h2>
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={handleAgeChange}
          />
          <button onClick={prevStep}>Previous</button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2>Registration Complete</h2>
          <p>First Name: {firstName}</p>
          <p>Last Name: {lastName}</p>
          <p>Age: {age}</p>
        </div>
      )}
    </div>
  );
};

export default RegistrationStepper;
