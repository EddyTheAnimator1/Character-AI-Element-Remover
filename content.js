function removeElement() {
  // Targeting the <button> and <p> element containing "This is A.I. and not a real person..."
  const elementByXPath = document.evaluate("//button[contains(@aria-label, 'Common.expand')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  const elementByJSPath = document.querySelector("button[aria-label='Common.expand']");

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
