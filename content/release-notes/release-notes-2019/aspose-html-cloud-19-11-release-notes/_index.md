---
title: "Aspose.HTML Cloud 19.11 Release Notes"
type: docs
aliases: /aspose-html-cloud-19-11-release-notes/
weight: 10
---

## **API changes**
### **New feature**


- SEO analyzing API has been added (see v.19.11 - API Change
  - It checks the HTML page by provided address and returns a list of SEO warnings. The following analysis points are provided in the current version (this list can be extended in the further versions):
    - detection of broken links;
    - validation of e-mail addresses;
    - checking of IMG tags for the absence of ALT attribute;
    - checking for duplicated H1 elements.
### **Internal enhancements**
- Extraction of images from HTML page: performance has been increased by usage of
- Aspose.HTML.NET advanced functionality (namely, the mechanism of customizable handling of the resource requests on the document loading);
- Code refactoring:
  - HTML document loading logic has been optimized for loading from storage and from the Web
  - Duplicated code fragments have been transformed into methods;
  - Unused code fragments have been removed.
