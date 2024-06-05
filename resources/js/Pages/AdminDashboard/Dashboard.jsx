import AdminPageLayout from "@/Layouts/AdminPageLayout";
// import CardData from "@/Components/Elements/CardData";
// import Kriteria from "@/Sections/AdminHome/Kriteria";
import ListItemDB from "./CRUD/ListItemDB";

export default function Dashboard() {
    return (
        <AdminPageLayout>
            {/* <Kriteria /> */}
            <ListItemDB />
        </AdminPageLayout>
    );
}
