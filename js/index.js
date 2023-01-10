gsap.registerPlugin(MotionPathPlugin);

gsap.defaults({ease: 'none'});
const trainModules = document.querySelectorAll('.js-train');
const trainTimeline = gsap.timeline();
trainModules.forEach((module, index) => {
    gsap.from(module, {
        motionPath: {
            path: '#rail-path',
            align: '#rail-path',
            alignOrigin: [0.5, 1],
            autoRotate: true,
        },
        duration: 10,
        repeat: -1,
        delay: 0.3 * (index + 1)
    })
});
