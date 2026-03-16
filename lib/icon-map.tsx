import { BsTypescript, BsCode } from "react-icons/bs";
import { FaReact, FaNodeJs  } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion, TbBrandReactNative, TbApi   } from "react-icons/tb";
import { SiShadcnui,SiExpress, SiHono, SiTypeorm, SiPostgresql, SiMysql, SiPostman, SiGit, SiGnubash , SiDocker     } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

import { IconType } from "react-icons/lib";


const iconMap: Record<string, IconType> = {
  TypeScript: BsTypescript,
  React: FaReact,
  ReactNative:TbBrandReactNative,
  Nextjs: RiNextjsFill,
  Tailwind:RiTailwindCssFill,
  FramerMotion:TbBrandFramerMotion,
  Shadcn:SiShadcnui,
  Node:FaNodeJs,
  Express:SiExpress,
  Hono:SiHono ,
  TypeOrm:SiTypeorm,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  API:TbApi,
  Postman:SiPostman ,
  Git:SiGit,
  Bash:SiGnubash ,
  Docker:SiDocker ,
  VSCode:VscVscode

};

export function getIcon(name: string): IconType {
  console.log(iconMap[name]);
  
  return iconMap[name] || BsCode;
}
