const copyButtonLabel = "Copy code";

async function copyCode(block, button) {
  let code = block.querySelector("code");
  let text = code.innerText;

  await navigator.clipboard.writeText(text);

  button.innerText = "Code Copied!";
  setTimeout(() => {
    button.innerText = copyButtonLabel;
  }, 1000)
}

jQuery(document).ready(function ($) {
  var mastheadheight = $(".ds-header").outerHeight();
  //console.log(mastheadheight);
  $(".ds-banner,.ds-main-section").css("margin-top", mastheadheight);

  $(window)
    .scroll(function () {
      if ($(window).scrollTop() >= 10) {
        $(".ds-header").addClass("ds-fixed-header");
      } else {
        $(".ds-header").removeClass("ds-fixed-header");
      }
    })
    .scroll();

  $('#read-more-button').click(() => {
    if ($('#read-more-button')[0].classList?.contains('collapsed')) {
      window.location.replace('#aboutMe')
    }
  })

  const pre = [...$('.ds-work-content-sec pre')]

  pre.forEach((block) => {
    // only add button if browser supports Clipboard AP
    console.log(navigator)
    if (navigator.clipboard) {
      let button = document.createElement("button");

      button.classList.add('ds-button')
      button.classList.add('bs-button')

      button.innerText = copyButtonLabel;
      block.appendChild(button);

      button.addEventListener("click", async () => {
        await copyCode(block, button);
      });
    }
  });

});
