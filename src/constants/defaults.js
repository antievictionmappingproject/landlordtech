import { Fragment } from "react";

export const INITIAL_STATE = {
  screenWidth: 1024,
  screenHeight: 768,
  isFullScreen: false,
  currentTechType: {
    value: "All",
    label: "All"
  },
  data: {
    "type": "FeatureCollection",
    "features": []
  },
  currentNomenclature: null,
  currentResponseID: null
};

export const TECH_SELECT_VALUES = [
  {
    value: "All",
    label: "All"
  },
  {
    value: "Cameras",
    label: "Cameras",
    color: "#DBFF00"
  },
  {
    value: "Smart lock",
    label: "Smart Lock",
    color: "#FF008A"
  },
  {
    value: "Keyless entry",
    label: "Keyless Entry",
    color: "#00C2FF"
  },
  {
    value: "Facial recognition",
    label: "Facial Recognition",
    color: "#FF0000"
  },
  {
    value: "Smart meter",
    label: "Smart Meter",
    color: "#00FFC2",
  },
  {
    value: "Phone app",
    label: "Phone App",
    color: "#8342D7"
  },
  {
    value: "Lock boxes",
    label: "Lock Boxes",
    color: "#D7AD42"
  },
  {
    value: "Smart home technology",
    label: "Smart Home Technology",
    color: "#c9d0c8"
  },
  {
    value: "Short term rentals",
    label: "Short Term Rentals",
    color: "#42D75A"
  },
  {
    value: "Other",
    label: "Other",
    color: "#686868"
  }
];


