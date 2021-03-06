class CardCarousel {
    constructor(content, card1, card2, card3) {
        this.content = content;
        this.index = 0;
        this.pageNum = Object.keys(this.content).length - 3;
        this.card1 = card1;
        this.card2 = card2;
        this.card3 = card3;
        this.updateContent();
    }
    innerContent(data, div) {
        div.innerHTML = '';

        let img = document.createElement('img');
        let body = document.createElement('div');
        body.className = 'card-body';
        img.src = data.img;

        for (const key in data) {
            if (key != 'img' && key != 'src') {
                if (key == 'a') {
                    const child = document.createElement(key);
                    child.innerText = data[key];
                    child.href = data['src'];
                    body.appendChild(child);
                } else {
                    const child = document.createElement(key);
                    child.innerText = data[key];
                    body.appendChild(child);
                }
            }
        }
        div.appendChild(img);
        div.appendChild(body);
    }
    updateContent() {
        this.innerContent(this.content[this.index + 1], this.card1);
        this.innerContent(this.content[this.index + 2], this.card2);
        this.innerContent(this.content[this.index + 3], this.card3);
    }
    nextPage() {
        this.index < this.pageNum ? this.index++ : this.index;
        this.updateContent();
    }
    prevPage() {
        this.index ? this.index-- : this.index;
        this.updateContent();
    }
    getPage() {
        return this.index;
    }
}






export default CardCarousel;