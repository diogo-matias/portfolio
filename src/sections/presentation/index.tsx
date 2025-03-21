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
      <div className="flex flex-col items-center">
        <div className="flex">
          <BlurText
            text="Olá, sou "
            className="text-9xl font-light text-[#ffffff] tracking-tighter"
          />
          <BlurText
            text="Diogo"
            className="text-9xl font-semibold text-[#ffffff] tracking-tighter"
          />
        </div>
        <BlurText
          delay={10}
          animateBy="letters"
          text="Web Fullstack & Mobile"
          className="text-3xl font-light text-[#ffffff]"
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
