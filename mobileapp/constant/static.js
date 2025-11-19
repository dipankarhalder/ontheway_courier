import mainAppLogo from "../assets/images/logo.png";
import splashScreenBackground from "../assets/images/splashbg.png";
import loginBackground from "../assets/images/login.jpg";
import regBackground from "../assets/images/reg.jpg";

import sp1 from "../assets/images/sp1.png";
import sp2 from "../assets/images/sp2.png";
import sp3 from "../assets/images/sp3.png";

import comboPackBanner1 from "../assets/images/combo1.jpeg";
import comboPackBanner2 from "../assets/images/combo2.jpg";
import comboPackBanner3 from "../assets/images/combo3.jpg";

import heart from "../assets/images/heart.png";

import banner1 from "../assets/images/banner1.jpg";
import special from "../assets/images/special.png";
import birayani from "../assets/images/birayani.png";
import tandoor from "../assets/images/tandoor.png";
import qorma from "../assets/images/qorma.png";
import chicken from "../assets/images/chicken.png";
import kebab from "../assets/images/kebab.png";
import mutton from "../assets/images/mutton.png";
import fried from "../assets/images/fried.png";

import foodItemImage1 from "../assets/images/m1.jpg";
import foodItemImage2 from "../assets/images/m2.jpg";
import foodItemImage3 from "../assets/images/m3.jpg";
import foodItemImage4 from "../assets/images/m4.jpg";
import foodItemImage5 from "../assets/images/m5.jpg";
import foodItemImage6 from "../assets/images/m6.jpg";

import splashImage1 from "../assets/images/1.jpg";
import splashImage2 from "../assets/images/2.jpg";
import splashImage3 from "../assets/images/3.jpg";
import splashImage4 from "../assets/images/4.jpg";
import splashImage5 from "../assets/images/5.jpg";
import splashImage6 from "../assets/images/6.jpg";
import splashImage7 from "../assets/images/7.jpg";
import splashImage8 from "../assets/images/8.jpg";
import splashImage9 from "../assets/images/9.jpg";
import splashImage10 from "../assets/images/10.jpg";
import splashImage11 from "../assets/images/11.jpg";
import { Home, User, Appoint } from "./icon";

export const main_splash_screen_logo = mainAppLogo;
export const sp_banner_1 = sp1;
export const sp_banner_2 = sp2;
export const sp_banner_3 = sp3;
export const splash_screen_background = splashScreenBackground;
export const login_bg = loginBackground;
export const reg_bg = regBackground;

export const mainBanner = banner1;
export const footer_heart = heart;

export const splash_banner_image_data = {
  splash_image_1: splashImage1,
  splash_image_2: splashImage2,
  splash_image_3: splashImage3,
  splash_image_4: splashImage4,
  splash_image_5: splashImage5,
  splash_image_6: splashImage6,
  splash_image_7: splashImage7,
  splash_image_8: splashImage8,
  splash_image_9: splashImage9,
  splash_image_10: splashImage10,
  splash_image_11: splashImage11,
};

export const slides = [
  {
    id: 1,
    quote: "Fast food that's fresh, delicious,",
    qtext: "and always ready when you are.",
    desc: "order from top local restaurants, track your meal live, and enjoy exclusive deals - all in one app",
  },
  {
    id: 2,
    quote: "Fast, flavorful, and unforgettable",
    qtext: "this is how we do food.",
    desc: "Find the most delicious food with the best quality and free delivery here.",
  },
  {
    id: 3,
    quote: "We serve more than meals",
    qtext: "we serve joy, one bite at a time.",
    desc: "Keeps the emotional connection while trimming the length.",
  },
];

export const special_banner = {
  combo_banner_1: comboPackBanner1,
  combo_banner_2: comboPackBanner2,
  combo_banner_3: comboPackBanner3,
};

export const tabs_information = [
  { name: "home", title: "Home", Icon: Home },
  { name: "bookatable", title: "Book a table", Icon: Appoint },
  { name: "orders", title: "My Orders", Icon: User },
  { name: "profile", title: "My Profile", Icon: User },
];

export const foodCategories = [
  { id: 1, title: "Special", imgUrl: special },
  { id: 2, title: "Biryani", imgUrl: birayani },
  { id: 5, title: "Qorma", imgUrl: qorma },
  { id: 6, title: "Chicken", imgUrl: chicken },
  { id: 7, title: "Mutton", imgUrl: mutton },
  { id: 4, title: "Kabab", imgUrl: kebab },
  { id: 3, title: "Tandoor", imgUrl: tandoor },
  { id: 8, title: "Fried", imgUrl: fried },
];

