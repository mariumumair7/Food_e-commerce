'use client'; // Added the use client directive because of the usage of states

import { useState } from 'react';
import Head from 'next/head';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const validateForm = () => {
    let isValid = true;

    if (name.trim() === '') {
      setNameError('Name is required');
      isValid = false;
    } else {
      setNameError('');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email format');
      isValid = false;
    } else {
        setEmailError('');
    }

    if (message.trim() === '') {
      setMessageError('Message is required');
      isValid = false;
    } else {
      setMessageError('');
    }

    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }
    setSubmissionStatus('submitting');

    // Simulate form submission (replace with your API call)
    try{
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setSubmissionStatus('success');
        // Clear the fields when submitted successfully
        setName('');
        setEmail('');
        setMessage('');
    } catch (error){
        console.error("Error sending the form", error)
        setSubmissionStatus('error');
    }
  };


  return (
    <>
       <Head>
        <title>Contact Us | Crisp & Crunch</title>
      </Head>
      <section className="bg-yellow-100 py-16 px-6">
        <div className="container mx-auto max-w-2xl">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Contact Us
          </h1>
          <p className="text-center mb-6 text-gray-700">
            Have a question or feedback? We'd love to hear from you!
          </p>

          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  nameError ? 'border-red-500' : ''
                }`}
                id="name"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {nameError && (
                <p className="text-red-500 text-xs italic mt-1">{nameError}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-yellow-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Your Email
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    emailError ? 'border-red-500' : ''
                }`}
                id="email"
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
                 {emailError && (
                  <p className="text-red-500 text-xs italic mt-1">{emailError}</p>
                )}
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Your Message
              </label>
              <textarea
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    messageError ? 'border-red-500' : ''
                }`}
                id="message"
                rows="5"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {messageError && (
                <p className="text-red-500 text-xs italic mt-1">{messageError}</p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
               {submissionStatus === 'submitting' && (
                <p className="mt-4 text-center text-gray-600">Submitting...</p>
                )}
            {submissionStatus === 'success' && (
                <p className="mt-4 text-center text-green-600">Message sent successfully!</p>
            )}
           {submissionStatus === 'error' && (
            <p className="mt-4 text-center text-red-600">Oops! something went wrong please try again later</p>
           )}
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactUs;