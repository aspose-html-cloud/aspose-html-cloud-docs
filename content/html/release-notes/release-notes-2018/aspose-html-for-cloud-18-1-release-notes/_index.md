---
title: "Aspose.HTML for Cloud 18.1 - Release Notes"
type: docs
weight: 120
---

{{% alert color="primary" %}} 

The following page contains Aspose.HTML for Cloud release notes for version 18.1

{{% /alert %}} 
## **API Changes**
The cloud REST API has been redesigned in the part of the conversion functionality. REST API changes are as follows:
### **Added methods:**
- GET - convert the HTML document stored in the cloud storage to PDF
- GET - convert the HTML document stored in the cloud storage to XPS
- GET - convert the HTML document stored in the cloud storage to the image format (JPEG, PNG, BMP, TIFF) 
- GET - convert the HTML page from the web by its URL to PDF
- GET - convert the HTML page from the web by its URL to XPS
- GET - convert the HTML page from the web by its URL to the image format
### **Modified methods:**
- PUT - convert the HTML document from the request stream to PDF and save it to the cloud storage
  Signature changes: *sourceUrl, asZip, folder* parameters - removed; *outPath* parameter - made required
- PUT - convert the HTML document from the request stream to XPS and save it to the cloud storage
  Signature changes: *sourceUrl, asZip, folder* parameters - removed; *outPath* parameter - made required
- PUT- convert the HTML document from the request stream to the image format and save it to the cloud storage
  Signature changes: *sourceUrl, asZip, folder* parameters - removed; *outPath* parameter - made required
## **New Features**
- MHTML support by the conversion functionality:
  `    `MHTML document can be passed to any of conversion methods (see above) as well as HTML or zipped HTML and converted to supported output formats.
## **Fixed issues**
- Get HTML fragments by XPath: result file name wasn't returned in the ContentDisposition header.
