
# Intenship Webscrapper

A tool that scrapes the "Internshala" website for fetching data about internship openings in different fields.
## Tech Stack

![Express js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Axios](https://img.shields.io/badge/-Axios-red)
![Cheerio](https://img.shields.io/badge/-Cheerio-%23135589)
![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)

## API Reference

#### Base URL

```
https://internscrapper.herokuapp.com/openings/
```

#### Get list

```http
  GET /{type}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `type`      | `string` | **Required**. Array of objects with internship listings. |

#### Possible Parameters

| Parameter |
| :-------- | 
| `web_development` |
| `app_development` |
| `software_engineering` |
| `graphic_design` |
| `content_writing` |
| `human_resource` |
| `business_development` |
| `data_analytics` |
| `legal` |
| `campus_ambassador` |

Returns an array of objects with information about internship listings in the particular field.


## Acknowledgements
 - The data displayed belongs to [Internshala](https://internshala.com/). I, in no way, own the information provided. 

---

### Credits to Internshala



##### Author - [Yash Raj Singh](https://github.com/Yash-RajSingh/)
