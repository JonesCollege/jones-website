export const Tabs = [
    {
        title: "OWEEK",
        route: "/o-week",
    },
    {
        title: "BEER BIKE/\nTRADITIONS",
        route: "/beerbike-traditions",
    },
    {
        title: "COMMUNITY",
        dropdownItems: [
            {
              title: 'STUDENT GOV',
              route: '/studentgov',
            },
            {
              title: 'A-TEAM',
              route: '/ateam',
            },
            {
              title: 'ASSOCIATES/\nALUMNI',
              route: '/associates-alumni',
            }
          ] 
    },
    {
        title: "RESOURCES",
        route: "/resources", 
    },
    {
        title: "FORMS",
        dropdownItems: [
            {
              title: 'ROOM RESERVATION',
              route: '/reserve-room',
            },
            {
              title: 'ACCESSIBILITY FUND',
              external: 'https://docs.google.com/forms/d/e/1FAIpQLSdt3hB8SsNMdGu8_R0nuFMLIyeqW2UMTlhAIw-vhh-s4Ynw3w/viewform',
            },
            {
              title: 'JIBA FUND',
              external: 'https://docs.google.com/forms/d/e/1FAIpQLSdfdOFz7ugG-UBQs-l3VUd3Ekg0dBd9UuWG_T_LNBJFkSKI5Q/viewform?c=0&w=1',
            },
            {
              title: 'RHA HELP FORM',
              external: 'https://forms.gle/F9pTKgNc4fCNZsDr7',
            },
            {
              title: 'RICE MUTUAL AID',
              external: 'https://linktr.ee/ricemutualaid',
            },
            {
              title: 'P-CARD REQUEST',
              external: 'https://docs.google.com/forms/d/e/1FAIpQLSc8YZvR48no9vxIBxrAqwAfafGLgcdw4Q_NnTf6ivMCaR6tMw/viewform',
            },
        ]
    },
]