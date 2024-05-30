import AdminPageLayout from "@/Layouts/AdminPageLayout";
import CardData from "@/Sections/AdminHome/CardData";

export default function Dashboard() {
    return (
        <AdminPageLayout>
            <h1>Halo Dashboard ADMIN</h1>
            <CardData />
        </AdminPageLayout>
    );
}
