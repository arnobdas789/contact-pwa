let contacts = JSON.parse(localStorage.getItem('contacts')) || [];

function renderContacts() {
  const list = document.getElementById('contactList');
  list.innerHTML = '';
  contacts.forEach((contact, index) => {
    const div = document.createElement('div');
    div.innerHTML = `
      <p>${contact.name} - ${contact.phone} - ${contact.email}</p>
      <button onclick="editContact(${index})">Edit</button>
      <button onclick="deleteContact(${index})">Delete</button>
    `;
    list.appendChild(div);
  });
}

document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;

  contacts.push({ name, phone, email });
  localStorage.setItem('contacts', JSON.stringify(contacts));
  renderContacts();
});

function editContact(index) {
  const contact = contacts[index];
  document.getElementById('name').value = contact.name;
  document.getElementById('phone').value = contact.phone;
  document.getElementById('email').value = contact.email;
  contacts.splice(index, 1);
  localStorage.setItem('contacts', JSON.stringify(contacts));
  renderContacts();
}

function deleteContact(index) {
  contacts.splice(index, 1);
  localStorage.setItem('contacts', JSON.stringify(contacts));
  renderContacts();
}

renderContacts();
