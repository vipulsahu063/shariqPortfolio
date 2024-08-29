const BookSection = () => {
  return (
    <section id="book" className="pt-40 px-60">
      <h2 className="text-3xl font-bold mb-6">Book</h2>
      <div className="flex flex-1 items-center justify-center">
        <div className="flex flex-col md:flex-row w-full items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
          {/* Book Image Container */}
          <div className="flex-1 flex justify-center">
            <img
              src="/book.jpg" // Replace with your book image
              alt="Book Cover"
              loading="lazy"
              className="w-3/4 max-w-[300px] rounded-2xl border border-gray-300 p-8 object-cover"
            />
          </div>

          {/* Right Flex Container with Background Image */}
          <div className="flex-1 relative w-full h-full">
            {/* Background image using Tailwind CSS */}
            <div
              className="absolute inset-0 bg-center bg-no-repeat opacity-10"
              style={{ backgroundImage: "url('/bglogo.png')" }} // Replace with your background image path
            ></div>

            {/* Content with background overlay */}
            <div className="relative max-w-md mx-auto space-y-4 p-10 h-full flex flex-col justify-center text-white">
              <h2 className="text-2xl font-bold mb-4">Get Your Copy</h2>
              <p className="text-lg mb-4">
                The book merges graphic design and UI/UX, offering key skills
                and insights for creating engaging user experiences and visually
                striking designs for all levels.
              </p>
              <input
                placeholder="Enter your Gmail"
                type="email"
                disabled
                className="w-full p-4 text-lg border-b-2 border-white placeholder-white bg-transparent focus:outline-none cursor-not-allowed opacity-50"
              />
              <a
                className="w-full inline-block p-4 text-lg font-bold border text-white rounded-md text-center cursor-not-allowed opacity-50"
              >
                Coming Soon
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;
