import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading.jsx";
import styles from "./Finiance.module.css"; // Import the CSS Module

import { useEffect, useState } from "react";
import commonendpoint from "../../common/CommonBackendEndpoints.jsx";

function Finiance() {
  const [news, setNews] = useState([
    {
      title:
        "Hyundai Motor India IPO: GMP falls by over 50% in a week ahead of issue opening",
      description:
        "The Indian unit of South Korean carmaker Hyundai Motor will be selling its shares in the range of ₹1,865-1,960 crore to raise a total of ₹27,856 crore through the IPO.",
      content:
        "NSE\n₹\n₹\nHyundai Motor India Ltd., which will be the country's largest initial public offering (IPO) till date, is set to launch the issue on October 15.The Indian unit of South Korean carmaker Hyundai Motor will be selling its shares in the range of1... [2516 chars]",
      url: "https://www.cnbctv18.com/market/hyundai-motor-india-ipo-gmp-falls-by-over-50-pc-in-a-week-ahead-of-issue-opening-19491209.htm",
      image:
        "https://images.cnbctv18.com/uploads/2024/10/2024-09-24t180208z-1349382542-rc2vw9anmjyx-rtrmadp-3-hyundai-india-ipo-2024-10-d7c49b9fd804992b41cc33825b8d04b6.jpg?im=FitAndFill,width=500,height=300",
      publishedAt: "2024-10-11T05:54:41Z",
      source: {
        name: "CNBCTV18",
        url: "https://www.cnbctv18.com",
      },
    },
    {
      title:
        "Bandhan Bank shares jump 10% after analysts say new CEO appointment ends big overhang",
      description:
        "The market has reacted positively to Partha Pratim Sengupta’s appointment. However, brokerages differ on the bank's long-term outlook.",
      content:
        "Bandhan Bank's shares surged by 10% in pre-opening trade on Friday, October 11, as the market responded positively to the appointment of Partha Pratim Sengupta as the bank’s new Managing Director and CEO.Analysts believe this move, along with the com... [1872 chars]",
      url: "https://www.cnbctv18.com/market/bandhan-bank-shares-price-stock-partha-pratim-sengupta-new-ceo-target-sell-buy-brokerages-19491167.htm",
      image:
        "https://images.cnbctv18.com/uploads/2023/09/5-reasons-bandhan-bank.jpg?im=FitAndFill,width=500,height=300",
      publishedAt: "2024-10-11T03:57:28Z",
      source: {
        name: "CNBCTV18",
        url: "https://www.cnbctv18.com",
      },
    },
    {
      title:
        "Breakout stocks to buy or sell: Sumeet Bagadia recommends five shares to buy today - Oct 11",
      description:
        "Breakout stocks to buy or sell: Sumeet Bagadia recommends five shares to buy today — Sharda Motor Industries, OnMobile, Sree Rayalaseema Hi-Strength Hypo, Pavna Industries, and Crest Ventures",
      content:
        "Breakout stocks to buy or sell: Powered by a sharp rally in the banking and power sector stocks, the Indian stock market ended higher on Thursday. The Nifty 50 index rose 0.07% to 24,998.45, while the S&P BSE Sensex added 0.18% to 81,611.41. The Nift... [2109 chars]",
      url: "https://www.livemint.com/market/stock-market-news/breakout-stocks-to-buy-or-sell-sumeet-bagadia-recommends-five-shares-to-buy-today-oct-11-11728612844143.html",
      image:
        "https://www.livemint.com/lm-img/img/2024/10/11/1600x900/Buy_or_sell_Stocks_to_buy_today_Stock_market_today_1728613100559_1728613100821.jpg",
      publishedAt: "2024-10-11T02:23:20Z",
      source: {
        name: "Mint",
        url: "https://www.livemint.com",
      },
    },
    {
      title:
        "Buy or sell: Vaishali Parekh recommends three stocks to buy today - October 11",
      description:
        "Buy or sell stocks: Vaishali Parekh has recommended three stocks to buy today — Granules India, Balkrishna Industries, and BEL",
      content:
        "Buy or sell stocks for today: Domestic equity benchmarks Sensex and Nifty 50 powered by a rally in banking and power stocks amid a largely firm trend in global markets. Traders said the market mostly traded range-bound without any major trigger and p... [2880 chars]",
      url: "https://www.livemint.com/market/stock-market-news/buy-or-sell-vaishali-parekh-recommends-three-stocks-to-buy-today-october-11-11728569520391.html",
      image:
        "https://www.livemint.com/lm-img/img/2024/10/10/1600x900/Buy_or_sell_stocks_to_buy_today_stock_market_today_1698023021624_1728579403818.jpg",
      publishedAt: "2024-10-11T00:57:39Z",
      source: {
        name: "Mint",
        url: "https://www.livemint.com",
      },
    },
    {
      title:
        "Ratan Tata Death: Younger Brother Jimmy Pays Last Respects, Stepmother Simone Arrives In Wheelchair For Funeral Rites",
      description:
        "Veteran industrialist Ratan Tata's stepbrother Noel Tata, a strong contender to inherit the family legacy, was present at the funeral service interacting with mourners who came to pay their last respects",
      content:
        "Veteran industrialist and Tata Sons Chairman Emeritus Ratan Tata’s family members were present for his funeral service and final rites on Thursday, amid a sea of mourners who paid their last respects to the national icon.\n#WATCH | Jimmy Naval Tata, b... [1523 chars]",
      url: "https://www.news18.com/india/ratan-tata-death-final-rites-tata-family-noel-tata-jimmy-tata-simone-tata-last-latest-news-9082138.html",
      image:
        "https://images.news18.com/ibnlive/uploads/2024/10/untitled-design-4-2024-10-4f19ec7d9dd99afb07e59a53bd7f1d04-16x9.jpg?impolicy=website&width=1200&height=675",
      publishedAt: "2024-10-10T17:38:26Z",
      source: {
        name: "News18",
        url: "https://www.news18.com",
      },
    },
    {
      title:
        "16 years on, Tata Motors’ forced pullout from Singur still haunts Bengal politics and economy",
      description:
        "Ever since Tata Motors announced the pullout from setting up a car factory at Singur in the State following widespread protests over forcible acquisition of agricultural lands in October 2008, West Bengal has been struggling to shed its anti-industry image and attract big-ticket business investments.",
      content:
        "On October 3, 2008, under the pressure of relentless protests, Ratan Tata announced the decision to pull out from the plan to set up a small car factory at Singur in West Bengal’s Hooghly district. Ever since, the State has been struggling to shed it... [3292 chars]",
      url: "https://www.thehindu.com/news/national/west-bengal/16-years-on-tata-motors-forced-pullout-from-singur-still-haunts-bengal-politics-and-economy/article68741771.ece",
      image:
        "https://th-i.thgim.com/public/incoming/yfdomm/article68742231.ece/alternates/LANDSCAPE_1200/IMG_ISBS_-_INDIA__2_1_S1BUQMQK.jpg",
      publishedAt: "2024-10-10T16:51:00Z",
      source: {
        name: "The Hindu",
        url: "https://www.thehindu.com",
      },
    },
    {
      title:
        "TCS Q2 Result: Profit up 5%, operating margin slips; 5 key highlights from TCS earnings",
      description:
        "TCS Q2 result: Tata Consultancy Services reported a 5% year-on-year rise in Q2 net profit, with an 8% revenue increase. Operating margin slightly contracted as cautious trends persisted amid geopolitical uncertainty.",
      content:
        "TCS Q2 result: India's IT major, Tata Consultancy Services (TCS), on Thursday, October 10, reported a tepid 5 per cent year-on-year (YoY) rise in its net profit for the July-September (Q2) quarter as cautioous trends seen in the last few quarters con... [4792 chars]",
      url: "https://www.livemint.com/companies/company-results/tcs-q2-result-profit-up-5-operating-margin-slips-5-key-highlights-from-tcs-earnings-11728557110114.html",
      image:
        "https://www.livemint.com/lm-img/img/2024/10/10/1600x900/EconomyPixabay_1728558043830_1728558044187.jpg",
      publishedAt: "2024-10-10T10:50:49Z",
      source: {
        name: "Mint",
        url: "https://www.livemint.com",
      },
    },
    {
      title:
        "At Ratan Tata’s funeral, Aamir Khan, Kiran Rao pay last respect to the icon: ‘It is a sad day for the whole country’",
      description:
        "Ratan Tata passed away at Breach Candy Hospital in Mumbai aged 86 on Wednesday. On Monday, he shared that he was going to the hospital for age-related check-up. | Bollywood",
      content:
        "Bollywood actor Aamir Khan along with his former wife and director Kiran Rao arrived at Mumbai’s National Centre for the Performing Arts (NCPA) to pay respects to Ratan Tata, who passed away on Wednesday at the age of 86. The actor said he will alway... [1795 chars]",
      url: "https://www.hindustantimes.com/entertainment/bollywood/at-ratan-tata-s-funeral-aamir-khan-kiran-rao-pay-last-respect-to-the-icon-it-is-a-sad-day-for-the-whole-country-101728555223762.html",
      image:
        "https://www.hindustantimes.com/ht-img/img/2024/10/10/1600x900/Aamir_Khan_Kiran_Rao_1728555421329_1728555422120.jpeg",
      publishedAt: "2024-10-10T10:24:32Z",
      source: {
        name: "Hindustan Times",
        url: "https://www.hindustantimes.com",
      },
    },
    {
      title:
        "Govt orders audit of Ola Electric service centres after 10,000 consumer complaints: Report",
      description:
        "India’s heavy industries ministry has ordered an audit of Ola Electric’s service centres amid 10,000 consumer complaints about after-sales service. Ola’s shares have plummeted 40%, raising concerns over its eligibility for government incentives aimed at promoting electric vehicles.",
      content:
        "The Ministry of Heavy Industries has called for an audit of Ola Electric's service centres for delayed and unsatisfactory after-sales service and inaccurate invoices, Reuters reported citing a source and official document on October 10.\nThe move will... [1775 chars]",
      url: "https://www.livemint.com/companies/news/govt-audit-ola-electric-service-centres-surge-10000-consumer-complaint-report-incentives-india-evs-shares-tank-business-11728547200493.html",
      image:
        "https://www.livemint.com/lm-img/img/2024/10/10/1600x900/Ola_Electric_Bhavish_Aggarwal_govt_audit_complaint_1728550365665_1728550365896.JPG",
      publishedAt: "2024-10-10T09:11:41Z",
      source: {
        name: "Mint",
        url: "https://www.livemint.com",
      },
    },
    {
      title: "Ratan Tata death news Live Updates",
      description:
        "Tata Group former chairman Ratan Tata dies at Mumbai Hospital; condolences pour in LIVE updates",
      content:
        "Veteran industrialist Ratan Tata died at a Mumbai hospital late on Wednesday. The chairman emeritus of the Tata group was 86.\nFor the past few days, Mr. Tata was admitted to the Breach Candy Hospital in south Mumbai. Mr. Tata was hospitalised on Mond... [435 chars]",
      url: "https://www.thehindu.com/news/national/ratan-tata-death-live-updates-on-october-10/article68738101.ece",
      image:
        "https://th-i.thgim.com/public/incoming/35y0j2/article68738178.ece/alternates/LANDSCAPE_1200/WhatsApp%20Image%202024-10-10%20at%201.39.41%20AM.jpeg",
      publishedAt: "2024-10-09T23:12:00Z",
      source: {
        name: "The Hindu",
        url: "https://www.thehindu.com",
      },
    },
  ]);

  function formatDate(dateString) {
    const date = new Date(dateString);

    const day = date.getUTCDate();
    const month = date.toLocaleString("en-US", { month: "short" });
    const year = date.getUTCFullYear();

    let hours = date.getUTCHours();
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    return `${day} ${month} ${year}, ${hours}:${minutes} ${ampm}`;
  }
  function truncateText(text, len) {
    if (text.length > len) {
      return text.slice(0, len - 3) + "...";
    }
    return text;
  }
  const latestFinancialNews = async () => {
    try {
      const response = await fetch(commonendpoint.latestFinancialNews.url, {
        method: commonendpoint.latestFinancialNews.method,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      // console.log("Fetched news data:", data);
      setNews(data); // Assuming the API returns an array of articles
    } catch (error) {
      console.error("Error fetching financial news:", error);
    }
  };
  useEffect(() => {
    latestFinancialNews();
  }, []); // Only run once when the component mounts

  return (
    <>
      <SectionHeading title="All latest financial updates" />
      <div className={styles.news}>
        {news.map((article, index) => (
          <div key={index} className={styles.container}>
            <div className={styles.image}>
              {" "}
              <img src={article.image} alt="containt-img" />
            </div>
            <div className={styles.content}>
              <div className={styles.heading}>
                {truncateText(article.title, 100)}
              </div>
              <div className={styles.description}>
                {truncateText(article.description, 150)}
              </div>

              <div className={styles.line}></div>

              <div className={styles.footer}>
                <div className={styles.time}>
                  Published At {formatDate(article.publishedAt)}
                </div>
                <div className={styles.author}>
                  Source : {article.source.name}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Finiance;
