export default function Footer() {
    return (
      <div>
  <section className="bg-customTextColor py-10">
    <div className="container mx-auto px-4 text-center">
      
      {/* Links Section */}
      <div className="mb-6">
        <ul className="flex flex-col items-center space-y-2">
          <li className="text-white">
            <a href="#">FAQ</a>
          </li>
          <li className="text-white">
            <a href="#">Shipping and Returns</a>
          </li>
          <li className="text-white">
            <a href="#">Terms and Conditions</a>
          </li>
        </ul>
      </div>
  
      {/* Social Media Links */}
      <div className="mb-6">
        <ul className="flex flex-col items-center space-y-2">
          <li className="text-white">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          </li>
          <li className="text-white">
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">Pinterest</a>
          </li>
          <li className="text-white">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </li>
        </ul>
      </div>
  
      {/* Footer Text */}
      <div className="mb-6">
        <p className="text-whitesmoke text-sm">© 2035 by Flamingo Designs</p>
        <p className="text-whitesmoke text-sm">Powered and secured by Wix</p>
      </div>
    </div>
  </section>
  
      </div>
    )
  }