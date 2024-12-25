"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";

import { BinaryBackground } from "@/components/binary-background/binary-background";
import GlitchText from "../../components/glitch-text/glitch-text";
import { TerminalLogo } from "../assets/images/svg";

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const SignupPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    let isValid = true;
    const newErrors: FormErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
      isValid = false;
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(
        formData.password
      )
    ) {
      newErrors.password =
        "Password must include uppercase, lowercase, number, and special character";
      isValid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-primary p-4">
      <BinaryBackground />
      <div className="bg-brand-secondary/80 text-text-light p-6 sm:p-10 backdrop-blur-xl rounded-2xl shadow-2xl w-full max-w-md z-10 border border-accent-green/20">
        <div className="flex items-center justify-center mb-6">
          <TerminalLogo className="size-8" />
          <GlitchText
            text="0xbatch3rs"
            className="text-4xl pl-1 font-bold font-vt323"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center text-accent-green">
          Sign Up
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-brand-tertiary border-2 border-accent-green/30 rounded-lg focus:outline-none focus:border-accent-green transition-colors duration-300 peer"
              placeholder=" "
              required
            />
            <label className="absolute left-4 top-3 text-gray-400 text-sm transition-all duration-300 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 peer-focus:text-accent-green peer-focus:bg-brand-tertiary peer-focus:px-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-accent-green peer-[:not(:placeholder-shown)]:bg-brand-tertiary peer-[:not(:placeholder-shown)]:px-2">
              Email
            </label>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>
          <div className="relative">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-brand-tertiary border-2 border-accent-green/30 rounded-lg focus:outline-none focus:border-accent-green transition-colors duration-300 peer"
              placeholder=" "
              required
            />
            <label className="absolute left-4 top-3 text-gray-400 text-sm transition-all duration-300 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 peer-focus:text-accent-green peer-focus:bg-brand-tertiary peer-focus:px-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-accent-green peer-[:not(:placeholder-shown)]:bg-brand-tertiary peer-[:not(:placeholder-shown)]:px-2">
              Password
            </label>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>
          <div className="relative">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-brand-tertiary border-2 border-accent-green/30 rounded-lg focus:outline-none focus:border-accent-green transition-colors duration-300 peer"
              placeholder=" "
              required
            />
            <label className="absolute left-4 top-3 text-gray-400 text-sm transition-all duration-300 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 peer-focus:text-accent-green peer-focus:bg-brand-tertiary peer-focus:px-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-accent-green peer-[:not(:placeholder-shown)]:bg-brand-tertiary peer-[:not(:placeholder-shown)]:px-2">
              Confirm Password
            </label>
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-accent-green text-brand-primary font-bold rounded-lg transition-colors duration-300 hover:bg-accent-green-dark"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6 sm:mt-8">
          <p className="text-center text-sm text-gray-400">Or sign up with</p>
          <div className="flex flex-col sm:flex-row justify-center mt-4 space-y-3 sm:space-y-0 sm:space-x-4">
            <button className="flex items-center justify-center px-6 py-3 bg-red-600 rounded-lg transition-colors duration-300 hover:bg-red-700">
              <FaGoogle className="mr-2" /> Google
            </button>
            <button className="flex items-center justify-center px-6 py-3 bg-gray-700 rounded-lg transition-colors duration-300 hover:bg-gray-800">
              <FaGithub className="mr-2" /> GitHub
            </button>
          </div>
        </div>
        <p className="mt-6 sm:mt-8 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-accent-green hover:underline font-medium"
          >
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
