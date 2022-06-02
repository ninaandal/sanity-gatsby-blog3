export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "629883ddaf66fb6ad359714e",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-3-studio-5gk7d4fb",
                  apiId: "adc87e5c-4f30-4af3-8cb5-47a3e25156b1",
                },
                {
                  buildHookId: "629883ddc713036fd2f20ba6",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-3-web-6xw4sas4",
                  apiId: "216779a4-9146-482d-ae74-af562b246735",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/ninaandal/sanity-gatsby-blog3",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-3-web-6xw4sas4.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
