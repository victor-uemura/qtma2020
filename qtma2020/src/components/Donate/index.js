import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import Navigation from "../NavBar";
import logoBlack from "../../assets/img/logo-black.svg";
import OrgCard from "../OrgCard";
import marthas from "../../assets/img/marthas.jpg";
import lung from "../../assets/img/lung.jpg";
import kidney from "../../assets/img/kidney.jpg";
import amhs from "../../assets/img/amhs.png";
import cnib from "../../assets/img/cnib.png";
import foodbank from "../../assets/img/foodbank.png";
import bfo from "../../assets/img/bfo.png";
import cfc from "../../assets/img/cfc.png";
import neads from "../../assets/img/neads.png";
import dimes from "../../assets/img/dimes.png";
import "./index.css";
import StepsBlock from "../StepsBlock";

const stripePromise = loadStripe(
  "pk_test_51HnvToF7eOu1j3PWQuzMnqZj9BZRncG7KTyrxwP82ATVQA9fZTA86J8nbOeNie6U6oKjxwhY8KCGh5tktROMD4sm00xxzFvrz0"
);
function Donate() {
  const orgs = [
    {
      title: "Martha's Table",
      img: marthas,
      location: "Kingston, Ontario",
      desc: "Help people in need have a nutritious meal and find community.",
    },
    {
      title: "The Kidney Foundation of Canada ",
      img: kidney,
      location: "Kingston, Ontario",
      desc: "Fund research and potential breakthroughs that will change lives.",
    },
    {
      title: "Lung Health Foundation",
      img: lung,
      location: "Kingston, Ontario",
      desc:
        "Dedicated to ending gaps in the prevention, diagnosis, and care of lung disease in Canada.",
    },
    {
      title: "Addiction and Mental Health Services ",
      img: amhs,
      location: "Kingston, Ontario",
      desc:
        "A community where people have wellness, acceptance and a sense of belonging.",
    },
    {
      title: "CNIB Foundation",
      img: cnib,
      location: "Kingston, Ontario",
      desc: "Assisting Canadians who are blind or living with vision loss.",
    },
    {
      title: "Kingston Foodbank",
      img: foodbank,
      location: "Kingston, Ontario",
      desc:
        "Monetary and food donations help us to nourish local families by providing groceries.",
    },
    {
      title: "Bereaved Families of Ontario - Rotary Club of Kingston",
      img: bfo,
      location: "Kingston, Ontario",
      desc:
        "We are the bereaved helping the bereaved learn to live with grief. ",
    },
    {
      title: "Cystic Fibrosis Canada",
      img: cfc,
      location: "Kingston, Ontario",
      desc:
        "Committed to improving and lengthening the lives of people living with cystic fibrosis.",
    },
    {
      title: "National Education Association of Disabled Students",
      img: neads,
      location: "Kingston, Ontario",
      desc:
        "Access to education and employment for students with disabilities.",
    },
    {
      title: "March of Dimes",
      img: dimes,
      location: "Kingston, Ontario",
      desc:
        "Maximize the independence, personal empowerment and community participation of people with physical disabilities.",
    },
  ];

  const renderOrgCards = () => {
    return orgs.map((org, i) => {
      return (
        <div className="orgCard">
          <OrgCard
            title={org.title}
            img={org.img}
            location={org.location}
            desc={org.desc}
            key={i}
          />
        </div>
      );
    });
  };

  return (
    <div className="donatebg">
      <Navigation
        logo={logoBlack}
        fontColor="#000"
        background="#fff"
        signUpColor="#fff"
        signUpBackground="#437F55"
      />
      <StepsBlock />

      <div className="donateCards">{renderOrgCards()}</div>
    </div>
  );
}
export default Donate;
