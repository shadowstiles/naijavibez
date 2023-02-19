import { useRef } from "react";
import { createContext, useEffect, useState } from "react";

const API_URL = "https://naijavibez.cyclic.app/";
const TIMEOUT_SEC = 10;
const RES_PER_PAGE = 10;

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(
        new Error(
          `Request took too long! Please Check Internet connection and refresh the page`
        )
      );
    }, s * 1000);
  });
};

const AJAX = async function (url) {
  try {
    const fetchPro = fetch(url);

    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok)
      throw new Error(`There is no internet connection / poor network`);

    if (data === "success") return data;

    if (typeof data === "string") throw new Error(data);

    return data;
  } catch (err) {
    throw err.message;
  }
};

const sortedNews = (newsData, newsImgs) => {
  const sortedAccToLatest = newsData.sort((a, b) => b.published - a.published);

  const latestNewsWithImg = sortedAccToLatest.map((news) => {
    const newsImg = newsImgs.find((img) => img.newsid === news.newsid);

    const { imageurl } = newsImg;
    return { ...news, imageurl: imageurl };
  });

  return latestNewsWithImg;
};

export const NewsContext = createContext({
  finalNews: [],
  submit: true,
  query: "",
  results: [],
  getSearchResultsPage: () => null,
  loadSearchResults: () => [],
  pages: 1,
  resultsPerPage: RES_PER_PAGE,
  nextPage: [],
  categories: [],
});

export const NewsProvider = ({ children }) => {
  const [newsData, setNewsData] = useState([]);
  const [newsImages, setNewsImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [finalNews, setFinalNews] = useState([]);
  const [submit, setSubmit] = useState(true);
  const [resultsPerPage, setResultsPerPage] = useState(RES_PER_PAGE);
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [pages, setPages] = useState(1);
  const [nextPage, setNextPage] = useState([]);
  const render = useRef(true);

  const getSearchResultsPage = function (page = pages) {
    setPages(page);

    const start = (page - 1) * resultsPerPage; // 0
    const end = page * resultsPerPage; // 9
    setNextPage(results.slice(start, end));
  };

  const loadSearchResults = function (query) {
    setQuery(query);
    if (Object.entries(newsData).length === 0) return;

    if (query === "") setResults(newsData);
    const filteredNews = newsData.filter((user) =>
      user.heading.toLowerCase().includes(query)
    );

    setResults(filteredNews);
    setPages(1);
  };

  useEffect(() => {
    if (Object.entries(newsData).length === 0) return;
    if (!render.current) setFinalNews(sortedNews(newsData, newsImages));
  }, [newsData, newsImages]);

  useEffect(() => {
    if (Object.entries(finalNews).length === 0) return;
    setNextPage(finalNews.filter((_, i) => i < 10));
  }, [finalNews]);

  useEffect(() => {
    setSubmit(true);

    const generalData = async function () {
      try {
        const data = await AJAX(`${API_URL}news`);

        console.log(data);

        if (data.message === "success") {
          const newsImg = data.newsImages.map((img) => {
            return {
              newsid: img.newsid,
              imageurl: img.imageurl,
            };
          });

          const collection = Array.from(
            new Set(
              data.news
                .map((news) => news.category)
                .flatMap((cat) => cat.toLowerCase())
            )
          );

          setCategories(collection);
          setNewsData(data.news);
          setNewsImages(newsImg);
          setSubmit(false);
        }
      } catch (err) {
        //err is for developers
        setSubmit(false);
      }
    };
    generalData();
  }, []);

  const value = {
    submit,
    finalNews,
    loadSearchResults,
    getSearchResultsPage,
    setResultsPerPage,
    query,
    nextPage,
    results,
    pages,
    categories,
    resultsPerPage,
  };

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};
