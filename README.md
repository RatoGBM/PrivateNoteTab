# PrivateNoteTab
A cleaned up version of https://notetab.li/ ([NoteTab Chrome Extension](https://chrome.google.com/webstore/detail/notetab-notepad-in-the-ho/cjnhekhopohdcoojldnnpfmogbljienl)) without the malware. And no custom search engine - you can use your native search engine without anyone watching.

You are free and encouraged to doublecheck my code changes to the original code.

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
- commented out the part where the search query is sent to `https://notetab.li/search?q={searchTerms}` in `newtab.js` (Line 25340)
- commented out the part where a request is sent to `https://sshot.org?url=` in `background.js` (Line 14063)
- Removed default search engine override from `manifest.json`
- Removed permissions to access `sshot.org` from `mainfest.json`
- "Jammed" the "update_url" in `maifest.json` to prevent NoteTab from updating
- Renamed the title of the app to "PrivateNoteTab"

I am REALLY BAD at JavaScript, what I did right now is "cut of the branches", all functions are still being called, but their body is commented out. So if you have a better idea on how to turn of unwanted features at their root, please submitt pull request.