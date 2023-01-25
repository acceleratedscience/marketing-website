import NextHead from "next/head";

const Head = () => {
  return (
    <NextHead>
      <title>Accelerate.Science</title>
      <meta name="description" content="Accelerate.Science" />
      <meta
        name="description"
        content="Focus on science, not your code. Automate workflows with built-for-science data, compute, AI, quantum, and collaboration capabilities."
      />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content="https://accelerate.science" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Accelerate.Science" />
      <meta
        property="og:description"
        content="Focus on science, not your code. Automate workflows with built-for-science data, compute, AI, quantum, and collaboration capabilities."
      />
      <meta property="og:image" content="https://i.imgur.com/keyAdnw.png" />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="https://accelerate.science" />
      <meta property="twitter:url" content="https://accelerate.science" />
      <meta name="twitter:title" content="Accelerate.Science" />
      <meta
        name="twitter:description"
        content="Focus on science, not your code. Automate workflows with built-for-science data, compute, AI, quantum, and collaboration capabilities."
      />
      <meta
        name="twitter:image"
        content="https://i.imgur.com/keyAdnw.png"
      ></meta>
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
};

export default Head;
