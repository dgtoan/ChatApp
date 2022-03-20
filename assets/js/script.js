const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const PLAYER__STORAGE__KEY = "CHAT_APP";

const listUser = $('.nav__list')
const notiIcon = $('.noti__js')
const notiOn = notiIcon.querySelector('.bx-bell')
const notiOff = notiIcon.querySelector('.bx-bell-off')

const app = {
    currentIndex: 0,
    userData: [
        {
            index: 0,
            user: 'Duong Toan',
            img: 'https://cdn.discordapp.com/attachments/950814197036515461/951166445302202418/274652893_984836019112254_3960550293533737580_n.png',
            time: '02:17',
            message: [
                {
                    user: 0,
                    text: 'he lu moi nguoi ne'
                },
                {
                    user: 0,
                    text: 'm bi ngao ngo a agjalkdsjhf ajsglkjasdk gka skdjg alksjd ga a sdgjl'
                },
                {
                    user: 1,
                    text: 'conchos kia'
                },
                {
                    user: 1,
                    text: 'ao that day, ao ma canada ua alo alo, m bi nao ngo af, hejahfkusad asdhgas fsdjahg kasjd ghas jd'
                },
                {
                    user: 0,
                    text: 'jkasdhgbws dfh'
                }
            ]
        },
        {
            index: 1,
            user: 'ngungocquadi',
            img: 'https://cdn.discordapp.com/attachments/950814197036515461/950814406223228928/273831696_372763614424979_9019380635739933791_n.png',
            time: '12:33',
            message: [
                {
                    user: 1,
                    text: 'conchos kia'
                },
                {
                    user: 0,
                    text: 'he lu moi nguoi ne'
                },
                {
                    user: 0,
                    text: 'm bi ngao ngo a agjalkdsjhf ajsglkjasdk gka skdjg alksjd ga a sdgjl'
                },
                {
                    user: 1,
                    text: 'ao that day, ao ma canada ua alo alo, m bi nao ngo af, hejahfkusad asdhgas fsdjahg kasjd ghas jd'
                },
                {
                    user: 0,
                    text: 'jkasdhgbws dfh'
                }
            ]
        }
    ],
    render: function () {
        const htmls = this.userData.map(function (data) {
            return `
            <div class="list__item user${data.index}">
                    <div class="item__avatar">
                        <img src="${data.img}" alt="avatar" class="item__avatar__img">
                    </div>
                    <div class="item__user">
                        <div class="item__user__name">${data.user}</div>
                        <div class="item__user__mess">${data.message[data.message.length - 1].text}</div>
                    </div>
                    <div class="item__status">
                        <div class="item__time">${data.time}</div>
                        <i class='bx bx-check hidden'></i>
                        <i class='bx bx-check-double'></i>
                    </div>
                </div>`;
        });
        $('.nav__list').innerHTML = htmls.join("");
    },
    renderCurrent: function () {
        let itemImg =$('.nav__user__avatar__img')
        itemImg.src = this.userData[this.currentIndex].img
        let activeItem = $(".item--active");
        if (activeItem) {
        activeItem.classList.remove("item--active");
        }
        let currentItem = $(`.user${this.userData[this.currentIndex].index}`)
        currentItem.classList.add("item--active")
        $('.nav__user__name').textContent = this.userData[app.currentIndex].user
        const htmls = this.userData[app.currentIndex].message.map(function (text) {
            if (text.user) {
                return `
                <div class="messenger__item user">${text.text}</div>`;
            }
            else
            {
                return `
                <div class="messenger__item">${text.text}</div>`;
            }
        });
        $('.messenger__list').innerHTML = htmls.join("");
    },
    handleEvents: function () {
        listUser.onclick = function (e) {
            const item = e.target.closest('.list__item:not(.item--active)')
            if (item)
            {
                let itemClass = item.classList.value
                app.currentIndex = +itemClass[itemClass.length-1]
                app.renderCurrent()
            }
        }
        notiIcon.onclick = function () {
            notiOn.classList.toggle("hidden")
            notiOff.classList.toggle("hidden")
        }
    },
    start: function () {
        this.render();
        this.renderCurrent();
        this.handleEvents();
    }
}

app.start()
