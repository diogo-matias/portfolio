import { useRouter } from "next/router";
import { twMerge } from "tailwind-merge";

export function Header() {
  const router = useRouter();

  const currentRoute = router.asPath;

  function navigate(route: string) {
    router.push(route);
  }

  const buttons = [
    {
      label: "Projetos",
      path: "/",
      onClick: () => {
        navigate("/");
      },
    },
    {
      label: "Sobre",
      path: "/about",
      onClick: () => navigate("/about"),
    },
    {
      label: "Contato",
      path: "/contact",
      onClick: () => navigate("/contact"),
    },
  ];

  return (
    <div
      className={`
            fixed z-10 top-8 left-1/2 -translate-x-1/2 px-1 py-1 
            rounded-full backdrop-blur-2xl flex items-center justify-center
            bg-[rgba(256,256,256,0.1)] shadow-2xl`}
      // style={{ boxShadow: "0 0 30px rgba(256, 256, 256, 0.1)" }}
    >
      {buttons.map((item) => {
        const isSelected = item.path === currentRoute;
        const selectedItemStyle = `bg-[var(--background) shadow-xl`;
        const itemStyle = isSelected ? selectedItemStyle : "";

        return (
          <div
            onClick={item.onClick}
            className={twMerge(
              itemStyle,
              `text-cyan-950 cursor-pointer
                        hover:bg-[var(--background)] hover:text-black py-2 px-5 mx-1 rounded-full transition-all hover:shadow-xl
                        duration-500`
            )}
            style={{
              backgroundColor: isSelected ? "var(--background)" : "",
            }}
            key={item.label}
          >
            {item.label}
          </div>
        );
      })}
    </div>
  );
}
