import React from "react";

const CardData = () => {
    return (
        <>
            <section class="px-2 py-32 md:px-0 bg-green-700">
                <div class="container items-center max-w-6xl px-8 mx-auto xl:px-5">
                    <div class="container mx-auto">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div class="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100">
                                <h3>120+</h3>
                                <h2>Voucher</h2>
                            </div>
                            <div class="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100">
                                2
                            </div>
                            <div class="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100">
                                3
                            </div>
                            <div class="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100">
                                4
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CardData;
