import React, { useState } from "react";

function StudentCreate() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const createStudent = () => {
    fetch("http://localhost:2023/students/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((response) => response.json)
      .then((data) => console.log(data));
    console.log(form);
  };
  return (
    <div>
      {/* {JSON.stringify(form)} */}
      <h5>Create Students</h5>
      <input
        className="mb-2"
        type="text"
        placeholder="first name"
        name="firstName"
        value={form.firstName}
        onChange={handleChange}
      />
      <br />
      <input
        className="mb-2"
        type="text"
        placeholder="last name"
        name="lastName"
        value={form.lastName}
        onChange={handleChange}
      />
      <br />
      <input
        className="mb-2"
        type="text"
        placeholder="gender"
        name="gender"
        value={form.gender}
        onChange={handleChange}
      />
      <br />
      <input
        className="mb-2"
        type="email"
        placeholder="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <br />
      <button onClick={createStudent}>submit</button>
    </div>
  );
}

export default StudentCreate;
