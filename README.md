# impressum-api

This API returns the impressum and privacy protection as a json response.

## Endpoints

- [https://impressum-api.sklinkusch.now.sh/timestamp](https://impressum-api.sklinkusch.now.sh/timestamp) for the timestamp of the latest change
- [https://impressum-api.sklinkusch.now.sh/impressum](https://impressum-api.sklinkusch.now.sh/impressum) for the legal notice
- [https://impressum-api.sklinkusch.now.sh/datenschutz](https://impressum-api.sklinkusch.now.sh/datenschutz) for the privacy stuff

## Data structure

Each JSON object contains two properties: title and content. Both are arrays.

1. One entry in the content array belongs to the respective entry in the title array.
1. An entry in the content array can be also an array itself
1. Subarrays are paragraphs in the section or list items
