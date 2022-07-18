const PORT = process.env.PORT || 8000;
const axios = require("axios");
const express = require("express");
const cheerio = require("cheerio");
const cors = require("cors");

const app = express();
const webDevUrl =
  "https://internshala.com/internships/keywords-web%20development/";
const graphicDesingUrl =
  "https://internshala.com/internships/keywords-graphic%20design/";
const campusAmbassadorUrl =
  "https://internshala.com/internships/keywords-Campus%20Ambassador/";
const contentWritingUrl =
  "https://internshala.com/internships/keywords-content%20writing/";
const softwareEngineeringUrl =
  "https://internshala.com/internships/keywords-software%20engineering/";
const legalUrl = "https://internshala.com/internships/keywords-law/";
const businessDevelopementUrl =
  "https://internshala.com/internships/keywords-business/";
const dataAnalyticsUrl =
  "https://internshala.com/internships/keywords-data%20analytics/";
const HRUrl = "https://internshala.com/internships/keywords-human%20resource/";
const appDevelopmentUrl =
  "https://internshala.com/internships/keywords-app%20development/";

app.use(cors());

app.get("/", (req, res) => {
  res.send(
    "Well Well Well, if it ain't the unlucky unemployed bub. Welcome to the internship scrapper."
  );
});

// WEB DEVELOPMENT
app.get("/openings/web_development", (req, res) => {
  axios(webDevUrl)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      const Internship_openings = [];
      $(".internship_meta", html).each(function (index, element) {
        const role = $(element).find(".profile").text().trimStart().trimEnd();
        const company = $(element)
          .find(".company_name")
          .text()
          .trimStart()
          .trimEnd();
        const location = $(element)
          .find(".location_link")
          .text()
          .trimStart()
          .trimEnd();
        const stipend = $(element)
          .find(".stipend")
          .text()
          .trimStart()
          .trimEnd();
        const apply_by = $(element)
          .find(".apply_by > .item_body")
          .text()
          .trimStart()
          .trimEnd();
        const logo = $(element).find(".internship_logo > img").attr("src");
        const link = $(element).find("a").attr("href");
        Internship_openings.push({
          role,
          company,
          location,
          stipend,
          apply_by,
          link,
          logo,
        });
      });
      res.send(Internship_openings);
    })
    .catch((err) => console.log(err));
});

// GRAPHIC DESIGN
app.get("/openings/graphic_design", (req, res) => {
  axios(graphicDesingUrl)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      const Internship_openings = [];
      $(".internship_meta", html).each(function (index, element) {
        const role = $(element).find(".profile").text().trimStart().trimEnd();
        const company = $(element)
          .find(".company_name")
          .text()
          .trimStart()
          .trimEnd();
        const location = $(element)
          .find(".location_link")
          .text()
          .trimStart()
          .trimEnd();
        const stipend = $(element)
          .find(".stipend")
          .text()
          .trimStart()
          .trimEnd();
        const apply_by = $(element)
          .find(".apply_by > .item_body")
          .text()
          .trimStart()
          .trimEnd();
        const logo = $(element).find(".internship_logo > img").attr("src");
        const link = $(element).find("a").attr("href");
        Internship_openings.push({
          role,
          company,
          location,
          stipend,
          apply_by,
          link,
          logo,
        });
      });
      res.send(Internship_openings);
    })
    .catch((err) => console.log(err));
});

// CAMPUS AMBASSADOR
app.get("/openings/campus_ambassador", (req, res) => {
  axios(campusAmbassadorUrl)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      const Internship_openings = [];
      $(".internship_meta", html).each(function (index, element) {
        const role = $(element).find(".profile").text().trimStart().trimEnd();
        const company = $(element)
          .find(".company_name")
          .text()
          .trimStart()
          .trimEnd();
        const location = $(element)
          .find(".location_link")
          .text()
          .trimStart()
          .trimEnd();
        const stipend = $(element)
          .find(".stipend")
          .text()
          .trimStart()
          .trimEnd();
        const apply_by = $(element)
          .find(".apply_by > .item_body")
          .text()
          .trimStart()
          .trimEnd();
        const logo = $(element).find(".internship_logo > img").attr("src");
        const link = $(element).find("a").attr("href");
        Internship_openings.push({
          role,
          company,
          location,
          stipend,
          apply_by,
          link,
          logo,
        });
      });
      res.send(Internship_openings);
    })
    .catch((err) => console.log(err));
});

