const express = require("express");

const app = express();
app.set("view engine", "hbs");

const listOfCountries = [
  { name: "Portugal", description: "" },
  { name: "Taiwan", description: "Tiffany is from here" },
  { name: "Espain", description: "" },
  { name: "France", description: "" },
  { name: "Syria", description: "" },
  { name: "Germany", description: "" },
  { name: "Netherlands", description: "" },
  { name: "UAE", description: "" },
  { name: "Brazil", description: "" },
  { name: "Lebanon", description: "" },
  { name: "India", description: "" },
  { name: "Sweeden", description: "" },
];

const students = [
  { name: "Kira", country: "Germany" },
  { name: "Vicent", country: "Germany" },
  { name: "Guillermo", country: "Espain" },
  { name: "Daiane", country: "Brazil" },
  { name: "Tony", country: "Netherlands" },
  { name: "Asem", country: "Syria" },
  { name: "Pelayo", country: "Espain" },
  { name: "Maxime", country: "Netherlands" },
  { name: "João", country: "Portugal" },
  { name: "Tiffany", country: "Taiwan" },
  { name: "Elvan", country: "Germany" },
  { name: "Nico", country: "France" },
  { name: "Diana", country: "France" },
  { name: "Palash", country: "UAE" },
  { name: "Filipe", country: "Sweeden" },
];
// HTTP Verb
app.get("/", (req, res) => {
  console.log(req.params);
  res.render("home-page-guten-tag", {
    list: listOfCountries,
  });
});

app.get("/about", (req, res) => {
  console.log(req.params);
  res.render("about-page-hallo");
});

app.get("/wiki/:boomerangFuturamaNissanQashqai", (req, res) => {
  const countrySelected = listOfCountries.find((country) => {
    return country.name === req.params.boomerangFuturamaNissanQashqai;
  });
  res.render("countries", {
    description: countrySelected.description,
  });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

// Model -> MongoDB - moved to saturday
// View -> HBS / Handlebars
// Controller -> Part of our request handler
