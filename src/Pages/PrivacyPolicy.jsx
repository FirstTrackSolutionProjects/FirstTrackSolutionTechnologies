// PrivacyPolicy.js
import React from 'react';
import { useEffect } from "react";

const PrivacyPolicy = () => {
    useEffect(() => {
        document.title = "Privacy - First Track Solution Technologies";
    }, []); 
  return (
    <div className="min-h-screen bg-gray-100 p-6 font-inter">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4"><span className='font-semibold'>Email: </span>info@firsttracksolution.tech</p>
        <p className="mb-4"><span className='font-semibold'>Last updated: </span> July 18, 2024</p>
        
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="mb-4">
        First Track Solution Technologies is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <span className='text-blue-500'>https://firsttracksolution.tech/</span> and when you use our services .
         Please read this policy carefully to understand our policies and practices regarding your information and how we will treat it.</p>

        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
        <p className="mb-4">
          We collect various types of information in connection with the services we provide, including:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Personal identification information (Name, email address, phone number, etc.)</li>
          <li>Technical data (IP address, browser type, operating system, etc.)</li>
          <li>Usage data (Pages visited, time spent on pages, etc.)</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
        <p className="mb-4">
          We use the information we collect for various purposes, including:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>To provide and maintain our services</li>
          <li>Communicating with you, including responding to your inquiries and providing customer support</li>
          <li>To provide customer support</li>
          <li>To analyze and improve our services</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
        <p className="mb-4">
          We prioritize the security of your data and use various measures to protect it. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
        </p>
        <p className='mb-4'>
        We take reasonable measures to protect your information from unauthorized access or disclosure. However, no method of transmission over the internet or electronic storage is completely secure, so we cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Your Data Protection Rights</h2>
        <p className="mb-4">
        You may have certain rights regarding your personal information, such as the right to access, correct, or delete your information. Please contact us using the information provided below to exercise these rights
        </p>

        <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
        <p className="mb-4">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. It is advised to review this Privacy Policy periodically for any changes.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us:
        </p>
        <ul className="list-disc pl-6">
          <li>By email: <span className='text-blue-500'> info@firsttracksolution.tech</span></li>
          <li>By visiting this page on our website: <span className='text-blue-500'> https://firsttracksolution.tech/</span> </li>
          <li>By phone number: +91-9040170727</li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
