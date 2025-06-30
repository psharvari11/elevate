# Dynamic Form Generator with Validation

A simple React app that dynamically builds a form from a JSON schema, validates inputs on submit, and displays errors inline or shows submitted data as formatted JSON.

---

## Features

- Dynamically renders form fields based on a JSON schema.
- Supports input types: text, email, number, select, checkbox.
- Validates fields according to rules like required, minLength, maxLength, min, max.
- Displays validation errors right below each field.
- Shows the submitted form data as a nicely formatted JSON block.
- Prevents page reload on form submission.

---

## Tech Stack

- React 
- JavaScript (ES6+) 

---

## JSON Schema Format


Example schema:

```json
[
  { label: "Name", type: "text", name: "name", required: true, minLength: 3 },
  { label: "Email", type: "email", name: "email", required: true },
  { label: "Age", type: "number", name: "age", required: false, min: 18, max: 100 },
  { label: "Gender", type: "select", name: "gender", required: true, options: ["Male", "Female", "Other"] },
  { label: "Subscribe to newsletter", type: "checkbox", name: "subscribe", required: false },
];

```
## How to Use
-- Clone the repo

git clone https://github.com/psharvari11/elevate/edit/main/dynamic-form.git
cd dynamic-form
-- Install dependencies
npm install
-- Start the app
npm start
Open localhost to see the form in action.
