const ContactUs = () => {
  return (
    <section id="contact-us" className="bg-gray-100 py-12">
      <div className="max-w-[1650px] mx-auto px-2 sm:px-4 lg:px-10">
        <div className="flex flex-col md:flex-row md:space-x-8 items-center">
          <div className="md:w-1/2 w-full">
            <form className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                ></textarea>
              </div>
              <button
                className="w-full hover:bg-blue-500 text-white font-bold py-2 rounded-md bg-[#59b6df] transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="md:w-1/2 my-5 px-2 sm:px-4 lg:px-10">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              We are waiting for you
            </h3>
            <p className="text-gray-700 mb-4 text-base font-medium">
              We had love to hear from you! Whether you have a question about
              our services, pricing, or anything else, our team is ready to
              answer all your questions.
            </p>
            <p className="text-gray-800 font-medium">
              <strong>Email:</strong> support@lifecare.com
            </p>
            <p className="text-gray-800 font-medium">
              <strong>Phone:</strong> +880 174 194 2510
            </p>
            <p className="text-gray-800 font-medium">
              <strong>Address:</strong> 123 LifeCare St, Healthy City, HC 12345
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
