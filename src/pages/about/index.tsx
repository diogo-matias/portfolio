/* eslint-disable @next/next/no-img-element */
import AnimatedContent from "@/components/AnimatedContent/AnimatedContent";
import { Header } from "@/components/header";
import Image from "next/image";
import { useRouter } from "next/router";

const experiences = [
  {
    title: "IN4Y",
    subtitle: "Fullstack Developer",
    tecnologies: "C# • ASP/NET • SQL • AWS",
    period: "2025 ( atual )",
    link: "https://www.in4y.com.br/en",
  },
  {
    title: "Arezzo&Co",
    subtitle: "Mobile Developer | Web Developer",
    tecnologies: "React • Next • Tailwind • Typescript",
    period: "2022 - 2025",
    link: "https://www.arezzo.com.br/",
  },
  {
    title: "Growdev",
    subtitle: "Fullstack Developer",
    tecnologies: "React • Node Js • SQL • AWS",
    period: "2022 - 2022",
    link: "https://www.growdev.com.br/",
  },
];

const tecnologies = [
  "https://img.shields.io/badge/Tailwind-dd82fe?style=for-the-badge&logo=tailwindcss&logoColor=white",
  "https://img.shields.io/badge/MySql-fff?style=for-the-badge&logo=mysql&logoColor=black",
  "https://img.shields.io/badge/Next_JS-39c3a5?style=for-the-badge&logo=nextdotjs&logoColor=white",
  "https://img.shields.io/badge/Jest-55a9fd?style=for-the-badge&logo=jest&logoColor=white",
  "https://img.shields.io/badge/.NET-fff?style=for-the-badge&logo=dotnet&logoColor=black",
  "https://img.shields.io/badge/React_JS_/_Native-55a9fd?style=for-the-badge&logo=react&logoColor=white",
  "https://img.shields.io/badge/JavaScript-dd82fe?style=for-the-badge&logo=javascript&logoColor=white",
  "https://img.shields.io/badge/TypeScript-39c3a5?style=for-the-badge&logo=typescript&logoColor=white",
  "https://img.shields.io/badge/HTML5-55a9fd?style=for-the-badge&logo=html5&logoColor=white",
  "https://img.shields.io/badge/MySQL-39c3a5?style=for-the-badge&logo=mysql&logoColor=white",
  "https://img.shields.io/badge/GIT-55a9fd?style=for-the-badge&logo=git&logoColor=white",
  "https://img.shields.io/badge/Linux-fff?style=for-the-badge&logo=linux&logoColor=black",
  "https://img.shields.io/badge/CSS3-dd82fe?style=for-the-badge&logo=css3&logoColor=white",
  "https://img.shields.io/badge/Redux_Toolkit-fff?style=for-the-badge&logo=redux&logoColor=black",
  "https://img.shields.io/badge/Redux_Saga-55a9fd?style=for-the-badge&logo=reduxsaga&logoColor=white",
  "https://img.shields.io/badge/PostgreSQL-55a9fd?style=for-the-badge&logo=postgresql&logoColor=white",
];

export default function About() {
  const router = useRouter();

  function renderMainInfo() {
    return (
      <div className="w-full flex">
        <div className="flex items-center gap-5">
          <Image
            alt="profile picture"
            src={"/img/profile-picture.jpg"}
            width={120}
            height={120}
            className="rounded-full shadow-xl border-1"
          />
          <div className="">
            <h1 className="text-3xl font-semibold mb-1">Diogo Matias</h1>
            <p className="text-gray-600 font-light leading-[22px]">
              Web Fullstack & Mobile
            </p>
          </div>
        </div>
      </div>
    );
  }

  function renderAbout() {
    return (
      <div className="mt-8">
        <h2 className="text-xl mb-5">Sobre</h2>
        <p className="text-gray-600 font-light">
          Sou Engenheiro de Software Full-Stack com mais de 3 anos de
          experiência prática em desenvolvimento de aplicações web e móveis de
          alta performance. Tenho forte conhecimento em arquitetura de sistemas,
          APIs RESTful, front-end escalável e integração contínua (CI/CD),
          sempre com foco em qualidade, performance e experiência do usuário.
        </p>
      </div>
    );
  }
  function renderTecnologies() {
    return (
      <div className="mt-4">
        <h2 className="text-xl ">Tecnologias</h2>
        <div className="mt-8 flex flex-wrap gap-2">
          {tecnologies.map((item) => {
            return (
              <img alt="opa" className="shadow-lg" src={item} key={item} />
            );
          })}
        </div>
      </div>
    );
  }

  function renderWorkExperience(experience: any) {
    const { title, subtitle, tecnologies, link, period } = experience;

    return (
      <div className="">
        <div className="flex">
          <div className="flex items-center gap-3 ">
            <div className="w-32">{period}</div>
            <div className="flex flex-col justify-center items-center mr-4">
              <div className="border-1 border-gray-300 w-0 min-h-10 "></div>
              <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
              <div className="border-1 border-gray-300 w-0 min-h-10 "></div>
            </div>
          </div>
          <div className="ml-4">
            <h1
              onClick={() => window.open(link, "_blank")}
              className="text-black text-xl hover:underline underline-offset-4 cursor-pointer"
            >
              {title}
            </h1>
            <p className="text-gray-800 font-light">{subtitle}</p>
            <p className="text-gray-500 font-light">{tecnologies}</p>
          </div>
        </div>
      </div>
    );
  }

  function renderWorkExperienceCards() {
    return (
      <div className="my-10">
        <h2 className="text-xl mb-2 mt-5">Experiência</h2>
        {experiences.map((item, index) => {
          return (
            <div key={`${item.title}-${index}`} className="">
              {renderWorkExperience(item)}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="w-scree min-h-screen pb-40 from-[var(--background-gradiend)] bg-gradient-to-tl ">
      <Header />
      <div className="container text-sm md:text-base mx-auto px-4 max-w-lg flex flex-col pt-40">
        <AnimatedContent>{renderMainInfo()}</AnimatedContent>
        <AnimatedContent delay={250}>{renderAbout()}</AnimatedContent>
        <AnimatedContent delay={500}>
          {renderWorkExperienceCards()}
        </AnimatedContent>
        <AnimatedContent delay={750}>{renderTecnologies()}</AnimatedContent>
      </div>
    </div>
  );
}
