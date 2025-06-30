import React, { useState } from "react";
const schema = [
  {
    label: "Name",
    type: "text",
    name: "name",
    required: true,
    minLength: 3,
  },
  {
    label: "Email",
    type: "email",
    name: "email",
    required: true,
  },
  {
    label: "Age",
    type: "number",
    name: "age",
    required: false,
    min: 18,
    max: 100,
  },
  {
    label: "Gender",
    type: "select",
    name: "gender",
    required: true,
    options: ["Male", "Female", "Other"],
  },
  {
    label: "Subscribe to newsletter",
    type: "checkbox",
    name: "subscribe",
    required: false,
  },
];

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    subscribe: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(null);
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  function validate() {
    const err = {};

    if (schema[0].required && formData.name.trim().length < 3) {
      err.name = "Name should be at least 3 characters";
    }

    if (schema[1].required && !formData.email.trim()) {
      err.email = "Email is required";
    } else if (formData.email && !formData.email.includes("@")) {
      err.email = "Email invalid";
    }
    if (formData.age) {
      const numage = Number(formData.age);
      if (numage < 18) {
        err.age = "Age should be at least 18";
      }
      if (numage > 100) {
        err.age = "Age limit till 100";
      }
    }

    if (schema[3].required && !formData.gender) {
      err.gender = "Gender is required";
    }

    return err;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errorsvalidator = validate();
    setErrors(errorsvalidator);

    if (Object.keys(errorsvalidator).length === 0) {
      setSubmitted(formData);
      console.log("Form data:", formData);
    } else {
      setSubmitted(null);
    }
  }

  return (
    <div>
      <h2>Dynamic Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
          {errors.age && <span style={{ color: "red" }}>{errors.age}</span>}
        </div>
        <div>
          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select gender</option>
            {schema[3].options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.gender && (
            <span style={{ color: "red" }}>{errors.gender}</span>
          )}
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
            />
            Subscribe
          </label>
        </div>
        <button type="submit" style={{ marginTop: "10px" }}>
          Submit
        </button>
      </form>
      {submitted && (
        <div
          style={{
            backgroundColor: "grey",
            marginTop: "20px",
            padding: "10px",
          }}
        >
          {JSON.stringify(submitted)}
        </div>
      )}
    </div>
  );
};

export default App;
