module.exports = {
  agentRules: false,
  images: {
    loader: "custom",
    loaderFile: "./src/lib/imagekitLoader.ts",
  },
  async rewrites() {
    return [
      {
        source: "/resume",
        destination:
          "https://xopqegkkmqnys8s8.public.blob.vercel-storage.com/resume.pdf",
      },
      {
        source: "/resume.pdf",
        destination:
          "https://xopqegkkmqnys8s8.public.blob.vercel-storage.com/resume.pdf",
      },
    ];
  },
};
