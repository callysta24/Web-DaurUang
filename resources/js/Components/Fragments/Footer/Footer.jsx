import React from "react";

function Footer() {
    return (
        <>
            <section className="text-gray-700 bg-white body-font">
                <div className="container flex flex-col items-center px-8 py-8 mx-auto max-w-7xl sm:flex-row">
                    {/* <a
                        href="#_"
                        className="text-xl font-black leading-none text-gray-900 select-none logo"
                    >
                        tails<span className="text-indigo-600">.</span>
                    </a> */}
                    <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0">
                        © 2024 DaurUang
                    </p>
                </div>
            </section>
        </>
    );
}

export default Footer;
