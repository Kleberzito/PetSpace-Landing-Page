gsap.registerPlugin(MotionPathPlugin);

const circlePath = MotionPathPlugin.convertToPath("#holder", false)[0];
circlePath.id = "circlePath";
document.querySelector("svg").prepend(circlePath);

let items = gsap.utils.toArray(".item"),
    numItems = items.length,
    itemStep = 1 / numItems,
    wrapProgress = gsap.utils.wrap(0, 1),
    snap = gsap.utils.snap(itemStep),
    wrapTracker = gsap.utils.wrap(0, numItems),
    tracker = { item: 0 };

gsap.set(items, { 
    motionPath: {
        path: circlePath,
        align: circlePath,
        alignOrigin: [0.5, 0.5],
        end: i => i / items.length
    }, 
    scale: 0.9 
});

const tl = gsap.timeline({ paused:true, reversed: true });

tl.to('.wrapper', {
    rotation: 360, 
    transformOrigin: 'center', 
    duration: 1, 
    ease: 'none'
});

tl.to(items, {
    rotation: "-=360", 
    transformOrigin: 'center', 
    duration: 1, 
    ease: 'none',
    }, 0);

    tl.to(tracker, {
    item: numItems,
    duration: 1, 
    ease: 'none',
    modifiers: {
        item(value) {
        return wrapTracker(numItems - Math.round(value))
        }
    }
}, 0);

items.forEach(function (el, i) {
    el.addEventListener("click", function () {
        var current = tracker.item,
            activeItem = i;

        if (i === current) return;

    document.querySelector('.item.active').classList.remove('active');
    items[activeItem].classList.add('active');

    var diff = current - i;

    if (Math.abs(diff) < numItems / 2) {
      moveWheel(diff * itemStep);
    } else {
        var amt = numItems - Math.abs(diff);
        if (current > i) {
            moveWheel(amt * -itemStep);
        } else {
            moveWheel(amt * itemStep);
        }
        }
    });
});

gsap.set(items, { 
    motionPath: {
        path: circlePath,
        align: circlePath,
        alignOrigin: [0.5, 0.5],
        end: i => i / items.length
    }, 
    scale: 0.9
});

gsap.to(".wrapper", {
    rotation: 360,
    transformOrigin: "50% 50%", // centro exato
    duration: 20,
    ease: "linear",
    repeat: -1
});

gsap.to(items, {
    rotation: "-=360",
    transformOrigin: "50% 50%", // centro exato
    duration: 20,
    ease: "linear",
    repeat: -1
});