import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { FaPlus } from "react-icons/fa";

const ListKaca = () => {
    const simpanData = (e) => {
        e.preventDefault();
        console.log("oke");
    };

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
                        {/* Table */}
                        <div class="container mx-auto px-4 sm:px-8">
                            {/* <div class="py-8"> */}
                            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                <div class="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                                    <table class="min-w-full leading-normal">
                                        <thead>
                                            <tr>
                                                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                                    Foto Limbah
                                                </th>
                                                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                                    Merk Produk
                                                </th>
                                                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                                    Berat Setor
                                                </th>
                                                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                                    Poin
                                                </th>
                                                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100">
                                                    {" "}
                                                    ...
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <div class="flex">
                                                        <div class="flex-shrink-0 w-10 h-10">
                                                            <img
                                                                class="w-full h-full rounded-full"
                                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div class="ml-3">
                                                            <p class="text-gray-900 whitespace-no-wrap">
                                                                Molly Sanders
                                                            </p>
                                                            <p class="text-gray-600 whitespace-no-wrap">
                                                                000004
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p class="text-gray-900 whitespace-no-wrap">
                                                        $20,000
                                                    </p>
                                                    <p class="text-gray-600 whitespace-no-wrap">
                                                        USD
                                                    </p>
                                                </td>
                                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p class="text-gray-900 whitespace-no-wrap">
                                                        Sept 28, 2019
                                                    </p>
                                                    <p class="text-gray-600 whitespace-no-wrap">
                                                        Due in 3 days
                                                    </p>
                                                </td>
                                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                        <span
                                                            aria-hidden
                                                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                                        ></span>
                                                        <span class="relative">
                                                            Paid
                                                        </span>
                                                    </span>
                                                </td>
                                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                                                    <a
                                                        href="#"
                                                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                                    >
                                                        Detail
                                                    </a>
                                                    /
                                                    <a
                                                        href="#"
                                                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                                    >
                                                        Edit
                                                    </a>
                                                    /
                                                    <a
                                                        href="#"
                                                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                                    >
                                                        Delete
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ListKaca;
