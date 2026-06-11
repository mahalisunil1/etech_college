"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Achiever {
  name: string;
  marks: number;
  image: string;
  rollNo: string;
  isWomens: boolean;
  stateRank?: number;
}

const achievers: Achiever[] = [
  { name: "Parhta Sarathi Khilar", marks: 598, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/01 - PARHTA SARATHI KHILAR - 598.webp", rollNo: "ET26-8845", isWomens: false, stateRank: 1 },
  { name: "Sujit Kumar Rana", marks: 593, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/02 - SUJIT KUMAR RANA - 593.webp", rollNo: "ET26-8462", isWomens: false, stateRank: 2 },
  { name: "Swabhiman Biswal", marks: 593, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/03 - SWABHIMAN BISWAL - 593.webp", rollNo: "ET26-2388", isWomens: false, stateRank: 2 },
  { name: "Sumitra Pradhan", marks: 592, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/04 - SUMITRA PRADHAN - 592.webp", rollNo: "ET26-8525", isWomens: false, stateRank: 3 },
  { name: "Binayak Patra", marks: 590, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/05 - BINAYAK PATRA - 590.webp", rollNo: "ET26-1484", isWomens: false, stateRank: 4 },
  { name: "Smruti Ranjan Sahoo", marks: 589, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/06 - SMRUTI RANJAN SAHOO - 589.webp", rollNo: "ET26-2492", isWomens: false, stateRank: 5 },
  { name: "Supriya Samal", marks: 589, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/07 - SUPRIYA SAMAL - 589.webp", rollNo: "ET26-1339", isWomens: false, stateRank: 5 },
  { name: "Sourav Rout", marks: 585, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/08 - SOURAV ROUT - 585.webp", rollNo: "ET26-9175", isWomens: false, stateRank: 6 },
  { name: "Debaprasad Sahoo", marks: 584, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/09 - DEBAPRASAD SAHOO - 584.webp", rollNo: "ET26-8031", isWomens: false, stateRank: 7 },
  { name: "Sudarshan Sahoo", marks: 584, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/10 - SUDARSHAN SAHOO - 584.webp", rollNo: "ET26-1143", isWomens: false, stateRank: 7 },
  { name: "Jiten Behera", marks: 583, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/11 - JITEN BEHERA - 583.webp", rollNo: "ET26-3819", isWomens: false, stateRank: 8 },
  { name: "Prathamesh Sahoo", marks: 582, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/12 - PRATHAMESH SAHOO - 582.webp", rollNo: "ET26-2664", isWomens: false, stateRank: 9 },
  { name: "Smrutiprajna Tripathy", marks: 581, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/13 - SMRUTIPRAJNA TRIPATHY - 581.webp", rollNo: "ET26-4622", isWomens: false, stateRank: 10 },
  { name: "Jasman Sahoo", marks: 581, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/14 - JASMAN SAHOO - 581.webp", rollNo: "ET26-6934", isWomens: false, stateRank: 10 },
  { name: "Bimal Kumar Bai", marks: 580, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/15 - BIMAL KUMAR BAI - 580.webp", rollNo: "ET26-7312", isWomens: false, stateRank: 11 },
  { name: "Chiranjib Pal", marks: 579, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/16 - CHIRANJIB PAL - 579.webp", rollNo: "ET26-1751", isWomens: false, stateRank: 12 },
  { name: "Shubhrajit Muduli", marks: 579, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/17 - SHUBHRAJIT MUDULI - 579.webp", rollNo: "ET26-6857", isWomens: false, stateRank: 12 },
  { name: "Sambit Sahoo", marks: 579, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/18 - SAMBIT SAHOO - 579.webp", rollNo: "ET26-6179", isWomens: false, stateRank: 12 },
  { name: "Abhishek Behera", marks: 579, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/19 - ABHISHEK BEHERA - 579.webp", rollNo: "ET26-4241", isWomens: false, stateRank: 12 },
  { name: "Pragyan Priyadarshini Roul", marks: 579, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/20 - PRAGYAN PRIYADARSHINI ROUL - 579.webp", rollNo: "ET26-2507", isWomens: false, stateRank: 12 },
  { name: "Sama Sania Begum", marks: 578, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/21 - SAMA SANIA BEGUM - 578.webp", rollNo: "ET26-9501", isWomens: false, stateRank: 13 },
  { name: "Ananya Priyadarsini Sahoo", marks: 578, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/22 - ANANYA PRIYADARSINI SAHOO - 578.webp", rollNo: "ET26-3629", isWomens: false, stateRank: 13 },
  { name: "Sonali Priyadarsini Sahoo", marks: 578, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/23 - SONALI PRIYADARSINI SAHOO - 578.webp", rollNo: "ET26-8927", isWomens: false, stateRank: 13 },
  { name: "Suchismita Sahu", marks: 577, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/24 - SUCHISMITA SAHU - 577.webp", rollNo: "ET26-7564", isWomens: false, stateRank: 14 },
  { name: "Barsha Mohini Sahu", marks: 577, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/25 - BARSHA MOHINI SAHU - 577.webp", rollNo: "ET26-3507", isWomens: false, stateRank: 14 },
  { name: "Jagadish Pattanaik", marks: 576, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/26 - JAGADISH PATTANAIK - 576.webp", rollNo: "ET26-7275", isWomens: false, stateRank: 15 },
  { name: "Soumyajit Sahoo", marks: 576, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/27 - SOUMYAJIT SAHOO - 576.webp", rollNo: "ET26-5248", isWomens: false, stateRank: 15 },
  { name: "Pritiranjan Sahoo", marks: 576, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/28 - PRITIRANJAN SAHOO - 576.webp", rollNo: "ET26-1069", isWomens: false, stateRank: 15 },
  { name: "Barsha Subhadarshani Sahu", marks: 576, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/29 - BARSHA SUBHADARSHANI SAHU - 576.webp", rollNo: "ET26-1444", isWomens: false, stateRank: 15 },
  { name: "Swayam Subham Samal", marks: 576, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/30 - SWAYAM SUBHAM SAMAL - 576.webp", rollNo: "ET26-8193", isWomens: false, stateRank: 15 },
  { name: "Ankita Priyadarshini", marks: 575, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/31 - ANKITA PRIYADARSHINI - 575.webp", rollNo: "ET26-1876", isWomens: false, stateRank: 16 },
  { name: "Madhusmita Sathua Mohapatra", marks: 574, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/32 - MADHUSMITA SATHUA MOHAPATRA - 574.webp", rollNo: "ET26-7913", isWomens: false, stateRank: 17 },
  { name: "Jyotiranjan Sahu", marks: 574, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/33 - JYOTIRANJAN SAHU - 574.webp", rollNo: "ET26-8497", isWomens: false, stateRank: 17 },
  { name: "T.D Yashraj", marks: 573, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/34 - T.D YASHRAJ - 573.webp", rollNo: "ET26-9427", isWomens: false, stateRank: 18 },
  { name: "Omm Prakash Nayak", marks: 573, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/35 - OMM PRAKASH NAYAK - 573.webp", rollNo: "ET26-4914", isWomens: false, stateRank: 18 },
  { name: "Rohan Sahoo", marks: 572, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/36 - ROHAN SAHOO - 572.webp", rollNo: "ET26-7499", isWomens: false, stateRank: 19 },
  { name: "Satyanarayan Pani", marks: 572, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/37 - SATYANARAYAN PANI - 572.webp", rollNo: "ET26-3755", isWomens: false, stateRank: 19 },
  { name: "Rajashree Rajalaxmi Sahoo", marks: 572, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/38 - RAJASHREE RAJALAXMI SAHOO - 572.webp", rollNo: "ET26-3147", isWomens: false, stateRank: 19 },
  { name: "Tushar Ranjan Pradhan", marks: 572, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/39 - TUSHAR RANJAN PRADHAN - 572.webp", rollNo: "ET26-1283", isWomens: false, stateRank: 19 },
  { name: "Rakesh Rout", marks: 571, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/40 - RAKESH ROUT - 571.webp", rollNo: "ET26-9559", isWomens: false, stateRank: 20 },
  { name: "Lusi Sahu", marks: 570, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/41 - LUSI SAHU - 570.webp", rollNo: "ET26-3329", isWomens: false },
  { name: "Deepsita Pradhan", marks: 570, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/42 - DEEPSITA PRADHAN - 570.webp", rollNo: "ET26-7297", isWomens: false },
  { name: "Ratandeep Sahoo", marks: 570, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/43 - RATANDEEP SAHOO - 570.webp", rollNo: "ET26-3914", isWomens: false },
  { name: "Brahmananda Sahu", marks: 570, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/44 - BRAHMANANDA SAHU - 570.webp", rollNo: "ET26-9515", isWomens: false },
  { name: "Asutosh Amanta", marks: 570, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/45 - ASUTOSH AMANTA - 570.webp", rollNo: "ET26-5272", isWomens: false },
  { name: "Subhalaxmi Maharana", marks: 570, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/90% ACHIEVERS PHOTOS - WOMENS/01 - SUBHALAXMI MAHARANA - 570.webp", rollNo: "ET26-6476", isWomens: true },
  { name: "Sital Sahoo", marks: 569, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/46 - SITAL SAHOO - 569.webp", rollNo: "ET26-1852", isWomens: false },
  { name: "Smrutiranjan Sahu", marks: 569, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/47 - SMRUTIRANJAN SAHU - 569.webp", rollNo: "ET26-7548", isWomens: false },
  { name: "Lopamudra Sahoo", marks: 569, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/48 - LOPAMUDRA SAHOO - 569.webp", rollNo: "ET26-9772", isWomens: false },
  { name: "Astha Adyasha Mohanty", marks: 569, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/49 - ASTHA ADYASHA MOHANTY - 569.webp", rollNo: "ET26-8482", isWomens: false },
  { name: "Sthitipragyan Dash", marks: 568, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/50 - STHITIPRAGYAN DASH - 568.webp", rollNo: "ET26-5011", isWomens: false },
  { name: "Prabhanjan Sahu", marks: 567, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/51 - PRABHANJAN SAHU - 567.webp", rollNo: "ET26-4828", isWomens: false },
  { name: "Shreema Priyadarsini Sahu", marks: 567, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/52 - SHREEMA PRIYADARSINI SAHU - 567.webp", rollNo: "ET26-9192", isWomens: false },
  { name: "Anil Kumar Jena", marks: 567, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/53 - ANIL KUMAR JENA - 567.webp", rollNo: "ET26-7353", isWomens: false },
  { name: "Bhagyalaxmi Sahoo", marks: 567, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/54 - BHAGYALAXMI SAHOO - 567.webp", rollNo: "ET26-7074", isWomens: false },
  { name: "Payal Sahoo", marks: 566, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/55 - PAYAL SAHOO - 566.webp", rollNo: "ET26-7469", isWomens: false },
  { name: "Rahulesh Sahoo", marks: 566, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/56 - RAHULESH SAHOO - 566.webp", rollNo: "ET26-5178", isWomens: false },
  { name: "Pupun Nayak", marks: 566, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/57 - PUPUN NAYAK - 566.webp", rollNo: "ET26-4027", isWomens: false },
  { name: "Debadatta Sahoo", marks: 565, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/58 - DEBADATTA SAHOO - 565.webp", rollNo: "ET26-3099", isWomens: false },
  { name: "Swayamshree Prusty", marks: 565, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/59 - SWAYAMSHREE PRUSTY - 565.webp", rollNo: "ET26-2937", isWomens: false },
  { name: "Omm Prakash Behera", marks: 564, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/60 - OMM PRAKASH BEHERA - 564.webp", rollNo: "ET26-4862", isWomens: false },
  { name: "Akash Jyoti Dehury", marks: 564, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/61 - AKASH JYOTI DEHURY - 564.webp", rollNo: "ET26-4955", isWomens: false },
  { name: "Swayam Jena", marks: 564, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/62 - SWAYAM JENA - 564.webp", rollNo: "ET26-7707", isWomens: false },
  { name: "Omm Prakash Nayak", marks: 563, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/63 - OMM PRAKASH NAYAK - 563.webp", rollNo: "ET26-4914", isWomens: false },
  { name: "Om Prakash Ganthia", marks: 563, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/64 - OM PRAKASH GANTHIA - 563.webp", rollNo: "ET26-8691", isWomens: false },
  { name: "Ananya Rout", marks: 562, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/65 - ANANYA ROUT - 562.webp", rollNo: "ET26-1141", isWomens: false },
  { name: "Jyotsna Rani Behera", marks: 561, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/66 - JYOTSNA RANI BEHERA - 561.webp", rollNo: "ET26-6322", isWomens: false },
  { name: "Krishnabharati Prusty", marks: 561, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/67 - KRISHNABHARATI PRUSTY - 561.webp", rollNo: "ET26-6872", isWomens: false },
  { name: "Priyasmita Sahoo", marks: 561, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/68 - PRIYASMITA SAHOO - 561.webp", rollNo: "ET26-4582", isWomens: false },
  { name: "Piyush Samal", marks: 561, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/69 - PIYUSH SAMAL - 561.webp", rollNo: "ET26-3116", isWomens: false },
  { name: "Soumya Sourav Sahoo", marks: 560, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/70 - SOUMYA SOURAV SAHOO - 560.webp", rollNo: "ET26-9510", isWomens: false },
  { name: "Rama Chandra Behera", marks: 560, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/71 - RAMA CHANDRA BEHERA - 560.webp", rollNo: "ET26-1121", isWomens: false },
  { name: "Om Prakash Sahoo", marks: 559, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/72 - OM PRAKASH SAHOO - 559.webp", rollNo: "ET26-5982", isWomens: false },
  { name: "Manas Ranjan Behera", marks: 559, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/73 - MANAS RANJAN BEHERA - 559.webp", rollNo: "ET26-6472", isWomens: false },
  { name: "Jyotshnamayee Jena", marks: 559, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/74 - JYOTSHNAMAYEE JENA - 559.webp", rollNo: "ET26-2312", isWomens: false },
  { name: "Tapaswinee Panda", marks: 558, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/75 - TAPASWINEE PANDA - 558.webp", rollNo: "ET26-4001", isWomens: false },
  { name: "Pranaya Kumar Rath", marks: 558, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/76 - PRANAYA KUMAR RATH - 558.webp", rollNo: "ET26-5592", isWomens: false },
  { name: "Pinaki Pritam Chhotaray", marks: 558, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/77 - PINAKI PRITAM CHHOTARAY - 558.webp", rollNo: "ET26-1917", isWomens: false },
  { name: "Soven Kumar Sahoo", marks: 558, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/78 - SOVEN KUMAR SAHOO - 558.webp", rollNo: "ET26-8192", isWomens: false },
  { name: "Pratyush Pradhan", marks: 557, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/79 - PRATYUSH PRADHAN - 557.webp", rollNo: "ET26-7555", isWomens: false },
  { name: "Ommshree Acharya", marks: 557, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/80 - OMMSHREE ACHARYA - 557.webp", rollNo: "ET26-5036", isWomens: false },
  { name: "Shubhalaxmi Sahoo", marks: 557, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/81 - SHUBHALAXMI SAHOO - 557.webp", rollNo: "ET26-7463", isWomens: false },
  { name: "Monalisa Pattanaik", marks: 557, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/82 - MONALISA PATTANAIK - 557.webp", rollNo: "ET26-5303", isWomens: false },
  { name: "Nirupama Mohanta", marks: 557, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/83 - NIRUPAMA MOHANTA - 557.webp", rollNo: "ET26-2639", isWomens: false },
  { name: "Mousumi Senapati", marks: 557, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/90% ACHIEVERS PHOTOS - WOMENS/02 - MOUSUMI SENAPATI - 557.webp", rollNo: "ET26-9191", isWomens: true },
  { name: "Amarendra Baral", marks: 556, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/84 - AMARENDRA BARAL - 556.webp", rollNo: "ET26-7092", isWomens: false },
  { name: "Jayashree Sahoo", marks: 556, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/85 - JAYASHREE SAHOO - 556.webp", rollNo: "ET26-1470", isWomens: false },
  { name: "Namo Jagannatha Mohakhud", marks: 556, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/86 - NAMO JAGANNATHA MOHAKHUD - 556.webp", rollNo: "ET26-3041", isWomens: false },
  { name: "Anshuman Rout", marks: 555, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/87 - ANSHUMAN ROUT - 555.webp", rollNo: "ET26-7604", isWomens: false },
  { name: "Bishnupriya Biswal", marks: 555, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/88 - BISHNUPRIYA BISWAL - 555.webp", rollNo: "ET26-1612", isWomens: false },
  { name: "Archita Pradhan", marks: 554, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/89 - ARCHITA PRADHAN - 554.webp", rollNo: "ET26-1437", isWomens: false },
  { name: "Ankita Garnaik", marks: 554, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/90 - ANKITA GARNAIK - 554.webp", rollNo: "ET26-5824", isWomens: false },
  { name: "Diptesh Kumar Parida", marks: 554, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/91 - DIPTESH KUMAR PARIDA - 554.webp", rollNo: "ET26-6282", isWomens: false },
  { name: "Shib Shain Sahoo", marks: 553, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/92 - SHIB SHAIN SAHOO - 553.webp", rollNo: "ET26-1894", isWomens: false },
  { name: "Sabnam Dehury", marks: 553, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/93 - SABNAM DEHURY - 553.webp", rollNo: "ET26-3244", isWomens: false },
  { name: "Bhabani Shankar Sahoo", marks: 553, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/94 - BHABANI SHANKAR SAHOO - 553.webp", rollNo: "ET26-4405", isWomens: false },
  { name: "Sarthak Mishra", marks: 553, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/95 - SARTHAK MISHRA - 553.webp", rollNo: "ET26-9052", isWomens: false },
  { name: "Satyabrata Guru", marks: 553, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/96 - SATYABRATA GURU - 553.webp", rollNo: "ET26-5165", isWomens: false },
  { name: "Ayush Kumar Sahoo", marks: 552, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/97 - AYUSH KUMAR SAHOO - 552.webp", rollNo: "ET26-8445", isWomens: false },
  { name: "Nikhilesh Panda", marks: 552, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/98 - NIKHILESH PANDA - 552.webp", rollNo: "ET26-7747", isWomens: false },
  { name: "Bishnu Charan Pradhan", marks: 551, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/99 - BISHNU CHARAN PRADHAN - 551.webp", rollNo: "ET26-4393", isWomens: false },
  { name: "Jyotiprakash Sethi", marks: 550, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/100 - JYOTIPRAKASH SETHI - 550.webp", rollNo: "ET26-5568", isWomens: false },
  { name: "Prangya Paramita Pradhan", marks: 550, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/101 - PRANGYA PARAMITA PRADHAN - 550.webp", rollNo: "ET26-9364", isWomens: false },
  { name: "Sohani Behera", marks: 550, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/90% ACHIEVERS PHOTOS - WOMENS/03 - SOHANI BEHERA - 550.webp", rollNo: "ET26-9657", isWomens: true },
  { name: "Ankita Sahoo", marks: 550, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/90% ACHIEVERS PHOTOS - WOMENS/04 - ANKITA SAHOO - 550.webp", rollNo: "ET26-6084", isWomens: true },
  { name: "Milan Kumar Acharya", marks: 549, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/102 - MILAN KUMAR ACHARYA - 549.webp", rollNo: "ET26-7374", isWomens: false },
  { name: "Debidutta Satpathy", marks: 549, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/103 - DEBIDUTTA SATPATHY - 549.webp", rollNo: "ET26-4867", isWomens: false },
  { name: "Subhankar Pradhan", marks: 549, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/104 - SUBHANKAR PRADHAN - 549.webp", rollNo: "ET26-8123", isWomens: false },
  { name: "Soumendra Rout", marks: 548, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/105 - SOUMENDRA ROUT - 548.webp", rollNo: "ET26-1536", isWomens: false },
  { name: "Asish Biswal", marks: 548, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/106 - ASISH BISWAL - 548.webp", rollNo: "ET26-1991", isWomens: false },
  { name: "Sushree Sayalee Behera", marks: 547, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/107 - SUSHREE SAYALEE BEHERA - 547.webp", rollNo: "ET26-6095", isWomens: false },
  { name: "Prabhujeet Behera", marks: 547, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/108 - PRABHUJEET BEHERA - 547.webp", rollNo: "ET26-1947", isWomens: false },
  { name: "Akankshya Akasmita Mahalik", marks: 547, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/109 - AKANKSHYA AKASMITA MAHALIK - 547.webp", rollNo: "ET26-7438", isWomens: false },
  { name: "Yuvraj Sahu", marks: 546, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/110 - YUVRAJ SAHU - 546.webp", rollNo: "ET26-3295", isWomens: false },
  { name: "Ipsita Tripathy", marks: 546, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/111 - IPSITA TRIPATHY - 546.webp", rollNo: "ET26-3074", isWomens: false },
  { name: "Tapas Ranjan Sahu", marks: 546, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/112 - TAPAS RANJAN SAHU - 546.webp", rollNo: "ET26-6447", isWomens: false },
  { name: "Prachi Prekshya Behera", marks: 545, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/113 - PRACHI PREKSHYA BEHERA - 545.webp", rollNo: "ET26-1247", isWomens: false },
  { name: "Krushnapriya Baral", marks: 545, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/114 - KRUSHNAPRIYA BARAL - 545.webp", rollNo: "ET26-7115", isWomens: false },
  { name: "Prateek Sahoo", marks: 545, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/115 - PRATEEK SAHOO - 545.webp", rollNo: "ET26-1654", isWomens: false },
  { name: "Smruti Ranjan Sahoo", marks: 544, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/116 - SMRUTI RANJAN SAHOO - 544.webp", rollNo: "ET26-2492", isWomens: false },
  { name: "Priyam Sahoo", marks: 544, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/117 - PRIYAM SAHOO - 544.webp", rollNo: "ET26-3951", isWomens: false },
  { name: "Bishmay Keshari Pradhan", marks: 543, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/118 - BISHMAY KESHARI PRADHAN - 543.webp", rollNo: "ET26-3705", isWomens: false },
  { name: "Ipsita Sahoo", marks: 543, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/119 - IPSITA SAHOO - 543.webp", rollNo: "ET26-4193", isWomens: false },
  { name: "Prachi Priyadarshini Khuntia", marks: 543, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/120 - PRACHI PRIYADARSHINI KHUNTIA - 543.webp", rollNo: "ET26-8601", isWomens: false },
  { name: "Sushree Tamanna Sahu", marks: 543, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/121 - SUSHREE TAMANNA SAHU - 543.webp", rollNo: "ET26-8756", isWomens: false },
  { name: "Suraj Kumar Sahoo", marks: 543, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/122 - SURAJ KUMAR SAHOO - 543.webp", rollNo: "ET26-5972", isWomens: false },
  { name: "Prangyasmita Parida", marks: 542, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/123 - PRANGYASMITA PARIDA - 542.webp", rollNo: "ET26-6551", isWomens: false },
  { name: "Chinmayee Samal", marks: 542, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/124 - CHINMAYEE SAMAL - 542.webp", rollNo: "ET26-4447", isWomens: false },
  { name: "Soumyashree Rath", marks: 542, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/125 - SOUMYASHREE RATH - 542.webp", rollNo: "ET26-2379", isWomens: false },
  { name: "Simran Acharya", marks: 541, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/126 - SIMRAN ACHARYA - 541.webp", rollNo: "ET26-2591", isWomens: false },
  { name: "Shubhashree Biswal", marks: 541, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/127 - SHUBHASHREE BISWAL - 541.webp", rollNo: "ET26-6634", isWomens: false },
  { name: "Lopita Dash", marks: 540, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/128 - LOPITA DASH - 540.webp", rollNo: "ET26-3301", isWomens: false },
  { name: "Yashobanta Pradhan", marks: 540, image: "/WEBSITE CHANGES 3/CHSE 90% ACHIEVERS/129 - YASHOBANTA PRADHAN - 540.webp", rollNo: "ET26-6696", isWomens: false },
];

const ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function TopAchievers() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "coed" | "womens">("all");
  const [showAllCoed, setShowAllCoed] = useState(false);
  const [showAllWomens, setShowAllWomens] = useState(false);
  const [filterLetterCoed, setFilterLetterCoed] = useState<string | null>(null);
  const [filterLetterWomens, setFilterLetterWomens] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const coedTopper = achievers.find(a => !a.isWomens);
  const coedOthers = achievers.filter(a => !a.isWomens && a.name !== coedTopper?.name);

  const womensTopper = achievers.find(a => a.isWomens);
  const womensOthers = achievers.filter(a => a.isWomens && a.name !== womensTopper?.name);

  const renderSection = (
    title: string,
    topper: Achiever | undefined,
    others: Achiever[],
    isWomensSection: boolean,
    showAll: boolean,
    onToggleShowAll: () => void,
    filterLetter: string | null,
    setFilterLetter: (letter: string | null) => void
  ) => {
    if (!topper) return null;

    const filteredOthers = filterLetter
      ? others.filter((a) => a.name.toUpperCase().startsWith(filterLetter))
      : others;
      
    const uniqueLetters = Array.from(new Set(others.map((a) => a.name.charAt(0).toUpperCase()))).sort();

    // Find global rank for the topper
    const globalRank = achievers.findIndex((a) => a.name === topper.name) + 1;
    const sectionId = `toppers-${isWomensSection ? 'womens' : 'coed'}`;

    return (
      <div id={sectionId} className="mb-24 last:mb-0 scroll-mt-32">
        {/* Section Subheading */}
        <div className="flex items-center gap-4 mb-10">
          <div className={`w-3 h-3 rounded-full ${isWomensSection ? "bg-rose-500" : "bg-blue-600"}`} />
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 tracking-tight">
            {title}
          </h3>
          <div className="h-px bg-slate-200 flex-1" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Spotlight Rank 1 Card */}
          <div className="w-full lg:w-1/3 max-w-[380px] mx-auto lg:mx-0 lg:sticky lg:top-32">
            <div className="w-full relative bg-gradient-to-br from-slate-900 via-[#0f172a] to-[#1e293b] rounded-3xl p-6 border-2 border-[#fbbf24]/50 shadow-2xl flex flex-col justify-between overflow-hidden group">
              {/* Internal Glow Effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#fbbf24]/10 rounded-full blur-2xl pointer-events-none" />
              
              <div>
                <div className="flex justify-start items-center mb-6 relative z-10">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-amber-400 to-amber-600 text-slate-900 text-[10px] font-black tracking-widest uppercase rounded-full shadow-md flex items-center gap-1.5">
                    <span>👑</span> School Topper Rank 1
                  </span>
                </div>

                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden mb-6 border-2 border-slate-800 bg-slate-800 shadow-inner">
                  <Image 
                    src={topper.image} 
                    alt={topper.name} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 25vw" 
                    className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                  />
                  {/* Subtle Dark Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
                  
                  {/* Score Badge inside Image */}
                  <div className="absolute bottom-4 left-4 bg-[#fbbf24] text-slate-950 font-black text-sm px-4 py-1.5 rounded-xl shadow-lg">
                    {topper.marks} Marks
                  </div>
                </div>

                <div className="relative z-10">
                  <h4 className="text-2xl font-bold text-white font-serif tracking-tight mb-1 group-hover:text-[#fbbf24] transition-colors duration-300">
                    {topper.name}
                  </h4>
                  <p className="text-slate-400 font-mono text-xs uppercase tracking-wider mb-1">CHSE Roll: {topper.rollNo}</p>
                  {topper.stateRank && <p className="text-blue-300 font-bold text-xs uppercase tracking-wider mb-2">State Rank: {topper.stateRank}</p>}
                </div>
              </div>

              <div className="pt-5 border-t border-slate-800 mt-6 flex justify-between items-center relative z-10">
                <span className="text-slate-500 text-[10px] font-bold tracking-widest uppercase">Academic Excellence</span>
                <span className="text-[#fbbf25] font-black text-xs font-mono">90%+ CLUB</span>
              </div>
            </div>
          </div>

          {/* Grid of Other Toppers */}
          <div className="w-full lg:w-2/3">
            {/* Alphabet Filter */}
            {uniqueLetters.length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5 md:gap-2 mb-6">
                <button
                  onClick={() => { setFilterLetter(null); if(showAll) onToggleShowAll(); }}
                  className={`px-3 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider transition-colors ${
                    !filterLetter
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-white text-slate-500 hover:bg-slate-100 hover:text-slate-800 border border-slate-200"
                  }`}
                >
                  All
                </button>
                {ALPHABETS.map(letter => {
                  return (
                    <button
                      key={letter}
                      onClick={() => { setFilterLetter(letter); if(!showAll) onToggleShowAll(); }}
                      className={`w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full text-[11px] md:text-xs font-bold transition-colors ${
                        filterLetter === letter
                          ? "bg-blue-600 text-white shadow-md"
                          : "bg-white text-slate-500 hover:bg-slate-100 hover:text-slate-800 border border-slate-200"
                      }`}
                    >
                      {letter}
                    </button>
                  );
                })}
              </div>
            )}

            {filteredOthers.length === 0 ? (
              <div className="w-full flex flex-col items-center justify-center py-16 bg-slate-50 border border-slate-200 border-dashed rounded-2xl animate-fadeIn">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h4 className="text-slate-800 font-bold text-lg mb-1">No Achievers Found</h4>
                <p className="text-slate-500 font-medium text-sm text-center px-4">
                  There are no students whose name starts with "{filterLetter}" in this section.
                </p>
                <button 
                  onClick={() => { setFilterLetter(null); if(showAll) onToggleShowAll(); }}
                  className="mt-6 px-6 py-2 bg-blue-600 text-white text-sm font-bold rounded-full hover:bg-blue-700 transition-colors shadow-sm"
                >
                  Clear Filter
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {(showAll ? filteredOthers : filteredOthers.slice(0, 11)).map((achiever, index) => {
                const globalRankIdx = achievers.findIndex((a) => a.name === achiever.name) + 1;
                const isExpandedItem = showAll && index > 10;
                const hideOnMobile = !showAll && index > 3;
                
                return (
                  <div 
                    key={achiever.rollNo} 
                    className={`group relative bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_45px_rgba(30,58,138,0.1)] border border-slate-100 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-1 ${hideOnMobile ? 'hidden sm:block' : ''}`}
                    style={isExpandedItem ? { animation: `fadeInScale 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards`, animationDelay: `${(index - 11) * 40}ms`, opacity: 0 } : {}}
                  >
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image 
                        src={achiever.image} 
                        alt={achiever.name} 
                        fill
                        sizes="(max-width: 768px) 100vw, 20vw"
                        loading="lazy"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700 bg-slate-50"
                      />
                      
                      {/* Badge showing Rank Removed as requested */}

                      {/* Gradient Overlay for Text Readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e45]/90 via-[#0f1e45]/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-500 z-10" />
                      
                      {/* Content Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-500 z-20">
                        <div className="inline-block bg-[#fbbf24] text-slate-900 font-bold text-[10px] px-2.5 py-0.5 rounded-lg mb-2 shadow-sm">
                          {achiever.marks} Marks
                        </div>
                        <h4 className="text-white font-serif font-bold text-base leading-tight mb-0.5">
                          {achiever.name}
                        </h4>
                        <p className="text-blue-200/80 text-[9px] font-mono tracking-wide uppercase mb-0.5">
                          CHSE Roll: {achiever.rollNo}
                        </p>
                        {achiever.stateRank && (
                          <p className="text-[#fbbf24] text-[10px] font-bold tracking-wide uppercase">
                            State Rank: {achiever.stateRank}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            )}

            {/* View All / Less Button for this specific section */}
            {filteredOthers.length > 11 && (
              <div id={`toggle-${sectionId}`} className="flex justify-center mt-10 relative z-20 reveal">
                <button
                  onClick={() => {
                    if (showAll) {
                      onToggleShowAll(); // Collapse first
                      setTimeout(() => {
                        const el = document.getElementById(`toggle-${sectionId}`);
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth", block: "center" });
                        }
                      }, 50);
                    } else {
                      onToggleShowAll();
                    }
                  }}
                  className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 hover:border-blue-500 hover:text-blue-600 px-6 py-3 rounded-lg font-bold text-sm shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  {showAll ? "View Less" : `View All ${isWomensSection ? "Women's" : "Co-Ed"} Achievers`}
                  <svg className={`w-4 h-4 transition-transform ${showAll ? "group-hover:-translate-y-1" : "group-hover:translate-y-1"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {showAll ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    )}
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="toppers" className="w-full bg-gradient-to-b from-[#f8fafc] to-white py-20 lg:py-32 relative">
      {/* ── Rich Background Decorative Elements ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#1e3a8a 1px, transparent 1px), linear-gradient(90deg, #1e3a8a 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        />

        {/* Glowing Orbs */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#fbbf24]/10 rounded-full blur-[120px]" />
      </div>

      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes floatFast {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }
        @keyframes fadeInScale {
          0% { opacity: 0; transform: scale(0.95) translateY(10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
      <svg className="absolute top-20 left-10 w-8 h-8 text-[#fbbf24]/30 pointer-events-none" style={{ animation: 'floatSlow 6s ease-in-out infinite' }} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L14.4 9.6H22L15.8 14.4L18.2 22L12 17.2L5.8 22L8.2 14.4L2 9.6H9.6L12 2Z"/></svg>
      <svg className="absolute bottom-40 right-20 w-12 h-12 text-blue-500/20 pointer-events-none" style={{ animation: 'floatFast 5s ease-in-out infinite' }} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L14.4 9.6H22L15.8 14.4L18.2 22L12 17.2L5.8 22L8.2 14.4L2 9.6H9.6L12 2Z"/></svg>

      <div className="w-[90vw] mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12 reveal">
          <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm mb-3 flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-blue-600" /> Academic Excellence <span className="w-8 h-[2px] bg-blue-600" />
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-[1.1] tracking-tight mb-4">
            90%+ Achievers Club
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Honoring the brilliant minds who have consistently pushed the boundaries of academic excellence.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 mb-16 relative z-30">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
              activeTab === "all"
                ? "bg-[#1e3a8a] text-white shadow-lg"
                : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
            }`}
          >
            All Toppers
          </button>
          <button
            onClick={() => setActiveTab("coed")}
            className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
              activeTab === "coed"
                ? "bg-[#1e3a8a] text-white shadow-lg"
                : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
            }`}
          >
            eTech Co-Ed Residential H.S.
          </button>
          <button
            onClick={() => setActiveTab("womens")}
            className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
              activeTab === "womens"
                ? "bg-[#1e3a8a] text-white shadow-lg"
                : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
            }`}
          >
            eTech Women's H.S.
          </button>
        </div>

        {/* Sections Grid Layout */}
        <div className={`transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          {(activeTab === "all" || activeTab === "coed") && 
            renderSection("eTech Residential Higher Secondary School Toppers (Co-Ed)", coedTopper, coedOthers, false, showAllCoed, () => setShowAllCoed(!showAllCoed), filterLetterCoed, setFilterLetterCoed)
          }
          {(activeTab === "all" || activeTab === "womens") && 
            renderSection("eTech Women's Higher Secondary School Toppers", womensTopper, womensOthers, true, showAllWomens, () => setShowAllWomens(!showAllWomens), filterLetterWomens, setFilterLetterWomens)
          }
        </div>
      </div>
    </div>
  );
}
