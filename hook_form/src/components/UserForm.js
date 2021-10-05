import React, { useState } from 'react';

const UserForm = (props) => {
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    const [ firstNameError, setFirstNameError ] = useState("");
    const [ lastNameError, setLastNameError ] = useState("");
    const [ emailError, setEmailError ] = useState("");
    const [ passwordError, setPasswordError ] = useState("");
    const [ confirmPasswordError, setConfirmPasswordError ] = useState("");
    const [ passwordMatchError, setPasswordMatchError ] = useState("");

    const createUser = (e) => {
        // prevent the default refresh of the browswer to keep our state from being reset
        e.preventDefault();

        // create a javascript object to hold all of the values
        const newUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
        };
        console.log("Welcome", newUser);
    }

    const handleFirstNameInputChange = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 2 && e.target.value.length > 0) {
            setFirstNameError("[STATE] First name must be at least 2 characters.");
        } else {
            setFirstNameError("");
        }
    }
    const handleLastNameInputChange = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 2 && e.target.value.length > 0) {
            setLastNameError("[STATE] Last name must be at least 2 characters.");
        } else {
            setLastNameError("");
        }
    }
    const handleEmailInputChange = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 5 && e.target.value.length > 0) {
            setEmailError("[STATE] Email must be at least 5 characters.");
        } else {
            setEmailError("");
        }
    }

    const handlePasswordInputChange = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length > 0 && e.target.value.length < 8) {
            setPasswordError("[STATE] Passwords must be 8 characters.");
        } else {
            setPasswordError("");            
        }
        if (isPasswordMatchTrue() && e.target.value.length > 0) {
            setPasswordMatchError("[STATE] Passwords must match.");
        }
        else {
            setPasswordMatchError("");
        }
    }

    const handleConfirmPasswordInputChange = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value.length > 0 && e.target.value.length < 8) {
            setConfirmPasswordError("[STATE] Passwords must be 8 characters.");
        } else {
            setConfirmPasswordError("");            
        }
        if (isPasswordMatchTrue() && e.target.value.length > 0) {
            setPasswordMatchError("[STATE] Passwords must match.");
        }
        else {
            setPasswordMatchError("");
        }
    }

    const isPasswordMatchTrue = () => {
        if (password === confirmPassword) {
            return true;
        } else {
            return false;
        }
    }

    return(
    <>    
        <form onSubmit={ createUser }>
            <div>
                <label htmlFor="first_name">First Name</label>
                <input 
                    type="text"
                    name="first_name"
                    id="first_name" 
                    // onChange={ (e) => setFirstName(e.target.value) }
                    onChange={ (e) => handleFirstNameInputChange(e) }
                />
            </div>
            { firstNameError && <p>{firstNameError}</p> }
            <div>
                <label htmlFor="last_name">Last Name</label>
                <input 
                    type="text"
                    name="last_name"
                    id="last_name" 
                    // onChange={ (e) => setLastName(e.target.value) }/>
                    onChange={ (e) => handleLastNameInputChange(e) }
                />
            </div>
            { lastNameError && <p>{lastNameError}</p> }
            <div>
                <label htmlFor="email">Email</label>
                <input 
                    type="text" 
                    name="email"
                    id="email"
                    // onChange={ (e) => setEmail(e.target.value) }/>
                    onChange={ (e) => handleEmailInputChange(e) }/>
            </div>
            { emailError && <p>{emailError}</p> }
            <div>
                <label htmlFor="password">Password</label>
                <input 
                    type="text" 
                    name="password"
                    id="password"
                    // onChange={ (e) => setPassword(e.target.value) }/>
                    onChange={ (e) => handlePasswordInputChange(e) }/>
            </div>
            { passwordError && <p>{passwordError}</p> } 
            { passwordMatchError && <p>{passwordMatchError}</p> } 
            <div>
                <label htmlFor="confirm_password">Confirm Password</label>
                <input 
                    type="text" 
                    name="confirm_password"
                    id="confirm_password"
                    // onChange={ (e) => setConfirmPassword(e.target.value) }
                    onChange={ (e) => handleConfirmPasswordInputChange(e) }
                />
            </div>
            { confirmPasswordError && <p>{confirmPasswordError}</p> }
        </form>
        <div>
            <p>View Form Data</p>
            <h2>First Name: {firstName}</h2>
            <h2>Last Name: {lastName}</h2>
            <h2>Email: {email}</h2>
            <h2>Password: {password}</h2>
            <h2>Confirm Password: {confirmPassword}</h2>
        </div>
    </>
    );
};

export default UserForm;