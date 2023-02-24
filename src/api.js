/* global reactPress */

import * as WPAPI from "wpapi";

const wp = new WPAPI(
  process.env.NODE_ENV === "development"
    ? {
        endpoint: reactPress.api.rest_url,
        username: "admin",
        password: "XXXX XXXX XXXX XXXX XXXX",
      }
    : { endpoint: reactPress.api.rest_url, nonce: reactPress.api.nonce }
);

async function fetcher(input, init = {}) {
  const app_password = "XXXX XXXX XXXX XXXX XXXX";
  const username = "admin";
  const defaultInit = {
    headers: {
      "Content-Type": "application/json",
      ...(process.env.NODE_ENV === "development"
        ? { Authorization: "Basic " + btoa(`${username}:${app_password}`) }
        : { "X-WP-Nonce": reactPress.api.nonce }),
    },
  };
  const response = await fetch(`${reactPress.api.rest_url}wp/v2/${input}`, {
    ...defaultInit,
    ...init,
  });

  const json = response.json();
  return json;
}

export async function fetchUsers() {
  try {
    const users = await fetcher("users");
    return users.slice(1); // we don't want the admin user
  } catch (error) {
    console.error(error);
    return [];
  }
}
