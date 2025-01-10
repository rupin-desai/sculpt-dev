import React from "react";

const Footer = () => {
  return (
    <footer className="flex h-auto bg-white border-t border-gray-300">
      

      <div className="flex flex-col justify-end  text-right pr-2 pb-32 transform rotate-90">
        <div className="flex justify-end text-right font-bold text-8xl tracking-tighter  text-green-900">
          SCULPT
        </div>
        <div className="flex justify-end text-right font-thin text-5xl text-gray-custom tracking-tighter ">
          DESIGNS
        </div>
      </div>
      <div className="p-10 flex flex-col text-lg w-9/12">
        <div className="flex p text-sm text-gray-custom">
          Got a project idea?
        </div>
        <div className="flex p text-4xl font-bold">Let’s make it happen.</div>
        <div className="flex flex-row w-full justify-evenly p-20 pt-15">
          <div className="flex flex-col px-10">
            <div className="text-lg font-bold text-green-900">Send Us a email</div>
            <div className="text-black font-thin text-sm"> 
              sculptdesignz@gmail.com
              <br />
              crajeshirke@gmail.com
            </div>
          </div>
          <div className="flex px-10">
            <div className="flex flex-col px-10">
              <div className="text-lg font-bold text-green-900">Call us</div>
              <div className="text-black font-thin text-sm">
                IND +919920545427
                <br />
                LDN +447435389040
              </div>
            </div>
          </div>
          <div className="flex px-10">
            <div className="flex flex-col px-10">
              <div className="text-lg font-bold text-green-900">Visit our office</div>
              <div className="text-black font-thin text-sm">
                First Floor, West View Building, Hindu Colony Rd, Shivaji Nagar,
                Thane (W), Maharashtra 400602
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
