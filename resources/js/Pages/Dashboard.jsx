import LandingPageLayout from "@/Layouts/LandingPageLayout";
import Hero from "@/Sections/Home/Hero";
import InlineNumber from "@/Sections/Home/InlineNumber";
import Kriteria from "@/Sections/Home/Kriteria";
import Layanan from "@/Sections/Home/Layanan";
import Testimoni from "@/Sections/Home/Testimoni";
import Kerjasama from "@/Sections/Home/Kerjasama";
import Lokasi from "@/Sections/Home/Lokasi";

export default function Dashboard() {
    return (
        <LandingPageLayout>
            <Hero />
            <InlineNumber />
            <Layanan />
            <Kriteria />
            <Kerjasama />
            <Testimoni />
            {/* <Lokasi /> */}
        </LandingPageLayout>
    );
}
