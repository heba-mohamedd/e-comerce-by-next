import React from "react";

function Footer() {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-blue-950 text-white py-4 shadow-lg">
        <div className="container mx-auto">
          <div className="text-center">
            <span className="text-lg font-semibold">
              &copy; {new Date().getFullYear()} Ecommerce. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
