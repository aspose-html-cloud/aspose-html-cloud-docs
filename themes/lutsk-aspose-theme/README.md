This theme is developed for docs.aspose.com. 
It is based on Docsy https://www.docsy.dev/ and Hugo Book https://github.com/alex-shpak/hugo-book Hugo themes.

- [F.A.Q.](#faq)
- [How to setup theme](#how-to-setup-theme)
  - [1. First of all you need to install npm dependencies:](#1-first-of-all-you-need-to-install-npm-dependencies)
  - [2. Start Hugo server](#2-start-hugo-server)
  - [3. How To Test On Different Domains?](#3-how-to-test-on-different-domains)
- [Config.toml Params](#configtoml-params)
- [Page Variables](#page-variables)
- [Shortcodes — use in **.md** files](#shortcodes--use-in-md-files)
- [Containerize Menu Integration](#containerize-menu-integration)


## F.A.Q.

## How to setup theme

### 1. First of all you need to install npm dependencies:
    
    ``` 
        sudo npm install -D --save autoprefixer
        sudo npm install -D --save postcss-cli 
    ```

### 2. Start Hugo server
    ```
        hugo server -D
    ```

### 3. How To Test On Different Domains?

You need to use the following comand in the main Hugo directory:

        hugo server -c <directory path> -b <base url (e.g. products.aspose.com)>

**Example:**

        hugo server -c content/Aspose.Slides-Landing/ -b products.aspose.com

*[**directory path**]* — this is path of content. E.g. path to Aspose.Email documentation folder.

*[**base url**]* — Type the domain or website you want to test. To see the website just use your 'localhost' or IP of local hugo server. Hugo accepts theme depending on the URL. Hugo uses "aspose.com" URL if this parameter is not set.

## Config.toml Params

1. **topbar_search_active** — Shows/Hide topbar search field.

 
## Page Variables
1. **showChildPages: true** - Shows the list of child pages in the bottom of the current page.


## Shortcodes — use in **.md** files  

Documentation is in the [Wiki section](https://git.dev.dynabic.com/containerize-hugo/lutsk-aspose-theme/-/wikis/home)

## Containerize Menu Integration

Initially, there was only one dynamic way to insert the Containerize Menu into pages. This way led to visual delays, and it was not user-friendly.
The Lutsk Aspose Theme supports direct Containerize Menu inserting into aspose.com, aspose.cloud ventures since the 959ba2ad5300ae51d53d93cc813913bfe12818f7 commit. Containerize Menu parts must be placed into different Hugo theme directories. Please view the example below.

```
theme/layouts/partials/containerize-menu/
  aspose/ - venture folder
    en/ - language folder
      menu.html - ventureHeader in JSON , "Menu HTML" in admin.
      footer.html - ventureFooter in JSON, "Footer HTML" in admin.
      default_state.html - noLoginHTML in JSON, "Default State" in admin.
      logged_in_state.html - loginHTML in JSON, "Logged-In State" in admin.
      custom.css - ventureHead in JSON, "Custom CSS" in admin.
theme/assets/containerize-menu/
  aspose/ - venture folder
    en/ - language folder
      custom.js - headScript - the "Custom Script" field in the menu admin.
```

It is possible to receive files for specified venture and language by the following request https://menu.containerize.com/api/get-menu/[venture]/[language]. View https://wiki.dev.dynabic.com/bin/view/containerize-products/Containerize.Menu/ for more information. 

Use https://git.dev.dynabic.com/containerize-hugo/automation-scripts/-/blob/master/subst_menu.py for automation.