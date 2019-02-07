import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import { rhythm } from "../utils/typography";

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { title, social } = data.site.siteMetadata;
        return (
          <div
            style={{
              display: "flex",
              marginBottom: rhythm(2.5)
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={title}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: "100%"
              }}
              imgStyle={{
                borderRadius: "50%"
              }}
            />
            <p>
              Заметки программиста про Берлин и Германию.
              <br />
              Вопросы и комментарии можно писать в{" "}
              <a href={`https://twitter.com/${social.twitter}`}>твиттер</a>
            </p>
          </div>
        );
      }}
    />
  );
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/jjermany.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
        social {
          twitter
        }
      }
    }
  }
`;

export default Bio;
