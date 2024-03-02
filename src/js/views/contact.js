import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

export const Contact = () => {
	const { store, actions } = useContext(Context);
	const [contactData, setContactData] = useState({});
	const navigate = useNavigate()

	const handleSubmitContact = async (el) => {
		el.preventDefault();
		console.log(contactData);
		await actions.newContact(contactData)
		navigate("/")
	}

	const handleInputChange = (el) => {
		const { name, value } = el.target;
		setContactData({ ...contactData, [name]: value });
	};

	console.log("Submitted data:", contactData)



	return (
		<div className="container">

			<div className="container">
				<h1 className="text-center mb-4">Add a new contact</h1>

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
							onChange={el => handleInputChange(el)}
							name="fullName"
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
							onChange={el => handleInputChange(el)}
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
							onChange={el => handleInputChange(el)}
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
							onChange={el => handleInputChange(el)}
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
			</div >
		</div >
	)
};