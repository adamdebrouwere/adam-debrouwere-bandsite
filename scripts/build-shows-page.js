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
const showsColumnHeaderList = document.querySelector(".shows__column-header-list");

const loopAndAppendShows = (items) => {
    const showsHeader = document.createElement("h2");
    showsHeader.classList.add("shows__header");
    showsHeader.innerText = "Shows";

    const showsColumnHeaderList = document.createElement("ul");
    showsColumnHeaderList.classList.add("shows__column-headers");
    
    items.forEach((item) => {
    

    const showsContainer = document.createElement("div");
    showsContainer.classList.add("shows__container");

    const showsContainerTop = document.createElement("div");
    showsContainerTop.classList.add("shows__container-top");

    const showsList = document.createElement("ul");
    showsList.classList.add("shows__list");

    const createListItem = (
      title,
      content,
      isBold = false,
      // isFirst = false
    ) => {
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

      // if (isFirst) {
      //   showsListItem.classList.add("shows__list-item--first");
      // }

      return showsListItem;
    };
    

    showsList.appendChild(createListItem("DATE", item.date, true, true));
    showsList.appendChild(createListItem("VENUE", item.venue));
    showsList.appendChild(createListItem("LOCATION", item.location));

    // showsColumnHeaderList.appendChild(createListItem("DATE", " "));
    // showsColumnHeaderList.appendChild(createListItem("VENUE", " "));
    // showsColumnHeaderList.appendChild(createListItem("LOCATION", ""));

    const buyTicketsButton = document.createElement("button");
    buyTicketsButton.classList.add("shows__button");
    buyTicketsButton.innerText = "BUY TICKETS";

    showsContainerTop.appendChild(showsList);
    showsContainerTop.appendChild(buyTicketsButton);
    showsContainer.appendChild(showsContainerTop);

    // showsSection.appendChild(showsHeader);
    showsSection.appendChild(showsColumnHeaderList);
    showsSection.appendChild(showsContainer);
    
    const lineBreak = document.createElement("div");
    lineBreak.classList.add("shows__line-break");
    showsSection.appendChild(lineBreak);
  });
};

loopAndAppendShows(shows);
