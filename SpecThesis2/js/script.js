$(document).ready(function() {
  // Wrap the module in a self-executing anonymous function
// to avoid leaking variables into global scope:
(function (document) {
    // Enable ECMAScript 5 strict mode within this function:
    'use strict';

    // This function initializes the drag of an element where an
    // event ("mousedown") has occurred:
    function startDrag(evt) {

        // The element's position is based on its top left corner,
        // but the mouse coordinates are inside of it, so we need
        // to calculate the positioning difference:
        var diffX = evt.clientX - this.offsetLeft,
            diffY = evt.clientY - this.offsetTop,
            that = this; // "this" refers to the current element,
                         // let's keep it in cache for later use.

        // moveAlong places the current element (referenced by "that")
        // according to the current cursor position:
        function moveAlong(evt) {
            that.style.left = (evt.clientX - diffX) + 'px';
            that.style.top = (evt.clientY - diffY) + 'px';
        }

        // stopDrag removes event listeners from the element,
        // thus stopping the drag:
        function stopDrag() {
            document.removeEventListener('mousemove', moveAlong);
            document.removeEventListener('mouseup', stopDrag);
        }

        document.addEventListener('mouseup', stopDrag);
        document.addEventListener('mousemove', moveAlong);
    }

    // Performs a check if the current element is draggable and if yes,
    // then the dragging is initiated:
    function startDragIfDraggable(evt) {
        // Check if the target element (referenced by evt.target) contains a
        // class named "draggable" (http://stackoverflow.com/questions/5898656/):
        if (evt.target.classList.contains('draggable')) {
            // Invoke startDrag by passing it the target element as "this":
            startDrag.call(evt.target, evt);
        }
    }

    // Listen for any "mousedown" event on the document.body and attempt dragging
    // the target element (the one where "mousedown" occurred) if it's draggable:
    document.body.addEventListener('mousedown', startDragIfDraggable);

  }
});
