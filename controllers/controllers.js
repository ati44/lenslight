const getIndexPage = (req, res) => {
  res.render("index", {
    link: "index",
  });
};

const getAboutPage = (req, res) => {
  res.render("about", {
    link: "about",
  });
};
const getServicePage = (req, res) => {
  res.render("services", {
    link: "services",
  });
};
const getBlogPage = (req, res) => {
  res.render("blog", { link: "blog" });
};
const getProjectsPage = (req, res) => {
  res.render("projects", { link: "projects" });
};
const getContactPage = (req, res) => {
  res.render("contact", { link: "contact" });
};

export { getIndexPage, getAboutPage, getServicePage, getBlogPage, getContactPage, getProjectsPage }; // Export the functions as named exports.
