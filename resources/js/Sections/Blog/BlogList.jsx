import React from "react";
import beritasatu from "@/Assets/img/satu-berita (1).png";

const BlogList = () => {
    return (
        <>
            <section className="px-2 py-32 bg-white md:px-0 ">
                <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                            <div className="flex justify-center items-center">
                                <img src={beritasatu} alt="logo" />
                            </div>
                            <div className="flex justify-center items-center">
                                <div className="grid-berita">
                                    <div className="p-5">
                                        <a href="#">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
                                                Prinsip Pengolahan Limbah Sampah
                                                yang Baik Bagi Lingkungan
                                            </h5>
                                        </a>
                                        <p className="mb-3 text-sm font-normal text-gray-700">
                                            Lorem ipsum dolor sit amet
                                            consectetur. Maecenas orci fames ac
                                            justo massa odio facilisis vulputate
                                            ut. Libero a porta malesuada tortor
                                            volutpat habitasse est in vitae. Sed
                                            pellentesque aliquam a nunc neque
                                            placerat phasellus lectus ac.
                                            Adipiscing nibh cursus pretium
                                            consectetur. Pellentesque arcu
                                            ullamcorper odio id auctor. Sed
                                            tristique sodales fames volutpat
                                            nunc mauris etiam habitant lacus.
                                        </p>

                                        <a
                                            href="#"
                                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-600 rounded-lg hover:bg-orange-700 "
                                        >
                                            Baca Yuk
                                            <svg
                                                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 14 10"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogList;
