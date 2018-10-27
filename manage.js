document.querySelector('#manageform')
.addEventListener('submit', function(event){
	// prevents defaults from submission behaviour
	event.preventDefault();

	// gets references of the name and phone elements
	let phoneEl =  document.querySelector('#phone-number');
	let nameEl =  document.querySelector('#name');

	// fetches contacts from local storage
	let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
	
	// assigning input field to variables
	let name = nameEl.value;
	let phone = phoneEl.value;

	// adding new contact to top of array
	contacts.unshift({name, phone})

	// saving to local storage
	localStorage.setItem(`contacts`, JSON.stringify(contacts))

	// clearing text field values
	nameEl.value='';
	phoneEl.value='';

	// to display in console
	console.log({name})

	})
