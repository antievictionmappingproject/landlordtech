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
    value: "App",
    label: "App",
    color: "#8342D7"
  },
  {
    value: "Lock boxes",
    label: "Lock Boxes",
    color: "#D7AD42"
  },
  {
    value: "Related to short term rentals",
    label: "Related to Short Term Rentals",
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
    services: [
      "Background and credit checks for tenant and roommate selection."
    ],
    examples: [
      { type: "text", desc: "Enhanced credit checks" },
      { type: "text", desc: "Tenant background checks" },
      { type: "text", desc: "Tenant means testing" },
      { type: "text", desc: "Denying housing to those with “criminal” backgrounds and poor credit" },
      { type: "text", desc: "Denying housing to those with prior eviction records" },
      { type: "text", desc: "Roommate matching and screening" },
      { type: "img", desc: `${process.env.PUBLIC_URL}/assets/nomenclature/tenant_screening_01.jpg` },
      { type: "img", desc: `${process.env.PUBLIC_URL}/assets/nomenclature/tenant_screening_02.jpg` },
      { type: "img", desc: `${process.env.PUBLIC_URL}/assets/nomenclature/tenant_screening_03.png` }
    ],
    harm: [
      "Lack of compliance with Fair Housing Act",
      "Discrimination based on false and/or racist credit and conviction information",
      "Denial of housing based on incorrect data",
      "Denial of housing based on eviction filings (rather than eviction outcomes)",
      "Denial of housing based on prior tenant complaints of landlord abuse",
      "Denial of housing based upon past late utility and rental payments",
      "Invasion of privacy through background checks",
      "Targeting of priorly convicted and incarcerated people",
      "Predatory fees",
      "False positives based on name misspellings and common names"
    ],
    companies: [
      "Badi",
      "Nesterly",
      "Bungalow",
      "Zumper",
      "Instarent",
      "Zently",
      "CoreLogic",
      "Naborly",      
    ]
  },
  {
    id: 2,
    type: "direct",
    title: "Property Management",
    services: [
      "Property management functions automated and outsourced to third parties. This includes virtual landlordism."
    ],
    examples: [
      { type: "text", desc: "Remote management" },
      { type: "text", desc: "Rental payments" },
      { type: "text", desc: "Security deposits" },
      { type: "text", desc: "Renters insurance" },
      { type: "text", desc: "Utility payments" },
      { type: "text", desc: "Short-term management" },
      { type: "text", desc: "Virtual landlord" },
      { type: "img",  desc: `${process.env.PUBLIC_URL}/assets/nomenclature/property_management_01.jpg`},
      { type: "img",  desc: `${process.env.PUBLIC_URL}/assets/nomenclature/property_management_02.png`},
      { type: "img",  desc: `${process.env.PUBLIC_URL}/assets/nomenclature/property_management_03.png`},
    ],
    harm: [
      "Absentee, less responsive management",
      "Automated evictions",
      "Automated notices, including late notices",
      "Tenant vulnerability with security deposits and rents paid through a 3rd party",
    ],
    companies: [
      "Rhino",
      "Jetty",
      "HelloRented",
      "MainStreet",
      "Domuso",
      "Till",
      "Zently",
      "Doorstead",    
    ]
  },
  {
    id: 3,
    type: "direct",
    title: "Neighborhood Surveillance",
    services: [
      "Platforms and devices for monitoring neighborhood activities."
    ],
    examples: [
      { type: "text", desc: "Cameras" },
      { type: "text", desc: "License plate readers" },
      { type: "text", desc: "Neighborhood Networking" },
      { type: "text", desc: "Neighbor snitching" },
      { type: "img",  desc: `${process.env.PUBLIC_URL}/assets/nomenclature/neighborhood_surveillance_01.jpg`},
      { type: "img",  desc: `${process.env.PUBLIC_URL}/assets/nomenclature/neighborhood_surveillance_02.jpg`}
    ],
    harm: [
      "Unhoused residents are disproportionately targeted",
      "Residents and visitors of color are disproportionately targeted",
      "Tenants are reported to city officials for quality of life “violations,” such as playing loud music or not cutting grass. These are racially coded.", 
      "Data can be handed over to police or ICE."  
    ],
    companies: [
      "Flocksafety",
      "NextDoor",
      "311",
    ]
  },
  {
    id: 4,
    type: "direct",
    title: "Home Surveillance",
    services: [
      "Security devices for patrolling access and use of apartment buildings."
    ],
    examples: [
      { type: "text", desc: "Cameras" },
      { type: "text", desc: "Facial Recognition" },
      { type: "text", desc: "Biometric Data Collection" },
      { type: "text", desc: "Building Entry Systems" },
      { type: "text", desc: "Virtual doorman / automated check-in or entry" },
      { type: "img",  desc: `${process.env.PUBLIC_URL}/assets/nomenclature/home_surveillance_01.jpg`},
    ],
    harm: [
      "Invasion of privacy",
      "Regulations of visitors",
      "Can lead to evictions for petty lease violations",
      "Can keep you from entering your own home",
      "Facial recognition systems are known to misrecognize or not recognized people of color",   
      "Biometric data can be handed over to police or ICE",
      "Makes homes more desirable for gentrifiers"
    ],
    companies: [
      "Stonelock",
      "PooPrints",
      "GateGuard",
      "Carson",
      "Bumblebee Spaces",
      "Amazon Ring",
      "Google Nest Hello"
    ]
  },
  {
    id: 5,
    type: "direct",
    title: "Smart Homes",
    services: [
      "Personal assistants and other smart devices, such as utilities and metering systems built into or added to a home."
    ],
    examples: [
      { type: "text", desc: "Virtual management and landlordism" },
      { type: "text", desc: "Smart metering" },
      { type: "text", desc: "Thermostat monitoring systems" },
      { type: "text", desc: "In-home voice enabled assistants" },
      { type: "text", desc: "IoT Home Furnishings " },
      { type: "text", desc: "Integration with smart devices such as Amazon’s Alexa" },
      { type: "text", desc: "Aggregating real time data about tenants’ utilities" },
      { type: "text", desc: "Compiling data on building and utility usage" },
      { type: "text", desc: "Integration with smart phones" },
      { type: "img",  desc: `${process.env.PUBLIC_URL}/assets/nomenclature/smart_home_01.jpg`},
    ],
    harm: [ 
      "All of the information landlords take from you, gather from surveillance and monitoring of your homes",
      "Access of personal information by third parties that sell personal information can be used for data mining",
      "Data used to determine who deserves shelter, who’s a good tenant",
      "Data used to establish pricing and determine who gets evicted.",
      "Makes homes more desirable for gentrifiers",
    ],
    companies: [
      "Abode",
      "SmartRent",
      "DishAI",
      "Alexa",
      "Google Assistant", 
    ]
  },

  {
    id: 6,
    type: "direct",
    title: "Non-residential Leases",
    services: [
      "Corporate, executive and impermanent or intermediate/short term rentals."
    ],
    examples: [
      { type: "text", desc: "Hotel-like living opportunities for short and long term housing" },
      { type: "text", desc: "Airbnb-like accommodations" },
      { type: "text", desc: "Tech dorms" },     
      { type: "img",  desc: `${process.env.PUBLIC_URL}/assets/nomenclature/non-residential_leases_01.jpg`},
    ],
    harm: [
      "No permanent residence status or protection",
      "Converts apartments and condo units from residential to commercial use",
      "Encourages other managers and landlords to convert their units, evict tenants, and recover more in profit",
      "Some of these units are turned into master lease units in order not to be regulated as a short term rental",
      "Replaces long term housing into short term rentals, facilitating gentrification",
      "Disrupts building and neighborhood community",              
    ],
    companies: [
      "WhyHotel",
      "Vornado Realty Trust",
      "Sonder",
      "StayAlfred",
      "Lyric",
      "The Guild",
      "Vacasa",
      "AllTheRooms",
      "Bedly",
      "Tokeet",
      "Ollie",
      "PeerSpace",
      "Globe Living",
      "Key Housing",
      "Roost",
      "AKA",
      "Anyplace",
      "Blueground"    
    ]
  },
  {
    id: 7,
    type: "direct",
    title: "Membership Housing",
    services: [
      "People subscribe to a platform that allows them to move from site to site within that platform's network."
    ],
    examples: [
      { type: "text", desc: "Housing in which tenants can easily move from one location to another" },
      { type: "text", desc: "Platforms in which tenants don’t have to pay security deposits or reviewing listings" },
      { type: "img",  desc: `${process.env.PUBLIC_URL}/assets/nomenclature/membership-housing_01.png`},
    ],
    harm: [
      "Tenants in cities with tenant protections may either be unaware of their protections or are forfeiting their protections",
      "Selection criteria may not comply with Fair Housing",
      "Long term tenants displaced so landlords can contract instead with these membership services "           
    ],
    companies: [
      "PodShare",
      "Outpost",
      "Starcity",
      "PadSplit",         
    ]
  },
  {
    id: 8,
    type: "indirect",
    title: "Brokers for Home Sales",
    services: [
      "Platforms that act as a broker for home sales, and that  therefore facilitate new configurations of corporate landlordism."
    ],
    examples: [
      { type: "text", desc: "Reduced fee brokerage" },
      { type: "text", desc: "Real time pricing" },
      { type: "text", desc: "Streamlined, automated transaction process" },
      { type: "text", desc: "Brokers can also operate as the selling and buying agent" },
      { type: "img",  desc: `${process.env.PUBLIC_URL}/assets/nomenclature/broker-for-home-sales_01.jpg`} 
    ],
    harm: [
      "Enables speculation",
      "Monopolization of data",
      "Enables corporate buyers who out maneuver individual owners",
      "Facilitates corporate landlordism",      
    ],
    companies: [
      "Redfin",
      "Compass",
      "RET Ventures",
      "Kodit.io",
      "Skyline AI",
      "Landis",
      "Reali",             
    ]
  },
  {
    id: 9,
    type: "indirect",
    title: "Home Sales Financing",
    services: [
      "Platforms and services that facilitate home sales financing, and therefore new configurations of corporate landlordism."
    ],
    examples: [
      { type: "text", desc: "Real time pricing" },
      { type: "text", desc: "Convenience that your broker can also originate your loan" },
      { type: "text", desc: "Using cryptocurrency to purchase homes" },
      { type: "text", desc: "Equity share" },
      { type: "img",  desc: `${process.env.PUBLIC_URL}/assets/nomenclature/home_sales_financing_01.jpg`}                   
    ],
    harm: [
      "Enables speculation, monopolization, discrimination",
      "Not regulated by the Community Reinvestment Act",
      "Individuals don't have access to these platforms - leading to further concentration of ownership and landlordism",
      "Can use cryptocurrencies for home transactions, which allows housing to become a liquid and readily traded asset",        
    ],
    companies: [
      "Flyhomes",
      "ShelterZoom",
      "Imbrex",
      "ATLANT",
      "Unison",               
    ]
  },
  {
    id: 10,
    type: "indirect",
    title: "Platforms that Buy Homes",
    services: [
      "Platforms that buy homes and that  therefore facilitate new configurations of corporate landlordism."
    ],
    examples: [
      { type: "text", desc: "“iBuyer” that facilitates buying and selling transactions" },
      { type: "text", desc: "The platform acts as a broker to help people buy new homes, and then buys their “old” home" },
      { type: "text", desc: "The platform can purchase with “all cash,” making the offer more competitive" },      
      { type: "img",  desc: `${process.env.PUBLIC_URL}/assets/nomenclature/platforms_01.jpg`} 
    ],
    harm: [
      "Enables speculation",
      "Lack of competitive bidding between corporations and individual owners, therefore favoring corporate landlords",
      "Concentration of corporate ownership",                       
    ],
    companies: [
      "Perch",
      "RedFin",
      "Zillow",
      "Opendoor",
      "OfferPad",
      "Flyhomes",
      "Curbio",
      "Sundae"                  
    ]
  },
  {
    id: 11,
    type: "indirect",
    title: "Rent-to-Own Platforms",
    services: [
      "Platforms designed to help renters become owners, and therefore at times also landlords."
    ],
    examples: [
      { type: "text", desc: "Platforms that require less upfront financial buyer obligations" },
      { type: "text", desc: "Platforms that enable fluid financial commitment for the buyer" },
    ],
    harm: [
      "Tenants stripped of their rights",
      "The platform buys the unit, and the \"buyer\" is really a tenant, but that relationship isn't clear so tenants don't have tenant rights. or do they?",
      "Risky financial proposition: what happens if the platform defaults? What happens if the \"buyer\" defaults",                    
    ],
    companies: [
      "ZeroDown"                 
    ]
  }
];








