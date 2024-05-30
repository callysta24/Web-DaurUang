import React from "react";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { BsStars } from "react-icons/bs";
import { FaRecycle } from "react-icons/fa";

const Layanan = () => {
    return (
        <>
            <section class="px-2 py-32 bg-white md:px-0 bg-teal-700">
                <div class="container items-center max-w-6xl px-8 mx-auto xl:px-5">
                    <div className="title-layanan">
                        <div class="text-center p-10">
                            <h1 class="text-4xl font-extrabold tracking-tight text-amber-50 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                                DaurUang Bumi Hijau
                            </h1>
                            <p className="text-3xl text-orange-300 font-bold py-4">
                                Tersedia Layanan Kami
                            </p>
                        </div>
                    </div>
                    <div className="content-layanan">
                        <div className="container mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="flex flex-col items-center text-center p-6">
                                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow  h-auto flex-grow">
                                        <RiCalendarScheduleLine className="text-black text-6xl mx-auto mb-4" />
                                        <a href="#">
                                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-700">
                                                Penjemputan Sampah
                                            </h5>
                                        </a>
                                        <p className="mb-3 font-bold text-gray-500">
                                            Pengguna dapat menjadwalkan
                                            penjemputan sampah sesuai
                                            kategorinya melalui website.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center text-center p-6">
                                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow  h-auto">
                                        <BsStars className="text-black text-6xl mx-auto mb-4" />
                                        <a href="#">
                                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-700">
                                                Point & Rewards
                                            </h5>
                                        </a>
                                        <p className="mb-3 font-bold text-gray-500 ">
                                            Setiap sampah yang dikirim akan
                                            mendapatkan poin berdasarkan berat
                                            dan jenisnya. Poin dapat ditukarkan
                                            dengan berbagai voucher.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center text-center p-6">
                                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow  h-auto">
                                        <FaRecycle className="text-black text-6xl mx-auto mb-4" />
                                        <a href="#">
                                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-700">
                                                Edukasi R3
                                            </h5>
                                        </a>
                                        <p className="mb-3 font-bold text-gray-500">
                                            Terdapat berbagai artikel tentang
                                            pentingnya daur ulang, cara memilah
                                            sampah, juga panduan praktis untuk
                                            mengurangi limbah di rumah.
                                        </p>
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

export default Layanan;
