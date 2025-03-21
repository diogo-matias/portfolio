import BlurText from "@/components/BlurText/BlurText";
import TiltedCard from "@/components/TiltedCard/TiltedCard";
import useWindowDimensions from "@/hooks/window-dimentions";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const projects = [
  {
    imageSrc: "./img/bible.jpg",
    captionText: "Kendrick Lamar - GNX",
    title: "Biblia Online",
    projectId: "bible",
    link: "https://bible-iota.vercel.app/",
  },
  {
    imageSrc: "https://www.seanhalpin.xyz/work/ai/ai-hero.png",
    captionText: "Kendrick Lamar - GNX",
    title: "OUTRO PROJETO",
    projectId: "code-quiz",
    link: "",
  },
  {
    imageSrc: "./img/ecommerce.jpg",
    captionText: "Kendrick Lamar - GNX",
    title: "Ecommerce",
    projectId: "ecommerce",
    link: "https://e-commerce-diogo-matias.vercel.app/",
  },
  {
    imageSrc: "https://www.seanhalpin.xyz/work/ai/ai-hero.png",
    captionText: "Kendrick Lamar - GNX",
    title: "Outro Projeto",
    projectId: "teste",
    link: "",
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
        rotateAmplitude={6}
        scaleOnHover={1}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
        overlayContent={
          <div className="px-10 py-6">
            <h1 className="text-3xl font-light text-black">{item.title}</h1>
          </div>
        }
      />
    );
  }
  //bg-[rgba(0,0,0,0.1)] backdrop-blur-2xl rounded-2xl px-7 py-4 w-full h-full

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
          <div key={index} className={`${flexDirection} flex w-full gap-14`}>
            {renderCard(item[0], index, cardWidth1)}
            {renderCard(item[1], index, cardWidth2)}
          </div>
        </motion.div>
      );
    });
  }

  return (
    <div className="w-full pt-20 px-4 pb-10">
      <BlurText
        text="Projetos"
        className="text-7xl sm:text-8xl md:text-9xl font-extralight text-[#323131] tracking-tighter "
      />
      {/* <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        // className={`${flexDirection} flex w-full gap-14`}
      >
        <h1 className="text-9xl font-bold text-[#323131] tracking-tighter">
          Projetos
        </h1>
      </motion.div> */}
      <div className="h-full w-full flex flex-col items-center mt-14 gap-14">
        {renderCards()}
      </div>
    </div>
  );
}
