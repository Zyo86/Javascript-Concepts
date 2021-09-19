// Event bubbling exist hence event Delegation exists

// So many event handlers hanging around in our webpage causes performace bottleneck

//Attaching so many event listenersis not a good idea, mainly when implementing infinite scroll or larger app

// Attach only single event listener to the parent, so that due to event Bubbling this event listener is invoked no matter which child element is clicked

document.querySelector('#categories').addEventListener(
  'click',
  (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
    console.log(
      'Event bubbled to parent and clicked categories, event bubbling happened!!!'
    );
  },
  false /**false represents useCapture value, useCapture true indicated event capturing */
);

document.querySelector('#form').addEventListener('keyup', (e) => {
  console.log(e);
  if (e.target.dataset.uppercase != undefined) {
    e.target.value = e.target.value.toUpperCase();
  }
});

// Benefits of Event Delegation
// 1> Memory - Less no of event handlers to be attchaed, also mitigates performace bottleneck
// 2> Less code
// 3> DOM Manipulation - Attaching to parent and it makes it easier for us to implement infinite scroll

// Limitation of event bubbling
// 1> All the events are not bubbled up -> Resize, Focus, Blur, Scroll are not bubbled up, they have their own risk of event bubbling
// 2> Won't be able to use stopPropogation for event to bubble up
