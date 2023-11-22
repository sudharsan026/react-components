import React from "react";
import "./App.css";
const tenants = [
  { first_name: "Vijay", id: "tenant1" },
  { first_name: "Hema", id: "tenant2" },
  { first_name: "Yonishsha", id: "tenant3" },
  { first_name: "Sindhu", id: "tenant4" },
  { first_name: "Sudharsan", id: "tenant5" },
];
const farr = [
  {
    formID: "form1",
    title: "Resident Notification Letter",
    tenantID: [
      { tenant_id: "tenant1", status: "new" },
      { tenant_id: "tenant2", status: "completed" },
      { tenant_id: "tenant5", status: "completed" },
    ],
  },
  {
    formID: "form2",
    title: "Rental Notification Letter",
    tenantID: [
      { tenant_id: "tenant1", status: "new" },
      { tenant_id: "tenant2", status: "completed" },
      { tenant_id: "tenant3", status: "new" },
      { tenant_id: "tenant4", status: "completed" },
      { tenant_id: "tenant5", status: "completed" },
    ],
  },
  {
    formID: "form3",
    title: "Employ Letter",
    tenantID: [
      { tenant_id: "tenant1", status: "new" },
      { tenant_id: "tenant2", status: "completed" },
      { tenant_id: "tenant3", status: "completed" },
    ],
  },
];
const getTenantName = (id) => {
  let tenantsNeeded = [];
  for (let i in tenants) {
    if (tenants[i].id === id) {
      tenantsNeeded.push(tenants[i]);
    }
  }
  let tenantNames = tenantsNeeded.map((_tenantName) => _tenantName.first_name);
  console.log(tenantNames);
  return tenantNames;
};
const navFun = (tenantID, formID) => {
  console.log(tenantID);
  console.log(formID);
};
const FormList = ({ formData }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    }}
  >
    {formData.map((form, index) => (
      <div
        key={index}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            boxShadow: "0px 0px 2px 0 rgba(0,0,0,0.6)",
            marginBottom: "12px",
            padding: "10px 10px",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div>{form.title}</div>
          <div style={{ display: "flex", gap: "12px" }}>
            {form.tenantID.map((tenant, tenantIndex) => (
              <div key={tenantIndex}>
                <div
                  className={
                    tenant.status == "new" ? "tenant" : "tenant-active"
                  }
                  onClick={() => navFun(tenant.tenant_id, form.formID)}
                >
                  <div className={"tenant-tooltip"}>
                    {getTenantName(tenant.tenant_id)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
);

const App = () => {
  return (
    <div className="App">
      <FormList formData={farr} />
    </div>
  );
};

export default App;
