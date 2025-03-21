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
  },
  {
    imageSrc: "https://www.seanhalpin.xyz/hp/figma@2x.png",
    captionText: "Kendrick Lamar - GNX",
    title: "Outro Projeto",
    projectId: "ecommerce",
  },
  {
    imageSrc: "https://www.seanhalpin.xyz/work/ai/ai-hero.png",
    captionText: "Kendrick Lamar - GNX",
    title: "Biblia Online",
    projectId: "code-quiz",
  },
  {
    imageSrc: "https://www.seanhalpin.xyz/hp/figma@2x.png",
    captionText: "Kendrick Lamar - GNX",
    title: "Outro Projeto",
    projectId: "teste",
  },
];

export function Projects() {
  const { width } = useWindowDimensions();
  const router = useRouter();

  function parseProjects() {
    const newArr = [];

    for (let index = 0; index < projects.length / 2; index++) {
      newArr.push(projects.slice(0, 2));
    }

    return newArr;
  }

  parseProjects();

  function renderCard(item: any, index: number, width: string) {
    return (
      <TiltedCard
        onClick={() => router.push(`/project/${item.projectId}`)}
        key={index}
        imageSrc={item.imageSrc}
        altText={item.captionText}
        captionText={item.captionText}
        containerHeight={500}
        containerWidth={width}
        imageHeight="100%"
        imageWidth="100%"
        rotateAmplitude={12}
        scaleOnHover={1}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={false}
        overlayContent={
          <div className="bg-white px-4 py-2 rounded-full shadow-2xs">
            <h1 className="text-md font-light text-black shadow-2xs">
              {item.title}
            </h1>
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
      const breakpoint = 1000;

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
        className="text-9xl font-extralight text-[#323131] tracking-tighter "
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
