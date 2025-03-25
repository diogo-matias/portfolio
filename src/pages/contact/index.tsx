import { Header } from "@/components/header";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { SiLinkedin, SiGithub, SiWhatsapp, SiGmail } from "react-icons/si";
import AnimatedContent from "@/components/AnimatedContent/AnimatedContent";

export type SendMessageType = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const [inputsValue, setInputsValue] = useState<SendMessageType>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState({
    message: "",
    type: "",
  });

  async function sendMessage(e: any) {
    e.preventDefault();

    setStatusMessage({
      message: "Enviando...",
      type: "loading",
    });

    try {
      const data = await fetch(
        "https://site-backend-murex.vercel.app/contact",
        {
          body: JSON.stringify(inputsValue),
          headers: {
            "Content-Type": "application/json",
            mode: "no-cors",
          },
          method: "POST",
        }
      );

      setStatusMessage({
        message: "Enviado com sucesso!",
        type: "sucess",
      });
    } catch (error) {
      setStatusMessage({
        message: "Erro ao enviar mensagem, tente novamente!",
        type: "error",
      });
    }
  }

  function handleChange(key: string, value: string) {
    setInputsValue((currentValue) => {
      return {
        ...currentValue,
        [key]: value,
      };
    });
  }

  function onChange(e: any) {
    const value = e.target?.value;
    const id = e.target?.id;

    handleChange(id, value);
    console.log(id);
  }

  useEffect(() => {
    console.log(inputsValue);
  }, [inputsValue]);

  function renderInput(value: string, placeholder: string, id: string) {
    return (
      <input
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        className="border-[0.5px] border-gray-500 mt-5 rounded-3xl px-4 py-2 text-sm outline-0 shadow-lg"
      />
    );
  }
  function renderTextField(value: string, placeholder: string, id: string) {
    return (
      <textarea
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        className="border-[0.5px] mt-5 border-gray-500 rounded-3xl px-4 py-4 text-sm outline-0 h-40 shadow-lg"
      />
    );
  }

  function renderLabel() {
    let style = "";

    switch (statusMessage.type) {
      case "sucess":
        style = "text-green-600";
        break;
      case "error":
        style = "text-red-600";
        break;
    }

    return (
      <label className={twMerge(style, "mt-2 text-sm")} htmlFor="form">
        {statusMessage.message}
      </label>
    );
  }

  function renderContent() {
    return (
      <div className="flex flex-col py-5 px-6">
        <AnimatedContent>
          <h1 className="text-4xl tracking-tighter">
            Mandar <br />{" "}
            <span className="font-semibold text-cyan">mensagem</span>
          </h1>
        </AnimatedContent>
        <AnimatedContent delay={250}>
          <form id="form" className="flex flex-col" onSubmit={sendMessage}>
            {renderInput("", "Nome", "name")}
            {renderInput("", "Email", "email")}
            {renderInput("", "Assunto", "subject")}
            {renderTextField("", "Mensagem", "message")}
            <button
              className="cursor-pointer border-[0.5px] mt-5 border-gray-500 bg-black text-white rounded-3xl px-4 py-2 text-sm shadow-lg"
              onClick={sendMessage}
              type="submit"
            >
              Enviar
            </button>
            {renderLabel()}
            {renderContactInfo()}
          </form>
        </AnimatedContent>
      </div>
    );
  }

  function openLink(link: string) {
    window.open(link, "_blank");
  }

  function renderContactInfo() {
    const links = {
      github: "https://github.com/diogo-matias",
      linkedIn: "https://www.linkedin.com/in/diogo-matias-profile/",
      whatsApp: "https://api.whatsapp.com/send?phone=5551994661334",
      email: "mailto:diogomaccedo200@gmail.com",
    };

    return (
      <div className="mt-5">
        <AnimatedContent delay={500}>
          <div className="flex gap-4 text-4xl mb-4 cursor-pointer">
            <SiLinkedin
              className="text-blue-400"
              onClick={() => openLink(links.linkedIn)}
            />
            <SiGithub onClick={() => openLink(links.github)} />
            <SiWhatsapp
              className="text-green-600"
              onClick={() => openLink(links.whatsApp)}
            />
            <SiGmail
              className="text-red-400"
              onClick={() => openLink(links.email)}
            />
          </div>
          <div className="cursor-pointer">
            <p
              className="hover:underline"
              onClick={() => openLink("mailto:diogomaccedo200@gmail.com")}
            >
              diogomaccedo200@gmail.com
            </p>
            <p
              className="hover:underline"
              onClick={() =>
                openLink("https://api.whatsapp.com/send?phone=5551994661334")
              }
            >
              +55 (51) 99466-1334
            </p>
          </div>
        </AnimatedContent>
      </div>
    );
  }

  return (
    <div className="from-[var(--background-gradiend)] bg-gradient-to-tl min-h-[100vh] pt-40">
      <Header />
      <div className="container mx-auto max-w-md ">{renderContent()}</div>
    </div>
  );
}
