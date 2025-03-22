import BlurText from "@/components/BlurText/BlurText";
import TiltedCard from "@/components/TiltedCard/TiltedCard";
import useWindowDimensions from "@/hooks/window-dimentions";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const projects = [
    {
        imageSrc: "./img/quiz-proj.jpg",
        captionText: "Javascript Quiz",
        title: "Javascript Quiz",
        projectId: "quiz",
        link: "https://forge-code.vercel.app/quiz",
        backgroundColor: "#dd82fe",
    },
    {
        imageSrc: "./img/bible-proj.jpg",
        captionText: "Biblia Completa",
        title: "Biblia Completa",
        projectId: "bible",
        link: "https://bible-iota.vercel.app/",
        backgroundColor: "#5af5d4",
    },
    {
        imageSrc: "./img/ecommerce-proj.jpg",
        captionText: "Ecommerce Fullstack",
        title: "Ecommerce Fullstack",
        projectId: "ecommerce",
        link: "https://e-commerce-diogo-matias.vercel.app/",
        backgroundColor: "#98cafc",
    },
    {
        imageSrc: "https://www.seanhalpin.xyz/work/ai/ai-hero.png",
        captionText: "ERM - Advocacia",
        title: "ERM de Advocacia",
        projectId: "erm",
        link: "",
        backgroundColor: "#55a9fd",
    },
];

export function Projects() {
    const { width } = useWindowDimensions();
    const router = useRouter();

    function parseProjects() {
        const result = [];

        for (let i = 0; i < projects.length; i += 2) {
            result.push(projects.slice(i, i + 2));
        }

        console.log(result);

        return result;
    }

    function renderCard(item: any, index: number, width: string) {
        return (
            <TiltedCard
                onClick={() => window.open(item.link)}
                key={index}
                imageSrc={item.imageSrc}
                altText={item.captionText}
                captionText={item.captionText}
                containerHeight={500}
                containerWidth={width}
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={10}
                scaleOnHover={1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                    <div className="flex flex-col items-end px-10 py-6 text-white">
                        <p>Projeto em destaque</p>
                        <h1 className="text-3xl font-semibold text-end">
                            {item.title}
                        </h1>
                    </div>
                }
                backgroundColor={item.backgroundColor}
            />
        );
    }

    function renderCards() {
        const projectsGroup = parseProjects();

        return projectsGroup.map((item, index) => {
            let flexDirection = "";
            const breakpoint = 1100;

            console.log("width", width);

            if (width < breakpoint) {
                flexDirection = "flex-col";
            } else if (index % 2 === 0) {
                flexDirection = "flex-row-reverse";
            }

            const cardWidth1 = width < breakpoint ? "100%" : "40%";
            const cardWidth2 = width < breakpoint ? "100%" : "60%";

            return (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false }}
                    className={`${flexDirection} flex w-full gap-14`}
                >
                    <div
                        key={index}
                        className={`${flexDirection} flex w-full gap-14`}
                    >
                        {renderCard(item[0], index, cardWidth1)}
                        {renderCard(item[1], index, cardWidth2)}
                    </div>
                </motion.div>
            );
        });
    }

    return (
        <div className="w-full pt-14 px-4 pb-10">
            <BlurText
                text="Meus"
                className="text-5xl sm:text-6xl md:text-7xl font-extralight text-[#323131] tracking-[10px] "
            />
            <BlurText
                text="Projetos"
                className="text-7xl sm:text-8xl md:text-9xl font-semibold text-[#323131] tracking-[-5px] md:tracking-[-10px] "
            />
            <div className="h-full w-full flex flex-col items-center mt-14 gap-14">
                {renderCards()}
            </div>
        </div>
    );
}
