import React, { useState, useEffect } from "react";
import axios from "axios"; // Import library Axios
import { InertiaLink } from "@inertiajs/inertia-react";
import ModalTambah from "@/Sections/AdminHome/ModalKaca/ModalTambah";
import { IoMdArrowBack } from "react-icons/io";
import ModalCreate from "./ModalCreate";
import Create from "./Create";

const Index = ({ wastes }) => {
    // State untuk menyimpan data categories dari backend
    const [categories, setCategories] = useState([]);

    // Gunakan useEffect untuk mengambil data categories saat komponen dimount
    useEffect(() => {
        // Definisikan fungsi untuk mengambil data categories dari backend
        const fetchCategories = async () => {
            try {
                const response = await axios.get("/api/waste-category"); // Ganti URL dengan URL yang sesuai dengan endpoint backend Anda
                setCategories(response.data.data); // Simpan data categories ke state
                console.log(response.data.data, "halo kategori");
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        // Panggil fungsi untuk mengambil data categories
        fetchCategories();
    }, []);

    return (
        <>
            <section className="px-2 pb-5 pt-16 bg-teal-700 md:px-0 ">
                <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
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
                            <h5 className="text-2xl font-semibold tracking-tight text-white dark:text-white">
                                List Kategori Waste
                            </h5>
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">
                                <ModalCreate
                                    // categories={categories}
                                    categories={[]}
                                />
                            </span>
                        </div>
                    </div>
                    <div className="container mx-auto pt-3 pb-8">
                        {/* Table */}
                        <div className="container mx-auto px-4 sm:px-8">
                            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                                    <table className="min-w-full leading-normal">
                                        <thead>
                                            <tr>
                                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                                    Foto Limbah
                                                </th>
                                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                                    Merk Produk
                                                </th>
                                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                                    Berat Setor
                                                </th>
                                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                                    Poin / Kategori
                                                </th>
                                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100">
                                                    ...
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {wastes.map((waste) => (
                                                <tr key={waste.id}>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        {/* Ganti dengan tag img untuk menampilkan gambar */}
                                                        <img
                                                            src={
                                                                waste.pic_waste
                                                            }
                                                            alt="Foto Limbah"
                                                            className="w-10 h-10"
                                                        />
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        {waste.merk_product}
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        {waste.weight_waste}
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        {waste.wasteCategory
                                                            ? waste
                                                                  .wasteCategory
                                                                  .category_name
                                                            : "No Category"}
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                                                        <InertiaLink
                                                            href={`/wastes/${waste.id}/edit`}
                                                            className="btn btn-warning"
                                                        >
                                                            Edit
                                                        </InertiaLink>
                                                        <InertiaLink
                                                            href={`/wastes/${waste.id}`}
                                                            className="btn btn-danger"
                                                            method="delete"
                                                            as="button"
                                                        >
                                                            Delete
                                                        </InertiaLink>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Index;
