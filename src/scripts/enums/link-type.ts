export enum LinkType {
  /**
   * Used to navigate between pages of the site
   */
  Internal = "internal",
  /**
   * Used to hold a collection of pages, but not directly part of the sitemap
   */
  Container = "container",
  /**
   * Used to download a file rather than navigate
   */
  Download = "download",
  /**
   * Used to point at a page from a different origin
   */
  External = "external"
}
