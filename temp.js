// ==UserScript==
// @name         Soundcloud Tweaks
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  asd
// @author       Odpe
// @match        https://soundcloud.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=soundcloud.com
// @grant        none
// ==/UserScript==

const style = document.createElement('style');
style.textContent = `
    .tweak-element {
        display: none;
    }

    /* reverse playlists */
    .trackList__list {
        display: flex;
        flex-direction: column-reverse;
    }

    /* remove header promotions */
    div.header__upsellWrapper.left {
        display: none;
    }
    /* remove artist tools */
    div.sidebarModule {
        display: none;
    }

    /* remove header artist buttons */
    .header__forArtistsButton {
        display: none !important;
    }
    .header__soundInput {
        display: none;
    }

    /* remove home on the toolbar since the soundcloud logo links to home anyways */
    a[data-menu-name="home"] {
        display: none !important;
    }

    /* remove language changer */
    .localeSelector {
        display: none;
    }

    /* blur popup background */
    .modal {
        background-color: rgba(0, 0, 0, .5) !important;
        backdrop-filter: blur(var(--blur-amount));
    }

    /* animate bottom control bar progress bar */
    .playbackTimeline__progressBar {
        transition: width .1s ease-out;
    }
    .playbackTimeline__progressHandle {
        transition: left .1s ease-out;
    }
    /* progress bar circle fill color */
    .playbackTimeline__progressHandle {
        background-color: rgb(from var(--theme-color) r g b / 1);
    }

    /* the fans page on tracks are separate html documents
    this means that their background cannot be made to match the overall document's background
    uncomment to hide the fans page */
    /*
    .mui-theme-dark {
        display: none;
    }
    */
    
    .theme-dark {
        .tweak__background__gradient {
            background: var(--old-gradient);
            filter: brightness(0.2);
            position: fixed;
            width: 100vw;
            height: 100vh;
            inset: 0;
            z-index: -1;
            pointer-events: none;
        }
        .tweak__background__gradient::before {
            content: "";
            background: var(--new-gradient);
            position: absolute;
            inset: 0;
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
        }
        .tweak__background__gradient.fade::before {
            opacity: 1;
        }

        /* waveform and creator badge color */
        .waveform__scene canvas:not(.waveformCommentsNode),
        .creatorBadge {
            filter: hue-rotate(var(--theme-hue-rotate));
        }

        /* artist liked comment color */
        .creatorLikeInlineLikeIcon {
            color: var(--special-color);
        }

        --surface-color: rgba(0, 0, 0, 0.5);
        --background-surface-color: black;
        --special-color: rgb(from var(--theme-color) r g b / 1);
        --font-special-color: rgb(from var(--theme-color) r g b / 1);

        --input-default-background-color: rgba(255, 255, 255, .075);

        --button-special-background-color: rgb(from var(--theme-color) r g b / 1);

        --button-tertiary-selected-font-color: rgb(from var(--theme-color) r g b / 1);
        --button-tertiary-selected-active-font-color: rgb(from var(--theme-color) r g b / 1);
        --button-tertiary-selected-hover-font-color: rgb(from var(--theme-color) r g b / 0.5);

        --button-secondary-selected-font-color: rgb(from var(--theme-color) r g b / 1);
        --button-secondary-selected-active-font-color: rgb(from var(--theme-color) r g b / 1);
        --button-secondary-selected-hover-font-color: rgb(from var(--theme-color) r g b / 0.5);

        --toggle-on-body-color: rgb(from var(--theme-color) r g b / 1);
        --toggle-on-body-hover-color: rgb(from var(--theme-color) r g b / 1);

        --checkbox-checked-background-color: rgb(from var(--theme-color) r g b / 1);
        --checkbox-checked-border-color: rgb(from var(--theme-color) r g b / 1);

        --button-secondary-background-color: rgba(255, 255, 255, .08);
        /* hover color for playlist items */
        .trackItem.hover {
            background-color: rgba(255, 255, 255, .08)
        }
        /* hover button colors for playlist items */
        .trackItem__actions [class^="sc-button-"] {
            background-color: transparent;
        }

        /* blur bottom control bar */
        .playControls__inner {
            background-color: rgba(255, 255, 255, .05);
            backdrop-filter: blur(var(--blur-amount));
            filter: drop-shadow(0 -.4em .4em rgba(0, 0, 0, .2));
            border: 1px rgba(255, 255, 255, .1);
            border-style: solid none none none;
        }
        .playControls button:not(.playControls__play),
        .playControls a {
            background-color: transparent !important;
        }
        /* blur volume slider background */
        .volume__sliderWrapper {
            backdrop-filter: blur(var(--blur-amount));
        }

        /* blur top header */
        .header {
            background-color: rgba(0, 0, 0, .75) !important;
            backdrop-filter: blur(var(--blur-amount));
            filter: drop-shadow(0 .4em .4em rgba(0, 0, 0, .2));
        }

        /* blur dropdowns */
        .dropdownMenu,
        .linkMenu {
            backdrop-filter: blur(var(--blur-amount));
        }
        /* Next Up background fix */
        .queue__itemsHeight {
            background-image: none;
        }
        .queue__itemWrapper {
            background-color: transparent;
        }
        .playControls__queue {
            backdrop-filter: blur(var(--blur-amount));
        }

        /* blur account popup */
        .dialog.sc-border-box.sc-p-2x.sc-text-secondary.g-z-index-overlay.rounded.dialog__centertop {
            backdrop-filter: blur(var(--blur-amount));
        }
        /* fix diamond */
        .dialog__arrow {
            backdrop-filter: blur(4px);
            background-color: transparent;
        }

        /* fix track More dropdown background */
        .moreActions__group * {
            background-color: transparent;
        }

        /* fix comment like button and download button background */
        .commentItem__like button,
        .soundActions__purchaseLink {
            background-color: transparent;
        }

        /* fix track description shadow */
        .truncatedAudioInfo__wrapper::after {
            background: none !important;
            backdrop-filter: blur(1.5px);
            mask-image: linear-gradient(to top, black 40%, transparent);
        }

        /* fix related tracks hover */
        .soundBadge__additional {
            background: none;
        }
    }
`;
document.head.append(style);

