import { load } from "https://deno.land/std@0.178.0/dotenv/mod.ts";

export const subscribe = async (email: string) => {
  const { MAILGUN_API_KEY, MAILGUN_MAILING_LIST } = await load();

  const formdata = new FormData();
  formdata.append("subscribed", "True");
  formdata.append("address", email);

  const headers = new Headers();
  const authorization = `Basic ${btoa(`api:${MAILGUN_API_KEY}`)}`;
  headers.append("Authorization", authorization);

  const requestOptions = {
    method: "POST",
    headers: headers,
    body: formdata,
  };

  const url = `https://api.mailgun.net/v3/lists/${MAILGUN_MAILING_LIST}/members`;
  console.log({
    authorization,
    url,
  });
  const response = await fetch(url, requestOptions);

  return response;
};
