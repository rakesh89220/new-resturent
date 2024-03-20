import React from "react";
import Layout from "../Components/Layout/Layout";
import { Box, Typography } from "@mui/material";

function About() {
  return (
    <>
      <Layout>
        <Box
        sx={{my:15,
          textAlign:'center',
          p:2,
        "& h4":{
            fontWeight:'bold',
            my:2,
            fontSize:'2rem,'
        },
        "& p": {
          textAlign:"justify"
        },
        "@media (max-width:600px)": {
          mt: 0,
          "& h4": {
            fontSize:"1.5rem",
          }
        }
      }}
        >
          <Typography variant="h4">Welcome To My Resturant</Typography>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
            dolorem, veniam sunt hic numquam, corrupti in odio vel quibusdam
            illo culpa delectus eius quia velit adipisci iure, saepe dicta
            praesentium esse rerum earum fuga optio. Et aliquid eos architecto
            magnam iure illo. Illum, repellat! Libero dicta aut dolor saepe
            facilis sint laborum quis voluptate tempore iure tempora, est
            nostrum doloremque officia possimus ab sit repellendus rerum
            accusamus, quod odit soluta magni maxime dolore? Deserunt voluptatem
            mollitia, hic ullam officiis vero non culpa pariatur nam quidem ut?
            Praesentium excepturi numquam exercitationem dicta accusantium
            facilis, reprehenderit explicabo delectus quam ad mollitia
            cupiditate.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            natus voluptas magnam asperiores cum sint libero dolore doloribus,
            porro, laboriosam nulla, ex a quibusdam. Officiis quaerat sit rem,
            mollitia quam ducimus aspernatur necessitatibus adipisci quidem
            sapiente magnam iste nulla veritatis ratione illo in ut accusamus?
            Deserunt odio obcaecati possimus sapiente libero, impedit dolore
            sequi vero cum quam ex repellat dolores, fugiat dolorem. Hic harum
            amet error temporibus iusto similique ab nostrum voluptatem
            laudantium. Architecto, aliquam veritatis debitis delectus sed nam
            fugiat, nihil libero animi, sit numquam. Eum ducimus debitis
            molestias rem hic necessitatibus nemo facere sunt, illo eos. Modi,
            nam?
          </p>
        </Box>
      </Layout>
    </>
  );
}

export default About;




