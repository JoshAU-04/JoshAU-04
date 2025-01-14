/** Initialize matching card events.
 *
 * @description: Casts a shadow over all specifically classified
 *		 cards upon a given array of events.
 *
 * @Usage
 *
 * ```javascript
 * let events = ["mouseover", "mouseleave"];
 * initializeCardEvents(events);
 * ```
 *
 * @deprecated: this is unstable due to the nature of event
 *		handling. Use CSS with HTML (onmouseover,
 *		onmouse...) instead as it's more stable and
 *		performant.
 */
function initializeCardEvents(events) {
    let cards = document.getElementsByClassName('home-card');
    for (let card = 0; card < cards.length; card++) {
	for (let e = 0; e < events.length; e++) {
	    cards[card].addEventListener(events[e], function() {
		this.classList.toggle('shadow-sm');
	    });
	}
    }
}
