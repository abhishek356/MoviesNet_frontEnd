"use client";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@repo/ui/navbar"
import MainContent from './component/MainContent'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Navbar/>
    <MainContent/>
    

    </>
  );
}
