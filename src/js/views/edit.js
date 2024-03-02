import React, { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const Edit = () => {

    const { store, actions } = useContext(Context);
    const [contactData, setContactData] = useState(store.contactToEdit);
    const navigate = useNavigate()

    const params = useParams();
    console.log(store.contactToEdit);

    const handleSubmitContact = async (el) => {
        el.preventDefault();
        console.log(contactData);

        await actions.editContact(contactData, params.id)
        navigate("/")
    }

    const handleInputChange = (el) => {
        const { name, value } = el.target;
        setContactData({ ...contactData, [name]: value });
    };

    return (
        <div className="container">

            <div className="container">
                <h1>Add a new contact</h1>

                <form className="list-group-item shadow-sm p-3 mb-5 bg-body-tertiary rounded" onSubmit={el => handleSubmitContact(el)}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputFullName" className="form-label">
                            Full Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputFullName"
                            placeholder="Enter Full Name"
                            value={contactData.full_name}
                            onChange={event => handleInputChange(event)}
                            name="full_name"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail"
                            placeholder="Enter email"
                            value={contactData.email}
                            onChange={event => handleInputChange(event)}
                            name="email"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPhone" className="form-label">
                            Phone
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputPhone"
                            placeholder="Enter phone"
                            value={contactData.phone}
                            onChange={event => handleInputChange(event)}
                            name="phone"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputAddress" className="form-label">
                            Address
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputAddress"
                            placeholder="Enter address"
                            value={contactData.address}
                            onChange={event => handleInputChange(event)}
                            name="address"
                        />
                    </div>

                    <button
                        type="submit"
                        className=" d-grid gap-2 col-6 mx-auto mb-3 btn btn-outline-dark border-3 rounded"
                    >

                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
};