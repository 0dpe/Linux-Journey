// ==UserScript==
// @name         Soundcloud Tweaks
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  asd
// @author       Odpe
// @match        https://soundcloud.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=soundcloud.com
// @require      https://cdnjs.cloudflare.com/ajax/libs/color-thief/2.6.0/color-thief.umd.js
// @grant        none
// ==/UserScript==

const style = document.createElement('style');
style.textContent = `
    /* reverse playlists */
    .trackList__list {
        display: flex;
        flex-direction: column-reverse;
    }

    /* remove app promotions */
    .sidebarModule.mobileApps {
        display: none;
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

    /* remove Promoted track in feed */
    li:has(span.soundContext__promoted) {
        display: none;
    }

    /* blur popup background */
    .modal {
        background-color: rgba(0, 0, 0, .5) !important;
        backdrop-filter: blur(var(--blur-amount));
    }

    /* animate bottom control bar progress bar */
    .playbackTimeline__progressBar {
        transition: width .08s ease-out;
    }
    .playbackTimeline__progressHandle {
        transition: left .08s ease-out;
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
        /* background gradient based on track artwork */
        .tweak__background__gradient {
            background: var(--old-gradient, black);
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
            background: var(--new-gradient, black);
            position: absolute;
            inset: 0;
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
        }
        .tweak__background__gradient.fade::before {
            opacity: 1;
        }

        /* progress bar circle fill color */
        .playbackTimeline__progressHandle {
            background-color: rgb(from var(--theme-color) r g b / 1);
        }

        /* waveform, creator badge, and Try Artist Pro color */
        .waveform__scene canvas:not(.waveformCommentsNode),
        .creatorBadge,
        .creatorSubscriptionsButton svg.profileMenu__icon {
            filter: hue-rotate(var(--theme-waveform-hue-rotate)) grayscale(var(--theme-waveform-grayscale));
        }

        /* artist liked comment color */
        .creatorLikeInlineLikeIcon {
            color: var(--special-color);
        }
        
        --special-color: rgb(from var(--theme-color) r g b / 1);
        --font-special-color: rgb(from var(--theme-color) r g b / 1);

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
            background-color: rgba(255, 255, 255, .05) !important;
            backdrop-filter: blur(var(--blur-amount));
        }
        .volume__sliderWrapper::after, 
        .volume__sliderWrapper::before {
            display: none;
        }
        .volume__sliderBackground {
            background-color: rgba(255, 255, 255, .1);
        }

        /* blur top header */
        .header {
            background-color: rgba(0, 0, 0, .75) !important;
            backdrop-filter: blur(var(--blur-amount));
            filter: drop-shadow(0 .4em .4em rgba(0, 0, 0, .2));
        }

        /* blur Next Up background */
        .queue__itemsHeight {
            background-image: none;
        }
        .queue__itemWrapper {
            background-color: transparent;
        }
        .playControls__queue {
            backdrop-filter: blur(var(--blur-amount));
        }
        .playControls__queue .m-visible,
        .playControls__queue .queue {
            background-color: rgba(0, 0, 0, .25);
        };

        /* blur dropdowns */
        .dropdownMenu,
        .moreActions,
        .moreActions__group * {
            background-color: transparent !important;
        }
        .linkMenu,
        .headerMenu,
        .moreActions {
            background-color: rgba(0, 0, 0, .25) !important;
            backdrop-filter: blur(var(--blur-amount));
        }

        /* View All background color */
        .readMoreTile__countWrapper {
            background-color: transparent;
        }
        .readMoreTile .playableTile__artwork,
        .readMoreTile .sc-artwork {
            filter: brightness(0.6);
        }
        .readMoreTile .playableTile__description,
        .readMoreTile .userBadgeListItem__title,
        .readMoreTile .userBadgeListItem__subtitle {
            filter: brightness(0.4);
        }

        /* Library placeholder color */
        .audibleTilePlaceholder::before {
            background-color: rgba(255, 255, 255, .08) !important;
        }

        /* search bar color */
        .headerSearch__input {
            background-color: rgba(255, 255, 255, .15);
        }

        /* comment like button and download button background */
        .commentItem__like button,
        .soundActions__purchaseLink {
            background-color: transparent;
        }

        /* fix and blur track description shadow */
        .truncatedAudioInfo__wrapper::after {
            background: none !important;
            backdrop-filter: blur(1.5px);
            mask-image: linear-gradient(to top, black 30%, transparent);
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

        /* fix related tracks hover */
        .soundBadge__additional {
            background: none;
        }
    }
`;
document.head.append(style);

