export const INITIAL_STATE = {
  screenWidth: 1024,
  screenHeight: 768,
  data: [],
  currentNomenclature: null
};

export const TECH_LIST = [
  {
    id: 1,
    type: "direct",
    title: "Tenant Screening & Protection",
    services: [
      "Background and credit checks for tenant and roommate selection."
    ],
    examples: [
      "Enhanced Credit Checks",
      "Tenant Background Checks",
      "Tenant Means Testing",
      "Roommate Matching",
      "Co-living",
      "Intergenerational Home Sharing",
      "Tenant Selection / Rental Listings"
    ],
    harm: [
      "Discrimination: Lack of compliance with Fair Housing Act",
      "Collection and Aggregation of data",
      "Denial of housing based on incorrect information",
      "Invasion of privacy through background checks",
      "Means testing of tenants in non-means tested housing to enable speculation",
      "Predatory fees"
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
      "Remote management",
      "Rental payments",
      "Security deposits",
      "Renters Insurance",
      "Utility Payments",
      "Short-term management"      
    ],
    harm: [
      "Absentee, less responsive management",
      "Reduction in labor required to respond to management issues",
      "Automated evictions",
      "Automated notices including late notices",
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
      "Cameras",
      "License plate readers",
      "Neighborhood Networking",
      "Neighbor snitching",
    ],
    harm: [
      "Unhoused residents are disproportionately targeted",
      "Residents and visitors of color are disproportionately targeted",
      "Tenants are reported to city officials for quality of life “violations,” such as playing loud music or not cutting grass. These are racially coded.",   
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
      "Cameras",
      "Facial Recognition",
      "Biometric Data Collection",
      "Building Entry Systems",
      "In-home Voice Enabled Assistants",
      "Thermostat monitoring systems",
      "Home Furnishings (with in-home voice enabled assistants)",
      "Virtual landlord",
      "Virtual doorman / automated check-in or entry",      
    ],
    harm: [
      "Invasion of privacy",
      "Regulations of visitors",
      "Can lead to evictions for petty lease violations",
      "Can keep you from entering your own home",
      "Facial recognition systems are known to misrecognize or not recognized people of color",   
    ],
    companies: [
      "Bumblebee Spaces",
      "Amazon Ring",
      "Google Nest Hello",
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
      "Management",
      "Metering",
      "Development",
      "Integration with smart devices such as Amazon’s Alexa",
      "Aggregating of real time data about tenants’ utilities",
      "Compiling data on building and utility usage",
      "Integration with smart phones",       
    ],
    harm: [
      "All of the information landlords take from you, gather from surveillance and monitoring of your homes",
      "Access of personal information by third parties that sell personal information can be used for data mining",
      "Data used to determine who deserves shelter, who’s a good tenant",
      "Data used to establish pricing and determine who gets evicted.",      
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
      "Corporate, Executive and Impermanent or Intermediate term rentals"
    ],
    examples: [
      "Provides rental opportunities for longer than 30 days without committing to a permanent residence",
      "Provides rental opportunities for stays longer than typical hotel stays but still shorter than 30 days, and typically for a lower daily rate than a hotel",
      "Provides for a diversity of locations and amenities.",           
    ],
    harm: [
      "Converts apartments and condo units from residential to commercial use",
      "Encourages other managers & landlords to convert their units, evict tenants, recover more in profit",
      "Some of these platforms master lease units in order not to be regulated as a short term rental platform",          
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
      "Corporate, Executive and Impermanent or Intermediate term rentals"
    ],
    examples: [
      "The resident doesn't have a long term commitment of a lease",
      "The tenant can move from one location to another without the complications of security deposits, reviewing listings, etc.",            
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
      "Brokers for home sales"
    ],
    examples: [
      "Reduced fee brokerage",
      "Real time pricing",
      "Streamlined, automated transaction process",
      "Act as broker in multiple locations for the same party as selling and buying agent",                
    ],
    harm: [
      "Monopolization of data",
      "Unequal competition because of unequal access to information",
      "Enabling of corporate buyers who out-maneuver individuals",
      "Enables speculation",        
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
    id: 8,
    type: "indirect",
    title: "Home Sales Financing",
    services: [
      "Home Sales Financing"
    ],
    examples: [
      "Real time pricing",
      "Convenience that your broker can also originate your loan",
      "Using cryptocurrency to purchase homes",
      "Equity share",                     
    ],
    harm: [
      "Not regulated by the Community Reinvestment Act",
      "Monopolization of data",
      "Unequal competition",
      "Using cryptocurrencies for home transactions deregulates the process, changing real estate from an illiquid to liquid asset that can be readily traded.",
      "Individuals don't have access to these platforms - leading to further concentration of ownership",
      "Enables speculation, monopolization, discrimination",           
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
    id: 8,
    type: "indirect",
    title: "Platforms that Buy Homes",
    services: [
      "Platforms that Buy Homes"
    ],
    examples: [
      "\"iBuyer\" that facilitates buying and selling transactions",
      "For someone selling their home and buying a new one at the same time, the platform can act as a broker to help them buy their new home, then at the same time buys the person's \"old\" home.",
      "For some, the platform buys the home for you with \"all cash\" making the offer more competitive on the market- then you buy it back from the platform",                
    ],
    harm: [
      "Lack of competitive bidding",
      "Concentration of ownership (this happens with some platforms)",
      "Leveraging of unfair competitive advantage",
      "Enables speculation",                 
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
    id: 8,
    type: "indirect",
    title: "Rent-to-Own Platforms",
    services: [
      "Platforms designed to help with homeownership"
    ],
    examples: [
      "Less up-front financial obligation for the buyer",
      "More fluid duration of financial commitment for the buyer",                     
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








