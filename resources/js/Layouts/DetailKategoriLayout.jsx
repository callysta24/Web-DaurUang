import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { FaPlus } from "react-icons/fa";

const DetailKategoriLayout = () => {
    return (
        <>
            <section class="px-2 pb-5 pt-16 bg-teal-700 md:px-0 ">
                <div class="container items-center max-w-6xl px-8 mx-auto xl:px-5">
                    <div className="title-kriteria">
                        <div className="flex items-center justify-between py-5">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">
                                <a href="/admindashboard">
                                    <button
                                        type="button"
                                        className="w-full text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900 flex items-center justify-center"
                                    >
                                        <IoMdArrowBack className="mr-2" />
                                        Kembali
                                    </button>
                                </a>
                            </span>
                            <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                List Kategori Kaca
                            </h5>
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">
                                <a href="/admindashboard">
                                    <button
                                        type="button"
                                        className="w-full focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:focus:ring-yellow-900 flex items-center justify-center"
                                    >
                                        <FaPlus className="mr-2" />
                                        Tambah Barang
                                    </button>
                                </a>
                            </span>
                        </div>
                    </div>
                    <div class="container mx-auto pt-3 pb-8">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            DISINI TABLE NYA
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DetailKategoriLayout;
