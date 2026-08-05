import  { moo } from "./moo.js";
import { say } from "cowsay";

let name = "Me";

console.log(
  say({
    text: moo(name),
  })
);