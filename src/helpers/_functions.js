// Подключение списка активных модулей
import { flsModules } from "./modules.js";

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
export function isWebp() {
    // Проверка поддержки webp
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    // Добавление класса _webp или _no-webp для HTML
    testWebP(function (support) {
        let className = support === true ? "webp" : "no-webp";
        document.documentElement.classList.add(className);
    });
}
/* Проверка мобильного браузера */
export let isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    },
};
/* Добавление класса touch для HTML если браузер мобильный */
export function addTouchClass() {
    // Добавление класса _touch для HTML если браузер мобильный
    if (isMobile.any()) document.documentElement.classList.add("touch");
}
// Добавление loaded для HTML после полной загрузки страницы
export function addLoadedClass() {
    window.addEventListener("load", function () {
        setTimeout(function () {
            document.documentElement.classList.add("loaded");
        }, 0);
    });
}
// Получение хеша в адресе сайта
export function getHash() {
    if (location.hash) {
        return location.hash.replace("#", "");
    }
}
// Указание хеша в адресе сайта
export function setHash(hash) {
    hash = hash ? `#${hash}` : window.location.href.split("#")[0];
    history.pushState("", "", hash);
}
// Учет плавающей панели на мобильных устройствах при 100vh
export function fullVHfix() {
    const fullScreens = document.querySelectorAll("[data-fullscreen]");
    if (fullScreens.length && isMobile.any()) {
        window.addEventListener("resize", fixHeight);
        function fixHeight() {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty("--vh", `${vh}px`);
        }
        fixHeight();
    }
}
// Модуь работы с табами =======================================================================================================================================================================================================================
/*
Документация по работе в шаблоне: https://template.fls.guru/template-docs/modul-taby.html
Сниппет (HTML): tabs
*/
export function tabs() {
    const tabs = document.querySelectorAll("[data-tabs]");
    let tabsActiveHash = [];

    if (tabs.length > 0) {
        const hash = getHash();
        if (hash && hash.startsWith("tab-")) {
            tabsActiveHash = hash.replace("tab-", "").split("-");
        }
        tabs.forEach((tabsBlock, index) => {
            tabsBlock.classList.add("_tab-init");
            tabsBlock.setAttribute("data-tabs-index", index);
            tabsBlock.addEventListener("click", setTabsAction);
            initTabs(tabsBlock);
        });

        // Получение слойлеров с медиа запросами
        let mdQueriesArray = dataMediaQueries(tabs, "tabs");
        if (mdQueriesArray && mdQueriesArray.length) {
            mdQueriesArray.forEach((mdQueriesItem) => {
                // Событие
                mdQueriesItem.matchMedia.addEventListener("change", function () {
                    setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                });
                setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
            });
        }
    }
    // Установка позиций заголовков
    function setTitlePosition(tabsMediaArray, matchMedia) {
        tabsMediaArray.forEach((tabsMediaItem) => {
            tabsMediaItem = tabsMediaItem.item;
            let tabsTitles = tabsMediaItem.querySelector("[data-tabs-titles]");
            let tabsTitleItems = tabsMediaItem.querySelectorAll("[data-tabs-title]");
            let tabsContent = tabsMediaItem.querySelector("[data-tabs-body]");
            let tabsContentItems = tabsMediaItem.querySelectorAll("[data-tabs-item]");
            tabsTitleItems = Array.from(tabsTitleItems).filter(
                (item) => item.closest("[data-tabs]") === tabsMediaItem
            );
            tabsContentItems = Array.from(tabsContentItems).filter(
                (item) => item.closest("[data-tabs]") === tabsMediaItem
            );
            tabsContentItems.forEach((tabsContentItem, index) => {
                if (matchMedia.matches) {
                    tabsContent.append(tabsTitleItems[index]);
                    tabsContent.append(tabsContentItem);
                    tabsMediaItem.classList.add("_tab-spoller");
                } else {
                    tabsTitles.append(tabsTitleItems[index]);
                    tabsMediaItem.classList.remove("_tab-spoller");
                }
            });
        });
    }
    // Работа с контентом
    function initTabs(tabsBlock) {
        let tabsTitles = tabsBlock.querySelectorAll("[data-tabs-titles]>*");
        let tabsContent = tabsBlock.querySelectorAll("[data-tabs-body]>*");
        const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
        const tabsActiveHashBlock = tabsActiveHash[0] == tabsBlockIndex;

        if (tabsActiveHashBlock) {
            const tabsActiveTitle = tabsBlock.querySelector("[data-tabs-titles]>._tab-active");
            tabsActiveTitle ? tabsActiveTitle.classList.remove("_tab-active") : null;
        }
        if (tabsContent.length) {
            tabsContent = Array.from(tabsContent).filter((item) => item.closest("[data-tabs]") === tabsBlock);
            tabsTitles = Array.from(tabsTitles).filter((item) => item.closest("[data-tabs]") === tabsBlock);
            tabsContent.forEach((tabsContentItem, index) => {
                tabsTitles[index].setAttribute("data-tabs-title", "");
                tabsContentItem.setAttribute("data-tabs-item", "");

                if (tabsActiveHashBlock && index == tabsActiveHash[1]) {
                    tabsTitles[index].classList.add("_tab-active");
                }
                tabsContentItem.hidden = !tabsTitles[index].classList.contains("_tab-active");
            });
        }
    }
    function setTabsStatus(tabsBlock) {
        let tabsTitles = tabsBlock.querySelectorAll("[data-tabs-title]");
        let tabsContent = tabsBlock.querySelectorAll("[data-tabs-item]");
        const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
        function isTabsAnamate(tabsBlock) {
            if (tabsBlock.hasAttribute("data-tabs-animate")) {
                return tabsBlock.dataset.tabsAnimate > 0 ? Number(tabsBlock.dataset.tabsAnimate) : 500;
            }
        }
        const tabsBlockAnimate = isTabsAnamate(tabsBlock);
        if (tabsContent.length > 0) {
            const isHash = tabsBlock.hasAttribute("data-tabs-hash");
            tabsContent = Array.from(tabsContent).filter((item) => item.closest("[data-tabs]") === tabsBlock);
            tabsTitles = Array.from(tabsTitles).filter((item) => item.closest("[data-tabs]") === tabsBlock);
            tabsContent.forEach((tabsContentItem, index) => {
                if (tabsTitles[index].classList.contains("_tab-active")) {
                    if (tabsBlockAnimate) {
                        _slideDown(tabsContentItem, tabsBlockAnimate);
                    } else {
                        tabsContentItem.hidden = false;
                    }
                    if (isHash && !tabsContentItem.closest(".popup")) {
                        setHash(`tab-${tabsBlockIndex}-${index}`);
                    }
                } else {
                    if (tabsBlockAnimate) {
                        _slideUp(tabsContentItem, tabsBlockAnimate);
                    } else {
                        tabsContentItem.hidden = true;
                    }
                }
            });
        }
    }
    function setTabsAction(e) {
        const el = e.target;
        if (el.closest("[data-tabs-title]")) {
            const tabTitle = el.closest("[data-tabs-title]");
            const tabsBlock = tabTitle.closest("[data-tabs]");
            if (!tabTitle.classList.contains("_tab-active") && !tabsBlock.querySelector("._slide")) {
                let tabActiveTitle = tabsBlock.querySelectorAll("[data-tabs-title]._tab-active");
                tabActiveTitle.length
                    ? (tabActiveTitle = Array.from(tabActiveTitle).filter(
                          (item) => item.closest("[data-tabs]") === tabsBlock
                      ))
                    : null;
                tabActiveTitle.length ? tabActiveTitle[0].classList.remove("_tab-active") : null;
                tabTitle.classList.add("_tab-active");
                setTabsStatus(tabsBlock);
            }
            e.preventDefault();
        }
    }
}
// Модуль "показать еще" =======================================================================================================================================================================================================================
/*
Документация по работе в шаблоне: https://template.fls.guru/template-docs/modul-pokazat-eshhjo.html
Сниппет (HTML): showmore
*/
export function showMore() {
    window.addEventListener("load", function (e) {
        const showMoreBlocks = document.querySelectorAll("[data-showmore]");
        let showMoreBlocksRegular;
        let mdQueriesArray;
        if (showMoreBlocks.length) {
            // Получение обычных объектов
            showMoreBlocksRegular = Array.from(showMoreBlocks).filter(function (item, index, self) {
                return !item.dataset.showmoreMedia;
            });
            // Инициализация обычных объектов
            showMoreBlocksRegular.length ? initItems(showMoreBlocksRegular) : null;

            document.addEventListener("click", showMoreActions);
            window.addEventListener("resize", showMoreActions);

            // Получение объектов с медиа запросами
            mdQueriesArray = dataMediaQueries(showMoreBlocks, "showmoreMedia");
            if (mdQueriesArray && mdQueriesArray.length) {
                mdQueriesArray.forEach((mdQueriesItem) => {
                    // Событие
                    mdQueriesItem.matchMedia.addEventListener("change", function () {
                        initItems(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    });
                });
                initItemsMedia(mdQueriesArray);
            }
        }
        function initItemsMedia(mdQueriesArray) {
            mdQueriesArray.forEach((mdQueriesItem) => {
                initItems(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
            });
        }
        function initItems(showMoreBlocks, matchMedia) {
            showMoreBlocks.forEach((showMoreBlock) => {
                initItem(showMoreBlock, matchMedia);
            });
        }
        function initItem(showMoreBlock, matchMedia = false) {
            showMoreBlock = matchMedia ? showMoreBlock.item : showMoreBlock;
            let showMoreContent = showMoreBlock.querySelectorAll("[data-showmore-content]");
            let showMoreButton = showMoreBlock.querySelectorAll("[data-showmore-button]");
            showMoreContent = Array.from(showMoreContent).filter(
                (item) => item.closest("[data-showmore]") === showMoreBlock
            )[0];
            showMoreButton = Array.from(showMoreButton).filter(
                (item) => item.closest("[data-showmore]") === showMoreBlock
            )[0];
            const hiddenHeight = getHeight(showMoreBlock, showMoreContent);
            if (matchMedia.matches || !matchMedia) {
                if (hiddenHeight < getOriginalHeight(showMoreContent)) {
                    _slideUp(showMoreContent, 0, hiddenHeight);
                    showMoreButton.hidden = false;
                } else {
                    _slideDown(showMoreContent, 0, hiddenHeight);
                    showMoreButton.hidden = true;
                }
            } else {
                _slideDown(showMoreContent, 0, hiddenHeight);
                showMoreButton.hidden = true;
            }
        }
        function getHeight(showMoreBlock, showMoreContent) {
            let hiddenHeight = 0;
            const showMoreType = showMoreBlock.dataset.showmore ? showMoreBlock.dataset.showmore : "size";
            if (showMoreType === "items") {
                const showMoreTypeValue = showMoreContent.dataset.showmoreContent
                    ? showMoreContent.dataset.showmoreContent
                    : 3;
                const showMoreItems = showMoreContent.children;
                for (let index = 1; index < showMoreItems.length; index++) {
                    const showMoreItem = showMoreItems[index - 1];
                    hiddenHeight += showMoreItem.offsetHeight;
                    if (index == showMoreTypeValue) break;
                }
            } else {
                const showMoreTypeValue = showMoreContent.dataset.showmoreContent
                    ? showMoreContent.dataset.showmoreContent
                    : 150;
                hiddenHeight = showMoreTypeValue;
            }
            return hiddenHeight;
        }
        function getOriginalHeight(showMoreContent) {
            let parentHidden;
            let hiddenHeight = showMoreContent.offsetHeight;
            showMoreContent.style.removeProperty("height");
            if (showMoreContent.closest(`[hidden]`)) {
                parentHidden = showMoreContent.closest(`[hidden]`);
                parentHidden.hidden = false;
            }
            let originalHeight = showMoreContent.offsetHeight;
            parentHidden ? (parentHidden.hidden = true) : null;
            showMoreContent.style.height = `${hiddenHeight}px`;
            return originalHeight;
        }
        function showMoreActions(e) {
            const targetEvent = e.target;
            const targetType = e.type;
            if (targetType === "click") {
                if (targetEvent.closest("[data-showmore-button]")) {
                    const showMoreButton = targetEvent.closest("[data-showmore-button]");
                    const showMoreBlock = showMoreButton.closest("[data-showmore]");
                    const showMoreContent = showMoreBlock.querySelector("[data-showmore-content]");
                    const showMoreSpeed = showMoreBlock.dataset.showmoreButton
                        ? showMoreBlock.dataset.showmoreButton
                        : "500";
                    const hiddenHeight = getHeight(showMoreBlock, showMoreContent);
                    if (!showMoreContent.classList.contains("_slide")) {
                        showMoreBlock.classList.contains("_showmore-active")
                            ? _slideUp(showMoreContent, showMoreSpeed, hiddenHeight)
                            : _slideDown(showMoreContent, showMoreSpeed, hiddenHeight);
                        showMoreBlock.classList.toggle("_showmore-active");
                    }
                }
            } else if (targetType === "resize") {
                showMoreBlocksRegular && showMoreBlocksRegular.length
                    ? initItems(showMoreBlocksRegular)
                    : null;
                mdQueriesArray && mdQueriesArray.length ? initItemsMedia(mdQueriesArray) : null;
            }
        }
    });
}
//================================================================================================================================================================================================================================================================================================================
// Прочие полезные функции ================================================================================================================================================================================================================================================================================================================
//================================================================================================================================================================================================================================================================================================================

// Получить цифры из строки
export function getDigFromString(item) {
    return parseInt(item.replace(/[^\d]/g, ""));
}

// Генерация случайного ID
export function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Форматирование цифр типа 100 000 000
export function getDigFormat(item) {
    return item.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
}
// Убрать класс из всех элементов массива
export function removeClasses(array, className) {
    for (var i = 0; i < array.length; i++) {
        array[i].classList.remove(className);
    }
}
// Функция получения индекса внутри родителя
export function indexInParent(parent, element) {
    const array = Array.prototype.slice.call(parent.children);
    return Array.prototype.indexOf.call(array, element);
}
