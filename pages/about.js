// about.js
import Navinav from "../components/navinav";

const salutations = `<script>var example = ['hello!', 'merhaba!','bonjour!','hallo!','hola!', '!שלום', '你好!'];textSequence(0);function textSequence(i) {if (example.length > i){setTimeout(function() {document.getElementById("sequence").innerHTML = example[i];textSequence(++i);}, 1000);} else if (example.length == i) {textSequence(0);}}</script> <div id="sequence"></div>`;

const navigation = [
  { name: "Education", href: "/education" },
  { name: "Research", href: "/research" },
  { name: "Innovation", href: "/innovation" },
  { name: "About cna", href: "/about" },
];

export default function About() {
  return (
    <>
        <Navinav></Navinav>
        <span>about</span>
    </>
  );
}
