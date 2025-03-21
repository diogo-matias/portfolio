// import Orb from "@/components/Orb/Orb";
import Iridescence from "@/components/Iridescence/Iridescence";
import BlurText from "@/components/BlurText/BlurText";

export function Presentation() {
  function renderBackground() {
    return (
      <div className="absolute left-0 right-0 -z-1 h-screen">
        {/* <Orb /> */}
        <Iridescence speed={1.5} color={[0.4, 0.8, 0.8]} />
      </div>
    );
  }

  function renderTitle() {
    return (
      <div className="flex flex-col items-center text-[#fff]">
        <div className="flex flex-wrap justify-center text-8xl lg:text-9xl font-light tracking-tighter">
          <BlurText text="Olá, " className="" />
          <BlurText text="sou " className="" />
          <BlurText text="Diogo" className="font-semibold" />
        </div>
        <BlurText
          delay={10}
          animateBy="letters"
          text="Web Fullstack & Mobile"
          className="text-2xl md:text-3xl font-light mt-5 md:mt-0"
        />
      </div>
    );
  }

  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center overflow-hidden">
      {renderBackground()}
      {renderTitle()}
    </div>
  );
}
