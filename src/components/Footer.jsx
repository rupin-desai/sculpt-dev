import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row bg-white border-t border-gray-300 py-10">
      {/* Rotated text section */}
      <div className="flex flex-col justify-center items-center text-center md:items-end md:text-right pr-2 pb-10 transform md:rotate-90 md:w-1/4">
        <div className="text-green-900 font-bold text-4xl md:text-8xl tracking-tighter">
          SCULPT
        </div>
        <div className="text-gray-custom font-thin text-2xl md:text-5xl tracking-tighter">
          DESIGNS
        </div>
      </div>

      {/* Contact section */}
      <div className="flex flex-col items-center md:items-start text-lg w-full md:w-3/4 px-5 md:px-10">
        <div className="text-sm text-gray-custom mb-3">
          Got a project idea?
        </div>
        <div className="text-2xl md:text-4xl font-bold mb-10 text-center md:text-left">
          Let’s make it happen.
        </div>

        <div className="flex flex-col md:flex-row w-full justify-center md:justify-evenly space-y-10 md:space-y-0 md:space-x-10">
          {/* Send Us an Email */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left px-10">
            <div className="text-lg font-bold text-green-900">Send Us an email</div>
            <div className="text-black font-thin text-sm">
              sculptdesignz@gmail.com
              <br />
              crajeshirke@gmail.com
            </div>
          </div>

          {/* Call Us */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left px-10">
            <div className="text-lg font-bold text-green-900">Call us</div>
            <div className="text-black font-thin text-sm">
              IND +919920545427
              <br />
              LDN +447435389040
            </div>
          </div>

          {/* Visit our Office */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left px-10">
            <div className="text-lg font-bold text-green-900">Visit our office</div>
            <div className="text-black font-thin text-sm">
              First Floor, West View Building, Hindu Colony Rd, Shivaji Nagar,
              Thane (W), Maharashtra 400602
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
