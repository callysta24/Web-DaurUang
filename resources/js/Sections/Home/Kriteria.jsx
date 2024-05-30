import React from "react";
import kertas from "@/Assets/img/kertas.jpg";
import plastik from "@/Assets/img/plastik.jpg";
import kaca from "@/Assets/img/glass.jpg";
import logam from "@/Assets/img/logam.jpg";
import elektronik from "@/Assets/img/elektronik.jpg";
import tekstil from "@/Assets/img/tekstil.jpg";


const Kriteria = () => {
    return (
        <div>
            <section class="px-2 py-32 bg-white md:px-0 ">
                <div class="container items-center max-w-6xl px-8 mx-auto xl:px-5">
                    <div className="title-kriteria">
                        <div class="text-center p-10">
                            <h1 class="text-4xl font-extrabold tracking-tight text-black sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                                Anda Buang Kami Beli
                            </h1>
                            <p className="text-3xl text-gray-600 font-bold py-4">
                                Kriteria Barang yang Kami Terima Apa Aja Sih?
                            </p>
                        </div>
                    </div>
                    <div class="container mx-auto">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div class="flex justify-center text-6xl border-2 border-gray-300 rounded-xl bg-gray-100">
                                <div class="w-full max-w-sm bg-teal-700 border border-gray-200 rounded-lg shadow ">
                                    <img
                                        src={kertas}
                                        alt="Glass"
                                        class="w-full h-48 object-cover"
                                    />

                                    <div class="px-5 pb-5">
                                        <div class="flex items-center justify-between py-5">
                                            <h5 class="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                                Kertas
                                            </h5>
                                            <span class="text-3xl font-bold text-gray-900 dark:text-white">
                                                20 poin/kg
                                            </span>
                                        </div>
                                        <p className="text-sm text-white">
                                            Sampah berbahan dasar kertas seperti koran, majalah, kardus, karton,
                                            kertas kemasan, kotak susu, dan lainnya
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="flex justify-center text-6xl border-2 border-gray-300 rounded-xl  bg-gray-100">
                                <div class="w-full max-w-sm bg-teal-700 border border-gray-200 rounded-lg shadow ">
                                    <img
                                        src={plastik}
                                        alt="Glass"
                                        class="w-full h-48 object-cover"
                                    />

                                    <div class="px-5 pb-5">
                                        <div class="flex items-center justify-between py-5">
                                            <h5 class="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                                Plastik
                                            </h5>
                                            <span class="text-3xl font-bold text-gray-900 dark:text-white">
                                                20 poin/kg
                                            </span>
                                        </div>
                                        <p className="text-sm text-white">
                                        Sampah berbahan dasar plastik seperti botol plastik, kantong plastik, 
                                        kemasan plastik, wadah plastik, dan lainnya
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="flex justify-center text-6xl border-2 border-gray-300 rounded-xl  bg-gray-100">
                                <div class="w-full max-w-sm bg-teal-700 border border-gray-200 rounded-lg shadow ">
                                    <img
                                        src={kaca}
                                        alt="Glass"
                                        class="w-full h-48 object-cover"
                                    />

                                    <div class="px-5 pb-5">
                                        <div class="flex items-center justify-between py-5">
                                            <h5 class="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                                Kaca
                                            </h5>
                                            <span class="text-3xl font-bold text-gray-900 dark:text-white">
                                                10 poin/kg
                                            </span>
                                        </div>
                                        <p className="text-sm text-white">
                                        Sampah berbahan dasar kaca seperti botol kaca minuman, botol kaca saos, 
                                        toples, pecahan kaca, dan lainnya
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="flex justify-center text-6xl border-2 border-gray-300 rounded-xl  bg-gray-100">
                                <div class="w-full max-w-sm bg-teal-700 border border-gray-200 rounded-lg shadow ">
                                    <img
                                        src={elektronik}
                                        alt="Glass"
                                        class="w-full h-48 object-cover"
                                    />

                                    <div class="px-5 pb-5">
                                        <div class="flex items-center justify-between py-5">
                                            <h5 class="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                                Elektronik
                                            </h5>
                                            <span class="text-3xl font-bold text-gray-900 dark:text-white">
                                                10 poin/kg
                                            </span>
                                        </div>
                                        <p className="text-sm text-white">
                                        Barang elektronik rusak seperti ponsel lama, laptop, 
                                        komputer, kabel, charger, keyboard, dan lainnya
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="flex justify-center text-6xl border-2 border-gray-300 rounded-xl  bg-gray-100">
                                <div class="w-full max-w-sm bg-teal-700 border border-gray-200 rounded-lg shadow ">
                                    <img
                                        src={logam}
                                        alt="Glass"
                                        class="w-full h-48 object-cover"
                                    />

                                    <div class="px-5 pb-5">
                                        <div class="flex items-center justify-between py-5">
                                            <h5 class="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                                Logam
                                            </h5>
                                            <span class="text-3xl font-bold text-gray-900 dark:text-white">
                                                15 poin/kg
                                            </span>
                                        </div>
                                        <p className="text-sm text-white">
                                        Sampah berbahan dasar kaleng seperti kaleng minuman, 
                                        kaleng makanan, panci, dan lainnya
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="flex justify-center text-6xl border-2 border-gray-300 rounded-xl  bg-gray-100">
                                <div class="w-full max-w-sm bg-teal-700 border border-gray-200 rounded-lg shadow ">
                                    <img
                                        src={tekstil}
                                        alt="Glass"
                                        class="w-full h-48 object-cover"
                                    />

                                    <div class="px-5 pb-5">
                                        <div class="flex items-center justify-between py-5">
                                            <h5 class="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                                Tekstil
                                            </h5>
                                            <span class="text-3xl font-bold text-gray-900 dark:text-white">
                                                15 poin/kg
                                            </span>
                                        </div>
                                        <p className="text-sm text-white">
                                        Sampah berbahan dasar tekstil seperti pakaian bekas, 
                                        kain perca, sepatu bekas, tas, topi, dan lainnya
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Kriteria;
