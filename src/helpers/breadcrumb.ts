import { breadcrumb } from "src/types/breadcrumb";

class breadCrumbHelper {
  static capitalizeFirstLetterOfEachWord(sentence: string): string {
    const words = sentence.split(" ");

    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    return words.join(" ");
  }

  static generateLinksFromRoute(route: string): Array<breadcrumb> {
    const sections = route.split("/").filter(Boolean);

    const breadcrumbs: Array<breadcrumb> = [];

    for (let i = 0; i < sections.length; i++) {
      const previousBreadcrumb: breadcrumb = breadcrumbs[i - 1] || { label: "", route: "" };
      const currentSection = sections[i];

      breadcrumbs.push({
        label: this.capitalizeFirstLetterOfEachWord(currentSection.replaceAll(/-/g, " ")),
        route: `${previousBreadcrumb.route}/${currentSection}/`,
      });
    }

    return [{label:"Dashboard" , route:"/"} , ...breadcrumbs];
  }
}

export default breadCrumbHelper;
