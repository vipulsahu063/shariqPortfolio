import React, { useState } from 'react';

const BookSection = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(''); // To show the success/error message

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if the email is entered
    if (!email) {
      setStatus('Please enter a valid email.');
      return;
    }

    try {
      // Send a POST request to the backend API (Netlify function)
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('Email sent successfully!');
      } else {
        setStatus('Failed to send email.');
      }
    } catch (error) {
      setStatus('Error occurred while sending email.');
    }
  };

  return (
    <section
      id="book"
      className="px-4 mt-10 md:mt-0 md:pt-20 sm:px-8 md:px-20 lg:px-40 xl:px-60"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Book</h2>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
        <div className="flex-1 flex justify-center">
          <img
            src="/book.jpg"
            alt="Book Cover"
            className="max-w-xs md:w-[60%] w-[80%] sm:max-w-sm md:max-w-md rounded-2xl border border-gray-300 p-4 sm:p-6 md:p-8 object-cover"
          />
        </div>

        <div className="flex-1 relative">
          <div
            className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-10"
            style={{ backgroundImage: "url('/bglogo.png')", backgroundSize: '1000px 1000px' }}
          ></div>

          <div className="relative max-w-xs sm:max-w-sm md:max-w-md mx-auto space-y-6 p-6 md:p-10 h-full flex flex-col justify-center text-white">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Get Your Copy</h2>
            <p className="text-base sm:text-lg mb-4">
              The book merges graphic design and UI/UX, offering key skills
              and insights for creating engaging user experiences and visually
              striking designs for all levels.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Gmail"
                type="email"
                required
                className="w-full p-4 text-base sm:text-lg border-b-2 border-white placeholder-white bg-transparent focus:outline-none"
              />
              <button
                type="submit"
                className="w-full inline-block p-4 text-base sm:text-lg font-bold border text-white rounded-md text-center bg-blue-500"
              >
                Download
              </button>
            </form>
            {status && <p className="mt-4 text-red-500">{status}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;
