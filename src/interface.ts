
// export interface HomeTranslation {
//     subtitle: string
//     title: string
// }

export interface SectionTranslations {
    label: string;
    title: string;
    subtext: string;
    btnText: string;
    Image: string;
    imageSrc: string;
}

export interface HomepageTranslations {
    homepage: "string";
    sections: {
      section1: SectionTranslations;
      section2: SectionTranslations;
      section3: SectionTranslations;
      section4: SectionTranslations;
    };
  }

  export interface HowItWorksSectionTranslations {
    title: string;
    text: string;
    Image: string;
}

export interface HowItWorksTranslations {
    howitworks: "string";
    sections: {
      section1: HowItWorksSectionTranslations;
      section2: HowItWorksSectionTranslations;
      section3: HowItWorksSectionTranslations;
      section4: HowItWorksSectionTranslations;
    };
  }

  

export interface Translations {
    homepage: HomepageTranslations;
    howitworks: HowItWorksTranslations;
}