// CONTENT WRITING
app.get("/openings/content_writing", (req, res) => {
  axios(contentWritingUrl)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      const Internship_openings = [];
      $(".internship_meta", html).each(function (index, element) {
        const role = $(element).find(".profile").text().trimStart().trimEnd();
        const company = $(element)
          .find(".company_name")
          .text()
          .trimStart()
          .trimEnd();
        const location = $(element)
          .find(".location_link")
          .text()
          .trimStart()
          .trimEnd();
        const stipend = $(element)
          .find(".stipend")
          .text()
          .trimStart()
          .trimEnd();
        const apply_by = $(element)
          .find(".apply_by > .item_body")
          .text()
          .trimStart()
          .trimEnd();
        const logo = $(element).find(".internship_logo > img").attr("src");
        const link = $(element).find("a").attr("href");
        Internship_openings.push({
          role,
          company,
          location,
          stipend,
          apply_by,
          link,
          logo,
        });
      });
      res.send(Internship_openings);
    })
    .catch((err) => console.log(err));
});

// SOFTWARE ENGINEERING
app.get("/openings/software_engineering", (req, res) => {
  axios(softwareEngineeringUrl)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      const Internship_openings = [];
      $(".internship_meta", html).each(function (index, element) {
        const role = $(element).find(".profile").text().trimStart().trimEnd();
        const company = $(element)
          .find(".company_name")
          .text()
          .trimStart()
          .trimEnd();
        const location = $(element)
          .find(".location_link")
          .text()
          .trimStart()
          .trimEnd();
        const stipend = $(element)
          .find(".stipend")
          .text()
          .trimStart()
          .trimEnd();
        const apply_by = $(element)
          .find(".apply_by > .item_body")
          .text()
          .trimStart()
          .trimEnd();
        const logo = $(element).find(".internship_logo > img").attr("src");
        const link = $(element).find("a").attr("href");
        Internship_openings.push({
          role,
          company,
          location,
          stipend,
          apply_by,
          link,
          logo,
        });
      });
      res.send(Internship_openings);
    })
    .catch((err) => console.log(err));
});

// LEGAL
app.get("/openings/legal", (req, res) => {
  axios(legalUrl)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      const Internship_openings = [];
      $(".internship_meta", html).each(function (index, element) {
        const role = $(element).find(".profile").text().trimStart().trimEnd();
        const company = $(element)
          .find(".company_name")
          .text()
          .trimStart()
          .trimEnd();
        const location = $(element)
          .find(".location_link")
          .text()
          .trimStart()
          .trimEnd();
        const stipend = $(element)
          .find(".stipend")
          .text()
          .trimStart()
          .trimEnd();
        const apply_by = $(element)
          .find(".apply_by > .item_body")
          .text()
          .trimStart()
          .trimEnd();
        const logo = $(element).find(".internship_logo > img").attr("src");
        const link = $(element).find("a").attr("href");
        Internship_openings.push({
          role,
          company,
          location,
          stipend,
          apply_by,
          link,
          logo,
        });
      });
      res.send(Internship_openings);
    })
    .catch((err) => console.log(err));
});

