function removeElement() {
  // Using XPath to find the element
  const xpath = "/html/body/div/div/div/main/div/div/div/main/div/div/div[1]/div[3]/p";
  const xpathResult = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
  const elementByXPath = xpathResult.singleNodeValue;

  // Using JS path to find the element
  const elementByJSPath = document.querySelector("#__next > div > div > main > div > div > div > main > div > div > div.flex.flex-col.w-full.items-center.flex-1.h-screen > div.flex.w-full.flex-col.max-w-2xl > p");

  // Check and remove the element if found
  if (elementByXPath) {
    elementByXPath.remove();
    console.log("Element removed using XPath.");
  } else if (elementByJSPath) {
    elementByJSPath.remove();
    console.log("Element removed using JS path.");
  } else {
    console.log("Element not found, checking again in 1 second...");
    setTimeout(removeElement, 1000);
  }
}

// Start checking for the element when the content script is loaded
removeElement();
