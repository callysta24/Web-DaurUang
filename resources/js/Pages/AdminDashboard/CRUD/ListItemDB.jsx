import React from "react";
import glassPhoto from "@/Assets/img/glass.jpg";

const ListItemDB = () => {
    return (
        <>
            <section className="px-2 pb-5 pt-16 bg-teal-700 md:px-0 ">
                <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
                    <div className="title-kriteria">
                        <div className="text-center ">
                            <p className="text-3xl text-white font-bold py-6">
                                List CRUD DB
                            </p>
                        </div>
                    </div>
                    <div className="container mx-auto pt-3 pb-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="flex justify-center text-6xl border-2 border-gray-300 rounded-xl bg-gray-100">
                                <div className="w-full max-w-sm bg-teal-700 border border-gray-200 rounded-lg shadow">
                                    <div className="px-5 pb-5">
                                        <div className="flex items-center justify-between py-5">
                                            <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                                WASTE (item)
                                            </h5>
                                            <span className="text-3xl font-bold text-gray-900 dark:text-white">
                                                20 kg
                                            </span>
                                        </div>
                                        <p className="text-sm text-white">
                                            Botol plastik, kantong plastik,
                                            kemasan plastik, wadah plastik, dan
                                            lainnya
                                        </p>
                                        <a href="/waste">
                                            <button
                                                type="button"
                                                className="w-full focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:focus:ring-yellow-900"
                                            >
                                                Lihat
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center text-6xl border-2 border-gray-300 rounded-xl  bg-gray-100">
                                <div className="w-full max-w-sm bg-teal-700 border border-gray-200 rounded-lg shadow ">
                                    <div className="px-5 pb-5">
                                        <div className="flex items-center justify-between py-5">
                                            <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                                KATEGORI SAMPAH
                                            </h5>
                                            <span className="text-3xl font-bold text-gray-900 dark:text-white">
                                                20 kg
                                            </span>
                                        </div>
                                        <p className="text-sm text-white">
                                            Botol plastik, kantong plastik,
                                            kemasan plastik, wadah plastik, dan
                                            lainnya
                                        </p>
                                        <a href="/waste-categories">
                                            <button
                                                type="button"
                                                className="w-full focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:focus:ring-yellow-900"
                                            >
                                                Lihat
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center text-6xl border-2 border-gray-300 rounded-xl  bg-gray-100">
                                <div className="w-full max-w-sm bg-teal-700 border border-gray-200 rounded-lg shadow ">
                                    <div className="px-5 pb-5">
                                        <div className="flex items-center justify-between py-5">
                                            <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                                DEPOSIT SAMPAH
                                            </h5>
                                            <span className="text-3xl font-bold text-gray-900 dark:text-white">
                                                20 Kg
                                            </span>
                                        </div>
                                        <p className="text-sm text-white">
                                            Botol plastik, kantong plastik,
                                            kemasan plastik, wadah plastik, dan
                                            lainnya
                                        </p>
                                        <a href="/waste-deposit">
                                            <button
                                                type="button"
                                                className="w-full focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:focus:ring-yellow-900"
                                            >
                                                Lihat
                                            </button>
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

export default ListItemDB;
