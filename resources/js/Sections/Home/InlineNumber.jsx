import React from "react";

const InlineNumber = () => {
    return (
        <>
            <section class="px-2 py-32 bg-white md:px-0 ">
                <div class="container items-center max-w-6xl px-8 mx-auto xl:px-5">
                    <div class="container mx-auto">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div class="flex flex-col items-center text-center p-6 ">
                                <h3 class="text-6xl font-bold">120+</h3>
                                <h2 class="text-2xl font-bold">Voucher</h2>
                            </div>
                            <div class="flex flex-col items-center text-center p-6 ">
                                <h3 class="text-6xl font-bold">130+</h3>
                                <h2 class="text-2xl font-bold">Jenis Limbah</h2>
                            </div>
                            <div class="flex flex-col items-center text-center p-6 ">
                                <h3 class="text-6xl font-bold">25+</h3>
                                <h2 class="text-2xl font-bold">Titik Setor</h2>
                            </div>
                            <div class="flex flex-col items-center text-center p-6 ">
                                <h3 class="text-6xl font-bold">1000+</h3>
                                <h2 class="text-2xl font-bold">Bumi Bangga</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default InlineNumber;
