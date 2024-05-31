import React from "react";
import beritasatu from "@/Assets/img/beritasatu.png";
import beritadua from "@/Assets/img/beritadua.png";
import beritatiga from "@/Assets/img/beritatiga.png";


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
                                        Pengolahan limbah sampah yang baik dan ramah lingkungan menjadi semakin krusial di tengah 
                                        meningkatnya produksi sampah global. Artikel ini membahas prinsip-prinsip dasar yang harus 
                                        diikuti untuk mengelola limbah dengan cara yang meminimalkan dampak negatif terhadap lingkungan. 
                                        Dimulai dengan pemahaman mengenai jenis-jenis limbah dan sumbernya, pentingnya pemilahan 
                                        sampah di sumbernya yang memisahkan sampah organik, anorganik, dan berbahaya.                                        </p>

                                        <a
                                            href="/artikel"
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

                            <div className="flex justify-center items-center">
                                <img src={beritadua} alt="logo" />
                            </div>
                            <div className="flex justify-center items-center">
                                <div className="grid-berita">
                                    <div className="p-5">
                                        <a href="#">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
                                            Menanggulangi Sampah di Lautan: Upaya Daur Ulang 
                                            untuk Menyelamatkan Ekosistem Laut
                                            </h5>
                                        </a>
                                        <p className="mb-3 text-sm font-normal text-gray-700">
                                        Sampah plastik yang mencemari lautan telah menjadi ancaman serius bagi kehidupan
                                         laut dan kesehatan manusia. Artikel ini membahas berbagai upaya daur ulang yang
                                          dapat dilakukan untuk mengurangi dampak negatif sampah plastik di lautan. 
                                          Mulai dari inovasi teknologi untuk mengubah sampah plastik menjadi bahan yang 
                                          dapat digunakan kembali, hingga inisiatif komunitas lokal yang aktif 
                                          mengumpulkan dan mendaur ulang sampah laut.                                        </p>

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

                            
                            <div className="flex justify-center items-center">
                                <img src={beritatiga} alt="logo" />
                            </div>
                            <div className="flex justify-center items-center">
                                <div className="grid-berita">
                                    <div className="p-5">
                                        <a href="#">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
                                            Mengubah Sampah Organik Menjadi Kompos: 
                                            Solusi Ramah Lingkungan untuk Limbah Rumah Tangga
                                            </h5>
                                        </a>
                                        <p className="mb-3 text-sm font-normal text-gray-700">
                                        Sampah organik sering kali terabaikan sebagai sumber polusi potensial, padahal 
                                        memiliki nilai guna yang tinggi jika diolah dengan benar. Artikel ini menjelaskan 
                                        bagaimana sampah dapur dan kebun dapat diubah menjadi kompos berkualitas tinggi 
                                        melalui proses pengomposan. Dengan metode sederhana yang bisa diterapkan di rumah, 
                                        pembaca akan dipandu langkah demi langkah dalam mengelola sampah organik mereka.                                        </p>

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
