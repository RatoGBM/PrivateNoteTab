# PrivateNoteTab
A cleaned up version of https://notetab.li/ ([NoteTab Chrome Extension](https://chrome.google.com/webstore/detail/notetab-notepad-in-the-ho/cjnhekhopohdcoojldnnpfmogbljienl)) without the malware. And no custom search engine - you can use your native search engine without anyone watching.

You are free and encouraged to doublecheck my code changes to the original code.

**To correctly install this extension please read [Installing](#installing) section**

### Issues with the original Extension as describe in my comment
It spies on search queries! 

After checking the source code, found multiple privacy concerning features of this extension. 

First of all, it overrides the browsers default search engine with one linked to it's own address (https://notetab.li/search?q={searchTerms}), but then it simply redirects you to bing.com. If I hadn't looked closely at the code, I wouldn't have noticed that that my queries are not going to the search engine directly but are being channeled through a third party.

None of this was explicitly mentioned in the privacy policy, which is something I am very concerned about. Please provide a clear explanation as to why channeling search queries through your own website is necessary, and if it is for the sake of "collecting data to improve the extension", please add an option to opt out of it and send the queries directly to the browsers default search engine.

I deeply apologize for my poor grammar.

I forgot to mention a second potential way the extension is spying. In order to provide previews for bookmarks and websites you recently visited, it sends requests to https://sshot.org. Which means your history is in some for being transmitted to a third party website, which might be logging all of those URLs, which is also very privacy concerning.

Given tokens and other potentially private information is often present within some urls, means that the website has access to your life on the internet to an uncomfortable digree.

## What I did

I used [Chrome Extension source viewer](https://chrome.google.com/webstore/detail/chrome-extension-source-v/jifpbeccnghkjeaalbbjmodiffmgedin) to get the source code, (I am not sure how safe that is though,) so please check and doublecheck.

What I did:
- Because I couldn't figure out a way to get the browsers default search engine, I removed the querry box from the middle of the screen. If you would like it back, uncomment the section of code on Lines 29690-29715, and edit in your search engine of choice on Line 25340 (I put in google). But I recommend using something like the [All In One Web Searcher](https://chrome.google.com/webstore/detail/all-in-one-web-searcher/enofjgiadilpmldfknojklfjbeaooiap) with a keyboard shortcut instead.
- ~~commented out~~ replaced with Google the part where the search query is sent to `https://notetab.li/search?q={searchTerms}` in `newtab.js` (Line 25340) (but the search box is still off)
- commented out the part where a request is sent to `https://sshot.org?url=` in `background.js` (Line 14063)
- Removed default search engine override from `manifest.json`
- Removed permissions to access `sshot.org` from `mainfest.json`
- "Jammed" the "update_url" in `maifest.json` to prevent NoteTab from updating
- Renamed the title of the app to "PrivateNoteTab"
- Removed the Install and uninstall urls

I am REALLY BAD at JavaScript, what I did right now is "cut of the branches", all functions are still being called, but their body is commented out. So if you have a better idea on how to turn of unwanted features at their root, please submitt pull request.

# Installing

You can download the source files from the [releases](https://github.com/RatoGBM/PrivateNoteTab/releases), or zip the repository.

Chromium won't allow you to use an extension that is not from the webstore. (Btw. use [Brave](https://brave.com/), it is better privacy (You can turn off all the Crypto features))

You will have to use **Developer Mode** and **Load unpacked** features to get the extensions to work:
1. Download and unzip this repository wherever you are comportable eg. `~/Documents/MyBrowserExtensions/`
1. Go to Settings->Extensions->(Menage Extensions)
2. Enable Developer toggle on the top right, the option "Load Unpacked" should appear in the top left.
3. Click it, and choose the PrivateNoteTab folder you just unziped.
4. Figure out any popups that appear
5. You should be done, reopen/restart your browser if necessary, and turn on the extension.

Here are other guides I found online on how to do it:
- [Installing chrome extensions Manually](https://www.cnet.com/tech/services-and-software/how-to-install-chrome-extensions-manually/)
- [Installing using Commandline](https://stackoverflow.com/questions/16800696/how-install-crx-chrome-extension-via-command-line)
- [Installing from outside the chrome webstore](https://www.howtogeek.com/120743/how-to-install-extensions-from-outside-the-chrome-web-store/)

If you are experiencing any issues, please create a github issue.
If you have any improvement suggestions, also create an issue, or do it yourself and submit a pull request.

You can contact me dicectly via email: ratogbm@gmail.com
