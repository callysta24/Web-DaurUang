import React from "react";
import drop from "@/Assets/img/drop 1.png";
import storage from "@/Assets/img/storage 1.png";
import process from "@/Assets/img/process 1.png";
import transfer from "@/Assets/img/transfer 1.png";
import landfill from "@/Assets/img/landfill 1.png";


const Hero = () => {
    return (
        <>
            <section class="px-2 py-32 md:px-0 bg-teal-700">
                <div class="container items-center max-w-6xl px-8 mx-auto xl:px-5">
                    <div className="title-layanan">
                        <div class="text-center p-10">
                            <p className="text-3xl text-orange-300 font-bold py-4">
                                Informasi & Edukasi
                            </p>
                            <h1 class="text-4xl font-extrabold tracking-tight text-amber-50 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                                Alur Pembuangan Sampah
                            </h1>
                        </div>
                    </div>
                    <div className="content-layanan">
                        <div className="container mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                                <div className="flex flex-col items-center text-center p-6">
                                    <div className="max-w-sm rounded-lg shadow  h-auto flex-grow">
                                        <img src={drop} alt="logo" />
                                        <p className="mb-3 font-bold text-white pt-3">
                                        Pengumpulan sampah
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center text-center p-6">
                                    <div className="max-w-sm rounded-lg shadow  h-auto flex-grow">
                                        <img src={storage} alt="logo" />
                                        <p className="mb-3 font-bold text-white pt-3">
                                            Penyimpanan sementara
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center text-center p-6">
                                    <div className="max-w-sm rounded-lg shadow  h-auto flex-grow">
                                        <img src={process} alt="logo" />
                                        <p className="mb-3 font-bold text-white pt-3">
                                            Pemilahan dan pengolahan
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center text-center p-6">
                                    <div className="max-w-sm rounded-lg shadow  h-auto flex-grow">
                                        <img src={transfer} alt="logo" />
                                        <p className="mb-3 font-bold text-white pt-3">
                                            Pengangkutan ke fasilitas akhir
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center text-center p-6">
                                    <div className="max-w-sm rounded-lg shadow  h-auto flex-grow">
                                        <img src={landfill} alt="logo" />
                                        <p className="mb-3 font-bold text-white pt-3">
                                            Pembuangan di TPA
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

export default Hero;
