import { Header } from "@/components/header";
import { Presentation } from "@/sections/presentation";
import { Projects } from "@/sections/Projects";

export default function Home() {
    return (
        <div>
            <Header />
            <div className="overflow-hidden fixed -z-1">
                <Presentation />
            </div>
            <div className="overflow-hidden mx-auto pt-[100vh]">
                <div className="mx-auto bg-[#f6f1f1] shadow-2xs">
                    <div className="container mx-auto ">
                        <Projects />
                    </div>
                </div>
            </div>
        </div>
    );
}
