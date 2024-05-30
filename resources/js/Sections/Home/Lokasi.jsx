import React from "react";
import mapphoto from "@/Assets/img/Map.png";

const Lokasi = () => {
    return (
        <div>
            <section class="px-2 py-32 bg-white md:px-0 bg-green-700">
                <div class="container items-center max-w-6xl px-8 mx-auto xl:px-5">
                    <div class="container mx-auto">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div class="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100">
                                <img
                                    src={mapphoto}
                                    alt="map"
                                    class="w-full h-100 "
                                />
                            </div>
                            <div class="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100">
                                2
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Lokasi;
