const PORT = process.env.PORT || 8000;
const axios = require("axios");
const express = require("express");
const cheerio = require("cheerio");

const app = express();
const webDevUrl = "https://internshala.com/internships/keywords-web%20development/";

app.get('/', (req, res) =>{
    res.send("Well Well Well, if it ain't the unlucky unemployed bub. Welcome to the internship scrapper.")
})


app.get('/openings/web_development', (req, res) => {
    axios(webDevUrl)
      .then((response) => {
        const html = response.data;
        const $ = cheerio.load(html)
        const Internship_openings = []
        $('.internship_meta', html).each(function(index, element){
            const role = $(element).find('.profile').text().trimStart().trimEnd()
            const company = $(element).find('.company_name').text().trimStart().trimEnd()
            const location = $(element).find('.location_link').text().trimStart().trimEnd()
            const stipend = $(element).find('.stipend').text().trimStart().trimEnd()
            const apply_by = $(element).find('.apply_by > .item_body').text().trimStart().trimEnd()
            Internship_openings.push({
                role, company, location, stipend, apply_by
            })
        })
        // console.log(Internship_openings)
        res.send(Internship_openings)
      })
      .catch((err) => console.log(err));

})


  app.listen(PORT, () => console.log(`Server running on PORT : ${PORT}`))