import agile from "../../assets/ShoppingCart/products/agile.jpeg";
import bootStrap from "../../assets/ShoppingCart/products/bootStrap.jpeg";
import goldenDeveloper from "../../assets/ShoppingCart/products/goldenDeveloper.jpeg";
import hook from "../../assets/ShoppingCart/products/hook.jpeg";
import junior from "../../assets/ShoppingCart/products/junior.jpeg";
import conditionalIf from "../../assets/ShoppingCart/products/if_else.jpeg";
import nerd from "../../assets/ShoppingCart/products/nerd.jpeg";
import node from "../../assets/ShoppingCart/products/node.jpeg";


export const DUMMY_PRODUCTS = [
  {
    id: "p1",
    image: goldenDeveloper,
    title: "Golden Senior Developer",
    price: 6000,
    description:
      "Boost your application! Essential component for pro applications. Your team will solve issues faster thanks to this monster skills and experience."
  },
  {
    id: "p5",
    image: junior,
    title: "Junior developer",
    price: 2000,
    description:
      "The if/else statement executes a block of code if a specified condition is true. If the condition is false, another block of code can be executed."
  },
  {
    id: "p2",
    image: agile,
    title: "Agile development team",
    price: 4000,
    description:
      "A complete team to develop an Agile strategy. Divides the project into phases and emphasizes collaboration and continuous improvement. Monsters included: 2 junior developers, 1 scrum master, 1 product owner."
  },

  {
    id: "p3",
    image: bootStrap,
    title: "BootStrap",
    price: 49.99,
    description:
      "A powerful, extensible and feature-packed interface toolkit. Build and customize with Sass, use pre-built components and grid systems, and bring projects to life with powerful JavaScript plugins."
  },
  {
    id: "p4",
    image: hook,
    title: "Hook",
    price: 29.99,
    description:
      "With React Hooks you can extract stateful logic from a component so it can be tested independently and reused. Without writing a class!"
  },
  {
    id: "p6",
    image: conditionalIf,
    title: "if / else",
    price: 2.99,
    description:
      "The if/else statement executes a block of code if a specified condition is true. If the condition is false, another block of code can be executed."
  },
  {
    id: "p7",
    image: nerd,
    title: "Custom Nerd",
    price: 549.99,
    description:
      "Custom your own nerd monster and choose it's skills. Make it be part of your team and upgrade it from junior to senior as it gains experience."
  },
  {
    id: "p8",
    image: node,
    title: "Node.js",
    price: 10.99,
    description:
      "A basic one to start you application. Node.js is a runtime environment used to execute JavaScript outside of the browser."
  },
];
