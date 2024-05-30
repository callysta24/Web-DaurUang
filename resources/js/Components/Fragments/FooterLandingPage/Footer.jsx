import React from "react";
import iconLogo from "@/Assets/icons/logo-dauruang-putih.png";

const Footer = () => {
    return (
        <>
            <footer className="bg-orange-500 rounded-t-3xl rounded shadow shadow-2xl shadow-gray-600 mt-20">
                <div className="max-w-screen-xl px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24">
                    <div className="flex justify-between">
                        <div className=" flex-grow pr-96">
                            <div className="flex text-teal-300 sm:justify-start">
                                <img
                                    src={iconLogo}
                                    alt="Logo"
                                    className="h-12"
                                />
                            </div>
                            <p className="max-w-md mx-auto mt-6 leading-relaxed text-center font-medium text-white sm:max-w-xs sm:mx-0 sm:text-left">
                                DaurUang membantu Anda mengelola sampah dengan
                                mudah dan mendapatkan manfaat langsung.
                            </p>
                        </div>
                        <div className="flex-grow pl-60">
                            <p className="text-lg font-medium text-white">
                                Kontak Kami
                            </p>
                            <ul className="mt-8 space-y-4 text-sm">
                                <li>
                                    <a
                                        className="flex items-center justify-center sm:justify-start gap-1.5 group"
                                        href="/"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5 text-white shrink-0"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                        <span className="text-white transition group-hover:text-white/75">
                                            admin@dauruang.com
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="flex items-center justify-center sm:justify-start gap-1.5 group"
                                        href="/"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5 text-white shrink-0"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>
                                        <span className="text-white transition group-hover:text-white/75">
                                            0123456789
                                        </span>
                                    </a>
                                </li>
                                <li className="flex items-start justify-center gap-1.5 sm:justify-start">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 text-white shrink-0"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                    <address className="-mt-0.5 not-italic text-white">
                                        Kota Malang, Jawa Timur, Indonesia
                                    </address>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-6 mt-12 border-t border-white">
                        <div className="text-center sm:flex sm:justify-between sm:text-left">
                            <p className="text-sm text-gray-400">
                                <span className="block sm:inline text-white font-medium">
                                    All rights reserved.
                                </span>
                            </p>
                            <p className="mt-4 text-sm text-white font-medium sm:order-first sm:mt-0">
                                &copy; 2024 DaurUang
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
