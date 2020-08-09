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
    value: "Smart home technology",
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
    value: "Short term rentals",
    label: "Short term rentals",
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
    id: 2,
    type: "direct",
    title: "Virtual Property Management and Landlordism",
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
  }
  // ,{
  //   id: 2,
  //   type: "direct",
  //   title: "Property Management",
  //   services: [
  //     "Property management functions automated and outsourced to third parties. This includes virtual landlordism."
  //   ],
  //   examples: [
  //     { type: "text", desc: "Remote management" },
  //     { type: "text", desc: "Rental payments" },
  //     { type: "text", desc: "Security deposits" },
  //     { type: "text", desc: "Renters insurance" },
  //     { type: "text", desc: "Utility payments" },
  //     { type: "text", desc: "Short-term management" },
  //     { type: "text", desc: "Virtual landlord" },
  //     { type: "img",  desc: `${process.env.PUBLIC_URL}/assets/nomenclature/property_management_01.jpg`},
  //     { type: "img",  desc: `${process.env.PUBLIC_URL}/assets/nomenclature/property_management_02.png`},
  //     { type: "img",  desc: `${process.env.PUBLIC_URL}/assets/nomenclature/property_management_03.png`},
  //   ],
  //   harm: [
  //     "Absentee, less responsive management",
  //     "Automated evictions",
  //     "Automated notices, including late notices",
  //     "Tenant vulnerability with security deposits and rents paid through a 3rd party",
  //   ],
  //   companies: [
  //     "Rhino",
  //     "Jetty",
  //     "HelloRented",
  //     "MainStreet",
  //     "Domuso",
  //     "Till",
  //     "Zently",
  //     "Doorstead",    
  //   ]
  // },
  // {
  //   id: 3,
  //   type: "direct",
  //   title: "Neighborhood Surveillance",
  //   services: [
  //     "Platforms and devices for monitoring neighborhood activities."
  //   ],
  //   examples: [
  //     { type: "text", desc: "Cameras" },
  //     { type: "text", desc: "License plate readers" },
  //     { type: "text", desc: "Neighborhood Networking" },
  //     { type: "text", desc: "Neighbor snitching" },
  //     { type: "img",  desc: `${process.env.PUBLIC_URL}/assets/nomenclature/neighborhood_surveillance_01.jpg`},
  //     { type: "img",  desc: `${process.env.PUBLIC_URL}/assets/nomenclature/neighborhood_surveillance_02.jpg`}
  //   ],
  //   harm: [
  //     "Unhoused residents are disproportionately targeted",
  //     "Residents and visitors of color are disproportionately targeted",
  //     "Tenants are reported to city officials for quality of life “violations,” such as playing loud music or not cutting grass. These are racially coded.", 
  //     "Data can be handed over to police or ICE."  
  //   ],
  //   companies: [
  //     "Flocksafety",
  //     "NextDoor",
  //     "311",
  //   ]
  // },
  // {
  //   id: 4,
  //   type: "direct",
  //   title: "Home Surveillance",
  //   services: [
  //     "Security devices for patrolling access and use of apartment buildings."
  //   ],
  //   examples: [
  //     { type: "text", desc: "Cameras" },
  //     { type: "text", desc: "Facial Recognition" },
  //     { type: "text", desc: "Biometric Data Collection" },
  //     { type: "text", desc: "Building Entry Systems" },
  //     { type: "text", desc: "Virtual doorman / automated check-in or entry" },
  //     { type: "img",  desc: `${process.env.PUBLIC_URL}/assets/nomenclature/home_surveillance_01.jpg`},
  //   ],
  //   harm: [
  //     "Invasion of privacy",
  //     "Regulations of visitors",
  //     "Can lead to evictions for petty lease violations",
  //     "Can keep you from entering your own home",
  //     "Facial recognition systems are known to misrecognize or not recognized people of color",   
  //     "Biometric data can be handed over to police or ICE",
  //     "Makes homes more desirable for gentrifiers"
  //   ],
  //   companies: [
  //     "Stonelock",
  //     "PooPrints",
  //     "GateGuard",
  //     "Carson",
  //     "Bumblebee Spaces",
  //     "Amazon Ring",
  //     "Google Nest Hello"
  //   ]
  // },
  // {
  //   id: 5,
  //   type: "direct",
  //   title: "Smart Homes",
  //   services: [
  //     "Personal assistants and other smart devices, such as utilities and metering systems built into or added to a home."
  //   ],
  //   examples: [
  //     { type: "text", desc: "Virtual management and landlordism" },
  //     { type: "text", desc: "Smart metering" },
  //     { type: "text", desc: "Thermostat monitoring systems" },
  //     { type: "text", desc: "In-home voice enabled assistants" },
  //     { type: "text", desc: "IoT Home Furnishings " },
  //     { type: "text", desc: "Integration with smart devices such as Amazon’s Alexa" },
  //     { type: "text", desc: "Aggregating real time data about tenants’ utilities" },
  //     { type: "text", desc: "Compiling data on building and utility usage" },
  //     { type: "text", desc: "Integration with smart phones" },
  //     { type: "img",  desc: `${process.env.PUBLIC_URL}/assets/nomenclature/smart_home_01.jpg`},
  //   ],
  //   harm: [ 
  //     "All of the information landlords take from you, gather from surveillance and monitoring of your homes",
  //     "Access of personal information by third parties that sell personal information can be used for data mining",
  //     "Data used to determine who deserves shelter, who’s a good tenant",
  //     "Data used to establish pricing and determine who gets evicted.",
  //     "Makes homes more desirable for gentrifiers",
  //   ],
  //   companies: [
  //     "Abode",
  //     "SmartRent",
  //     "DishAI",
  //     "Alexa",
  //     "Google Assistant", 
  //   ]
  // },

  // {
  //   id: 6,
  //   type: "direct",
  //   title: "Non-residential Leases",
  //   services: [
  //     "Corporate, executive and impermanent or intermediate/short term rentals."
  //   ],
  //   examples: [
  //     { type: "text", desc: "Hotel-like living opportunities for short and long term housing" },
  //     { type: "text", desc: "Airbnb-like accommodations" },
  //     { type: "text", desc: "Tech dorms" },     
  //     { type: "img",  desc: `${process.env.PUBLIC_URL}/assets/nomenclature/non-residential_leases_01.jpg`},
  //   ],
  //   harm: [
  //     "No permanent residence status or protection",
  //     "Converts apartments and condo units from residential to commercial use",
  //     "Encourages other managers and landlords to convert their units, evict tenants, and recover more in profit",
  //     "Some of these units are turned into master lease units in order not to be regulated as a short term rental",
  //     "Replaces long term housing into short term rentals, facilitating gentrification",
  //     "Disrupts building and neighborhood community",              
  //   ],
  //   companies: [
  //     "WhyHotel",
  //     "Vornado Realty Trust",
  //     "Sonder",
  //     "StayAlfred",
  //     "Lyric",
  //     "The Guild",
  //     "Vacasa",
  //     "AllTheRooms",
  //     "Bedly",
  //     "Tokeet",
  //     "Ollie",
  //     "PeerSpace",
  //     "Globe Living",
  //     "Key Housing",
  //     "Roost",
  //     "AKA",
  //     "Anyplace",
  //     "Blueground"    
  //   ]
  // },
  // {
  //   id: 7,
  //   type: "direct",
  //   title: "Membership Housing",
  //   services: [
  //     "People subscribe to a platform that allows them to move from site to site within that platform's network."
  //   ],
  //   examples: [
  //     { type: "text", desc: "Housing in which tenants can easily move from one location to another" },
  //     { type: "text", desc: "Platforms in which tenants don’t have to pay security deposits or reviewing listings" },
  //     { type: "img",  desc: `${process.env.PUBLIC_URL}/assets/nomenclature/membership-housing_01.png`},
  //   ],
  //   harm: [
  //     "Tenants in cities with tenant protections may either be unaware of their protections or are forfeiting their protections",
  //     "Selection criteria may not comply with Fair Housing",
  //     "Long term tenants displaced so landlords can contract instead with these membership services "           
  //   ],
  //   companies: [
  //     "PodShare",
  //     "Outpost",
  //     "Starcity",
  //     "PadSplit",         
  //   ]
  // },
  // {
  //   id: 8,
  //   type: "indirect",
  //   title: "Brokers for Home Sales",
  //   services: [
  //     "Platforms that act as a broker for home sales, and that  therefore facilitate new configurations of corporate landlordism."
  //   ],
  //   examples: [
  //     { type: "text", desc: "Reduced fee brokerage" },
  //     { type: "text", desc: "Real time pricing" },
  //     { type: "text", desc: "Streamlined, automated transaction process" },
  //     { type: "text", desc: "Brokers can also operate as the selling and buying agent" },
  //     { type: "img",  desc: `${process.env.PUBLIC_URL}/assets/nomenclature/broker-for-home-sales_01.jpg`} 
  //   ],
  //   harm: [
  //     "Enables speculation",
  //     "Monopolization of data",
  //     "Enables corporate buyers who out maneuver individual owners",
  //     "Facilitates corporate landlordism",      
  //   ],
  //   companies: [
  //     "Redfin",
  //     "Compass",
  //     "RET Ventures",
  //     "Kodit.io",
  //     "Skyline AI",
  //     "Landis",
  //     "Reali",             
  //   ]
  // },
  // {
  //   id: 9,
  //   type: "indirect",
  //   title: "Home Sales Financing",
  //   services: [
  //     "Platforms and services that facilitate home sales financing, and therefore new configurations of corporate landlordism."
  //   ],
  //   examples: [
  //     { type: "text", desc: "Real time pricing" },
  //     { type: "text", desc: "Convenience that your broker can also originate your loan" },
  //     { type: "text", desc: "Using cryptocurrency to purchase homes" },
  //     { type: "text", desc: "Equity share" },
  //     { type: "img",  desc: `${process.env.PUBLIC_URL}/assets/nomenclature/home_sales_financing_01.jpg`}                   
  //   ],
  //   harm: [
  //     "Enables speculation, monopolization, discrimination",
  //     "Not regulated by the Community Reinvestment Act",
  //     "Individuals don't have access to these platforms - leading to further concentration of ownership and landlordism",
  //     "Can use cryptocurrencies for home transactions, which allows housing to become a liquid and readily traded asset",        
  //   ],
  //   companies: [
  //     "Flyhomes",
  //     "ShelterZoom",
  //     "Imbrex",
  //     "ATLANT",
  //     "Unison",               
  //   ]
  // },
  // {
  //   id: 10,
  //   type: "indirect",
  //   title: "Platforms that Buy Homes",
  //   services: [
  //     "Platforms that buy homes and that  therefore facilitate new configurations of corporate landlordism."
  //   ],
  //   examples: [
  //     { type: "text", desc: "“iBuyer” that facilitates buying and selling transactions" },
  //     { type: "text", desc: "The platform acts as a broker to help people buy new homes, and then buys their “old” home" },
  //     { type: "text", desc: "The platform can purchase with “all cash,” making the offer more competitive" },      
  //     { type: "img",  desc: `${process.env.PUBLIC_URL}/assets/nomenclature/platforms_01.jpg`} 
  //   ],
  //   harm: [
  //     "Enables speculation",
  //     "Lack of competitive bidding between corporations and individual owners, therefore favoring corporate landlords",
  //     "Concentration of corporate ownership",                       
  //   ],
  //   companies: [
  //     "Perch",
  //     "RedFin",
  //     "Zillow",
  //     "Opendoor",
  //     "OfferPad",
  //     "Flyhomes",
  //     "Curbio",
  //     "Sundae"                  
  //   ]
  // },
  // {
  //   id: 11,
  //   type: "indirect",
  //   title: "Rent-to-Own Platforms",
  //   services: [
  //     "Platforms designed to help renters become owners, and therefore at times also landlords."
  //   ],
  //   examples: [
  //     { type: "text", desc: "Platforms that require less upfront financial buyer obligations" },
  //     { type: "text", desc: "Platforms that enable fluid financial commitment for the buyer" },
  //   ],
  //   harm: [
  //     "Tenants stripped of their rights",
  //     "The platform buys the unit, and the \"buyer\" is really a tenant, but that relationship isn't clear so tenants don't have tenant rights. or do they?",
  //     "Risky financial proposition: what happens if the platform defaults? What happens if the \"buyer\" defaults",                    
  //   ],
  //   companies: [
  //     "ZeroDown"                 
  //   ]
  // }
];








