import React from "react";
import beritasatu from "@/Assets/img/beritasatu.png";

const BlogPage = () => {
    return (
        <>
            <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
                {/* <div
                    class="bg-cover h-64 text-center overflow-hidden"
                    style="height: 450px; background-image: url('https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&w=1201&h=676&crop=1')"
                    title="Woman holding a mug"
                ></div> */}
                <div class="max-w-2xl mx-auto">
                    <div class="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                    <div className="flex justify-center items-center">
                        <img src={beritasatu} alt="logo" />
                    </div>
                        <div class="">
                            <a
                                href="#"
                                class="text-xs text-indigo-600 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                            >
                                Pemilahan sampah 
                            </a>
                            ,{" "}
                            <a
                                href="#"
                                class="text-xs text-indigo-600 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                            >
                                Lingkungan
                            </a>
                            <h1
                                href="#"
                                class="text-gray-900 font-bold text-3xl mb-2"
                            >
                                Prinsip Pengolahan Limbah Sampah yang Baik Bagi Lingkungan
                            </h1>
                            <p class="text-gray-700 text-xs mt-2">
                                Written By:{" "}
                                <a
                                    href="#"
                                    class="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                                >
                                    Ahmad Sultani
                                </a>
                            </p>
                            <p class="text-base leading-8 my-5">
                            Pengelolaan limbah sampah yang efektif dan ramah lingkungan sangat penting 
                            untuk menjaga kesehatan ekosistem dan kualitas hidup masyarakat. 
                            Prinsip-prinsip ini membantu mengurangi dampak negatif sampah terhadap 
                            lingkungan dan mempromosikan praktik berkelanjutan. Berikut adalah beberapa 
                            prinsip utama yang harus diperhatikan dalam pengolahan limbah sampah:
                            </p>
                            <h3 class="text-2xl font-bold my-5">
                                #1. Pemilahan dan Daur Ulang Sampah
                            </h3>
                            <p class="text-base leading-8 my-5">
                            Pemilahan sampah sejak dari sumbernya adalah langkah pertama yang sangat 
                            penting. Dengan memisahkan sampah organik, anorganik, dan berbahaya, proses 
                            pengolahan menjadi lebih efisien dan aman. Sampah organik dapat diolah 
                            menjadi kompos, sedangkan sampah anorganik seperti plastik dan logam dapat 
                            didaur ulang. Daur ulang membantu mengurangi kebutuhan akan bahan baku baru 
                            dan mengurangi jumlah sampah yang berakhir di tempat pembuangan akhir (TPA).
                            </p>
                            <h3 class="text-2xl font-bold my-5">
                                #2. Pengurangan dan Penggunaan Kembali (Reduce and Reuse)
                            </h3>
                            <p class="text-base leading-8 my-5">
                            Prinsip pengurangan dan penggunaan kembali (reduce and reuse) menekankan 
                            pentingnya mengurangi jumlah sampah yang dihasilkan dan memaksimalkan 
                            penggunaan barang-barang yang masih bisa digunakan kembali. Mengurangi 
                            penggunaan produk sekali pakai dan memilih barang yang tahan lama dapat 
                            mengurangi volume sampah secara signifikan. Praktik ini tidak hanya 
                            mengurangi limbah tetapi juga menghemat sumber daya.
                            </p>
                            <h3 class="text-2xl font-bold my-5">
                                #3. Teknologi Ramah Lingkungan
                            </h3>
                            <p class="text-base leading-8 my-5">
                            Penggunaan teknologi ramah lingkungan dalam pengolahan sampah sangat penting 
                            untuk mengurangi dampak lingkungan. Teknologi seperti pengomposan aerobik, 
                            insinerasi dengan emisi terkendali, dan teknologi pengolahan mekanik-biologis 
                            membantu mengurangi volume sampah dan emisi gas rumah kaca, serta menghasilkan 
                            energi atau produk yang bermanfaat. Implementasi teknologi ini memerlukan 
                            investasi dan dukungan dari pemerintah serta sektor swasta.
                            </p>
                            <h3 class="text-2xl font-bold my-5">
                                #4. Edukasi dan Kesadaran Masyarakat
                            </h3>
                            <p class="text-base leading-8 my-5">
                            Edukasi dan peningkatan kesadaran masyarakat mengenai pentingnya pengelolaan 
                            sampah yang baik sangat krusial. Kampanye dan program edukatif dapat membantu 
                            masyarakat memahami cara mengelola sampah mereka sendiri dengan benar dan 
                            mendorong partisipasi dalam program pengelolaan sampah yang ada. Kesadaran dan 
                            partisipasi aktif masyarakat adalah kunci untuk keberhasilan pengelolaan sampah 
                            yang berkelanjutan.
                            </p>
                            <a
                                href="#"
                                class="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                            >
                                #PengolahanLimbahSampah
                            </a>
                            ,{" "}
                            <a
                                href="#"
                                class="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                            >
                                #PemilahanSampah
                            </a>
                            ,{" "}
                            <a
                                href="#"
                                class="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                            >
                                #TeknologiRamahLingkungan
                            </a>
                            ,{" "}
                            <a
                                href="#"
                                class="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                            >
                                #EdukasiMasyarakat
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogPage;
