const fs = require('fs');
// generate timestamp for impressum folder
im_stats = fs.statSync('./data/impressum');
const { mtime: im_mtime } = im_stats;
const im_timestamp = (new Date(im_mtime).getTime() / 1000).toFixed(0);
// generate timestamp for datenschutz folder
ds_stats = fs.statSync('./data/datenschutz');
const { mtime: ds_mtime } = ds_stats;
const ds_timestamp = (new Date(ds_mtime).getTime() / 1000).toFixed(0);
// generate timestamp for address folder
ad_stats = fs.statSync('./data/address');
const { mtime: ad_mtime } = ad_stats;
const ad_timestamp = (new Date(ad_mtime).getTime() / 1000).toFixed(0);
// evaluate minimal timestamp
const timestamps = [im_timestamp, ds_timestamp, ad_timestamp];
exports.max_timestamp = timestamps.reduce((max, curr) =>
  curr > max ? curr : max
);
