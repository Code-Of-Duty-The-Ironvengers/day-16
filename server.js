const express = require("express");

const app = express();
app.set("view engine", "hbs");

const listOfCountries = [
  { name: "Portugal", description: "" },
  { name: "Taiwan", description: "" },
  { name: "Espain", description: "" },
  { name: "France", description: "" },
  { name: "Syria", description: "" },
  { name: "Deutschshxhchshchsland", description: "" },
  { name: "Neeeeiiiiderlaands", description: "" },
  { name: "United Emirates - the Arab ones", description: "" },
  { name: "Braaziiiiiiu", description: "" },
  { name: "Lebanon", description: "" },
  { name: "India", description: "" },
  { name: "Sviden", description: "" },
];

// HTTP Verb
app.get("/", (req, res) => {
  res.render("home-page-guten-tag", {
    list: listOfCountries,
  });
});

app.get("/about", (req, res) => {
  res.render("about-page-hallo");
});

app.get("/wiki/:tonyG", (req, res) => {
  const string = req.params.tonyG.split("-").join(" ");
  console.log(req.params);
  res.render("about-page-hallo", { string });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

// Model -> MongoDB - moved to saturday
// View -> HBS / Handlebars
// Controller -> Part of our request handler
