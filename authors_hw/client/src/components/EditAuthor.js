import React, { useState, useEffect } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";

const EditAuthor = (props) => {
    const { id } = props;
    const [ name, setName ] = useState("");
    const [ errors, setErrors ] = useState("");

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/author/${id}`)
            .then((response) => {
                console.log(response);
                setName(response.data.name);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleSubmitEditForm = (e) => {
        e.preventDefault();

        const newAuthor = {
            name,
        };
        axios
            .put(`http://localhost:8000/api/author/${id}`, newAuthor)
            .then((response) => {
                console.log(response);
                navigate("/");
            })
            .catch((error) => {
                console.log(error.response.data.errors);
                setErrors(error.response.data.errors);
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
                        <form onSubmit={handleSubmitEditForm}>
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
};

export default EditAuthor;
