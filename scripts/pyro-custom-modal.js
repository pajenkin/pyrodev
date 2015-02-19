// Create an immediately invoked functional expression to wrap our code
(function() {

  // Define our constructor
  this.Modal = function() {

    // Create global element references
    this.closeButton = null;
    this.modal = null;
    this.overlay = null;
    this.email = null;
    this.socialMedia = null;

    // Determine proper prefix
    this.transitionEnd = transitionSelect();

    // Define option defaults
    var defaults = {
      className: 'fade-and-drop',
      closeButton: true,
      content: "",
      maxWidth: 600,
      minWidth: 280,
      overlay: true,
      email: true,
      socialMedia: false
    };

    // Create options by extending defaults with the passed in arugments
    if (arguments[0] && typeof arguments[0] === "object") {
      this.options = extendDefaults(defaults, arguments[0]);
    }

  };

  // Public Methods

  Modal.prototype.close = function() {
    var _ = this;
    this.modal.className = this.modal.className.replace(" pyro-modal-open", "");
    this.overlay.className = this.overlay.className.replace(" pyro-modal-open",
      "");
    this.modal.addEventListener(this.transitionEnd, function() {
      _.modal.parentNode.removeChild(_.modal);
    });
    this.overlay.addEventListener(this.transitionEnd, function() {
      if(_.overlay.parentNode) _.overlay.parentNode.removeChild(_.overlay);
    });
  }

  Modal.prototype.open = function() {
    buildOut.call(this);
    initializeEvents.call(this);
    window.getComputedStyle(this.modal).height;
    this.modal.className = this.modal.className +
      (this.modal.offsetHeight > window.innerHeight ?
        " pyro-modal-open pyro-modal-anchored" : " pyro-modal-open");
    this.overlay.className = this.overlay.className + " pyro-modal-open";
  };

  // Private Methods

  function buildOut() {

    var content, contentHolder, docFrag;

    /*
     * If content is an HTML string, append the HTML string.
     * If content is a domNode, append its content.
     */

    if (typeof this.options.content === "string") {
      content = this.options.content;
    } else {
      content = this.options.content.innerHTML;
    }

    // Create a DocumentFragment to build with
    docFrag = document.createDocumentFragment();

    // Create modal element
    this.modal = document.createElement("div");
    this.modal.className = "pyro-modal-modal " + this.options.className;
    this.modal.style.minWidth = this.options.minWidth + "px";
    this.modal.style.maxWidth = this.options.maxWidth + "px";

    // If closeButton option is true, add a close button
    if (this.options.closeButton === true) {
      this.closeButton = document.createElement("button");
      this.closeButton.className = "pyro-modal-close close-button";
      this.closeButton.innerHTML = "close";
      this.modal.appendChild(this.closeButton);
    }

    // If overlay is true, add one
    if (this.options.overlay === true) {
      this.overlay = document.createElement("div");
      this.overlay.className = "pyro-modal-overlay " + this.options.className;
      docFrag.appendChild(this.overlay);
    }

    // If email is true, add one
    // Still Needs work
    if (this.options.email === true){
    	this.email = document.createElement("div");
    	this.email.className = "pyroDev-email " + this.options.className;
    	docFrag.appendChild(this.email);
    }

    // If social Media is true
    if (this.options.socialMedia === true){
    	this.socialMedia = document.createElement("ul");
    	this.socialMedia.className = "pyro-links" + this.options.className;
    	this.socialMedia.innerHTML = '<li><i class="fa fa-github"></i></li>' + 
			'<li><i class="fa fa-linkedin-square"></i></li>' +
			'<li><i class="fa fa-twitter-square"></i></li>';
		docFrag.appendChild(this.socialMedia);
    }

    // Create content area and append to modal
    contentHolder = document.createElement("div");
    contentHolder.className = "pyro-modal-content";
    contentHolder.innerHTML = content;
    this.modal.appendChild(contentHolder);

    // Append modal to DocumentFragment
    docFrag.appendChild(this.modal);

    // Append DocumentFragment to body
    document.body.appendChild(docFrag);

  }

  function extendDefaults(source, properties) {
    var property;
    for (property in properties) {
      if (properties.hasOwnProperty(property)) {
        source[property] = properties[property];
      }
    }
    return source;
  }

  function initializeEvents() {

    if (this.closeButton) {
      this.closeButton.addEventListener('click', this.close.bind(this));
    }

    if (this.overlay) {
      this.overlay.addEventListener('click', this.close.bind(this));
    }

  }

  function transitionSelect() {
    var el = document.createElement("div");
    if (el.style.WebkitTransition) return "webkitTransitionEnd";
    if (el.style.OTransition) return "oTransitionEnd";
    return 'transitionend';
  }

}());