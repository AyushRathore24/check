// const apiUrl = 'https://jsonplaceholder.typicode.com/users';
// const userList = document.getElementById('userList');
// // Function to fetch users and render them
// async function fetchUsers() {
//     try {
//       const response = await fetch(apiUrl);
//       const users = await response.json();
  
//       userList.innerHTML = ''; // Clear previous list
  
//       users.forEach(user => {
//         const li = document.createElement('li');
//         li.textContent = user.name;
  
//         // Edit button
//         const editBtn = document.createElement('button');
//         editBtn.textContent = 'Edit';
//         editBtn.onclick = () => editUser(user.id);
//         li.appendChild(editBtn);
  
//         // Delete button
//         const deleteBtn = document.createElement('button');
//         deleteBtn.textContent = 'Delete';
//         deleteBtn.onclick = () => deleteUser(user.id);
//         li.appendChild(deleteBtn);
  
//         userList.appendChild(li);
//       });
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   }
  
//   // Function to edit a user
//   async function editUser(userId) {
//     const newName = prompt('Enter new name:');
//     if (!newName) return;
  
//     try {
//       const response = await fetch(`${apiUrl}/${userId}`, {
//         method: 'PUT',
//         body: JSON.stringify({
//           name: newName
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       });
  
//       if (response.ok) {
//         alert('User updated successfully!');
//         fetchUsers();
//       } else {
//         throw new Error('Failed to update user.');
//       }
//     } catch (error) {
//       console.error('Error updating user:', error);
//       alert('Failed to update user. Please try again.');
//     }
//   }
  
//   // Function to delete a user
//   async function deleteUser(userId) {
//     if (!confirm('Are you sure you want to delete this user?')) return;
  
//     try {
//       const response = await fetch(`${apiUrl}/${userId}`, {
//         method: 'DELETE',
//       });
  
//       if (response.ok) {
//         alert('User deleted successfully!');
//         fetchUsers();
//       } else {
//         throw new Error('Failed to delete user.');
//       }
//     } catch (error) {
//       console.error('Error deleting user:', error);
//       alert('Failed to delete user. Please try again.');
//     }
//   }
  
//   // Initial fetch when the page loads
//   fetchUsers();


const dbUrl = 'data.json';
let users = []; // Variable to store user data

// Function to fetch data from JSON file
async function fetchData() {
  try {
    const response = await fetch(dbUrl);
    const data = await response.json();
    users = data.users;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Function to save data to JSON file
async function saveData() {
  try {
    await fetch(dbUrl, {
      method: 'PUT', // Assuming you're updating the entire file
      body: JSON.stringify({ users }),
      headers: {
        'Content-type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error saving data:', error);
  }
}

// CRUD operations
const crud = {
  // Create
  createUser(name) {
    const newUser = { id: users.length + 1, name };
    users.push(newUser);
    saveData();
  },

  // Read
  getUsers() {
    return users;
  },

  // Update
  updateUser(id, newName) {
    const user = users.find(user => user.id === id);
    if (user) {
      user.name = newName;
      saveData();
    }
  },

  // Delete
  deleteUser(id) {
    users = users.filter(user => user.id !== id);
    saveData();
  }
};

// Example usage:
(async () => {
  await fetchData();

  console.log('Initial users:', crud.getUsers());

  // Create a user
  crud.createUser('Alice');
  console.log('Users after adding:', crud.getUsers());

  // Update a user
  crud.updateUser(1, 'Bob');
  console.log('Users after updating:', crud.getUsers());

  // Delete a user
  crud.deleteUser(1);
  console.log('Users after deleting:', crud.getUsers());
})();
