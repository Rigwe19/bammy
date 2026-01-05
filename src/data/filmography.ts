export interface YoutubeFilm {
  title: string;
  description?: string;
  year: number;
  link: string;
  upcoming?: boolean;
}

export interface PlatformFilm {
  title: string;
  link: string;
  description: string;
  year: number;
}

export interface FilmographyData {
  actorName: string;
  filmCount: number;
  subtitle: string;
  platforms: {
    // cinema: string[];
    netflix: PlatformFilm[];
    // showmax: string[];
    prime: PlatformFilm[];
    youtube: YoutubeFilm[];
  };
}

export const filmographyData: FilmographyData = {
  actorName: "Taye Arimoro",
  filmCount: 30,
  subtitle: "and Where to Watch Them",
  platforms: {
    // cinema: ["A Very Dirty Christmas", "Son Of The Soil"],
    netflix: [
      {
        title: "The Bling Lagosians",
        description:
          "A wealthy Lagos family's extravagance and secrets come to light as they prepare for a lavish birthday party.",
        link: "https://www.netflix.com/ng/title/81191666",
        year: 2019,
      },
      {
        title: "Collision Course",
        description:
          "A dramatic thriller following the tragic collision of a struggling musician and a police officer in Lagos.",
        link: "https://www.netflix.com/ng/title/81592484",
        year: 2022,
      },
      {
        title: "House of Ga’a",
        description:
          "A historical drama about the rise and fall of the powerful Bashorun Ga’a in the Oyo Empire.",
        link: "https://www.netflix.com/ng/title/81681233",
        year: 2024,
      },

      {
        title: "37 to Go",
        description:
          "A Nigerian short film exploring personal transformation and the complexities of relationships.",
        link: "https://www.youtube.com/watch?v=Ig26M_3UUEc",
        year: 2022,
      },
    ],
    prime: [
      {
        title: "Foreigner's God",
        description:
          "A period drama following an English documentary photographer who becomes entangled with local myths in 1940s Nigeria.",
        link: "https://www.primevideo.com/detail/0IUR495IC3DUHV8BYX8SHVOB5L",
        year: 2022,
      },
    ],
    youtube: [
      {
        title: "LOVE IN EVERY WORD 2",
        year: 2025,
        link: "https://www.youtube.com/watch?v=OQQaDqLCgKg&list=PL_YIUdubpCx2VlRuA42PSEv6G_siiP4Df&index=1&pp=iAQB",
      },
      {
        title: "CHESS",
        year: 2025,
        link: "https://www.youtube.com/watch?v=nPpy24gr12M&list=PL_YIUdubpCx2VlRuA42PSEv6G_siiP4Df&index=2&pp=iAQB",
      },
      {
        title: "DRIVE ME TO LOVE",
        year: 2025,
        link: "https://www.youtube.com/watch?v=go7D8Egeyu0&list=PL_YIUdubpCx2VlRuA42PSEv6G_siiP4Df&index=3&pp=iAQB",
      },
      {
        title: "FOR HIS LOVE",
        year: 2025,
        link: "https://www.youtube.com/watch?v=OhAefewxC4o&list=PL_YIUdubpCx2VlRuA42PSEv6G_siiP4Df&index=4&pp=iAQB",
      },
      {
        title: "TWIN DECEPTION",
        year: 2025,
        description:
          "Separated at birth, ambitious lawyer Teni and struggling artist Tola swap lives to avenge a past betrayal. The ruse uncovers a billion‑naira conspiracy that could cost the sisters their freedom—and their newfound bond.",
        link: "https://www.youtube.com/watch?v=GwwLna5zxpk&list=PL_YIUdubpCx2VlRuA42PSEv6G_siiP4Df&index=5&pp=iAQB",
      },
      {
        title: "LOVE IN EVERY WORD",
        year: 2025,
        description:
          "A jaded radio host must prove true love exists or lose her show. Anonymous letters from a mysterious chef rekindle hope—until the envelopes stop and she must risk her heart on air.",
        link: "https://www.youtube.com/watch?v=bslcx4LRFL0&list=PL_YIUdubpCx2VlRuA42PSEv6G_siiP4Df&index=6&pp=iAQB",
      },
      {
        title: "CUPCAKE FOR VAL",
        year: 2025,
        description:
          "Separated at birth, ambitious lawyer Teni and struggling artist Tola swap lives to avenge a past betrayal. The ruse uncovers a billion‑naira conspiracy that could cost the sisters their freedom—and their newfound bond.",
        link: "https://www.youtube.com/watch?v=KGkWFuk9xUE&list=PL_YIUdubpCx2VlRuA42PSEv6G_siiP4Df&index=7&pp=iAQB",
      },
      {
        title: "LOVE, STYLE AND OTHER THINGS",
        year: 2025,
        link: "https://www.youtube.com/watch?v=X3FqKX8fAKw&list=PL_YIUdubpCx2VlRuA42PSEv6G_siiP4Df&index=8&pp=iAQB",
      },
      {
        title: "BETTING ON LOVE",
        year: 2025,
        link: "https://www.youtube.com/watch?v=DxFfuEh7QCc&list=PL_YIUdubpCx2VlRuA42PSEv6G_siiP4Df&index=9&pp=iAQB",
      },
      {
        title: "A CASE FOR THE HEAR",
        year: 2025,
        link: "https://www.youtube.com/watch?v=zAHTpj04pUI&list=PL_YIUdubpCx2VlRuA42PSEv6G_siiP4Df&index=10&pp=iAQB",
      },
      {
        title: "SEASONED WITH LOVE",
        year: 2025,
        link: "https://www.youtube.com/watch?v=fkLopgVOZYk&list=PL_YIUdubpCx2VlRuA42PSEv6G_siiP4Df&index=11&pp=iAQB",
      },
      {
        title: "MERRY SIDE OF YOU",
        year: 2024,
        description:
          "Workaholic Tonia returns home for Christmas to broker a merger, but a snowstorm strands her with childhood crush Viyon. Between family chaos and carols, she learns the best deals in life can’t be negotiated.",
        link: "https://www.youtube.com/watch?v=Slxm189-MXk&list=PL_YIUdubpCx2VlRuA42PSEv6G_siiP4Df&index=12&pp=iAQB0gcJCRUKAYcqIYzv",
      },
      {
        title: "WALLS BETWEEN US",
        year: 2025,
        link: "https://www.youtube.com/watch?v=nNBISa5Znc0&list=PL_YIUdubpCx2VlRuA42PSEv6G_siiP4Df&index=13&pp=iAQB",
      },
      {
        title: "LOVE ASIDE",
        year: 2025,
        link: "https://www.youtube.com/watch?v=htzdkMPBq1g&list=PL_YIUdubpCx2VlRuA42PSEv6G_siiP4Df&index=14&pp=iAQB",
      },
      {
        title: "WRONG DOOR",
        year: 2025,
        link: "https://www.youtube.com/watch?v=BHJQYbd88hc&list=PL_YIUdubpCx2VlRuA42PSEv6G_siiP4Df&index=15&pp=iAQB",
      },
      {
        title: "THREE FOR TROUBLE",
        year: 2025,
        link: "https://www.youtube.com/watch?v=FRsfW3cpi-c&list=PL_YIUdubpCx2VlRuA42PSEv6G_siiP4Df&index=16&pp=iAQB",
      },
      {
        title: "ENTANGLED",
        year: 2025,
        link: "https://www.youtube.com/watch?v=BIuA4dY_4ck&list=PL_YIUdubpCx2VlRuA42PSEv6G_siiP4Df&index=17&pp=iAQB",
      },
      {
        title: "THE WORD",
        year: 2025,
        link: "https://www.youtube.com/watch?v=TTxt0QhaMTo&list=PL_YIUdubpCx2VlRuA42PSEv6G_siiP4Df&index=18&pp=iAQB0gcJCRUKAYcqIYzv",
      },
      {
        title: "Meadowbrook Hearts",
        year: 2025,
        link: "https://www.youtube.com/watch?v=YxSkTZ756Yc&list=PL_YIUdubpCx2VlRuA42PSEv6G_siiP4Df&index=19&pp=iAQB",
      },
      {
        title: "TEMPTATION",
        year: 2025,
        link: "https://www.youtube.com/watch?v=lAve8eRTUuI&list=PL_YIUdubpCx2VlRuA42PSEv6G_siiP4Df&index=20&pp=iAQB",
      },
      {
        title: "Ogechi",
        year: 2025,
        link: "https://www.youtube.com/watch?v=SGrr4E_morA&list=PL_YIUdubpCx2VlRuA42PSEv6G_siiP4Df&index=21&pp=iAQB",
      },
      {
        title: "ONE NIGHT ONLY",
        year: 2025,
        link: "https://www.youtube.com/watch?v=0KSSYOa2Lvw&list=PL_YIUdubpCx2VlRuA42PSEv6G_siiP4Df&index=22&pp=iAQB",
      },
      {
        title: "THE GIFT WITHIN",
        year: 2025,
        link: "https://www.youtube.com/watch?v=_uqFACWPpDg&list=PL_YIUdubpCx2VlRuA42PSEv6G_siiP4Df&index=23&pp=iAQB",
      },
      {
        title: "THE PRICE WE PAY",
        year: 2025,
        link: "https://www.youtube.com/watch?v=G12jLjOusAs&list=PL_YIUdubpCx2VlRuA42PSEv6G_siiP4Df&index=24&pp=iAQB",
      },
      {
        title: "THE SILENT TRUTH",
        year: 2025,
        link: "https://www.youtube.com/watch?v=1wx57M0Y4pQ&list=PL_YIUdubpCx2VlRuA42PSEv6G_siiP4Df&index=25&pp=iAQB",
      },
      {
        title: "THE MORE YOU LOOK",
        year: 2025,
        link: "https://www.youtube.com/watch?v=FKxZ_h8461g&list=PL_YIUdubpCx2VlRuA42PSEv6G_siiP4Df&index=26&pp=iAQB",
      },
      {
        title: "INGRATE",
        year: 2025,
        link: "https://www.youtube.com/watch?v=TMAIfS7e4A4&list=PL_YIUdubpCx2VlRuA42PSEv6G_siiP4Df&index=27&pp=iAQB0gcJCRUKAYcqIYzv",
      },
      {
        title: "TOO GOOD TO BE TRUE",
        year: 2025,
        link: "https://www.youtube.com/watch?v=RMIGESdOEKU&list=PL_YIUdubpCx2VlRuA42PSEv6G_siiP4Df&index=28&pp=iAQB",
      },
      {
        title: "MIRACLE MAN",
        year: 2025,
        link: "https://www.youtube.com/watch?v=eF_SNXUtAOs&list=PL_YIUdubpCx2VlRuA42PSEv6G_siiP4Df&index=29&pp=iAQB",
      },
      {
        title: "A COPY OF LOVE",
        year: 2025,
        link: "https://www.youtube.com/watch?v=9zpYWyDRigI&list=PL_YIUdubpCx2VlRuA42PSEv6G_siiP4Df&index=30&pp=iAQB",
      },
      {
        title: "MY SANITY",
        year: 2025,
        link: "https://www.youtube.com/watch?v=B5Zeraj6RTA&list=PL_YIUdubpCx2VlRuA42PSEv6G_siiP4Df&index=31&pp=iAQB",
      },
      {
        title: "Whispers of the Womb",
        year: 2025,
        link: "https://www.youtube.com/watch?v=neFmomPVpug&list=PL_YIUdubpCx2VlRuA42PSEv6G_siiP4Df&index=32&pp=iAQB",
      },
      {
        title: "THE GIFT",
        year: 2025,
        link: "https://www.youtube.com/watch?v=Ps9nVGyQJdA&list=PL_YIUdubpCx2VlRuA42PSEv6G_siiP4Df&index=33&pp=iAQB",
      },
      {
        title: "KARMA SAYS",
        year: 2025,
        link: "https://www.youtube.com/watch?v=rY92l-9ITx4&list=PL_YIUdubpCx2VlRuA42PSEv6G_siiP4Df&index=34&pp=iAQB",
      },
      {
        title: "37 to Go",
        year: 2025,
        description:
          "A Nigerian short film exploring personal transformation and the complexities of relationships.",
        link: "https://www.youtube.com/watch?v=Ig26M_3UUEc",
      },
    ],
  },
};