// BUSINESS DEVELOPMENT
app.get("/openings/business_development", (req, res) => {
  axios(businessDevelopementUrl)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      const Internship_openings = [];
      $(".internship_meta", html).each(function (index, element) {
        const role = $(element).find(".profile").text().trimStart().trimEnd();
        const company = $(element)
          .find(".company_name")
          .text()
          .trimStart()
          .trimEnd();
        const location = $(element)
          .find(".location_link")
          .text()
          .trimStart()
          .trimEnd();
        const stipend = $(element)
          .find(".stipend")
          .text()
          .trimStart()
          .trimEnd();
        const apply_by = $(element)
          .find(".apply_by > .item_body")
          .text()
          .trimStart()
          .trimEnd();
        const logo = $(element).find(".internship_logo > img").attr("src");
        const link = $(element).find("a").attr("href");
        Internship_openings.push({
          role,
          company,
          location,
          stipend,
          apply_by,
          link,
          logo,
        });
      });
      res.send(Internship_openings);
    })
    .catch((err) => console.log(err));
});

// data analytics
app.get("/openings/data_analytics", (req, res) => {
  axios(dataAnalyticsUrl)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      const Internship_openings = [];
      $(".internship_meta", html).each(function (index, element) {
        const role = $(element).find(".profile").text().trimStart().trimEnd();
        const company = $(element)
          .find(".company_name")
          .text()
          .trimStart()
          .trimEnd();
        const location = $(element)
          .find(".location_link")
          .text()
          .trimStart()
          .trimEnd();
        const stipend = $(element)
          .find(".stipend")
          .text()
          .trimStart()
          .trimEnd();
        const apply_by = $(element)
          .find(".apply_by > .item_body")
          .text()
          .trimStart()
          .trimEnd();
        const logo = $(element).find(".internship_logo > img").attr("src");
        const link = $(element).find("a").attr("href");
        Internship_openings.push({
          role,
          company,
          location,
          stipend,
          apply_by,
          link,
          logo,
        });
      });
      res.send(Internship_openings);
    })
    .catch((err) => console.log(err));
});

// HUMAN RESOURCE
app.get("/openings/human_resource", (req, res) => {
  axios(HRUrl)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      const Internship_openings = [];
      $(".internship_meta", html).each(function (index, element) {
        const role = $(element).find(".profile").text().trimStart().trimEnd();
        const company = $(element)
          .find(".company_name")
          .text()
          .trimStart()
          .trimEnd();
        const location = $(element)
          .find(".location_link")
          .text()
          .trimStart()
          .trimEnd();
        const stipend = $(element)
          .find(".stipend")
          .text()
          .trimStart()
          .trimEnd();
        const apply_by = $(element)
          .find(".apply_by > .item_body")
          .text()
          .trimStart()
          .trimEnd();
        const logo = $(element).find(".internship_logo > img").attr("src");
        const link = $(element).find("a").attr("href");
        Internship_openings.push({
          role,
          company,
          location,
          stipend,
          apply_by,
          link,
          logo,
        });
      });
      res.send(Internship_openings);
    })
    .catch((err) => console.log(err));
});

// APP DEVELOPMENT
app.get("/openings/app_development", (req, res) => {
  axios(appDevelopmentUrl)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      const Internship_openings = [];
      $(".internship_meta", html).each(function (index, element) {
        const role = $(element).find(".profile").text().trimStart().trimEnd();
        const company = $(element)
          .find(".company_name")
          .text()
          .trimStart()
          .trimEnd();
        const location = $(element)
          .find(".location_link")
          .text()
          .trimStart()
          .trimEnd();
        const stipend = $(element)
          .find(".stipend")
          .text()
          .trimStart()
          .trimEnd();
        const apply_by = $(element)
          .find(".apply_by > .item_body")
          .text()
          .trimStart()
          .trimEnd();
        const logo = $(element).find(".internship_logo > img").attr("src");
        const link = $(element).find("a").attr("href");
        Internship_openings.push({
          role,
          company,
          location,
          stipend,
          apply_by,
          link,
          logo,
        });
      });
      res.send(Internship_openings);
    })
    .catch((err) => console.log(err));
});

app.listen(PORT, () => console.log(`Server running on PORT : ${PORT}`));
