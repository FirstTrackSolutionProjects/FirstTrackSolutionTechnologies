import { useEffect } from "react";
import React from 'react';

const TermsOfUse = () => {
    useEffect(() => {
        document.title = "Terms Of Use - First Track Solution Technologies";
    }, []); 
  return (
    <div className="container mx-auto px-4 py-8 font-inter">
      <h1 className="text-xl md:text-3xl font-bold mb-4">Terms of Use</h1>
      <p className="mb-4">Welcome to <span className='text-orange-500 font-semibold'>First Track Solution Technologies.</span> By accessing or using our website, you agree to comply with and be bound by the following terms and conditions of use. Please read these terms carefully before using our site.</p>

      <h2 className="text-lg md:text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
      <p className="mb-4">By accessing and using this website, you accept and agree to be bound by the terms and conditions of this agreement. If you do not agree to abide by the above, please do not use this service.</p>

      <h2 className="text-lg md:text-2xl font-semibold mb-2">2. Changes to Terms</h2>
      <p className="mb-4">We reserve the right to modify these terms at any time. You should check this page periodically for changes. By using this website after we post any changes, you agree to accept those changes, whether or not you have reviewed them.</p>

      <h2 className="text-lg md:text-2xl font-semibold mb-2">3. Privacy Policy</h2>
      <p className="mb-4">Your use of our website is also subject to our Privacy Policy. Please review our Privacy Policy, which also governs the website and informs users of our data collection practices.</p>

      <h2 className="text-lg md:text-2xl font-semibold mb-2">4. Use of Website</h2>
      <p className="mb-4">You are granted a non-exclusive, non-transferable, revocable license to access and use this website strictly in accordance with these terms of use. As a condition of your use of the site, you warrant to First Track Solution Technologies that you will not use the site for any purpose that is unlawful or prohibited by these terms.</p>

      <h2 className="text-lg md:text-2xl font-semibold mb-2">5. Intellectual Property</h2>
      <p className="mb-4">All content included on the site, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the site, is the property of First Track Solution Technologies or its suppliers and protected by copyright and other laws that protect intellectual property and proprietary rights.</p>

      <h2 className="text-lg md:text-2xl font-semibold mb-2">6. Termination</h2>
      <p className="mb-4">We may terminate or suspend access to our site immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the terms.</p>

      <h2 className="text-lg md:text-2xl font-semibold mb-2">7. Limitation of Liability</h2>
      <p className="mb-4">In no event shall First Track Solution Technologies, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your use or inability to use the service; (ii) any unauthorized access to or use of our servers and/or any personal information stored therein.</p>

      <h2 className="text-lg md:text-2xl font-semibold mb-2">8. Governing Law</h2>
      <p className="mb-4">These terms shall be governed and construed in accordance with the laws of the state/country, without regard to its conflict of law provisions.</p>

      <h2 className="text-lg md:text-2xl font-semibold mb-2">9. Contact Information</h2>
      <p className="mb-4">If you have any questions about these Terms, please contact us at <span className='text-blue-500'>contact@firsttracksolutiontechnologies.com</span></p>
    </div>
  );
}

export default TermsOfUse;
