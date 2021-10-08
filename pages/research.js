// research.js
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ReactTooltip from "react-tooltip";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Fragment } from "react";
import { Popover } from "@headlessui/react";
import Link from "next/link";
import Navinav from ".//components/navinav";
const salutations = `<script>var example = ['hello!', 'merhaba!','bonjour!','hallo!','hola!', '!שלום', '你好!'];textSequence(0);function textSequence(i) {if (example.length > i){setTimeout(function() {document.getElementById("sequence").innerHTML = example[i];textSequence(++i);}, 1000);} else if (example.length == i) {textSequence(0);}}</script> <div id="sequence"></div>`;

export default function Research() {
  return (
    <>
      <Navinav></Navinav>
      <span>research</span>
    </>
  );
}
