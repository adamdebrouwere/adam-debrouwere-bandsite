const showsSection = document.querySelector(".shows");

const showsHeader = document.createElement("h2");
showsHeader.classList.add("shows__header");
showsHeader.innerText = "Shows";
showsSection.appendChild(showsHeader);

const showsDisplay = document.createElement("div");
showsDisplay.classList.add("shows__display");
showsSection.appendChild(showsDisplay);

async function getShowsData() {
  try {
    const showsData = await bandSiteApi.getShows();
    return showsData;
  } catch (error) {
    console.error("Error retrieving shows", error);
  }
}

const loopAndAppendShows = (items) => {
  showsDisplay.innerHTML = "";

  const headerContainer = document.createElement("div");
  headerContainer.classList.add("shows__header-row-container");
  showsDisplay.appendChild(headerContainer);

  const headerRow = document.createElement("ul");
  headerRow.classList.add("shows__header-row");
  headerContainer.appendChild(headerRow);

  const headerDate = document.createElement("li");
  headerDate.classList.add("shows__header-row-item");
  headerDate.innerText = "DATE";
  headerRow.appendChild(headerDate);

  const headerVenue = document.createElement("li");
  headerVenue.classList.add("shows__header-row-item");
  headerVenue.innerText = "VENUE";
  headerRow.appendChild(headerVenue);

  const headerLocation = document.createElement("li");
  headerLocation.classList.add("shows__header-row-item");
  headerLocation.innerText = "LOCATION";
  headerRow.appendChild(headerLocation);

  const dummyBtn = document.createElement("div");
  dummyBtn.classList.add("shows__header-row-dummy-btn");
  headerContainer.appendChild(dummyBtn);

  items.forEach((item, index) => {
    const showsContainer = document.createElement("div");
    showsContainer.classList.add("shows__container");

    const showsContainerTop = document.createElement("div");
    showsContainerTop.classList.add("shows__container-top");    
    const showsList = document.createElement("ul");
    showsList.classList.add("shows__list");

    const createListItem = (title, content, isBold = false) => {
      const showsListItem = document.createElement("li");
      showsListItem.classList.add("shows__list-item");

      const showsListItemTitle = document.createElement("h2");
      showsListItemTitle.classList.add("shows__list-item-title");
      showsListItemTitle.innerText = title;

      const showsListItemContent = document.createElement("span");
      showsListItemContent.classList.add("shows__list-item-content");
      showsListItemContent.innerText = content;

      if (isBold) {
        showsListItemContent.classList.add("shows__list-item-content--bold");
      }


      showsListItem.appendChild(showsListItemTitle);
      showsListItem.appendChild(showsListItemContent);

      return showsListItem;
    };

    const date = new Date(item.date);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };

    showsList.appendChild(
      createListItem("DATE", date.toLocaleString(undefined, options), true)
    );
    showsList.appendChild(createListItem("VENUE", item.place, false));
    showsList.appendChild(createListItem("LOCATION", item.location, false));

    const lineBreak = document.createElement("div");
    lineBreak.classList.add("shows__line-break");

    const buyTicketsButton = document.createElement("button");
    buyTicketsButton.classList.add("shows__button");
    buyTicketsButton.innerText = "BUY TICKETS";

    showsContainerTop.appendChild(showsList);
    showsContainerTop.appendChild(buyTicketsButton);
    showsContainer.appendChild(showsContainerTop);
    showsDisplay.appendChild(showsContainer);
    showsDisplay.appendChild(lineBreak);
  });
};

let selected = null;
showsDisplay.addEventListener("click", (event) => {
  const clicked = event.target.closest(".shows__container-top");
  const clicked = event.target.closest(".shows__container-top");

  if (clicked) {
    if (selected) {
      selected.classList.remove("shows__container-top--darken");
    }

    clicked.classList.add("shows__container-top--darken");

    selected = clicked;
  }
});

document.addEventListener("click", (event) => {
  if (selected && !event.target.closest(".shows__container-top")) {
  if (selected && !event.target.closest(".shows__container-top")) {
    selected.classList.remove("shows__container-top--darken");
    selected = null;
  }
});
});
async function displayShows() {
  const showsData = await getShowsData();
  loopAndAppendShows(showsData);
}

displayShows();
