gsap.to("#sj-header #coverup", {
  duration: 2,
  top: "-120%",
});

$("#sj-header #content h1").textillate({
  minDisplayTime: 1000,
  initialDelay: 1000,
  in: { effect: "fadeInUp", delay: 50 },
});

var menu = gsap.timeline();
var sidebar = gsap.timeline();
menu
  .from("#sj-header #nav i", {
    transform: "rotate(180deg)",
    duration: 1.5,
    delay: 3.5,
  })
  .from("#sj-header #sidebar", {
    x: 50,
    duration: 2,
  });
document.querySelector("body").addEventListener("mousemove", function (dets) {
  function cur() {
    document.querySelector("#cursor").style.top = `${dets.clientY}px`;
    document.querySelector("#cursor").style.left = `${dets.clientX}px`;
    document.querySelector("#cursor1").style.top = `${dets.clientY}px`;
    document.querySelector("#cursor1").style.left = `${dets.clientX}px`;
  }
  window.requestAnimationFrame(cur);
});

gsap.from("#wheel", {
  duration: 5,
  rotate: "360deg",
  repeat: -4,
  ease: "linear",
});

document.querySelectorAll(".sj-main #content").forEach(function (elem) {
  elem.addEventListener("mousemove", function () {
    document.querySelector("#cursor1").style.display = "initial";
    document.querySelector("#cursor").style.display = "none";
    document.querySelector("#cursor1").style.mixBlendMode = "difference";
  });
  elem.addEventListener("mouseleave", function () {
    document.querySelector("#cursor1").style.display = "none";
    document.querySelector("#cursor").style.display = "initial";
  });
});

var body = document.querySelector("body");
var main1 = document.querySelector("#smain1 #content");
var main2 = document.querySelector("#smain2 #content");
var main3 = document.querySelector("#smain3 #content");
var main4 = document.querySelector("#smain4 #content");
var main5 = document.querySelector("#smain5 #content");
var main6 = document.querySelector("#smain6 #content");
var main7 = document.querySelector("#smain7 #content");
var main8 = document.querySelector("#smain8 #content");
var main9 = document.querySelector("#smain9 #content");
main1.addEventListener("mouseover", function () {
  // document.querySelector("#sj-header #content").style.backgroundColor = "rgb(255, 199, 44)";
  body.style.backgroundColor = "rgb(255, 199, 44)";
});
main1.addEventListener("mouseout", function () {
  body.style.backgroundColor = "transparent";
  // document.querySelector("#sj-header #content").style.backgroundColor = "white";
});
main2.addEventListener("mouseover", function () {
  body.style.backgroundColor = "rgb(236, 83, 59)";
  main2.style.color = "white";
});
main2.addEventListener("mouseout", function () {
  body.style.backgroundColor = "transparent";
  main2.style.color = "black";
});
main3.addEventListener("mouseover", function () {
  body.style.backgroundColor = "rgb(6, 87, 162)";
  main3.style.color = "white";
});
main3.addEventListener("mouseout", function () {
  body.style.backgroundColor = "transparent";
  main3.style.color = "black";
});
main4.addEventListener("mouseover", function () {
  body.style.backgroundColor = "rgb(18, 19, 20)";
  main4.style.color = "white";
});
main4.addEventListener("mouseout", function () {
  body.style.backgroundColor = "transparent";
  main4.style.color = "black";
});
main5.addEventListener("mouseover", function () {
  body.style.backgroundColor = "rgb(7, 20, 33)";
  main5.style.color = "white";
});
main5.addEventListener("mouseout", function () {
  body.style.backgroundColor = "transparent";
  main5.style.color = "black";
});
main6.addEventListener("mouseover", function () {
  body.style.backgroundColor = "rgb(133, 190, 226)";
});
main6.addEventListener("mouseout", function () {
  body.style.backgroundColor = "transparent";
});
main7.addEventListener("mouseover", function () {
  body.style.backgroundColor = "rgb(0, 59, 73)";
  main7.style.color = "white";
});
main7.addEventListener("mouseout", function () {
  body.style.backgroundColor = "transparent";
  main7.style.color = "black";
});
main8.addEventListener("mouseover", function () {
  body.style.backgroundColor = "rgb(234, 115, 51)";
});
main8.addEventListener("mouseout", function () {
  body.style.backgroundColor = "transparent";
});
main9.addEventListener("mouseover", function () {
  body.style.backgroundColor = "rgb(255, 63, 33)";
  document.querySelector("#sj-footer").style.color = "white";
  document.querySelector("#sj-footer #footer").style.backgroundColor =
    "rgb(255, 63, 33)";
  document.querySelector("#sj-footer #content #txt").style.backgroundColor =
    "transparent";
  document.querySelector("#sj-footer #content h1").style.backgroundColor =
    "transparent";
});
main9.addEventListener("mouseout", function () {
  body.style.backgroundColor = "transparent";
  document.querySelector("#sj-footer").style.color = "black";
  document.querySelector("#sj-footer #footer").style.backgroundColor = "white";
  document.querySelector("#sj-footer #content #txt").style.backgroundColor =
    "white";
  document.querySelector("#sj-footer #content h1").style.backgroundColor =
    "white";
});
var text = gsap.timeline();
text.to("#sj-footer #content #right div", {
  duration: 10,
  top: "-950%",
  ease: "linear",
  repeat: -1,
});

document.querySelectorAll(".enlarge").forEach(function (elem) {
  elem.addEventListener("mousemove", function () {
    document.querySelector("#cursor").style.width = "60px";
    document.querySelector("#cursor").style.height = "60px";
    document.querySelector("#cursor").style.backgroundColor = "white";
    document.querySelector("#cursor").style.mixBlendMode = "difference";
    // document.querySelector("#cursor").style.borderWidth = "0px";
  });
  elem.addEventListener("mouseleave", function () {
    document.querySelector("#cursor").style.width = "20px";
    document.querySelector("#cursor").style.height = "20px";
    document.querySelector("#cursor").style.backgroundColor = "transparent";
    document.querySelector("#cursor").style.mixBlendMode = "initial";
    // document.querySelector("#cursor").style.borderWidth = "3px";
  });
});

document
  .querySelector("#sj-footer #content #circle")
  .addEventListener("mousemove", function (dets) {
    document.querySelector("#cursor").style.width = "80px";
    document.querySelector("#cursor").style.height = "80px";
    document.querySelector(
      "#sj-footer #content #circle"
    ).style.transform = `translate(${dets.clientX * 0.2}px,${
      dets.clientY * 0.15
    }px)`;
    document.querySelector("#sj-footer #content #circle").style.height =
      "170px";
    document.querySelector("#sj-footer #content #circle").style.width = "170px";
    document.querySelector("#cursor").style.backgroundColor = "white";
    document.querySelector("#cursor").style.mixBlendMode = "difference";
    document.querySelector("#cursor").style.borderWidth = "0px";
  });
document
  .querySelector("#sj-footer #content #circle")
  .addEventListener("mouseleave", function (dets) {
    document.querySelector("#cursor").style.width = "20px";
    document.querySelector("#cursor").style.height = "20px";
    document.querySelector(
      "#sj-footer #content #circle"
    ).style.transform = `translate(0px,0px)`;
    document.querySelector("#sj-footer #content #circle").style.width = "150px";
    document.querySelector("#sj-footer #content #circle").style.height =
      "150px";
    document.querySelector("#cursor").style.backgroundColor = "transparent";
    document.querySelector("#cursor").style.mixBlendMode = "initial";
    document.querySelector("#cursor").style.borderWidth = "3px";
  });
