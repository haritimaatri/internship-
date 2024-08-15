document.getElementById('event-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const eventName = document.getElementById('event-name').value;
    const eventDate = document.getElementById('event-date').value;
    const eventLocation = document.getElementById('event-location').value;
    const eventImage = document.getElementById('event-image').value;
    
    const eventList = document.getElementById('event-list');
    
    const newEvent = document.createElement('div');
    newEvent.classList.add('event');
    
    const img = document.createElement('img');
    img.src = eventImage;
    img.alt = eventName;
    
    const eventDetails = document.createElement('div');
    eventDetails.classList.add('event-details');
    
    const h3 = document.createElement('h3');
    h3.textContent = eventName;
    
    const dateP = document.createElement('p');
    dateP.textContent = `Date: ${eventDate}`;
    
    const locationP = document.createElement('p');
    locationP.textContent = `Location: ${eventLocation}`;
    
    eventDetails.appendChild(h3);
    eventDetails.appendChild(dateP);
    eventDetails.appendChild(locationP);
    
    newEvent.appendChild(img);
    newEvent.appendChild(eventDetails);
    
    eventList.appendChild(newEvent);
    
    document.getElementById('event-form').reset();
});
