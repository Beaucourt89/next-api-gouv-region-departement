import React from "react";
import { Layout } from "../components/layout";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";

const Home = ({ data }) => {
  const styles = {
    main: {
      padding: 10,
      margin: 10,
      borderBottom: "1px solid #DDD",
    },
    img: {
      height: 300,
      width: 200,
    },
  };

  return (
    <>
      {data && (
        <>
          <Head>
            <title>Liste des regions</title>
          </Head>
          <Layout>
            <div className="container bg bg-secondary">
              <img src="/vac.jpg" style={styles.img} />
              <h1>Cette page utitlise getServerSideProps</h1>
              <ul>
                {data.map((region) => (
                  <li style={styles} key={region.code}>
                    <Link
                      href="/region/[code]"
                      as={`/region/${region.code}`}
                      passHref
                    >
                      <h2>{region.nom}</h2>
                    </Link>
                    {region.code}
                  </li>
                ))}
              </ul>
            </div>
          </Layout>
        </>
      )}
    </>
  );
};

export async function getServerSideProps(context) {
  //ajout de l'url de l'api
  const url = "https://geo.api.gouv.fr";
  const { data } = await axios.get(url + "/regions");

  return {
    props: {
      data,
    },
  };
}
export default Home;