export const TECH_LIST = [
  {
    id: 1,
    type: "direct",
    title: "Tenant Screening & Selection",
    subtitle: "Background, “criminal,” income, and credit checks on prospective tenants for landlords",
    services: `
      <p>
        Tenant screening companies produce reports about prospective tenants for landlords to determine whether they should allow a tenant to move into their property. <br/><br/>
        There is no registry of all tenant screening companies, nor any impetus for tenant screening companies to register, but <a href="https://themarkup.org/locked-out/2020/05/28/access-denied-faulty-automated-background-checks-freeze-out-renters" target="_blank">it is estimated that there are over 2,000 companies.</a>
      </p>
    `,
    harms: [
      {
        example: "Criminal history screening may:",
        harms: [
          "Fail to comply with the Fair Housing Act",
          "Target and exclude people who have been convicted or incarcerated",
          "Target and exclude people deemed “terrorists” based on racist and inaccurate assumptions",
          "Discriminate based on false and/or racist conviction information",
          "Rely on law enforcement, court, and FBI data, which may be flawed",
          "Produce false positives based on name misspellings and duplicative common names"
        ]
      },
      {
        example: "Tenant income verification, means testing, and credit check systems may:",
        harms: [
          "Discriminate based on false and/or racist credit information",
          "Deny people housing because they are poor",
          "Force tenants to pay for background checks that could be used to deny them housing",
          "Deny people housing due to gaps in their rental payment history, which disproportionately targets people who have experienced houselessness"
        ]
      },
      {
        example: "Prior eviction checks, based on housing court filings may:",
        harms: [
          "Deny people housing based on past late utility and rental payments",
          "Deny people housing based on eviction filings (rather than eviction outcomes)",
          "Deny people housing based on their having previously complained about landlord abuse",
          "Deny people housing based on incorrect data and information about them."   
        ]
      },
      {
        example: "Roommate matching and screening may:",
        harms: [
          "Fail to comply with the Fair Housing Act",
          "Use social media and other online data to “pick” some roommates and discriminate against others",
          "Aid in removing SROs and other long term housing and replacing it with “hacker dorms” that are often more expensive and screen against those not in the tech industry. This is particularly common in areas with a large tech presence"
        ]
      }
    ],
    companies: [
      {
        name: "CoreLogic",
        link: "https://www.cohenmilstein.com/case-study/connecticut-fair-housing-center-et-al-v-corelogic-rental-property-solutions",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/corelogic_logo.svg`
      },
      {
        name: "TransUnion Smart Move",
        link: "https://www.mysmartmove.com/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/smartmove_logo.jpg`
      },
      {
        name: "Tenant Background Search",
        link: "https://www.tenantbackgroundsearch.com/index.aspx?adid=5&gclid=EAIaIQobChMIpq-Fi8n36gIVD43ICh1kiAbIEAAYAiAAEgJkk_D_BwE",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/tenant_background_search.jpg`
      },
      {
        name: "Zillow",
        link: "https://www.zillow.com/z/rental-manager/tenant-screening/?itc=icon_tenantscreening_fillvacancies",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/zillow_logo_blue.png`
      },
      {
        name: "Tenant Verification",
        link: "https://www.tenantverification.com/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/tenant_verification_logo.png`
      },
      {
        name: "Cozy",
        link: "https://cozy.co/for-landlords/tenant-screening/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/cozy_logo.png`
      },
      {
        name: "Instant Background Check",
        link: "https://instantbackgroundchecks.us/services/tenant-screening/?id=ppc&keyword_session_id=vt~adwords|kt~landlord%20tenant%20background%20check|mt~b|ta~315215187117&_vsrefdom=wordstream&gclid=EAIaIQobChMIgoOU6pP96gIVxp6zCh1NeQXmEAAYASAAEgKoIfD_BwE",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/instant_logo.png`
      },
      {
        name: "Naborly",
        link: "https://naborly.com/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/naborly_logo.png`
      },
      {
        name: "Roomster",
        link: "https://www.roomster.com/login",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/roomster_logo.png`
      },
      {
        name: "Chez JJ",
        link: "https://www.wired.com/2015/08/sf-hacker-hostel-faces-real-world-loses/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/chejj-logo.png`
      },
      {
        name: "20 Mission",
        link: "http://www.20mission.com/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/20mission_logo.jpg`
      }
    ]
  },
  {
    id: 50,
    type: "direct",
    title: "Eviction and Debt Recovery Apps",
    subtitle: "Apps that assist landlords and property managers in evicting tenants",
    services: "",
    harms: [
      {
        example: "Automates lawsuits, judgement collections, and evictions:",
        harms: [
          "Speeds up evictions",
          "Makes it more difficult for tenants to negotiate with landlords or understand why they are being evicted",
          "Supplies tenant screening and credit screening platforms with data, thereby leading to increased housing precarity for those evicted",
          "Promises to automate removing “bothersome tenants,” relying upon racist and classist classification systems",
        ]
      },
      {
        example: "Automates debt acquisition and recovery:",
        harms: [
          "Removes possibility of tenants negotiating repayment plans with landlords",
          "No eviction judgments are  required to submit an account to a debt collection agency, meaning than companies can target those who have not actually been evicted",
          "Every judgment debtor is placed on a nationwide tracking system, leading to increased tenant surveillance",
          "Private investigators and trained collection agents will locate assets and arrange for levy or repossession of tenant belongings"
        ]
      }
    ],
    companies: [
      {
        name: "Civvl",
        link: "https://civvl.com/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/civil_logo.jpg`
      },
      {
        name: "SueYa",
        link: "https://sueya.com/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/sueya_logo.png`
      },
      {
        name: "ClickNotices",
        link: "http://www.clicknotices.com",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/clicknotices_logo.jpg`
      },
      {
        name: "Rent Recovery Services",
        link: "https://www.rentrecoveryservice.com/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/rrs_logo.png`
      }
    ]
  },
  {
    id: 2,
    type: "direct",
    title: "Virtual Property Management & Landlordism",
    subtitle: "Property management is automated and outsourced to third party tech platforms.",
    services: "",
    harms: [
      {
        example: "Remote property management may:",
        harms: [
          "Prevent tenants from communicating with their actual landlord, instead making them go through an app",
          "Result in neglect and and less responsive management",
          "Produce automated eviction notices, often without clear explanations or processes to contest such notices",
          "Be integrated with “smart” systems that collect and store other personal tenant data",
          "Be part of larger systems for tenant screening and property surveillance"
        ]
      },
      {
        example: "Third party apps and platforms that collect rental and utility payments, security deposits, and renters’ insurance may:",
        harms: [
          "Prevent tenants from communicating with their actual landlord, instead making them go through an app",
          "Produce automated late notices, often without clear explanations or processes to contest such notices",
          "Be integrated with “smart” systems that collect and store other personal tenant data",
          "Produce tenant vulnerability with security deposits and rents paid through third party"          
        ]
      },
      {
        example: "Apps that collect and manage complaints of neighbors, building services or property management may:",
        harms: [
          "Result in neglect less responsive management",
          "Encourage neighbors to resolve their conflicts through the app, instead of talking to each other."    
        ]
      },
      {
        example: "Automated leases, eviction notices,  and rental contracts may:",
        harms: [
          "Prevent tenants from communicating with their actual landlord, instead making them go through an app.",
          "Be integrated with “smart” systems that collect and store other personal tenant data",
          "Produce automated late notices, often without clear explanations or processes to contest such notices"         
        ]
      },
      {
        example: "Online rental marketing of properties by the virtual landlord may:",
        harms: [
          "Incentivize evictions of long term tenants in order to raise rents and gentrify neighborhoods"       
        ]
      }
    ],
    companies: [
      {
        name: "Domuso",
        link: "https://www.domuso.com/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/domuso_logo.png`
      },
      {
        name: "Till",
        link: "https://www.hellotill.com/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/till_logo.png`
      },
      {
        name: "Doorstead",
        link: "https://www.doorstead.com/property-management/?utm_source=g&utm_campaign=20d-ww&gclid=EAIaIQobChMI_9rn59H36gIVg-DICh3U_gVgEAAYASAAEgJHh_D_BwE",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/doorstead-logo.svg`
      },
      {
        name: "Roost",
        link: "https://roostrealestateco.com/property-management/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/roost_logo.png`
      },
      {
        name: "BuildingLink",
        link: "https://www.buildinglink.com/marketing/public/main",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/BuildingLink_logo.png`
      }
    ]
  },
  {
    id: 3,
    type: "direct",
    title: "Neighborhood Surveillance",
    subtitle: "Platforms and devices for monitoring neighborhood activities.",
    services: "",
    harms: [
      {
        example: "Home security cameras recording streets, sidewalks, and common areas may:",
        harms: [
          "Disproportionately target and potentially endanger unhoused residents",
          "Disproportionately target and endanger residents and visitors who are Black or Brown",
          "Result in tenants and visitors being reported to city officials or law enforcement for racially-coded nuisances and quality of life “violations,” such as loud music, uncut grass, or home maintenance issues"          
        ]
      },
      {
        example: "License plate readers may:",
        harms: [
          "Record data that can be handed over to police, ICE, or other law enforcement, resulting in the arrest or harassment of neighbors and visitors."     
        ]
      },
      {
        example: "Neighborhood networking and social connection platforms may:",
        harms: [
          "Result in the racist targeting of residents and visitors who are Black and Brown"    
        ]
      },
      {
        example: "Neighbor snitching apps may",
        harms: [
          "Disproportionately target and potentially endanger unhoused residents",
          "Disproportionately target and endanger residents and visitors who are Black or Brown",
          "Provide information on neighborhood activity to law enforcement"              
        ]
      },
      {
        example: "Municipal nuisance reporter apps may:",
        harms: [
          "Disproportionately target and potentially endanger unhoused residents",
          "Disproportionately target and endanger residents and visitors who are Black or Brown.",
          "Produce data that can be handed over to police, ICE, or other law enforcement.",
          "Result in tenants and visitors being reported to city officials or law enforcement for racially-coded nuisances and quality of life “violations”, such as loud music, uncut grass, or home maintenance issues"      
        ]
      },
      {
        example: "Surveillance cameras that are shared with police through programs that integrate residents’ cameras with law enforcement systems may:",
        harms: [
          "Disproportionately target and potentially endanger unhoused residents",
          "Disproportionately target and endanger residents and visitors who are Black or Brown",
          "Produce data that is handed over to police, ICE, or other law enforcement."    
        ]
      }
    ],
    companies: [
      {
        name: "Amazon Ring",
        link: "https://www.theatlantic.com/technology/archive/2019/11/stealing-amazon-packages-age-nextdoor/598156/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/amazon_ring_logo.jpg`
      },
      {
        name: "Google Nest",
        link: "https://store.google.com/us/magazine/compare_cameras",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/google_nest_logo.png`
      },
      {
        name: "Flocksafety",
        link: "https://www.flocksafety.com/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/flock_safety_logo.png`
      },
      {
        name: "NextDoor",
        link: "https://onezero.medium.com/how-nextdoor-encourages-hate-of-the-homeless-9200475cda43",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/roost_logo.png`
      },
      {
        name: "311",
        link: "https://www.bloomberg.com/news/articles/2019-09-25/should-you-call-to-report-a-homeless-person",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/BuildingLink_logo.png`
      },
      {
        name: "Oakland’s nuisance reporter",
        link: "https://repository.uchastings.edu/cgi/viewcontent.cgi?article=1004&context=hastings_journal_crime_punishment",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/logo-oakland.jpg`
      },
      {
        name: "Bridgewater S.M.I.L.E program",
        link: "https://www.bridgewaterpd.com/smileprogram",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/bridgewater_logo.jpg`
      }
    ]
  },
  {
    id: 4,
    type: "direct",
    title: "Home Surveillance",
    subtitle: "Security devices for monitoring and controlling  access to and use of apartment buildings, as well as activities inside and outside of buildings.",
    services: "",
    harms: [
      {
        example: "Building entry surveillance cameras may:",
        harms: [
          "Monitor residents’ movements and activities and provide this information to landlords and potentially to law enforcement",
          "Be used to surveil and regulate visitors",
          "Provide surveillance footage that can be used to evict or harass tenants for petty violations, sometimes as a way to displace tenants in service of gentrification"            
        ]
      },
      {
        example: "Facial recognition cameras may:",
        harms: [
          "Collect sensitive biometric information and make this available to landlords, companies, and potentially police, law enforcement, and ICE",
          "Misrecognize and fail to “work” for gender minorities and Black and Brown people",
          "Monitor residents’ movements and activities and provide this information to landlords and potentially to law enforcement",
          "Be used to surveil and regulate visitors",
          "Be used to evict or harass tenants for petty violations, sometimes as a way to displace tenants in service of gentrification"
        ]
      },
      {
        example: "Biometric data collection for pets (used to monitor whether pet owners clean waste) may:",
        harms: [
          "May be used to target tenants’ whose pets violate building management stipulations",
          "May result in fines and eviction notices"             
        ]
      },
      {
        example: "Virtual “doorman” / automated check-in or entry systems may:",
        harms: [
          "Collect sensitive information and make this available to landlords, companies, and potentially police, law enforcement, and ICE",
          "Be used to surveil and regulate visitors",
          "Be used to evict or harass tenants for petty violations, sometimes as a way to displace tenants in service of gentrification",
          "Make buildings more attractive to gentrifiers",
          "Require tenants to provide private information in order to use building accommodations",
          "Be buggy or flawed, and prevent tenants from entering their home or using building accommodations",                 
        ]
      },
      {
        example: "Motion detection cameras may:",
        harms: [
          "Monitor residents’ movements and activities and provide this information to landlords and potentially to law enforcement",
          "Be used to surveil and regulate visitors",
          "Provide surveillance footage that can be used to evict or harass tenants for petty violations, sometimes as a way to displace tenants in service of gentrification",          
        ]
      },
      {
        example: "Smart locks may:",
        harms: [
          "Monitor residents’ movements and activities and provide this information to landlords and potentially to law enforcement",
          "Allow landlords to remotely lock tenants out of buildings or their homes, without the trouble of changing physical locks",
          "Be buggy or flawed, and prevent tenants from entering their home or using building accommodations due to technical problems or power outages"     
        ]
      },
      {
        example: "App enabled home entry may:",
        harms: [
          "Monitor residents’ movements and activities and provide this information to landlords and potentially to law enforcement",
          "Allow landlords to remotely lock tenants out of buildings or their homes, without the trouble of changing physical locks",
          "Be buggy or flawed, and prevent tenants from entering their home or using building accommodations due to technical problems or power outages",        
        ]
      }
    ],
    companies: [
      {
        name: "Amazon Ring",
        link: "https://www.theatlantic.com/technology/archive/2019/11/stealing-amazon-packages-age-nextdoor/598156/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/amazon_ring_logo.jpg`
      },
      {
        name: "Google Nest Hello",
        link: "https://store.google.com/product/nest_hello_doorbell?gclid=EAIaIQobChMIqMXHn5j96gIVGYTICh3Iswd2EAAYASAAEgKrivD_BwE&gclsrc=aw.ds",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/google_nest_logo.png`
      },
      {
        name: "Stonelock",
        link: "https://urbanomnibus.net/2019/11/disruption-at-the-doorstep/?printpage=true",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/STONELOCK_new-logo-01.svg`
      },
      {
        name: "FST21",
        link: "https://gothamist.com/news/were-guinea-pigs-how-affordable-lower-east-side-complex-got-facial-recognition",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/fst21_logo.jpg`
      },
      {
        name: "PooPrints",
        link: "hhttps://onezero.medium.com/landlords-are-exploiting-dog-poop-dna-tests-to-punish-tenants-ac4e83907a57",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/Pooprints-Helix-Logo.jpg`
      },
      {
        name: "Teman GateGuard",
        link: "https://www.cnet.com/news/install-smart-home-tech-evict-renters-surveillance-company-tells-landlords/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/teman_logo.png`
      },
      {
        name: "Carson",
        link: "https://www.carson.live/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/carson_logo.jpg`
      },
      {
        name: "DataWatch",
        link: "https://www.datawatchsystems.com/about/company-overview/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/ds-hdr-logo.png`
      },
      {
        name: "Latch",
        link: "https://www.latch.com/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/latch_logo.png`
      },
      {
        name: "ButterflyMX",
        link: "https://butterflymx.com",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/butterflymx_logo.gif`
      }
    ]
  },
  {
    id: 5,
    type: "direct",
    title: "Smart Homes",
    subtitle: "Personal assistants and other smart devices, such as utilities and metering systems built into or added to a house or apartment.",
    services: "",
    harms: [
      {
        example: "Smart meters may:",
        harms: [
          "Collect detailed information about household utility use, and provide this to landlords, companies and potentially to law enforcement",
          "Collect information that can be used to infer what tenants are doing in their home, when they are home, how many people are in their home, and other personal details"               
        ]
      },
      {
        example: "In-home voice enabled assistants may:",
        harms: [
          "Collect very private recordings of all conversations that take place in a given room or home, and make these available to large tech companies and potentially law enforcement",
          "Fail to work well for people with non-native accents, speech impediments, or other ways of speaking that are different from standard white accents"
        ]
      },
      {
        example: "Internet-connected “IoT” appliances may:",
        harms: [
          "Collect personal data on appliance use, and potentially other personal activity, and make this available to companies for re-use",
          "Be buggy or flawed, and lead to failure and unusable appliances due to technical problems or power outages",
          "Be vulnerable to hacks and security breaches"
        ]
      }
    ],
    companies: [
      {
        name: "SmartRent",
        link: "https://smartrent.com/product/resident/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/smartrent_logo.png`
      },
      {
        name: "Amazon Alexa",
        link: "https://www.theguardian.com/technology/2019/oct/09/alexa-are-you-invading-my-privacy-the-dark-side-of-our-voice-assistants",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/alexa_logo.png`
      },
      {
        name: "Google Assistant",
        link: "https://assistant.google.com/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/gassistant_logo.png`
      },
      {
        name: "ADT + Google",
        link: "https://blog.google/products/google-nest/partnership-adt-smarter-home-security/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/adt-security-services-logo.png`
      },
      {
        name: "Hello Alfred",
        link: "https://helloalfred.com/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/hello-alfred-seo.png`
      },
      {
        name: "Loxone",
        link: "https://support.smartthings.com/hc/en-us/articles/205380634-Setting-up-an-account-the-Hub-and-Things",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/loxone_logo.png`
      },
      {
        name: "Samsung Smart Things App",
        link: "https://www.carson.live/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/SmartThings_Blk.png`
      },
      {
        name: "Apple Home",
        link: "https://www.apple.com/ios/home/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/apple_home_logo.jpg`
      },
      {
        name: "Ecobee",
        link: "https://www.ecobee.com/en-us/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/ecobee-logo.png`
      },
      {
        name: "SpaceFlow",
        link: "https://spaceflow.io/en/our-product/?gclid=EAIaIQobChMIyYHB7Zn96gIVlozICh2RignqEAAYAiAAEgKdrfD_BwE",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/spaceflow.svg`
      },
      {
        name: "Abode",
        link: "https://goabode.com/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/abode_logo.png`
      }
    ]
  },
  {
    id: 6,
    type: "indirect",
    title: "Brokers for Home Sales",
    subtitle: "Platforms that act as a broker for home sales, and that therefore facilitate new opportunities for corporate landlords.",
    services: "",
    harms: [
      {
        example: "Brokers who operate as all-in-one selling and buying agents may:",
        harms: [
          "Monopolize data collection, which provides significant insight and an unfair advantage that individual buyers and tenants don’t enjoy.",
          "Give corporate buyers an unfair advantage over individual buyers.",
          "Encourage the growth of corporate landlordism, which is often more neglectful and exploitative than individual landlords."                   
        ]
      },
      {
        example: "AI and machine learning systems used to automate real estate transactions (buying, selling, etc.) may:",
        harms: [
          "Reproduce and amplify racist bias and discrimination due to faulty data and flawed assumptions built in to these systems.",
          "Provide corporate landlords and speculators an unfair advantage over individual buyers."        
        ]
      }
    ],
    companies: [
      {
        name: "Redfin",
        link: "https://www.redfin.com/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/redfin_logo.png`
      },
      {
        name: "Compass",
        link: "https://www.compass.com/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/compass_logo.png`
      },
      {
        name: "RET Ventures",
        link: "https://www.ret.vc/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/RETV-logo.png`
      },
      {
        name: "Kodit.io",
        link: "https://kodit.io/en/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/kodit_io_logo.png`
      },
      {
        name: "Skyline AI",
        link: "https://www.skyline.ai/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/skyline_ai_logo.png`
      },
      {
        name: "Landis",
        link: "https://www.landis.com/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/landis_logo.png`
      },
      {
        name: "Reali",
        link: "https://reali.com/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/reali.jpg`
      },
      {
        name: "Roost",
        link: "https://roostrealestateco.com/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/roost_logo.png`
      }
    ]
  },
  {
    id: 7,
    type: "indirect",
    title: "Home Sales Financing",
    subtitle: "Platforms and services that facilitate home sales financing outside of traditional banking.",
    services: "",
    harms: [
      {
        example: "Platforms that adjust home prices in real-time, using AI and machine learning, based on what they believe a buyer can afford may:",
        harms: [
          "Lead to predatory pricing that favors corporations and wealthy buyers without giving others a chance.",
          "Encode bias and discriminatory logics through use of faulty or racist data.",
          "Help accelerate real estate accumulation in the hands of corporations and the wealthy."
        ]
      },
      {
        example: "Platforms that provide automated and data-intensive home buying and selling services only to corporations and the wealthy, not to individual buyers, may:",
        harms: [
          "Facilitate further concentration of corporate ownership.",
          "Enable corporations to become larger landowners.",
          "Provide platforms with competitive advantages over individual buyers, as platforms accrue more and more valuable data that individuals don’t have access to."
          
        ]
      },
      {
        example: "Platforms that permit the purchase of homes using cryptocurrency, may:",
        harms: [
          "Not be regulated by the Community Reinvestment Act, a federal law that applies to traditional banking and requires reinvestment in low income neighborhoods. This further empoverishes communities who have already suffered from redlining and discrimination.",
          "May allow housing to become a liquid and readily traded asset, treated more like stocks and similar financial instruments. This accelerates the buying and selling of fractional housing units. It also favors corporations and the wealthy who treat housing as a tradable  asset rather than as spaces of home, community, and shelter."      
        ]
      }
    ],
    companies: [
      {
        name: "Flyhomes",
        link: "https://www.flyhomes.com/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/flyhomes_logo.png`
      },
      {
        name: "ShelterZoom",
        link: "https://www.shelterzoom.com/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/shelterzoom_logo.png`
      },
      {
        name: "ATLANT",
        link: "https://atlant.io/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/atlant_logo.png`
      },
      {
        name: "Unison",
        link: "https://www.unison.com/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/unison-logo.svg`
      }
    ]
  },
  {
    id: 8,
    type: "indirect",
    title: "Platforms that Buy Homes",
    subtitle: "Platforms used to buy new homes, after which the platform itself purchases the old homes",
    services: "",
    harms: [
      {
        example: "\"iBuyer\" that facilitates buying and selling transactions, may:",
        harms: [
          "Monopolize data collection, which provides significant insight and an unfair advantage that individual buyers and tenants don’t enjoy.",
          "Encourage the growth of corporate landlordism, which is often more neglectful and exploitative than individual landlords.",
          "Help accelerate real estate accumulation in the hands of tech corporations, investment companies, real estate speculators, and the wealthy."      
        ]
      },
      {
        example: "Platforms that purchase with \"all cash,\" may:",
        harms: [
          "Make their offers more competitive than those of individual owners unable to make such purchases, thereby supporting the growth of corporate landlordism."
        ]
      }
    ],
    companies: [
      {
        name: "Redfin",
        link: "https://www.redfin.com/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/redfin_logo.png`
      },
      {
        name: "Zillow",
        link: "https://www.zillow.com",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/zillow_logo_blue.png`
      },
      {
        name: "Opendoor",
        link: "https://www.opendoor.com/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/opendoor_logo.jpg`
      },
      {
        name: "OfferPad",
        link: "https://www.offerpad.com/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/offerpad_logo.png`
      },
      {
        name: "Flyhomes",
        link: "https://www.flyhomes.com/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/flyhomes_logo.png`
      },
      {
        name: "Curbio",
        link: "https://curbio.com/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/curbio_logo.png`
      },
      {
        name: "Sundae",
        link: "https://sundae.com/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/Sundae-logo-for-google-icon.png`
      }
    ]
  },
  {
    id: 9,
    type: "indirect",
    title: "Rent-to-Own Platforms",
    subtitle: "Platforms marketed as helping renters become owners",
    services: "",
    harms: [
      {
        example: "Platforms, rather than tenants, may purchase units, leading to:",
        harms: [
          "Tenants being stripped of their prior rights as they become owners indebted to platforms.",
          "Increased data and real estate being accumulated by platforms, and therefore corporate landlordism."         
        ]
      },
      {
        example: "Platforms may require less upfront financial buyer obligations",
        harms: [
          "Favors corporations over and individual owners",
          "May enable real estate speculation"          
        ]
      },
      {
        example: "Platforms may enable fluid financial commitment for the buyer, which may:",
        harms: [
          "Lead to a risky financial proposition, especially if the platform defaults."         
        ]
      }
    ],
    companies: [
      {
        name: "ZeroDown",
        link: "https://www.zerodown.com/columbus",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/zerodown_logo.jpg`
      },
      {
        name: "Divvy",
        link: "https://www.divvyhomes.com/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/divvy_logo.png`
      },
      {
        name: "ThinkTrio",
        link: "https://www.thinktrio.com/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/trio_logo.png`
      },
      {
        name: "VerbHouse",
        link: "https://www.verbhouse.com/#benefits-section",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/verbhouse_logo.png`
      },
    ]
  },
  {
    id: 10,
    type: "indirect",
    title: "Non-residential Leases and Short term Rentals",
    subtitle: "Vacation rentals, “Airbnb”-type platforms that allow landlords to treat housing as a hotel, and other tech-enabled short-term rental platforms",
    services: "",
    harms: [
      {
        example: "The creation of: boutique temporary suites, furnished rentals, corporate housing, serviced apartments, tech dorms and hacker homes, short term rentals and vacation units",
        harms: [
          "No permanent residence status or protection",
          "Some of these units are turned into master lease units in order not to be regulated as a short term rental",
          "Lack of regulation",
          "Aid in removing SROs and other long term housing and replacing it with “hacker dorms” that are often more expensive and screen against those not in the tech industry. This is particularly common in areas with a large tech presence.",               
        ]
      },
      {
        example: "Converts apartments and condo units from residential to commercial use",
        harms: [
          "May result in lack of long term housing for residents",
          "May encourage managers and landlords to evict long term tenants",
          "May disrupt building and neighborhood communities, facilitating gentrification",
        ]
      }
    ],
    companies: [
      {
        name: "Airbnb",
        link: "https://www.publicbooks.org/uploading-housing-inequality-digitizing-housing-justice/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/airbnb_logo.jpg`
      },
      {
        name: "VRBO",
        link: "https://wamu.org/story/18/10/02/d-c-s-proposal-regulate-restrict-home-sharing-services-like-airbnb-vrbo-explained/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/vrbo_logo.jpg`
      },
      {
        name: "HomeAway",
        link: "https://www.nola.com/news/politics/article_f7c988a1-7a3c-5ba9-9817-13ff09affba3.html",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/HomeAway-Logo.jpg`
      },
      {
        name: "Bungalow",
        link: "https://bungalow.com/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/bungalow_wordmark_dark.png`
      },
      {
        name: "WhyHotel",
        link: "https://whyhotel.com/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/rq-vsp-whyhotel.png`
      },
      {
        name: "Sonder",
        link: "https://www.sonder.com/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/sonder_logo.svg`
      },
      {
        name: "StayAlfred",
        link: "https://www.stayalfred.com/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/stayalfred_logo_circle_green.svg`
      },
      {
        name: "Lyric",
        link: "https://www.propmodo.com/lyric-a-company-adding-workspaces-to-short-term-rentals-gets-big-investment-from-airbnb/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/lyrics_logo.png`
      },
      {
        name: "The Guild",
        link: "https://theguild.co/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/theguild_logo.png`
      },
      {
        name: "Vacasa",
        link: "https://www.vacasa.com/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/vacasa_logo.png`
      },
      {
        name: "AllTheRooms",
        link: "https://www.alltherooms.com/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/AllTheRooms_logo.png`
      },
      {
        name: "Aleph Living",
        link: "https://www.alephliving.com/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/alephliving_logo.png`
      },
      {
        name: "Tokeet",
        link: "https://www.tokeet.com/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/tokeet_logo.png`
      },
      {
        name: "Ollie",
        link: "https://ollie.co/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/ollie_logo.png`
      },
      {
        name: "Key Housing",
        link: "https://www.keyhousing.com/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/keyhousing_logo.gif`
      },
      {
        name: "HubHaus",
        link: "https://thehubhaus.com/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/hubhaus.svg`
      },
      {
        name: "Hacknsleep",
        link: "https://hacknsleep.com/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/hacknsleep-logo.jpg`
      },
      {
        name: "Hackerhome",
        link: "http://www.hackerho.me/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/hacknsleep-logo.jpg`
      },
    ]
  },
  {
    id: 11,
    type: "indirect",
    title: "Membership Housing",
    subtitle: "Platforms in which members can move from location to location within that platform's network",
    services: "",
    harms: [
      {
        example: "Platforms may have opaque or discriminatory membership requirements",
        harms: [
          "Selection criteria may not comply with the Fair Housing Act, and therefore may lead to housing discrimination",               
        ]
      },
      {
        example: "It may be unclear how membership housing fits within existing housing protection legislation",
        harms: [
          "Tenants in cities with renter protections may forfeit them when moving into membership housing",
          "Tenants may no longer have long term lease commitments"         
        ]
      },
      {
        example: "Long term tenants may be displaced so landlords can instead contract instead with membership services",
        harms: [
          "Long term tenants are gentrified out of their homes and neighborhoods to be replaced with membership housing platforms"           
        ]
      }
    ],
    companies: [
      {
        name: "PodShare",
        link: "https://www.podshare.com/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/podshare_logo.png`
      },
      {
        name: "Outpost",
        link: "https://outpost-club.com/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/outpost_logo.svg`
      },
      {
        name: "Starcity",
        link: "https://starcity.com/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/starcity_logo.png`
      },
      {
        name: "PadSplit",
        link: "https://www.padsplit.com/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/padsplit_logo.jpg`
      }
    ]
  },
  {
    id: 12,
    type: "indirect",
    title: "Property Listing Services",
    subtitle: "Platforms that enable speculators to better buy up properties, and renters to find homes",
    services: "",
    harms: [
      {
        example: "Compiles property data in proprietary packages for landlords",
        harms: [
          "May encourage corporate landlordism by favoring those with capital to purchase data services",               
        ]
      },
      {
        example: "Platforms often highlight foreclosed homes for speculators to purchase",
        harms: [
          "Capitalizes upon foreclosures, which disproportionately lead to Black and Latinx residents being displaced",
          "Facilitates real estate speculation"              
        ]
      },
      {
        example: "Gathers information including owner name, contact details, foreclosure histories, property characteristics, property value, zoning, sales history, and title documents",
        harms: [
          "Powers corporate landlords and Landlord Tech companies with data",
          "Compromises tenant privacy by providing tenant information to prospective buyers and speculators",              
        ]
      }
    ],
    companies: [
      {
        name: "MLS",
        link: "http://www.mls.com/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/mls_logo.png`
      },
      {
        name: "Zillow",
        link: "https://www.zillow.com/z/rental-manager/tenant-screening/?itc=icon_tenantscreening_fillvacancies",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/zillow_logo_blue.png`
      },
      {
        name: "CoreLogic",
        link: "https://www.cohenmilstein.com/case-study/connecticut-fair-housing-center-et-al-v-corelogic-rental-property-solutions",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/corelogic_logo.svg`
      },
      {
        name: "LoopNet",
        link: "https://www.loopnet.com/search/multifamily-properties/usa/for-sale/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/logo-loopnet-red.svg`
      },
      {
        name: "Property Radar",
        link: "https://www.propertyradar.com/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/propertyradar-logo-320x60.png`
      },
      {
        name: "Property Shark",
        link: "https://www.propertyshark.com/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/big-propertyshark-logo-2.jpg`
      },
      {
        name: "Zumper",
        link: "https://www.zumper.com/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/zumper_logo.png`
      },
      {
        name: "Instarent",
        link: "https://www.instarent.com.au/",
        img: `${process.env.PUBLIC_URL}/assets/nomenclature/instarentlogoupdated.png`
      },
    ]
  }
  
];








