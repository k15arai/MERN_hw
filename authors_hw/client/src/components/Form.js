import React, { useState } from "react";
import axios from "axios";
import { navigate, Link } from "@reach/router";

const Form = () => {
    const [ name, setName ] = useState("");
    const [ errors, setErrors ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newAuthor = {
            name,
        };
        axios
            .post("http://localhost:8000/api/author", newAuthor)
            .then((res) => {
                navigate("/");
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            });
    };

    const handleCancel = () => {
        navigate("/");
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-6 col-form-styling">
                    <h3>Favorite Authors</h3>
                    <Link to="/">Home</Link>
                    <p className="text-success">Add a new author</p>
                    <div className="border">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label
                                    htmlFor="inputName" 
                                >
                                    Author Name:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputName"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                />
                                {/* ERRORS HERE     */}
                                {errors && errors.name && <p className="error-text">{errors.name.message}</p>}
                                <button 
                                    type="button"
                                    id="right-form-btn"
                                    onClick={() => handleCancel()}
                                >
                                    Cancel
                                </button>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                        {errors && 
                            Object.keys(errors).map((errKey, index) => (
                                <p className="error-text" key={index}>{errors[errKey].message}</p>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form;