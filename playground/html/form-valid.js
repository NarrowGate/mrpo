const $floatingFormField = $('.floating-field')

$floatingFormField.find('input').on('focus', floatingFieldFocusHandler)

$floatingFormField.find('input').on('blur', floatingFieldBlurHandler)

function floatingFieldFocusHandler() {
    let $field = $(this).closest('.floating-field')
    $field.addClass(['floating-field--focused', 'floating-field--dirty'])
}

function floatingFieldBlurHandler(a, b, c, d) {
    debugger
    let $field = $(this).closest('.floating-field')
    $field.removeClass('floating-field--focused')

    if ($(this).valid()) {
        debugger
        console.log(a, 'a')
        console.log(b, 'b')
        console.log(c, 'c')
        console.log(d, 'd')
        $field.removeClass('floating-field--invalid')
    } else {
        debugger
        console.log(this.validity)
        let labelErrorText = $(this).data().valRequired ? $(this).data().valRequired : ''
        $field.find('.floating-label-error').text(labelErrorText)
        $field.addClass('floating-field--invalid')
    }
}
