import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <title>velog</title>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="application-name" content="velog" />
          <meta name="description" content="node.js를 사용한 velog 클론코딩" />
          <link rel="shortcut icon" href="../public/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
