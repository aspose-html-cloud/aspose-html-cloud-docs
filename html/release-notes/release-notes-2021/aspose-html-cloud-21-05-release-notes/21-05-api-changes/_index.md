---
title: "v.21.05 Api Changes"
type: docs
url: /aspose-html-cloud-21-05-release-notes/21-05-api-changes/
keywords: "release notes, .net, conversion, conversion to docx, conversion to word"
description: "Aspose.HTML Cloud 21.05 release - Api Changes"
weight: 10
---

All URIs are related to https://api.aspose.cloud/v3.0/html



## Added APIs



**GET**: convert the HTML document (located on storage) to DOCX (MS Word) and return resulting file in response content.

```
/{name}/convert/doc?folder={folder}&storage={storage}&width={width}&height={height}&leftMargin={leftMargin}&rightMargin={rightMargin}&topMargin={topMargin}&bottomMargin={bottomMargin}
```

**Parameters**

| Name         | Description                                                  | Passed in | Required |
| :----------- | :----------------------------------------------------------- | :-------- | :------- |
| name         | Document name.                                               | Path      |  +       |
| folder       | Source document folder.                                      | Query     |  -       |
| storage      | Source document storage.                                     | Query     |  -       |
| width        | Resulting document page width in points (1/96 inch).         | Query     |  -       |
| height       | Resulting document page height in points (1/96 inch).        | Query     |  -       |
| leftMargin   | Left resulting document page margin in points (1/96 inch).   | Query     |  -       |
| rightMargin  | Right resulting document page margin in points (1/96 inch).  | Query     |  -       |
| topMargin    | Top resulting document page margin in points (1/96 inch).    | Query     |  -       |
| bottomMargin | Bottom resulting document page margin in points (1/96 inch). | Query     |  -       |





**GET**: convert the HTML page (located in the Web) to DOCX (MS Word) and return resulting file in response content.

```
/convert/doc?sourceUrl={sourceUrl}&width={width}&height={height}&leftMargin={leftMargin}&rightMargin={rightMargin}&topMargin={topMargin}&bottomMargin={bottomMargin}
```

**Parameters**

| Name         | Description                                                  | Passed in | Required |
| :----------- | :----------------------------------------------------------- | :-------- | :------- |
| sourceUrl    | Source page URL.                                             | Query     |  +       |
| width        | Resulting document page width in points (1/96 inch).         | Query     |  -       |
| height       | Resulting document page height in points (1/96 inch).        | Query     |  -       |
| leftMargin   | Left resulting document page margin in points (1/96 inch).   | Query     |  -       |
| rightMargin  | Right resulting document page margin in points (1/96 inch).  | Query     |  -       |
| topMargin    | Top resulting document page margin in points (1/96 inch).    | Query     |  -       |
| bottomMargin | Bottom resulting document page margin in points (1/96 inch). | Query     |  -       |





**POST**: convert the HTML document (in request content) to DOCS (MS Word) and upload resulting file to storage.

```
/convert/doc?outPath={outPath}&storage={storage}&width={width}&height={height}&leftMargin={leftMargin}&rightMargin={rightMargin}&topMargin={topMargin}&bottomMargin={bottomMargin}
```

**Parameters**

| Name         | Description                                                  | Passed in | Required |
| :----------- | :----------------------------------------------------------- | :-------- | :------- |
| outPath      | Full resulting filename (ex. /folder1/folder2/result.docx)   | Query     |  +       |
| storage      | Result document storage.                                     | Query     |  -       |
| width        | Resulting document page width in points (1/96 inch).         | Query     |  -       |
| height       | Resulting document page height in points (1/96 inch).        | Query     |  -       |
| leftMargin   | Left resulting document page margin in points (1/96 inch).   | Query     |  -       |
| rightMargin  | Right resulting document page margin in points (1/96 inch).  | Query     |  -       |
| topMargin    | Top resulting document page margin in points (1/96 inch).    | Query     |  -       |
| bottomMargin | Bottom resulting document page margin in points (1/96 inch). | Query     |  -       |
| -            | A file to be converted.                                      | Body      |  +       |





**PUT**: convert the HTML document (located on storage) to DOCX (MS Word) and upload resulting file to storage.

```
/{name}/convert/doc?outPath={outPath}&folder={folder}&storage={storage}&width={width}&height={height}&leftMargin={leftMargin}&rightMargin={rightMargin}&topMargin={topMargin}&bottomMargin={bottomMargin}
```

**Parameters**

| Name         | Description                                                  | Passed in | Required |
| :----------- | :----------------------------------------------------------- | :-------- | :------- |
| name         | Document name.                                               | Path      | +        |
| folder       | Source document folder.                                      | Query     | -        |
| storage      | Source and result document storage.                          | Query     | -        |
| outPath      | Full resulting filename (ex. /folder1/folder2/result.docx)   | Query     | +        |
| width        | Resulting document page width in points (1/96 inch).         | Query     | -        |
| height       | Resulting document page height in points (1/96 inch).        | Query     | -        |
| leftMargin   | Left resulting document page margin in points (1/96 inch).   | Query     | -        |
| rightMargin  | Right resulting document page margin in points (1/96 inch).  | Query     | -        |
| topMargin    | Top resulting document page margin in points (1/96 inch).    | Query     | -        |
| bottomMargin | Bottom resulting document page margin in points (1/96 inch). | Query     | -        |