document.documentElement.style.setProperty('--blur-amount', '30px');
document.documentElement.style.setProperty('--blur-background-color', 'rgba(0, 0, 0, .5)');

const tweakGradientElement = document.createElement("div");
tweakGradientElement.classList.add("tweak__background__gradient");
document.body.appendChild(tweakGradientElement);

const rgbToHsl = ([r, g, b]) => {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const delta = max - min;
    let h = 0;
    let s = 0;
    let l = (max + min) / 2;
    if (delta !== 0) {
        if (max === r) {
            h = ((g - b) / delta) % 6;
        } else if (max === g) {
            h = (b - r) / delta + 2;
        } else {
            h = (r - g) / delta + 4;
        }
        h *= 60;
        if (h < 0) h += 360;
        s = delta / (1 - Math.abs(2 * l - 1));
    }
    s *= 100;
    l *= 100;
    return [h, s, l];
}

const luminanceRgb = ([r, g, b]) => (.299 * r) + (.587 * g) + (.114 * b);

const setColors = artwork => {
    let artworkStyles = window.getComputedStyle(artwork);
    let artworkURL = artworkStyles.backgroundImage.match(/url\("?(.+?)"?\)/);
    const colorThiefImage = new Image();
    colorThiefImage.crossOrigin = 'Anonymous';
    colorThiefImage.src = artworkURL[1];
    colorThiefImage.onload = () => {
        const colorThief = new ColorThief();
        let palette = colorThief.getPalette(colorThiefImage, 2);
        let singleColorRgb = colorThief.getColor(colorThiefImage);
        let singleColorHsl = rgbToHsl(singleColorRgb);
        let [h, s, l] = singleColorHsl;
        if (l < 60) {
            l = 60;
        };
        document.documentElement.style.setProperty('--theme-color', `hsl(${h}, ${s}%, ${l}%)`);
        document.documentElement.style.setProperty('--theme-waveform-hue-rotate', `${h - 20}deg`); // this is incorrect since hue-rotation is in rgb not hsl
        document.documentElement.style.setProperty('--theme-waveform-grayscale', `${100 - s}%`);

        if (luminanceRgb(palette[0]) >= luminanceRgb(palette[1])) {
            document.documentElement.style.setProperty('--new-gradient', `linear-gradient(135deg, rgb(${palette[0].join(',')}) 0%, rgb(${palette[1].join(',')}) 100%)`);
        } else {
            document.documentElement.style.setProperty('--new-gradient', `linear-gradient(135deg, rgb(${palette[1].join(',')}) 0%, rgb(${palette[0].join(',')}) 100%)`);
        };
        tweakGradientElement.classList.add('fade');
        setTimeout(() => {
            document.documentElement.style.setProperty('--old-gradient', getComputedStyle(tweakGradientElement).getPropertyValue('--new-gradient'));
            tweakGradientElement.classList.remove('fade');
        }, 300);
    };
};

const removeTooltips = playingIndicatorButtons => {
    playingIndicatorButtons.addEventListener('mouseover', () => {
        document.querySelectorAll('.tooltip__content').forEach(el => {
            if (el.textContent.trim() === 'Like' || el.textContent.trim() === 'Follow' || el.textContent.trim() === 'Unfollow') {
                el.style.display = 'none';
            }
        });
    }, { passive: true });
}

window.onload = () => {
    new MutationObserver((mutations, obs) => {
        const playingIndicator = document.querySelector('.playbackSoundBadge');
        let artwork = document.querySelector('.playControls__elements .sc-artwork.image__full');
        let playingIndicatorButtons = document.querySelector('.playbackSoundBadge__actions');
        if (playingIndicator && artwork && playingIndicatorButtons) {
            obs.disconnect();

            setColors(artwork);
            removeTooltips(playingIndicatorButtons);

            new MutationObserver(() => {
                artwork = document.querySelector('.playControls__elements .sc-artwork.image__full');
                setColors(artwork);
                playingIndicatorButtons = document.querySelector('.playbackSoundBadge__actions');
                removeTooltips(playingIndicatorButtons);
            }).observe(playingIndicator, {
                childList: true
            });
        }
    }).observe(document.body, {
        childList: true
    });
}
