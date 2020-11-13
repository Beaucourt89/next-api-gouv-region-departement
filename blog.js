import React from "react";
import { Layout } from "../components/layout";
import Link from "next/link";
import axios from "axios";
import Head from "next/head";

const Blog = ({ posts }) => {
  const styles = {
    main: {
      padding: 20,
      margin: 20,
      borderBottom: "1px solid #DDD",
    },
    img: {
      height: 200,
      width: 300,
    },
  };
  return (
    <>
      <Head>
        <title>Liste  des blogs</title>
      </Head>
      <Layout>
        <h1>Cette page utitlise getStaticProps</h1>
        {posts.map((post) => (
          <div key={post._id} style={styles.main}>
            <h1>{post.title}</h1>
            <Link href="/blog/[id]" as={`/blog/${post._id}`} passHref>
              <div>
                <img src={post.pictures[0]} style={styles.img} />
              </div>
            </Link>
            <div>{post.body}</div>
          </div>
        ))}
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  // on récupère l'url de base
  const url = "https://aqueous-meadow-07678.herokuapp.com";
  // on récupère les données
  const { data } = await axios.get(`${url}/api/posts`);
  // on met nos data dans posts
  const posts = data.data;
  // on return les props
  return {
    props: {
      posts,
    },
  };
};
export default Blog;
