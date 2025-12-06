export namespace Dom {
  export function addEventToElement(eventName: string, elementId: string, callback: (event: Event) => void) {

    const element = document.getElementById(elementId);

    if (element) {
      element.addEventListener(eventName, callback);
    }
  }


  export function clearHTML(containerId: string) {

    injectHTML(containerId, "");
  }


  export function injectHTML(containerId: string, content: string) {

    const container = document.getElementById(containerId);

    if (container) {
      container.innerHTML = content;
    }
  }


  export function setAttributeOnElement(elementId: string, attribute: string, value: string) {

    const element = document.getElementById(elementId);

    if (element) {
      element.setAttribute(attribute, value);
    }
  }


  export function setClassOnElement(elementId: string, newClass: string) {

    const element = document.getElementById(elementId);

    if (element) {
      element.className = newClass;
    }
  }


  export function toggleAttributeOnElement(elementId: string, attribute: string) {

    const element = document.getElementById(elementId);

    if (element) {
      element.toggleAttribute(attribute);
    }
  }


  export function toggleCSSClassOnElement(elementId: string, className: string) {

    document.getElementById(elementId)?.classList.toggle(className);
  }
}
