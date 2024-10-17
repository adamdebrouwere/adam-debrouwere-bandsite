// let shows = [
//   {
//     date: "DATE",
//     venue: "VENUE",
//     location: "LOCATION",
//   },
//   {
//     date: "Mon Sept 09 2024",
//     venue: "Ronald Lane",
//     location: "San Francisco, CA",
//   },
//   {
//     date: "Tue Sept 17 2024",
//     venue: "Pier 3 East",
//     location: "San Francisco, CA",
//   },
//   {
//     date: "Sat Oct 12 2024",
//     venue: "View Lounge",
//     location: "San Francisco, CA",
//   },
//   {
//     date: "Sat Nov 16 2024",
//     venue: "Hyatt Agency",
//     location: "San Francisco, CA",
//   },
//   {
//     date: "Fri Nov 29 2024",
//     venue: "Moscot Center",
//     location: "San Francisco, CA",
//   },
//   {
//     date: "Wed Dec 18 2024",
//     venue: "Press Club",
//     location: "San Francisco, CA",
//   },
// ];

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

  const isMobile = window.innerWidth < 768;

  let selected = null;


  items.forEach((item, index) => {
    const showsContainer = document.createElement("div");
    showsContainer.classList.add("shows__container");

    const showsContainerTop = document.createElement("div");
    showsContainerTop.classList.add("shows__container-top");

    showsContainerTop.addEventListener("click", () => {
      if (
        selected
      ) {
        showsContainerTop.classList.remove("shows__container-top--darken");
      } else {
        showsContainerTop.classList.add("shows__container-top--darken");
        selected = showsContainerTop;
      }
    });

    const showsList = document.createElement("ul");
    showsList.classList.add("shows__list");

    const createListItem = (
      title,
      content,
      isBold = false,
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

      return showsListItem;
    };

    
      showsList.appendChild(
        createListItem("DATE", item.date, true)
      );
      showsList.appendChild(
        createListItem("VENUE", item.place, false)
      );
      showsList.appendChild(
        createListItem(
          "LOCATION",
          item.location,
          false
        )
      );

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

async function displayShows() {
  const showsData = await getShowsData();
  loopAndAppendShows(showsData);
}

displayShows()

window.addEventListener("resize", () => {
  loopAndAppendShows(shows);
});
