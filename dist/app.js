(function () {
  document.documentElement.classList.add("js");

  const content = window.CAMPAIGN_CONTENT;
  if (!content) return;

  const escapeHtml = (value) =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const highlights = document.querySelector("[data-highlights]");
  if (highlights) {
    const selected = content.commitments.filter((item) => item.highlight);
    highlights.innerHTML = selected
      .map(
        (item, index) => `
          <article class="commitment-card reveal">
            <span class="commitment-number" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
            <p class="commitment-time">${escapeHtml(item.horizon)}</p>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${item.benefit}</p>
          </article>`,
      )
      .join("");
  }

  const team = document.querySelector("[data-team]");
  if (team) {
    team.innerHTML = content.team
      .map(
        (member, index) => `
          <article class="team-card${member.lead ? " team-card-lead" : ""} reveal">
            
            <img src="./assets/images/${member.image}" alt="Foto de ${escapeHtml(member.name)}" style="aspect-ratio: 4 / 5; object-fit: cover; object-position: top center; width: 100%; margin-bottom: 1rem; border-radius: 4px; display: block;">
            <div class="team-card-content" style="display: flex; flex-direction: column; justify-content: flex-start; flex-grow: 1;"><div class="team-card-top">
              <span class="team-initials" aria-hidden="true">${escapeHtml(member.initials)}</span>
              <span class="team-index" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
            </div>
            <div class="team-card-copy">
              <p class="team-role">${escapeHtml(member.role)}</p>
              <h3>${escapeHtml(member.name)}</h3>
              <p class="team-focus">${member.focus}</p>
            </div>
          </div></article>`,
      )
      .join("");
  }

  const program = document.querySelector("[data-program]");
  if (program) {
    program.innerHTML = content.axes
      .map((axis, axisIndex) => {
        const items = content.commitments.filter((item) => item.axis === axis);
        return `
          <section class="program-axis reveal" aria-labelledby="axis-${axisIndex}">
            <div class="axis-heading">
              <span>${String(axisIndex + 1).padStart(2, "0")}</span>
              <div>
                <p class="eyebrow">Eje de trabajo</p>
                <h2 id="axis-${axisIndex}">${escapeHtml(axis)}</h2>
              </div>
              <p class="axis-count">${items.length} ${items.length === 1 ? "propuesta" : "propuestas"}</p>
            </div>
            <div class="accordion-list">
              ${items
                .map(
                  (item, itemIndex) => `
                    <details class="program-item" ${axisIndex === 0 && itemIndex === 0 ? "open" : ""}>
                      <summary>
                        <span class="program-title">${escapeHtml(item.title)}</span>
                        <span class="program-horizon">${escapeHtml(item.horizon)}</span>
                        <span class="accordion-icon" aria-hidden="true"></span>
                      </summary>
                      <div class="program-body">
                        <p>${item.benefit}</p>
                        
                      </div>
                    </details>`,
                )
                .join("")}
            </div>
          </section>`;
      })
      .join("");
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealItems = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    revealItems.forEach((item) => observer.observe(item));
  }
})();
