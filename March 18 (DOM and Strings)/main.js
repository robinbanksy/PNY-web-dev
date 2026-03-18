
const cards = document.querySelectorAll(".card");

function init() {
    let i = 1;
    cards.forEach((card) => {
        card.classList.remove("active");
        card.style.viewTransitionName = `card${i}`;
        console.log(`Initialized card${i}`);
        card.addEventListener("click", handleClick);
        i++;
    });
}

init();

function handleClick(e) {
  if (!document.startViewTransition) {
    console.log("This browser doesn't support View Transitions");
    return;
  }

  const displayCard = (target) => {
    const card = target.closest(".card");
    if (!card) return;

    for (const c of cards) {
      if (c !== card) {
        c.classList.remove("active");
      }
    }

    card.classList.toggle("active");
  }

  // With a View Transition:
  document.startViewTransition(() => displayCard(e.target));
}