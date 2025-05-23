class PhotoViewer {
    constructor(rootElm, images) {
        this.rootElm = rootElm;
        this.images = images;
        this.currentIndex = 0;
    }
    init() {
        const nextButton = this.rootElm.querySelector(`.nextButton`);
        nextButton.addEventListener(`click`, () => {
            this.next();
        });
        const prevButton = this.rootElm.querySelector(`.prevButton`);
        prevButton.addEventListener(`click`, () => {
            this.prev();
        });

        this.renderImageurls();
        this.updatePhoto();
    }
    updatePhoto() {
        const frameElm = this.rootElm.querySelector(`.frame`);
        const imagIndex = this.currentIndex + 1;
        frameElm.innerHTML = `
            <p>${imagIndex}枚目</p>
            <div class ="currentImage">
                <img src="${this.images[this.currentIndex]}" />
            </div>
            `;
        this.startTimer();
    }
    startTimer() {
        if (this.timerKey) {
            clearTimeout(this.timerKey);
        }
        this.timerKey = setTimeout(() => {
            this.next();
        }, 3000);
    }

    next() {
        const lastIndex = this.images.length - 1;
        if (lastIndex === this.currentIndex) {
            this.currentIndex = 0;
        } else {
            this.currentIndex++;
        }
        this.updatePhoto();
    }

    prev() {
        const lastIndex = this.images.length - 1;
        if (this.currentIndex === 0) {
            this.currentIndex = lastIndex;
        } else {
            this.currentIndex--;
        }
        this.updatePhoto();
    }
    renderImageurls() {
        const imageElm = this.rootElm.querySelector(`.images`);
        let imageUrlsHtml = ``;
        for (const image of this.images) {
            imageUrlsHtml += `<li><a href="${image}"target="_blank">${image}</a></li>`;
        }
        imageElm.innerHTML = imageUrlsHtml;
    }

}
const images = [
    `https://fakeimg.pl/250x150/81DAF5`,
    `https://fakeimg.pl/250x150/F781F3`,
    `https://fakeimg.pl/250x150/81F7D8`
]
new PhotoViewer(document.getElementById(`photoViewer`), images).init();