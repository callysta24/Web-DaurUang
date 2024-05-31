import AdminPageLayout from "@/Layouts/AdminPageLayout";
import CardData from "@/Sections/AdminHome/CardData";
import Kriteria from "@/Sections/AdminHome/Kriteria";

export default function Dashboard() {
    return (
        <AdminPageLayout>
            <Kriteria />
        </AdminPageLayout>
    );
}
