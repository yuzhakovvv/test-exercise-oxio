// @ts-nocheck
import { User } from "../types/user";

const mockResponse = (response) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: 200,
        json: () =>
          new Promise((resolve) => {
            return resolve(response);
          }),
      });
    }, 1000);
  });
};

// NOTE: Pass users to iterate id
export const fetch = (url, { body } = {}, users) => {
  if (url === "/users") {
    // Simulate a failing fetch
    if (Math.random() > 0.5) {
      return new Promise((resolve, reject) => setTimeout(() => reject("No connection."), 3000));
    }

    if (!body?.name) {
      return Promise.reject("Missing name");
    }

    if (!body?.email) {
      return Promise.reject("Missing email");
    }

    if (!body?.company?.name) {
      return Promise.reject("Missing company name");
    }

    const user: User = {
      id: users[users.length - 1].id + 1,
      name: body.name,
      email: body.email,
      company: body.company
    };

    return mockResponse({ user });
  }
};