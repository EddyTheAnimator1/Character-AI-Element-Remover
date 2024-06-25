function removeElement() {
  const elementByXPath = document.evaluate("/html/body/div/div/div/main/div/div/div/main/div/div/div[1]/div[3]/p", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  const elementByJSPath = document.querySelector("#__next > div > div > main > div > div > div > main > div > div > div.flex.flex-col.w-full.items-center.flex-1.h-screen > div.flex.w-full.flex-col.max-w-2xl > p");

  if (elementByXPath) {
    elementByXPath.remove();
    console.log("Element removed using XPath.");
  }
  if (elementByJSPath) {
    elementByJSPath.remove();
    console.log("Element removed using JS path.");
  }
}

// Set up a MutationObserver to monitor changes to the body of the document
const observer = new MutationObserver((mutationsList, observer) => {
  for (let mutation of mutationsList) {
    if (mutation.type === 'childList') {
      removeElement();
    }
  }
});

// Start observing the document body for added/removed elements
observer.observe(document.body, {
  childList: true,
  subtree: true
});

// Initial check in case the element is already present
removeElement();
