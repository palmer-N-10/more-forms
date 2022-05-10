import React, {useState} from  'react';

const User = (props) => {
    const { firstName, lastName, email, password, passCon} = props.user;

const [error, setError] = useState({
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    passLenErr: "",
    passMatchErr: ""
})
    const user = props.user;
    const setUser = props.setUser;
    const setNU = props.setNewUser;

    const createUser = (e) => {
        e.preventDefault();
            setNU({ firstName, lastName, email, password })
            setUser({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                passCon: ""
            });
        }
    };

    const keyHandler = (e) => {
        const {value, name} = e.target
        setUser({
            ...user,
            [name]: value
        });
        setError(name, value)
    }

    const setError = (name, value) => {
        let err = ""
        switch (name) {
            case "firstName":
                if (value && value.length < 2){
                    err = "First name must be 2 characters long."
                }
                setError({
                    ...error,
                    firstNameError: err
                });
                break;
            case "lastName":
                if (value && value.length < 2){
                    err = "Last name must be at least 2 characters long."
                }
                setError({
                    ...error,
                    lastNameError: err
                });
                break;
            case "email":
                if (value && value.length < 5){
                    err = "Email name must be  5 characters long."
                }
                setError({
                    ...error,
                    emailError: err
                });
                break;
            case "password":
                if (value && passCon && value !== passCon){
                    err = "Passwords must match"
                }
                setError({
                    ...error,
                    passLenErr: err
                });
                break;
            case "passCon":
                if (value && password && value.length < 8){
                    err = "Password must be at least 8 characters long."
                }
                setError({
                    ...error,
                    passMatchErr: err
                });
                break;
        }
    

    return(
        <div className={styles.container }>
            <form onSubmit={ createUser } className={styles.flex }>
                <div>
                    <label className={styles.label}>First name: </label>
                    <input onChange={ keyHandler }
                    name="firstName"
                    type="text" 
                    value={firstName} />
                    <p style={{color:"red"}}>{ error.firstNameError}</p>
                </div>
                <div>
                    <label className={styles.label}>Last name: </label>
                    <input onChange={ keyHandler }
                    name="lastName"
                    type="text" 
                    value={lastName} />
                    <p style={{color:"red"}}>{ error.lastNameError}</p>
                </div>
                <div>
                    <label className={styles.label}>Email Address: </label>
                    <input onChange={ keyHandler }
                    name="email"
                    type="text" 
                    value={email} />
                    <p style={{color:"red"}}>{ error.emailError}</p>
                </div>
                <div>
                    <label className={styles.label}>Password: </label>
                    <input onChange={ keyHandler }
                    name="password"
                    type="password" 
                    value={password} />
                    <p style={{color:"red"}}>{ error.passMatchErr}</p>
                    <p style={{color:"red"}}>{ error.passLenErr}</p>
                </div>
                <div>
                    <label className={styles.label}>Confirm Password: </label>
                    <input onChange={ keyHandler }
                    name="passCon"
                    type="password" 
                    value={passCon} />
                    <p style={{color:"red"}}>{ error.passMatchErr}</p>
                </div>
                <input type="submit" value="Create User" className={styles.btn } />
            </form>
        </div>
    );
    }
    
export default User;