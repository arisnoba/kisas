import type { Locale } from "@/i18n/config";

export type HomeDictionary = {
  metadata: {
    title: string;
    description: string;
  };
  eyebrow: string;
  titleLines: string[];
  description: string;
  cards: {
    title: string;
    description: string;
  }[];
  localeSwitch: {
    label: string;
    href: string;
  };
};

export const homeDictionaries = {
  en: {
    metadata: {
      title: "KISAS | International Art Study Center",
      description:
        "Korea arts study abroad consulting for Chinese students and families, covering programs, universities, applications, student life, and consultation.",
    },
    eyebrow: "Next.js + Tailwind CSS + shadcn/ui scaffold",
    titleLines: ["Korean Arts,", "at the Center of the World."],
    description:
      "This frontend is prepared for the KISAS home design, 13-page wireframe, English default content, Chinese localization, and future backend handoff.",
    cards: [
      {
        title: "Design Source",
        description: "Figma node 190:2 guides the production home page.",
      },
      {
        title: "Content Model",
        description: "The 13-page wireframe defines routes, flows, and data needs.",
      },
      {
        title: "Delivery Standard",
        description: "Vercel preview with lint, build, and harness verification.",
      },
    ],
    localeSwitch: {
      label: "中文",
      href: "/zh",
    },
  },
  zh: {
    metadata: {
      title: "KISAS | 国际艺术留学中心",
      description:
        "面向中国学生与家庭的韩国艺术留学咨询网站，涵盖课程、院校、申请、学生生活与咨询申请。",
    },
    eyebrow: "Next.js + Tailwind CSS + shadcn/ui 项目基础",
    titleLines: ["韩国艺术教育，", "连接世界舞台。"],
    description:
      "此前端项目已为 KISAS 首页设计、13 页线框、英文默认内容、中文本地化与后续后端交接做好基础准备。",
    cards: [
      {
        title: "设计来源",
        description: "Figma 节点 190:2 作为正式首页视觉基准。",
      },
      {
        title: "内容模型",
        description: "13 页线框定义路由、用户流程与数据需求。",
      },
      {
        title: "交付标准",
        description: "通过 Vercel 预览以及 lint、build、harness 验证。",
      },
    ],
    localeSwitch: {
      label: "English",
      href: "/",
    },
  },
} satisfies Record<Locale, HomeDictionary>;
