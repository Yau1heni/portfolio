import todo from "../../assets/image/todo.jpg";
import cards from "../../assets/image/cards.png";
import burger from "../../assets/image/burger.png";
import cleverfit from "../../assets/image/cleverfit.png";
import inc from "../../assets/image/inc.png";
import incAdmin from "../../assets/image/inc-admin.png";
import cookies from "../../assets/image/cookies.jpg";
import crm from "../../assets/image/crm.png";
import blog from "../../assets/image/blog.png";

export const projectsData = [
  {
    id: 1,
    link: "https://yau1heni.github.io/cleverfit",
    src: cleverfit,
    title: "CleverFit",
    description:
      "Apps for planning and tracking workouts (at the moment, the link works only with CORS off!)",
    stack:
      "ReactJS, Redux-Toolkit, TypeScript, Axios, Ant design, Ant-design/charts, React-router-dom, Vite and etc.",
  },
  {
    id: 2,
    link: "https://inctagram-m9ju.vercel.app",
    src: inc,
    title: "Inctagram",
    description:
      "Social network for publishing photos (SERVERS ARE UNSUPPORTED)",
    stack:
      "Next.js13(page router, CSR), Redux-Toolkit/RTK, React-hook-form/Yup, TypeScript and etc.",
  },
  {
    id: 3,
    link: "https://inctagram-m9ju.vercel.app",
    src: incAdmin,
    title: "Inctagram SuperAdmin",
    description:
      "Admin panel for analyzing user data (SERVERS ARE UNSUPPORTED)",
    stack: "Next.js13(page router, CSR), GraphQl/Apollo, TypeScript",
  },
  {
    id: 4,
    link: "https://yau1heni.github.io/todolist",
    src: todo,
    title: "Todolist",
    description:
      "Application build with ReactJS, Redux-Toolkit, TypeScript, MUI, Storybook, Jest, and etc.",
    stack: "ReactJS, Redux-Toolkit, TypeScript, MUI, Storybook, Jest and etc.",
  },
  {
    id: 5,
    link: "https://Yau1heni.github.io/cards",
    src: cards,
    title: "Learning App",
    description: "Learning platform for memorizing words",
    stack: "ReactJS, Redux-Toolkit, TypeScript, MUI, Formik and etc.",
  },
  {
    id: 6,
    link: "https://yau1heni.github.io/burger-house",
    src: burger,
    title: "Burger house",
    description: "Burger ordering app",
    stack: "Angular, SCSS",
  },
  {
    id: 7,
    link: "https://yau1heni.github.io/crm",
    src: crm,
    title: "CRM System",
    description: "Application build with Vue",
    stack: "Vue, Nuxt",
  },
  {
    id: 8,
    link: "https://github.com/Yau1heni/blog-platform",
    src: blog,
    title: "Blog platform",
    description: "Blog post platform (In progress)",
    stack: "ReactJS, Webpack, Redux-Toolkit, TypeScript and etc.",
  },
  {
    id: 9,
    link: "https://yau1heni.github.io/cookies/",
    src: cookies,
    title: "Cookies app",
    description: "Cookies ordering app",
    stack: "Angular, SCSS",
  },
];

export type ProjectData = typeof projectsData;
