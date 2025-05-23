class PhotoViewer {
    init() {
        const rootElm = document.getElementById(`photoViewer`);
        const frameElm = rootElm.querySelector(`.frame`);
        const image = `https://fakeimg.pl/256×150/81DAF5`;

        frameElm.innerHTLM = `
        <div class ="currentImage">
            <img src="${image}" />
        </div>
        `
    }
}
new PhotoViewer().init();