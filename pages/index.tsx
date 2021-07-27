import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { Hero } from "../src/components/Hero";
import { Brands } from "../src/components/Brands";

export default function Home() {
  return (
    <div>
      <Head>
        <title>TOTI</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Brands />
    </div>
  );
}
