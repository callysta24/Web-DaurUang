import React from "react";
import dlhPhoto from "@/Assets/img/dlh-malang.png";
import malangLogo from "@/Assets/img/malang.png";
import logodauruang from "@/Assets/icons/logo-dauruang.png";

const Kerjasama = () => {
    return (
        <div>
            <section class="px-2 py-32 bg-white md:px-0 ">
                <div class="container items-center max-w-6xl px-8 mx-auto xl:px-5">
                    <div class="container mx-auto">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div class="flex justify-center  py-11">
                                <img
                                    src={logodauruang}
                                    alt="logo"
                                    class="w-full h-24"
                                />
                            </div>
                            <div class="flex justify-center  py-8">
                                <img
                                    src={dlhPhoto}
                                    alt="dlh"
                                    class="w-full h-28"
                                />
                            </div>
                            <div class="flex justify-center ">
                                <img
                                    src={malangLogo}
                                    alt="dlh"
                                    class="w-56 h-36"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Kerjasama;
