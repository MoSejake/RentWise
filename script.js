const form = document.getElementById("tenantForm");
const list = document.getElementById("tenantList");

let tenants = JSON.parse(localStorage.getItem("tenants")) || [];

function renderTenants() {
  list.innerHTML = "";
  tenants.forEach((tenant, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${tenant.name} - R${tenant.rent}
      <button onclick="removeTenant(${index})">❌</button>
    `;
    list.appendChild(li);
  });
}

function removeTenant(index) {
  tenants.splice(index, 1);
  localStorage.setItem("tenants", JSON.stringify(tenants));
  renderTenants();
}

form.addEventListener("submit", e => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const rent = document.getElementById("rent").value;

  tenants.push({ name, rent });
  localStorage.setItem("tenants", JSON.stringify(tenants));

  form.reset();
  renderTenants();
});

renderTenants();