export const offerList = [
  {
    id: 1,
    title: "10%",
    topColor: "#88c3cf",
    bottomColor: "#3d71e8",
  },
  {
    id: 2,
    title: "25%",
    topColor: "#b2a0e8",
    bottomColor: "#50369e",
  },
  {
    id: 3,
    title: "32%",
    topColor: "#deb876",
    bottomColor: "#d67647",
  },
  {
    id: 4,
    title: "45%",
    topColor: "#c63b63",
    bottomColor: "#8f1136",
  },
  {
    id: 5,
    title: "56%",
    topColor: "#93bf8d",
    bottomColor: "#379b29",
  },
  {
    id: 6,
    title: "40%",
    topColor: "#b2a0e8",
    bottomColor: "#50369e",
  },
];

export const productList = [
  {
    id: 1,
    title: "Fish Birayani",
    imgUrl: foodItemImage1,
    desc: "Lorem Ipsum has been the industrys standard..",
    rating: 4.2,
    rateUser: 124,
    price: "300",
  },
  {
    id: 2,
    title: "Chicken Kebab Birayani",
    imgUrl: foodItemImage2,
    desc: "Lorem Ipsum has been the industrys standard..",
    rating: 2.6,
    rateUser: 24,
    price: "320",
  },
  {
    id: 3,
    title: "Special Chilli Chicken Birayani",
    imgUrl: foodItemImage3,
    desc: "Lorem Ipsum has been the industrys standard..",
    rating: 3.8,
    rateUser: 150,
    price: "430",
  },
  {
    id: 4,
    title: "Chicken Dum Birayani",
    imgUrl: foodItemImage4,
    desc: "Lorem Ipsum has been the industrys standard..",
    rating: 2.9,
    rateUser: 36,
    price: "330",
  },
  {
    id: 5,
    title: "Veg Birayani",
    imgUrl: foodItemImage5,
    desc: "Lorem Ipsum has been the industrys standard..",
    rating: 3.8,
    rateUser: 150,
    price: "430",
  },
  {
    id: 6,
    title: "Royal Special Chicken Birayani",
    imgUrl: foodItemImage6,
    desc: "Lorem Ipsum has been the industrys standard..",
    rating: 4.9,
    rateUser: 36,
    price: "330",
  },
];

export const productListNew = [
  {
    id: 1,
    title: "Fish Birayani",
    imgUrl: foodItemImage1,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    rating: 4.2,
    rateUser: 124,
    price: "300",
    type: "veg",
    bestseller: true,
  },
  {
    id: 2,
    title: "Chicken Kebab Birayani",
    imgUrl: foodItemImage2,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    rating: 2.6,
    rateUser: 24,
    price: "320",
    type: "nonveg",
    bestseller: false,
  },
  {
    id: 3,
    title: "Special Chilli Chicken Birayani",
    imgUrl: foodItemImage3,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    rating: 3.8,
    rateUser: 150,
    price: "430",
    type: "nonveg",
    bestseller: true,
  },
  {
    id: 4,
    title: "Chicken Dum Birayani",
    imgUrl: foodItemImage4,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    rating: 2.9,
    rateUser: 36,
    price: "330",
    type: "veg",
    bestseller: false,
  },
  {
    id: 5,
    title: "Veg Birayani",
    imgUrl: foodItemImage5,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    rating: 3.8,
    rateUser: 150,
    price: "430",
    type: "veg",
    bestseller: false,
  },
  {
    id: 6,
    title: "Royal Special Chicken Birayani",
    imgUrl: foodItemImage6,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    rating: 4.9,
    rateUser: 36,
    price: "330",
    type: "veg",
    bestseller: true,
  },
  {
    id: 7,
    title: "Fish Birayani",
    imgUrl: foodItemImage1,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    rating: 4.2,
    rateUser: 124,
    price: "300",
    type: "nonveg",
    bestseller: true,
  },
  {
    id: 8,
    title: "Chicken Kebab Birayani",
    imgUrl: foodItemImage2,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    rating: 2.6,
    rateUser: 24,
    price: "320",
    type: "nonveg",
    bestseller: true,
  },
  {
    id: 9,
    title: "Special Chilli Chicken Birayani",
    imgUrl: foodItemImage3,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    rating: 3.8,
    rateUser: 150,
    price: "430",
    type: "nonveg",
    bestseller: false,
  },
  {
    id: 10,
    title: "Chicken Dum Birayani",
    imgUrl: foodItemImage4,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    rating: 2.9,
    rateUser: 36,
    price: "330",
    type: "nonveg",
    bestseller: false,
  },
  {
    id: 11,
    title: "Veg Birayani",
    imgUrl: foodItemImage5,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    rating: 3.8,
    rateUser: 150,
    price: "430",
    type: "veg",
    bestseller: false,
  },
  {
    id: 12,
    title: "Royal Special Chicken Birayani",
    imgUrl: foodItemImage6,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    rating: 4.9,
    rateUser: 36,
    price: "330",
    type: "nonveg",
    bestseller: false,
  },
];
