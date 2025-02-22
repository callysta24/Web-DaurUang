import React, { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { FaPlus } from "react-icons/fa";

const ModalCreate = ({ categories }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    console.log("bubton");

    const [values, setValues] = useState({
        pic_waste: "",
        merk_product: "",
        weight_waste: "",
        id_wc: "",
    });

    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post("/wastes", values);
    };
    return (
        <>
            <button
                type="button"
                className="w-full focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:focus:ring-yellow-900 flex items-center justify-center"
                onClick={openModal}
            >
                <FaPlus className="mr-2" />
                Tambah Barang
            </button>
            {isOpen && (
                <div
                    id="static-modal"
                    tabIndex="-1"
                    aria-hidden="true"
                    className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden"
                >
                    <div className="relative p-4 w-full max-w-2xl max-h-full">
                        {/* <!-- Modal content --> */}
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            {/* <!-- Modal header --> */}
                            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                    Tambah Waste
                                </h3>
                                <button
                                    type="button"
                                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-toggle="crud-modal"
                                    onClick={closeModal}
                                >
                                    <svg
                                        class="w-3 h-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        />
                                    </svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                            </div>
                            {/* <!-- Modal body --> */}
                            <form class="p-4 md:p-5" onSubmit={handleSubmit}>
                                <div class="grid gap-4 mb-4 grid-cols-2">
                                    <div class="col-span-2">
                                        <label
                                            for="name"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Merk Produk
                                        </label>
                                        <input
                                            type="text"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            required=""
                                            id="merk_product"
                                            value={values.merk_product}
                                            onChange={handleChange}
                                            placeholder="Merk"
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <label
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            for="file_input"
                                        >
                                            Unggah foto
                                        </label>
                                        {/* <input
                                            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                            id="file_input"
                                            type="file"
                                        /> */}
                                        <input
                                            type="text"
                                            id="pic_waste"
                                            value={values.pic_waste}
                                            onChange={handleChange}
                                            placeholder="Picture"
                                        />
                                    </div>
                                    <div class="col-span-2 sm:col-span-1">
                                        <label
                                            for="price"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Berat Setor /kg
                                        </label>
                                        <input
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            required=""
                                            type="number"
                                            id="weight_waste"
                                            value={values.weight_waste}
                                            onChange={handleChange}
                                            placeholder="Weight"
                                        />
                                    </div>
                                    <div class="col-span-2 sm:col-span-1">
                                        <label
                                            for="category"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Kategori
                                        </label>
                                        <select
                                            id="id_wc"
                                            value={values.id_wc}
                                            onChange={handleChange}
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        >
                                            {categories.map((category) => (
                                                <option
                                                    key={category.id}
                                                    value={category.id}
                                                >
                                                    {category.category_name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    <svg
                                        class="me-1 -ms-1 w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                    Simpan
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ModalCreate;
