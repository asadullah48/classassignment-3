export default function Contact(){
    return(
        <div>
             <section className="min-h-screen flex flex-col justify-center items-center bg-whitesmoke py-10" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl  text-customTextColor">C O N T A C T   M E</h2>
          <p className="text-customTextColor mt-2">123-456-7890 / info@mysite.com</p>
          <p className="text-customTextColor mt-2">500 Terry Francine Street San Francisco, CA 94158</p>
        </div>

        <form className="max-w-lg mx-auto bg-whitesmoke  p-8">
          <div className="flex space-x-4 mb-4">
            <div className="w-1/2">
              <label htmlFor="firstName" className="block text-customTextColor">
                First name *
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full mt-2 p-2 border border-customTextColor rounded focus:outline-none focus:customTextColor"
                required
              />
            </div>

            <div className="w-1/2">
              <label htmlFor="lastName" className="block text-customTextColor">
                Last name *
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full mt-2 p-2 border border-customTextColor rounded focus:outline-none focus:border-customTextColor"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-customTextColor">
              Email *
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-2 p-2 border border-customTextColor rounded focus:outline-none focus:border-customTextColor"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="block text-customTextColor">
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              className="w-full mt-2 p-2 border border-customTextColor rounded focus:outline-none focus:border-customTextColor"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-customTextColor">
              Message
            </label>
            <textarea
              id="message"
              className="w-full mt-2 p-2 border border-customTextColor rounded focus:outline-none focus:border-customTextColor h-32"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center flex relative left-[58%]">
            <button
              type="submit"
              className="w-[40%] bg-customTextColor text-white p-2 rounded hover:bg-transparent hover:text-customTextColor  border border-customTextColor hover:border-customTextColor transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
        </div>
    )
}