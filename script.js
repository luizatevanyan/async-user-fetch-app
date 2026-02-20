const button = document.getElementById("loadBtn");
const usersContainer = document.getElementById("users");

button.addEventListener("click", loadUsers);

async function loadUsers() {
  usersContainer.innerHTML = "Loading...";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const users = await response.json();

    usersContainer.innerHTML = "";

    users.forEach(user => {
      const div = document.createElement("div");
      div.innerHTML = `
        <h3>${user.name}</h3>
        <p>Email: ${user.email}</p>
      `;
      usersContainer.appendChild(div);
    });

  } catch (error) {
    usersContainer.innerHTML = "Error loading users.";
    console.error(error);
  }
}