document.documentElement.style.setProperty('--blur-amount', '30px');
document.documentElement.style.setProperty('--theme-color', 'rgb(133, 157, 255)');
document.documentElement.style.setProperty('--theme-hue-rotate', '240deg');

const tweakGradientElement = document.createElement("div");
tweakGradientElement.classList.add("tweak__background__gradient");
document.body.appendChild(tweakGradientElement);

document.documentElement.style.setProperty('--old-gradient', "black");

window.onload = () => {

    const bodyObserver = new MutationObserver((mutations, obs) => {
        const playingIndicator = document.querySelector('.playbackSoundBadge');
        let gradientElement = document.querySelector('.backgroundGradient__buffer:not(.backgroundGradient__hidden)');
        if (playingIndicator && gradientElement) {
            obs.disconnect();

            gradientElement = document.querySelector('.backgroundGradient__buffer:not(.backgroundGradient__hidden)');
            let gradient = gradientElement.style.background;
            const startTime = Date.now();
            const intervalId = setInterval(() => {
                const elapsed = Date.now() - startTime;
                gradientElement = document.querySelector('.backgroundGradient__buffer:not(.backgroundGradient__hidden)');
                gradient = gradientElement.style.background;
                if (gradient !== "") {
                    clearInterval(intervalId);
                    document.documentElement.style.setProperty('--new-gradient', gradient);
                    tweakGradientElement.classList.add('fade');
                    setTimeout(() => {
                        document.documentElement.style.setProperty('--old-gradient', getComputedStyle(tweakGradientElement).getPropertyValue('--new-gradient'));
                        tweakGradientElement.classList.remove('fade');
                    }, 300);
                } else if (elapsed >= 2000) {
                    clearInterval(intervalId);
                    console.error("Soundcloud Tweaks: No gradient detected in .backgroundGradient__buffer element. 2 second polling loop ended.")
                }
            }, 5);

            const playingObserver = new MutationObserver(() => {
                let gradientBuffer = gradient;
                gradientElement = document.querySelector('.backgroundGradient__buffer:not(.backgroundGradient__hidden)');
                gradient = gradientElement.style.background;
                const startTime = Date.now();
                const intervalId = setInterval(() => {
                    const elapsed = Date.now() - startTime;
                    gradientElement = document.querySelector('.backgroundGradient__buffer:not(.backgroundGradient__hidden)');
                    gradient = gradientElement.style.background;
                    if (gradient !== gradientBuffer) {
                        clearInterval(intervalId);
                        document.documentElement.style.setProperty('--new-gradient', gradient);
                        tweakGradientElement.classList.add('fade');
                        setTimeout(() => {
                            document.documentElement.style.setProperty('--old-gradient', getComputedStyle(tweakGradientElement).getPropertyValue('--new-gradient'));
                            tweakGradientElement.classList.remove('fade');
                        }, 300);
                    } else if (elapsed >= 2000) {
                        console.error("Soundcloud Tweaks: No gradient detected in .backgroundGradient__buffer element. 2 second polling loop ended.")
                        clearInterval(intervalId);
                    }
                }, 5);
            });
            playingObserver.observe(playingIndicator, {
                childList: true
            });
        }
    });
    bodyObserver.observe(document.body, {
        childList: true
    });

    // mouse hover on any element event listener
    document.addEventListener('mouseover', function (e) {
        if (e.target.closest('.playbackSoundBadge__actions')) {
            setTimeout(() => {
                console.log("looping?")
                document.querySelectorAll('.tooltip__content').forEach(el => {
                    if (el.textContent.trim() === 'Like' || el.textContent.trim() === 'Follow') {
                        el.parentElement?.classList.add('tweak-element');
                    }
                });
            }, 10);
        }
    }, { passive: true });
}
