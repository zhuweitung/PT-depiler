import { type ISiteMetadata } from "../types";
import { SchemaMetadata } from "../schemas/NexusPHP.ts";
import { parseValidTimeString } from "@ptd/site";

const linkQuery = {
  selector: ['a[href*="download.php?id="]'],
  attr: "href",
};

export const siteMetadata: ISiteMetadata = {
  ...SchemaMetadata,

  version: 1,
  id: "sportscult",
  name: "SportsCult",
  tags: ["体育"],
  timezoneOffset: "+0000",

  collaborator: ["zhuweitung"],

  type: "private",
  schema: "SportsCult",

  urls: ["uggcf://fcbegfphyg.bet/"],

  category: [
    {
      name: "分类",
      key: "category",
      options: [
        { name: "EPL", value: 47 },
        { name: "American Football", value: 41 },
        { name: "AutoMotoRacing", value: 54 },
        { name: "Athletics", value: 17 },
        { name: "Baseball", value: 51 },
        { name: "Bodybuilding/Fitness", value: 34 },
        { name: "Golf", value: 50 },
        { name: "Boxing", value: 29 },
        { name: "BrainGames", value: 19 },
        { name: "BreakDance", value: 36 },
        { name: "Cycling", value: 23 },
        { name: "Documentary", value: 31 },
        { name: "European Basketball", value: 1 },
        { name: "Extreme Sports", value: 37 },
        { name: "Fight Sports", value: 9 },
        { name: "Formula1", value: 32 },
        { name: "GAA (Gaelic)", value: 45 },
        { name: "Gymnastics", value: 22 },
        { name: "UFL", value: 59 },
        { name: "Handball", value: 39 },
        { name: "International Basket", value: 2 },
        { name: "IceHockey", value: 25 },
        { name: "International Soccer", value: 4 },
        { name: "KHL", value: 42 },
        { name: "MotoGP", value: 55 },
        { name: "KickBoxing/Muay Thai", value: 35 },
        { name: "La Liga", value: 43 },
        { name: "MotorSport", value: 15 },
        { name: "MLB", value: 24 },
        { name: "MMA", value: 28 },
        { name: "NBA", value: 11 },
        { name: "NCAA Basket/Football", value: 3 },
        { name: "NFL", value: 5 },
        { name: "NHL", value: 27 },
        { name: "Olympic games", value: 26 },
        { name: "Rugby", value: 7 },
        { name: "Serie A", value: 44 },
        { name: "Snooker/Pool", value: 38 },
        { name: "Streetball", value: 30 },
        { name: "Swimming/Aquatics", value: 18 },
        { name: "Ligue1", value: 56 },
        { name: "AFL(AustralianFB)", value: 46 },
        { name: "Tennis", value: 12 },
        { name: "Volleyball", value: 20 },
        { name: "Weightlifting", value: 21 },
        { name: "WinterSport", value: 16 },
        { name: "Wrestling/Grapling", value: 33 },
        { name: "Uncategorised", value: 48 },
        { name: "Champions League", value: 60 },
        { name: "Europa League", value: 61 },
        { name: "WNBA", value: 63 },
        { name: "NASCAR", value: 64 },
        { name: "FIBA 3x3 Basketball", value: 65 },
        { name: "Bundesliga", value: 67 },
        { name: "MLS", value: 68 },
        { name: "EuroLeague Basketbal", value: 69 },
        { name: "ELC", value: 70 },
        { name: "RhythmicGymnastics", value: 71 },
        { name: "BeachVolleyball", value: 72 },
        { name: "BeachSoccer", value: 73 },
        { name: "Chess", value: 74 },
        { name: "Bowling", value: 75 },
        { name: "BelgianProLeague", value: 76 },
        { name: "Bellator", value: 77 },
        { name: "Billard", value: 78 },
        { name: "Climbing", value: 79 },
        { name: "CrossFit", value: 80 },
        { name: "DutchEredivisie", value: 81 },
        { name: "IndyCar", value: 82 },
        { name: "GLeagueNBA", value: 83 },
        { name: "NCAABasketball", value: 84 },
        { name: "NCAAFootball", value: 85 },
        { name: "Sailing", value: 86 },
        { name: "Surfing", value: 87 },
        { name: "TableTennis", value: 88 },
        { name: "TourDeFrance", value: 89 },
        { name: "LaVuelta", value: 90 },
        { name: "Girod'Italia", value: 91 },
        { name: "UefaConferenceLeague", value: 92 },
        { name: "UEFAEuro", value: 93 },
        { name: "OlympicGamesParis24", value: 94 },
        { name: "WRCRally", value: 95 },
        { name: "CPL", value: 96 },
        { name: "CFL", value: 97 },
        { name: "PrimeiraPortugal", value: 98 },
        { name: "Cricket", value: 53 },
        { name: "Darts", value: 99 },
        { name: "European Soccer", value: 6 },
        { name: "Field Hockey", value: 52 },
        { name: "UFC", value: 58 },
        { name: "NRL", value: 57 },
      ],
    },
  ],

  search: {
    keywordPath: "params.search",
    requestConfig: {
      url: "/index.php",
      params: {
        page: "torrents",
        active: 0,
        _: Date.now(),
      },
    },
    selectors: {
      rows: { selector: ".b-content[align='center'] > table:eq(1) tbody tr table tr:gt(0)" },
      link: linkQuery,
      url: {
        ...linkQuery,
        filters: [
          { name: "querystring", args: ["id"] },
          { name: "prepend", args: ["/index.php?page=torrent-details&id="] },
        ],
      },
      id: {
        ...linkQuery,
        filters: [{ name: "querystring", args: ["id"] }],
      },
      category: {
        selector: ["a[href*='index.php?page=torrents'] img"],
        attr: "alt",
      },
      title: {
        selector: ["a[href*='index.php?page=torrent-details']"],
      },
      size: { selector: "td:eq(3)", filters: [{ name: "parseSize" }] },
      time: {
        selector: "td:eq(4)",
        filters: [
          (query: string) => {
            return parseValidTimeString(query!.trim(), "dd/MM/yyyy");
          },
        ],
      },
      seeders: { selector: "td:eq(5)" },
      leechers: { selector: "td:eq(6)" },
      completed: { selector: "td:eq(7)" },

      tags: [
        {
          name: "Free",
          selector: "img[src=*'gold/gold.gif']",
        },
        {
          name: "50%",
          selector: "img[src=*'gold/silver.gif']",
        },
      ],
    },
  },

  userInfo: {
    pickLast: ["id", "joinTime"],
    selectors: {
      // "page": "/index.php",
      id: {
        selector: ["a[href*='/index.php?page=usercp&uid=']"],
        attr: "href",
        filters: [{ name: "querystring", args: ["uid"] }],
      },
      levelName: {
        selector: ["form[action='index.php'] td b:contains('Rank:')"],
      },
      name: {
        selector: ["form[action='index.php'] td b:contains('Welcome'):contains('back')"],
        filters: [
          (query: string) => {
            return query!.match(/Welcome back (.*)/)![1];
          },
        ],
      },
      uploaded: {
        selector: ["form[action='index.php'] td.green:eq(0)"],
        filters: [
          (query: string) => {
            return query!.replace(/,/g, "")!.match(/([\d.]+ ?[ZEPTGMK]?i?B)/)![1];
          },
        ],
      },
      downloaded: {
        selector: ["form[action='index.php'] td.red"],
        filters: [
          (query: string) => {
            return query!.replace(/,/g, "")!.match(/([\d.]+ ?[ZEPTGMK]?i?B)/)![1];
          },
        ],
      },
      bonus: {
        selector: ["form[action='index.php'] td.green:eq(1)"],
        filters: [
          (query: string) => {
            return query!.replace(/,/g, "")!.match(/([\d.]+)/)![1];
          },
        ],
      },
      messageCount: {
        selector: ["form[action='index.php'] a[href*='do=pm']"],
        filters: [
          (query: string) => {
            return query!.match(/(\d+)/)![1];
          },
        ],
      },

      // "page": "/index.php?page=usercp&uid=${id}"
      joinTime: {
        selector: ["#mcol table tr td:contains('Joined on:') + td"],
        filters: [
          (query: string) => {
            return parseValidTimeString(query, "dd/MM/yyyy HH:mm:ss");
          },
        ],
      },
      bonusPerHour: {
        selector: ["#mcol table tr td:contains('Forum Posts:') + td"],
        filters: [
          (query: string) => {
            return query!.replace(/,/g, "")!.match(/\[([\d.]+) posts per day]/)![1];
          },
        ],
      },
    },
    process: [
      {
        requestConfig: { url: "/index.php", params: { _: Date.now() }, responseType: "document" },
        fields: ["id", "levelName", "name", "uploaded", "downloaded", "bonus", "messageCount"],
      },
      {
        requestConfig: { url: "/index.php?page=usercp", params: { _: Date.now() }, responseType: "document" },
        assertion: { id: "params.uid" },
        fields: ["joinTime", "bonusPerHour"],
      },
    ],
  },

  levelRequirements: [
    {
      id: 1,
      name: "Athlete",
      uploaded: "50GB",
      ratio: 0.9,
      privilege: "Access to: Online Users, Tracker info, Live TV",
    },
    {
      id: 2,
      name: "ProAthlete",
      uploaded: "250GB",
      ratio: 1.8,
      privilege: "Access to: Online Users, Tracker info, Live TV, Requests, Top 10, and Users",
    },
  ],
};
