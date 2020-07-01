export const INITIAL_STATE = {
  screenWidth: 1024,
  screenHeight: 768,
  data: [],
  currentNomenclature: null
};

export const TECH_LIST = [
  {
    id: 1,
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
      "Zently"
    ]
  },
  {
    id: 2,
    title: "Property Management",
    services: [
      "Property Management"
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
      "Installation of"
    ],
    companies: [
      "Rhino",
      "Jetty",
      "HelloRented",
      "MainStreet",
      "Domuso",
      "Till",
      "Zently",
      "Doorstead"      
    ]
  }
];








