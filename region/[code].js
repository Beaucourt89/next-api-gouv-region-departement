import React from "react";
import axios from "axios";
import Head from "next/head";

const CodeRegion = ({ data }) => {
  return (
    <>
      {data && (
        <>
          <Head>
            <title>{data.nom}</title>
          </Head>
          <div>
            <h1>Région : {data.nom} </h1>
            <p>Code : {data.code}</p>
          </div>
        </>
      )}
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  const code = params.code;
  const url = "https://geo.api.gouv.fr";
  const { data } = await axios.get(`${url}/regions/${code}`);
  return {
    props: {
      data,
    },
  };
};

export default CodeRegion;
