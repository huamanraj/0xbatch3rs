"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { BinaryBackground } from "@/components/binary-background/binary-background";
import GlitchText from "../../components/glitch-text/glitch-text";
import { TerminalLogo } from "../assets/images/svg";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Login submitted with:", { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-primary p-4">
      <BinaryBackground />
      <div className="bg-brand-secondary/80 text-text-light p-6 sm:p-10 backdrop-blur-xl rounded-2xl shadow-2xl w-full max-w-md z-10 border border-accent-green/20">
        <div className="flex items-center justify-center mb-3">
          <TerminalLogo className="size-8" />
          <GlitchText
            text="0xbatch3rs"
            className="text-4xl pl-1 font-bold font-vt323"
          />
        </div>
        <h1 className="text-3xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center text-accent-green">
          Welcome Back
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="relative">
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full px-4 py-3 bg-brand-tertiary border-2 border-accent-green/30 rounded-lg focus:outline-none focus:border-accent-green transition-colors duration-300 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-3 text-gray-400 text-sm transition-all duration-300 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 peer-focus:text-accent-green peer-focus:bg-brand-tertiary peer-focus:px-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-accent-green peer-[:not(:placeholder-shown)]:bg-brand-tertiary peer-[:not(:placeholder-shown)]:px-2"
            >
              Email
            </label>
          </div>
          <div className="relative">
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full px-4 py-3 bg-brand-tertiary border-2 border-accent-green/30 rounded-lg focus:outline-none focus:border-accent-green transition-colors duration-300 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="password"
              className="absolute left-4 top-3 text-gray-400 text-sm transition-all duration-300 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 peer-focus:text-accent-green peer-focus:bg-brand-tertiary peer-focus:px-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-accent-green peer-[:not(:placeholder-shown)]:bg-brand-tertiary peer-[:not(:placeholder-shown)]:px-2"
            >
              Password
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-accent-green text-brand-primary font-bold rounded-lg transition-colors duration-300 hover:bg-accent-green/70"
          >
            Sign In
          </button>
        </form>
        <div className="mt-6 sm:mt-8">
          <p className="text-center text-sm text-gray-400">Or continue with</p>
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
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-accent-green hover:underline font-medium"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
