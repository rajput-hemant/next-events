<div align=center>

![][views] ![][stars] ![][forks] ![][issues] ![][license] ![][repo-size]

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="public/images/nextjs-light.svg">
  <source media="(prefers-color-scheme: light)" srcset="public/images/nextjs-dark.svg">
  <img alt="next-events">
</picture>

# Next Events

## Directory Structure

</div>

<details >
  <summary align=center>
  
  #### Click to Expand
  </Summary>

```
src
|
|-- components
|   |
|   |-- event-detail
|   |   |-- event-content.js
|   |   |-- event-logistics.js
|   |   |-- event-summary.js
|   |   `-- logistics-item.js
|   |
|   |-- events
|   |   |-- event-item.js
|   |   |-- event-list.js
|   |   |-- events-search.js
|   |   `-- results-title.js
|   |
|   |-- icons
|   |   |-- address-icon.js
|   |   |-- arrow-right-icon.js
|   |   `-- date-icon.js
|   |
|   |-- input
|   |   |-- comment-list.js
|   |   |-- comments.js
|   |   |-- new-comment.js
|   |   `-- newsletter-registration.js
|   |
|   |-- layout
|   |   |-- layout.js
|   |   `-- main-header.js
|   |
|   `-- ui
|       |-- button.js
|       |-- error-alert.js
|       `-- notification.js
|
|-- helpers
|   |-- api-util.js
|   `-- db-utils.js
|
|-- pages
|   |-- api
|   |   |-- comments
|   |   |   `-- [eventId].js
|   |   `-- newsletter.js
|   |
|   |-- events
|   |   |-- [...slug].js
|   |   |-- [eventId].js
|   |   `-- index.js
|   |
|   |-- _app.js
|   |-- _document.js
|   `-- index.js
|
|-- public
|   |-- images
|   |   |-- coding-event.jpg
|   |   |-- extrovert-event.jpg
|   |   |-- introvert-event.jpg
|   |   `-- logo.png
|   |-- favicon.ico
|   `-- vercel.svg
|
|-- store
|   `-- notification-context.js
|
`-- styles
    `-- globals.css
```

</details>

<div align = center>

## Building from Source

</div>

- Fetch latest source code from master branch.

```console
rajput-hemant@arch:~$ git clone https://github.com/rajput-hemant/next-events
```

- Run the app with VS Code or the command line:

```console
rajput-hemant@arch:~$ cd next-events
rajput-hemant@arch:~/next-events$ npm install
rajput-hemant@arch:~/next-events$ npm run dev
```

<div align = center>

#### Course: [Next.js & React - The Complete Guide (incl. Two Paths!)][course]

#### Instructor: [Academind][academind] by [Maximilian Schwarzmüller][max]

## Contributors:

[![][contributors]][contributors-graph]

_Note: It may take up to 24h for the [contrib.rocks][contrib-rocks] plugin to update because it's refreshed once a day._

</div>

<!----------------------------------{ Labels }--------------------------------->

[views]: https://komarev.com/ghpvc/?username=next-events&label=view%20counter&color=red&style=flat
[repo-size]: https://img.shields.io/github/repo-size/rajput-hemant/next-events
[issues]: https://img.shields.io/github/issues-raw/rajput-hemant/next-events
[license]: https://img.shields.io/github/license/rajput-hemant/next-events
[forks]: https://img.shields.io/github/forks/rajput-hemant/next-events?style=flat
[stars]: https://img.shields.io/github/stars/rajput-hemant/next-events
[contributors]: https://contrib.rocks/image?repo=rajput-hemant/next-events&max=500
[contributors-graph]: https://github.com/rajput-hemant/next-events/graphs/contributors
[contrib-rocks]: https://contrib.rocks/preview?repo=rajput-hemant%2Fnext-events

<!-----------------------------------{ Links }---------------------------------->

[course]: https://www.udemy.com/course/nextjs-react-the-complete-guide/
[academind]: https://www.udemy.com/user/academind/
[max]: https://www.udemy.com/user/maximilian-schwarzmuller/
