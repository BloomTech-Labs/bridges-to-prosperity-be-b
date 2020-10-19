# Bridge of Prosperity Backend

`Labs 27` Deployed project: https://labs27-b-bridges-api.herokuapp.com/

`Labs 25` You can find the deployed project at https://bridges-b-api.herokuapp.com/

`Labs 25` You can find a demo video of codebase at https://www.youtube.com/watch?v=PARd7apawNM&feature=youtu.be

## Contributors

|                                                            [Cody Solomon](https://github.com/CodyFlys)                                                            |                                        [Robert Misch](https://github.com/RobertMisch)                                         |                                                           [Xavier Hoskins](https://github.com/xavierhoskins)                                                           |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://avatars2.githubusercontent.com/u/60758834?s=460&u=e9fd1bd445778f124a4107689c839b624a4ad217&v=4" width = "200" />](https://github.com/CodyFlys) |   [<img src="https://avatars0.githubusercontent.com/u/24370208?s=400&v=4" width = "200" />](https://github.com/RobertMisch)   | [<img src="https://avatars1.githubusercontent.com/u/59076433?s=460&u=7d6b6c0d420aec9596603733d2760b4912015f9d&v=4" width = "200" />](https://github.com/xavierhoskins) |
|                                       [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/CodyFlys)                                       |                   [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/RobertMisch)                    |                                       [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/xavierhoskins)                                       |
|                   [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/robert-misch/)                   | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/cody-solomon/) |                    [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/xavier-hoskins/)                     |

<br>
<br>

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Project Overview

Trello Board: https://trello.com/b/x1iIzJdj/labs25bridgesjessica

Back end: https://bridges-b-api.herokuapp.com/built

Tech Stack: Node.js, Express, Knex, PostgreSql, Docker

## Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

```
PORT=
DS_API_URL=
DS_API_TOKEN=
DATABASE_URL=
OKTA_URL_ISSUER=
OKTA_CLIENT_ID=
```

## Installation Instructions

### Commands

- run: `npm install` to download all dependencies.
- run: `cp .env.sample .env` and update the enviornment variables to match your local setup.
- run: `npm run knex migrate:latest` to create the starting schema.
- run: `npm run knex seed:run` to populate your db with some data.
- run: `npm run tests` to confirm all is setup and tests pass.
- run: `npm run watch:dev` to start nodemon in local dev enviornment.

### Bridge Images

Note: Bridge image data may be included in the Data Science backend for future labs. If this is the case then ignore these steps.

- Acquire the .xls file containing bridge images from TPL or stakeholder.
- Open the .xls file with Google Sheets and export as a CSV file.
- Use csvjson.com/csv2json to convert the .csv file to JSON.
- Use the `/bridges/update-images PUT` endpoint to update the images.

<br/>

## API Documentation

<br/>

### Bridge Endpoints

| Endpoint               | Method | Description                                                                                                                                      | Required Data                                                                                                                                      |
| ---------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| /bridges | POST | Adds a new bridge to the database. | `JSON` Add the details as included in the Bridge JSON Example below (scroll to see).
| /bridges               | GET    | Returns all bridge data.                                                                                                                         |                                                                                                                                                    |
| /bridges/{id}          | GET    | Returns data for a single bridge.                                                                                                                | `URL` Replace {id} with the bridge ID.                                                                                                             |
| /bridges/gdp/{id}      | GET    | Returns past & pojected GDP data for the location of prospecting bridges.                                                                        | `URL` Replace {id} with a prospecting bridge ID.                                                                                                   |
| /bridges/{id}          | PUT    | Updates the data of a single bridge.                                                                                                             | `URL` Replace {id} with the bridge ID.</br>`JSON` None required. Provide what you want to change.                                                  |
| /bridges/update-images | PUT    | An easy way to update all the bridge images from the file the stakeholder supplied. Convert the .xls file to .csv and then to JSON before using. | `JSON` Array of objects. Each object must contain these strings: `Project Code`, `Pre-Bridge Crossing Photo URL` and `Completed Bridge Photo URL`. |
| /bridges/delete/{id} | DELETE | Deletes a bridge from the database. | `URL` Replace {id} with the bridge ID.|

### Data Science Related Endpoints

| Endpoint                  | Method | Description                                       | Required Data                                                            |
| ------------------------- | ------ | ------------------------------------------------- | ------------------------------------------------------------------------ |
| /data/bridges             | GET    | Returns all bridge data hosted on the DS backend. |                                                                          |
| /data/viz/{state}         | GET    | Returns plotly visualization.                     | `URL` Replace {state} with the state.</br>Requires user to be signed in. |
| /data/predict/{x}/{y}/{z} | GET    | Returns a prediction result.                      |

</br>
</br>

### Bridge JSON Example

```
{
    "id": 1,
    "country": "Rwanda",
    "district_id": 37,
    "province": "Western Province",
    "district": "Nyamasheke",
    "sector": "Kanjongo",
    "sector_id": "3706",
    "cell": "Kibogora",
    "cell_id": "370601",
    "village": "Kagarama",
    "village_id": "37060104",
    "bridge_site_name": "Kagarama",
    "project_stage": "Complete",
    "sub_stage": "In Service",
    "project_code": "1007325",
    "bridge_type": "Suspension",
    "span": 48,
    "lat": -2.322534,
    "long": 29.141945,
    "individuals_directly_served": "0",
    "communities_served": [
        "unavailable"
    ],
    "form_name": "Project Assessment - 2017.7.12",
    "casesafeid_form": "a1if1000002NJhdAAG",
    "bridge_opportunity_id": "006f100000a82Qz",
    "bridge_image": "https://farm5.staticflickr.com/4829/44946210045_874f324731_k.jpg"
}
```
