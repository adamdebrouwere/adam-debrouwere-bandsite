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

const showsHeader = document.createElement("h2");
showsHeader.classList.add("shows__header");
showsHeader.innerText = "Shows";
showsSection.appendChild(showsHeader);

const showsDisplay = document.createElement("div");
showsDisplay.classList.add("shows__display");
showsSection.appendChild(showsDisplay)

const showsHeaderList = document.createElement("ul");
showsHeaderList.classList.add("shows__header-list");

const showsHeaderListItem1 = document.createElement("li");
showsHeaderListItem1.classList.add("shows__header-list-item");
const showsHeaderListItem2 = document.createElement("li");
showsHeaderListItem2.classList.add("shows__header-list-item");
const showsHeaderListItem3 = document.createElement("li");
showsHeaderListItem3.classList.add("shows__header-list-item");

showsHeaderListItem1.innerText = "DATE";
showsHeaderList.appendChild(showsHeaderListItem1);
showsHeaderListItem2.innerText = "VENUE";
showsHeaderList.appendChild(showsHeaderListItem2);
showsHeaderListItem3.innerText = "LOCATION";
showsHeaderList.appendChild(showsHeaderListItem3);

showsDisplay.appendChild(showsHeaderList);

const loopAndAppendShows = (items) => {

  items.forEach((item) => {
    const showsContainer = document.createElement("div");
    showsContainer.classList.add("shows__container");

    const showsContainerTop = document.createElement("div");
    showsContainerTop.classList.add("shows__container-top");

    const showsList = document.createElement("ul");
    showsList.classList.add("shows__list");

    const buyTicketsButton = document.createElement("button");
    buyTicketsButton.classList.add("shows__button");
    buyTicketsButton.innerText = "BUY TICKETS";

    const createListItem = (title, content, isBold = false) => {
      const showsListItem = document.createElement("li");
      showsListItem.classList.add("shows__list-item");

      const showsListItemTitle = document.createElement("h2");
      showsListItemTitle.classList.add("shows__list-item-title");
      showsListItemTitle.innerText = title;

      const showsListItemContent = document.createElement("span");
      showsListItemContent.classList.add("shows__list-item-content");

      if (isBold) {
        showsListItemContent.classList.add("shows__list-item-content--bold");
      }

      showsListItemContent.innerText = content;

      showsListItem.appendChild(showsListItemTitle);
      showsListItem.appendChild(showsListItemContent);

      return showsListItem;
    };

    showsList.appendChild(createListItem("DATE", item.date, true, true));
    showsList.appendChild(createListItem("VENUE", item.venue));
    showsList.appendChild(createListItem("LOCATION", item.location));

    showsContainerTop.appendChild(showsList);
    showsContainerTop.appendChild(buyTicketsButton);
    showsContainer.appendChild(showsContainerTop);

    showsDisplay.appendChild(showsContainer);

    const lineBreak = document.createElement("div");
    lineBreak.classList.add("shows__line-break");
    showsDisplay.appendChild(lineBreak);
  });
};

loopAndAppendShows(shows);
