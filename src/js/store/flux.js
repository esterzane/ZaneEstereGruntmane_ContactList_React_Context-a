const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: "https://playground.4geeks.com/apis/fake/contact/",
			urlWithSlug: "https://playground.4geeks.com/apis/fake/contact/agenda/zaneestere",
			contacts: [

			]
		},

		actions: {

			getContacts: async () => {
				const store = getStore();
				const response = await fetch(getStore().urlWithSlug);
				const jsonResponse = await response.json();
				console.log(jsonResponse)
				setStore({ contacts: jsonResponse });
			},

			newContact: async (contactData) => {
				const opt = {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						"full_name": contactData.fullName || "Dave Bradley",
						"email": contactData.email || "dave@gmail.com",
						"agenda_slug": "zaneestere",
						"address": contactData.address || "47568 NW 34ST, 33434 FL, USA",
						"phone": contactData.phone || "7864445566",
					})
				}
				const response = await fetch(getStore().url, opt)
				const jasonResponse = await response.json()
				console.log(jasonResponse)
				return true
			},

			setContactToEdit: (contact) => {
				console.log(contact);
				setStore({ contactToEdit: contact });
			},

			editContact: async (newContactData, id) => {
				console.log(newContactData)
				const opt = {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						"full_name": newContactData.full_name,
						"email": newContactData.email,
						"agenda_slug": "zaneestere",
						"address": newContactData.address,
						"phone": newContactData.phone,
					})
				}
				const response = await fetch(getStore().url + id, opt)
				const jasonResponse = await response.json()
				console.log(jasonResponse)
			},

			getOneContact: async (id) => {
				const response = await fetch(getStore().url + id);
				const jsonResponse = await response.json();
				setStore({ singleContact: jsonResponse });
			},


			deleteContact: async (id) => {
				const opt = {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify()
				};

				const response = await fetch(getStore().url + id, opt);
				const jsonResponse = await response.json();
				console.log(jsonResponse);
				await getActions().getContacts();
			}

		}

	}

};

export default getState;
