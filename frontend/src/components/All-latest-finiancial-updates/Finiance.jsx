import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./Finiance.module.css"; // Import the CSS Module

const newsData = [
  {
    id: 1,
    imageUrl: "https://etimg.etb2bimg.com/photo/113867640.cms",
    title:
      "Disciplinary actions are not excessive; audit firms must improve processes.",
    description:
      "On October 1  marking the sixth anniversary of the NFRA, Chairman Ajay Bhushan Pandey spoke exclusively with ETCFO, addressing how India's auditing standards meet global requirements.",
    timestamp: "Published Wed, Oct 2 2024",
    author: "By Economic Times Staff",
    link: "https://cfo.economictimes.indiatimes.com/news/tax-legal-accounting/disciplinary-actions-are-not-excessive-audit-firms-must-improve-processes-and-resources-nfra-chief-ajay-bhushan-pandey/113866958?utm_source=top_story&utm_medium=latestNews",
  },
  {
    id: 2,
    imageUrl:
      "https://media.assettype.com/TNIE%2Fimport%2F2019%2F7%2F11%2Foriginal%2FMukesh_Ambani-PTI.jpg?w=1024&auto=format%2Ccompress&fit=max",
    title:
      "Anil Ambani's co partners DHI to set up 1.2 GW solar, hydro power in Bhutan",
    description:
      "Anil Ambani-led Reliance Group on Wednesday said it has entered into a partnership with Druk Holding and Investments (DHI), the commercial arm of the Royal Government of Bhutan, to jointly develop solar and hydropower projects, marking its first foreign venture.",
    timestamp: "Published Wed, Oct 2 2024",
    author: "By Jaden Mathew Paul",
    link: "https://www.business-standard.com/companies/news/anil-ambani-s-co-partners-dhi-to-set-up-1-2-gw-solar-hydro-power-in-bhutan-124100200585_1.html",
  },
  {
    id: 3,
    imageUrl:
      "https://img.etimg.com/thumb/msid-113856198,width-300,height-225,imgsize-47396,resizemode-75/2-2-pc-of-rs-2000-banknotes-with-value-of-rs-7755-crore-still-in-circulation.jpg",
    title: "Since withdrawal, 98% of Rs 2,000 notes have been returned: RBI",
    description:
      "The Reserve Bank of India on Tuesday said 98 per cent of the Rs 2,000 denomination notes have been returned since its May 2023 move to withdraw the currency notes. The total value of notes of the denomination has reduced to Rs 7,117 crore from the Rs 3.56 lakh crore on May 19, 2023, the central bank said",
    timestamp: "Published Wed, Oct 1 2024",
    author: "By Business Standard Staff",
    link: "https://economictimes.indiatimes.com/news/economy/finance/since-withdrawal-98-pc-of-rs-2000-notes-have-been-returned-rbi/articleshow/113856178.cms",
  },
  {
    id: 4,
    imageUrl:
      "https://www.financialexpress.com/wp-content/uploads/2024/10/Image-2024-10-02T152745.085.jpg?w=1024",
    title: "PFRDA Launches NPS Scheme with Higher Equity Investment Option",
    description:
      "The Pension Fund Regulatory and Development Authority (PFRDA) introduced a new lifecycle scheme under the National Pension System (NPS) allowing individuals to invest up to 50% of their corpus in equity until the age of 45. This aims to boost returns for pension investors.",
    timestamp: "Published Wed, Oct 1 2024",
    author: "By Financial Express Staff",
    link: "https://www.financialexpress.com/money/pfrda-launches-new-scheme-with-higher-equity-element-3628659/?ref=hometop_hp",
  },
  {
    id: 5,
    imageUrl:
      "https://img.etimg.com/thumb/msid-113782463,width-300,height-225,imgsize-6176,resizemode-75/gst.jpg",
    title: "GSTN restores July, August 2017 GST returns data",
    description:
      "GST Network on Sunday said the monthly returns data of July and August 2017, the initial months of the Goods and Services Tax rollout, has been restored on the portal",
    timestamp: "Published Wed, Oct 2 2024",
    author: "By Business Press Trust Of india",
    link: "https://www.business-standard.com/finance/news-cm/rupee-depreciates-2-paise-to-83-81-against-us-dollar-in-early-trade-124100210028.html",
  },
];
function Finiance() {
  return (
    <>
      <SectionHeading title="All latest financial updates" />

      <div className={styles.news}>
        {newsData.map((news) => (
          <a href={news.link} key={news.id} className={styles.container}>
            <div className={styles.image}>
              <img src={news.imageUrl} alt={news.title} />
            </div>
            <div className={styles.content}>
              <div className={styles.heading}>{news.title}</div>
              <div className={styles.description}>{news.description}</div>

              <div className={styles.line}></div>

              <div className={styles.footer}>
                <div className={styles.time}>{news.timestamp}</div>
                <div className={styles.author}>{news.author}</div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

export default Finiance;
