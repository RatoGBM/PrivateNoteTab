# PrivateNoteTab
A cleaned up version of https://notetab.li/ without the malware. And no custom search engine - you can use your native search engine without anyone watching.

### Issues with the original Extension as describe in my comment
It spies on search queries! 

After checking the source code, found multiple privacy concerning features of this extension. 

First of all, it overrides the browsers default search engine with one linked to it's own address (https://notetab.li/search?q={searchTerms}), but then it simply redirects you to bing.com. If I hadn't looked closely at the code, I wouldn't have noticed that that my queries are not going to the search engine directly but are being channeled through a third party.

None of this was explicitly mentioned in the privacy policy, which is something I am very concerned about. Please provide a clear explanation as to why channeling search queries through your own website is necessary, and if it is for the sake of "collecting data to improve the extension", please add an option to opt out of it and send the queries directly to the browsers default search engine.

I deeply apologize for my poor grammar.

I forgot to mention a second potential way the extension is spying. In order to provide previews for bookmarks and websites you recently visited, it sends requests to https://sshot.org. Which means your history is in some for being transmitted to a third party website, which might be logging all of those URLs, which is also very privacy concerning.

Given tokens and other potentially private information is often present within some urls, means that the website has access to your life on the internet to an uncomfortable digree.
