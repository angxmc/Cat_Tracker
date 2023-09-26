import React, { useState } from "react";
import { signUp } from "../../utilities/users-service";

export default function SignUpForm({ setUser }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  });

  const disable = formData.password !== formData.confirm;

  const handleChange = (e) => {
    setFormData({
      //spread the data already in there
      ...formData,
      //then update to whatever the user is typing
      [e.target.name]: e.target.value,
      error: "",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      //copy formData
      const userFormData = { ...formData };
      //delete the extra properties
      delete userFormData.confirm;
      delete userFormData.error;

      console.log(userFormData);

      //calling user service signup function
      const user = await signUp(formData);
      console.log("USER", user);
      setUser(user);
    } catch (error) {
      console.log(error);
      setFormData({
        ...formData,
        error: "Sign Up Failed - Try Again",
      });
    }
  };

  return (
    <div className=" m-5 content-center justify-center content-around items-center">
      <h1 className="font-mono">Help Your Cat Stay Healthy</h1>
      <p className="font-emoji">😻</p>
      <div className="border-2 rounded m-2 p-5  ">
        <form
          className="flex-col  m-2"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label> Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirm"
            value={formData.confirm}
            onChange={handleChange}
            required
          />

          {/* disables the button when the passwords don't match */}
          <button type="submit" disabled={disable}>
            Sign Up
          </button>
        </form>
      </div>
      <p className="error-message">{formData.error}</p>
    </div>
  );
}
