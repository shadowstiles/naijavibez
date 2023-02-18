import { useRef } from "react";
import { createContext, useEffect, useState } from "react";
import NewsJSON from "./Sample_Report.json";

const API_URL =
  "https://newsdata.io/api/1/news?apikey=pub_1139138757d889115c8c2c42b92f8534340ad&language=en";
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
});

export const NewsProvider = ({ children }) => {
  const [newsData, setNewsData] = useState([]);
  const [newsImages, setNewsImages] = useState([]);
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
    const generalData = async function () {
      try {
        // const data = await AJAX(`${API_URL}`);

        // data.message === "success";
        if (true) {
          // const newsImg = data.newsImages.map((img) => {
          //   return {
          //     newsid: img.newsid,
          //     imageurl: img.imageurl,
          //   };
          // });
          const vNews = NewsJSON.results.map((news) => {
            // const vNews = data.results.map((news) => {
            let {
              title,
              creator,
              description,
              pubDate,
              content,
              category,
              source_id,
            } = news;
            const date = new Date(pubDate);

            if (!creator) creator = ["Emmanuel"];
            const formatedNews = {
              newsid: `${date.getTime()}${source_id}`,
              heading: title,
              author: creator.join(" & "),
              paragraphbrief: description,
              paragraphs: content,
              category: category[0],
              published: date.getTime(),
            };

            return formatedNews;
          });

          const newsImg = NewsJSON.results.map((news) => {
            // const newsImg = data.results.map((news) => {
            let { image_url, pubDate, source_id } = news;
            const date = new Date(pubDate);

            if (image_url === null)
              image_url = "../components/assets/post-landscape-1.jpg";

            const imageDetails = {
              newsid: `${date.getTime()}${source_id}`,
              imageurl: image_url,
            };

            return imageDetails;
          });

          // setNewsData(data.vNews);
          setNewsData(vNews);
          setNewsImages(newsImg);

          setFinalNews(sortedNews(vNews, newsImg));
          setResults(sortedNews(vNews, newsImg));
          setSubmit(false);
        }
      } catch (err) {
        //err is for developers
        // setSubmit(false);
        console.log(err);
      }
    };
    if (render.current) generalData();
    render.current = false;
  }, []);

  // useEffect(() => {
  //   if (false) return;
  //   setSubmit(true);

  //   const generalData = async function () {
  //     try {
  //       const data = await AJAX(`${API_URL}news/`);

  //       console.log(data);

  //       if (data.message === "success") {
  //         const newsImg = data.newsImages.map((img) => {
  //           return {
  //             newsid: img.newsid,
  //             imageurl: img.imageurl,
  //           };
  //         });
  //         setNewsData(data.vNews);
  //         setNewsImages(newsImg);
  //         setSubmit(false);
  //       }
  //     } catch (err) {
  //       //err is for developers
  //       setSubmit(false);
  //     }
  //   };
  //   generalData();
  // }, []);

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
    resultsPerPage,
  };

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};
