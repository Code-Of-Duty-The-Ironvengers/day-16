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
  console.log(req.query);
  res.render("home-page-guten-tag", {
    list: listOfCountries,
    students,
  });
});

app.get("/about", (req, res) => {
  console.log(req.params);
  res.render("about-page-hallo");
});

app.get("/:student", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  const theStudent = students.find(
    (student) => student.name === req.params.student
  );

  const countryOfStudent = listOfCountries.find(
    (country) => country.name === theStudent.country
  );

  res.render("all-the-single-student", {
    student: theStudent,
    country: countryOfStudent,
  });
});

// /anything
// /wiki/anything
// https://www.skyscanner.nl/transport/vluchten/ams/lis/220726/220812/?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=27544072&inboundaltsenabled=false&infants=0&originentityid=27536561&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=1

// https://www.google.com/search?q=what+is+the+meaning+of+life&oq=what+is+the+meaning+of+life&aqs=chrome..69i57.2318j0j1&sourceid=chrome&ie=UTF-8

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
