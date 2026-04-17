export type ProjectStatus = "live" | "in_progress";

export type Project = {
  id: string;
  /** Rótulo curto na lista PORTFOLIO (clique + match de linha) */
  label: string;
  /** web, game, … */
  type: string;
  /** URL pública do projeto (preferência sobre `link`) */
  url?: string;
  title: string;
  description: string;
  category: string;
  /** Pills abaixo do slide principal (ex.: stack, tipo) */
  tags: string[];
  /** Caminho da capa em `public/` (ex.: `/screenshots/termo.gif`) */
  coverImage?: string;
  /** Legado; use `url` quando possível */
  link?: string;
  status?: ProjectStatus;
  accessLabel?: string;
};

/** URL efetiva para abrir no browser */
export function getProjectHref(p: Project): string | undefined {
  return p.url ?? p.link;
}

const projectsData: Project[] = [
  {
    id: "wes-portfolio",
    label: "wes — portfolio",
    type: "web",
    url: "https://wesley-0001.github.io/wes-portifolio-main/",
    title: "wes.interface · bbs hub",
    description:
      "Command-driven portfolio surface: a browser CLI for work, stack, and contact—keyboard-first flow, terminal-native by design.",
    category: "web",
    tags: ["LIVE", "CLI", "REACT", "VITE"],
    coverImage: "/screenshots/wes-portfolio.jpg",
    status: "live",
    accessLabel: "Open live hub",
  },
  {
    id: "termo",
    label: "TERMO",
    type: "game",
    url: "https://wesley-0001.github.io/Termo/",
    title: "Termo",
    description:
      "Standalone word game in the browser: tight rounds, terminal-inspired UI—React + TypeScript, shipped as its own lightweight app.",
    category: "game",
    tags: ["LIVE", "GAME", "REACT", "TYPESCRIPT"],
    coverImage: "/screenshots/termo.gif",
    status: "live",
    accessLabel: "Play live",
  },
  {
    id: "barbearia-da-tropa",
    label: "Barbearia da Tropa",
    type: "web",
    title: "Barbearia da Tropa",
    description:
      "Projeto em desenvolvimento com foco em presença digital, identidade visual e experiência moderna para barbearia.",
    category: "web",
    tags: ["EM DESENVOLVIMENTO", "WEB", "IDENTIDADE"],
    coverImage: "/screenshots/barbearia-da-tropa.png",
    status: "in_progress",
    accessLabel: "Em desenvolvimento",
  },
];

export const projects: Project[] = projectsData;
