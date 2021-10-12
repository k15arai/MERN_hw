import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

const DisplayAllAuthors = () => {
    const [ authors, setAuthors ] = useState([]);
    const [ successfulDeleteBoolean, setSuccessfulDeleteBoolean ] = useState(false);
    const [ successfulSortBoolean, setSuccessfulSortBoolean ] = useState(false);

    // Get Authors to Display
    useEffect(() => {
        console.log("inside use effect");

        axios
            .get("http://localhost:8000/api/author")
            .then((res) => {
                console.log(res.data);
                setAuthors(res.data);
            })
            .catch((err) => console.log(err))
    }, [successfulDeleteBoolean]);

    const handleEditAuthor = (id) => {
        navigate(`/edit/${id}`);
    };

    const handleDeleteAuthor = (id) => {
        console.log("Handle Delete Author");
        axios
            .delete(`http://localhost:8000/api/author/${id}`)
            .then((response) => {
                console.log(response);
                setSuccessfulDeleteBoolean(!successfulDeleteBoolean);
            })
            .catch((error) => console.log(error));
    };

    const sortAuthors = () => {
        setAuthors(
            authors.slice().sort((a,b) => {
                if (a.name < b.name) {
                    return -1;
                } else if (b.name < a.name) {
                    return 1;
                }
                setSuccessfulSortBoolean(!successfulSortBoolean);
                navigate("/");
            }));
        console.log(authors);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-10">
                    <h3>Favorite Authors</h3>
                    <Link to="/new">Add an Author</Link>
                    <button
                        type="button"
                        className="btn btn-warning"
                        onClick={() => {sortAuthors()}}
                    >
                        Sort Authors
                    </button>
                    <p className="text-success">We have quotes by:</p>
                    <div className="border">
                        <table className="table table-striped">
                            <thead className="thead-light">
                                <tr>
                                    <th>Authors</th>
                                    <th>Actions Available</th>
                                </tr>
                            </thead>
                            {/* Loop in the Table Body */}
                            <tbody>
                                {authors.map((element, index) => (
                                    <tr key={index}>
                                        <td>{element.name}</td>
                                        <td>
                                            <button
                                                type="button"
                                                className="btn btn-warning"
                                                onClick={() => {handleEditAuthor(element._id)}}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-danger"
                                                onClick={() => {handleDeleteAuthor(element._id)}}
                                            >
                                                Delete
                                            </button>

                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DisplayAllAuthors;