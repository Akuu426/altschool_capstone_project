// import fetch from 'isomorphic-fetch';
// import {render, waitFor} from '@testing-library/react';
import "@testing-library/jest-dom";
// import { renderComponent } from '../test-utils';

import fetch from "jest-fetch-mock";

const renderComponent = ({
  setUrl,
  setShortenedLink,
  setError,
}: {
  setUrl: (url: string) => void;
  setShortenedLink: (link: string | null) => void;
  setError: (error: string | null) => void;
}) => {
  const handleShorten = async () => {
    it("should shorten a valid URL", async () => {
      const setUrl = jest.fn();
      const setShortenedLink = jest.fn();
      const setError = jest.fn();

      const validUrl = "https://example.com/long/url";
      const expectedShortenedLink = "https://tinyurl.com/abc123";

      fetch.mockResponseOnce(
        JSON.stringify({ shortUrl: expectedShortenedLink })
      );

      const { handleShorten } = renderComponent({
        setUrl,
        setShortenedLink,
        setError,
      });

      await handleShorten();

      expect(setUrl).not.toHaveBeenCalled();
      expect(setError).not.toHaveBeenCalled();
      expect(setShortenedLink).toHaveBeenCalledWith(expectedShortenedLink);
    });
  };

  return { handleShorten };
};

it("should not shorten an empty URL", async () => {
  const setUrl = jest.fn();
  const setShortenedLink = jest.fn();
  const setError = jest.fn();

  const emptyUrl = "";

  const { handleShorten } = renderComponent({
    setUrl,
    setShortenedLink,
    setError,
  });

  await handleShorten();

  expect(setUrl).not.toHaveBeenCalled();
  expect(setError).toHaveBeenCalledWith("URL is required");
  expect(setShortenedLink).not.toHaveBeenCalled();
});

it("should not shorten an invalid URL", async () => {
  const setUrl = jest.fn();
  const setShortenedLink = jest.fn();
  const setError = jest.fn();

  const invalidUrl = "invalid url";

  const { handleShorten } = renderComponent({
    setUrl,
    setShortenedLink,
    setError,
  });

  await handleShorten();

  expect(setUrl).not.toHaveBeenCalled();
  expect(setError).toHaveBeenCalledWith("Failed to shorten URL");
  expect(setShortenedLink).not.toHaveBeenCalled();
});

it("should handle network errors", async () => {
  const setUrl = jest.fn();
  const setShortenedLink = jest.fn();
  const setError = jest.fn();

  const validUrl = "https://example.com/long/url";

  fetch.mockRejectOnce(new Error("Network error"));

  const { handleShorten } = renderComponent({
    setUrl,
    setShortenedLink,
    setError,
  });

  await handleShorten();

  expect(setUrl).not.toHaveBeenCalled();
  expect(setError).toHaveBeenCalledWith("Failed to shorten URL");
  expect(setShortenedLink).not.toHaveBeenCalled();
});

it("should handle server errors", async () => {
  const setUrl = jest.fn();
  const setShortenedLink = jest.fn();
  const setError = jest.fn();

  const validUrl = "https://example.com/long/url";
  const expectedErrorMessage = "Server error";

  fetch.mockResponseOnce(JSON.stringify({ error: expectedErrorMessage }), {
    status: 500,
  });

  const { handleShorten } = renderComponent({
    setUrl,
    setShortenedLink,
    setError,
  });

  await handleShorten();

  expect(setUrl).not.toHaveBeenCalled();
  expect(setError).toHaveBeenCalledWith(expectedErrorMessage);
  expect(setShortenedLink).not.toHaveBeenCalled();
});
