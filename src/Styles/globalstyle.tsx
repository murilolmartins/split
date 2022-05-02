import { css, Global } from "@emotion/react";

export const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: "made_tommy_regular";
          src: url("../Assets/Fonts/made_tommy_regular-webfont.woff2")
              format("woff2"),
            url("../Assets/Fonts/made_tommy_regular-webfont.woff")
              format("woff");
          font-weight: normal;
          font-style: normal;
        }

        * {
          box-sizing: border-box;
          font-family: "made_tommy_regular";
        }
        html,
        body,
        div,
        span,
        applet,
        object,
        iframe,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        pre,
        a,
        abbr,
        acronym,
        address,
        big,
        cite,
        code,
        del,
        dfn,
        em,
        img,
        ins,
        kbd,
        q,
        s,
        samp,
        small,
        strike,
        strong,
        sub,
        sup,
        tt,
        var,
        b,
        u,
        i,
        center,
        dl,
        dt,
        dd,
        ol,
        ul,
        li,
        fieldset,
        form,
        label,
        legend,
        table,
        caption,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td,
        article,
        aside,
        canvas,
        details,
        embed,
        figure,
        figcaption,
        footer,
        header,
        hgroup,
        menu,
        nav,
        output,
        ruby,
        section,
        summary,
        time,
        mark,
        audio,
        video {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          vertical-align: baseline;
          text-decoration: none;
        }
        /* HTML5 display-role reset for older browsers */
        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        menu,
        nav,
        section {
          display: block;
        }
        body {
          line-height: 1;
          box-sizing: border-box;
          margin: 0px;
          color: #323232;
          --type-first: Helvetica, Arial, sans-serif;
          --type-second: "Spectral", Georgia;
          font-family: var(--type-first);
        }
        ol,
        ul {
          list-style: none;
        }
        blockquote,
        q {
          quotes: none;
        }
        blockquote:before,
        blockquote:after,
        q:before,
        q:after {
          content: "";
          content: none;
        }
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }

        //----------------------------------Default colors-----------------------------------//
        :root {
          --yellow: #f7d633;
          --black: #000000;
          --gray: #a3a3a3;
          --darkGray: #373737;
          --floralWhite: #fffaf2;
          --white: #ffffff;
        }
      `}
    />
  );
};
