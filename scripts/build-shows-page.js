let shows = [
  {
    date: "Mon Sept 09 2024",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 17 2024",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Oct 12 2024",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 16 2024",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 29 2024",
    venue: "Moscot Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 18 2024",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

const showsSection = document.querySelector(".shows");

const loopAndAppendShows = (items) => {
  
  items.forEach((item) => {
    
    const showsContainer = document.createElement("div");
    showsContainer.classList.add("shows__container");
    const showsContainerTop = document.createElement("div");
    showsContainerTop.classList.add("shows__container-top");

    const showsList = document.createElement("ul");
    showsList.classList.add("shows__list");

    const showsListItem = document.createElement("li");
    showsListItem.classList.add("shows__list-item");

    const showsDateTitle = document.createElement("h2");
    showsDateTitle.classList.add("shows__date-title");
    showsDateTitle.innerText = "DATE";

    const listItemDate = document.createElement("span");
    listItemDate.classList.add("shows__list-item-contnet--bold");
    listItemDate.innerText = item.date;

    const showsVenueTitle = document.createElement("h2");
    showsVenueTitle.classList.add("shows__venue-title");
    showsVenueTitle.innerText = "VENUE";

    const listItemVenue = document.createElement("span");
    listItemVenue.classList.add("shows__list-item-content");
    listItemVenue.innerText = item.venue;

    const showsLocationTitle = document.createElement("h2");
    showsLocationTitle.classList.add("shows__location-title");
    showsLocationTitle.innerText = "LOCATION";

    const listItemLocation = document.createElement("span");
    listItemLocation.classList.add("shows__list-item-content");
    listItemLocation.innerText = item.location;

    const buyTicketsButton = document.createElement("button");
    buyTicketsButton.classList.add("shows__button-buy-tickets");
    buyTicketsButton.innerText = "BUY TICKETS";

    const lineBreak = document.createElement("div");
    lineBreak.classList.add("shows__line-break");

    showsSection.appendChild(showsContainer);
    showsContainer.appendChild(showsContainerTop);
    showsContainerTop.appendChild(showsList);
    showsList.appendChild(showsListItem);
    showsListItem.appendChild(showsDateTitle);
    showsListItem.appendChild(listItemDate);

    showsListItem.appendChild(showsVenueTitle)
    showsListItem.appendChild(listItemVenue)
    showsListItem.appendChild(showsLocationTitle)
    showsListItem.appendChild(listItemLocation)

    showsSection.appendChild(lineBreak);
  });
};

loopAndAppendShows(shows);
