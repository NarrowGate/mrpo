console.log('Hello!')

let testHtml = '<div>innnnnner html</div>'
// let targetEl = document.getElementsByClassName('media-lockup-section');

let tarEl = document.querySelector('.media-lockup-section')

targetEl.insertAdjacentElement('beforebe', testHtml)
