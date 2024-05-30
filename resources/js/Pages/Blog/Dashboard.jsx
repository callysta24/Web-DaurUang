import LandingPageLayout from "@/Layouts/LandingPageLayout";
import BlogList from "@/Sections/Blog/BlogList";
import Hero from "@/Sections/Blog/Hero";

export default function Dashboard() {
    return (
        <LandingPageLayout>
            <Hero />
            <BlogList />
        </LandingPageLayout>
    );
}
