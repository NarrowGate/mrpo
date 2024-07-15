function adjustErrorMessageForValidation(event) {
    const $el = $(event.target)
    const value = $el.val().trim()
    if ($el.prop('type') === 'text' && value) {
        const msg = makeMessageForRegexField($el)
        if (msg) {
            const fieldName = $el.attr('name')
            $el.closest('form').validate().settings.messages[fieldName]['regex'] = msg
        }
    }
}

function makeMessageForRegexField($element) {
    const errorMessageTemplate = $element.data('val-regex')
    if (!errorMessageTemplate) return null

    const { regex: pattern } = $element.rules()
    if (!pattern) return null
    const value = $element.val().trim()

    const regex = new RegExp(pattern.replace(/['"]/g, '/'))

    if (regex.test(value)) return null

    const problematicChar = value.slice(-1)
    return errorMessageTemplate.replace('{}', `"${problematicChar}"`)
}

// refactored please review

function makeMessageForRegexField($element) {
    const errorMessageTemplate = $element.data('val-regex')
    const { regex: pattern } = $element.rules()
    const value = $element.val().trim()

    if (!errorMessageTemplate || !pattern || !value) return null

    const regex = new RegExp(pattern.replace(/['"]/g, '/'))
    if (regex.test(value)) return null

    const problematicChar = value.slice(-1)
    return errorMessageTemplate.replace('{}', `"${problematicChar}"`)
}

function focusFirstInvalidField(e) {
    var $form = $(e.target)
    var $firstInvalidField = $form.find('.floating-field--invalid:not(.hidden)').first()
    if ($firstInvalidField.length) {
        var inputField = $firstInvalidField.find('input').first()
        var selectField = $firstInvalidField.find('select')

        if (inputField.length > 0) {
            inputField.focus()
        } else if (selectField.length > 0) {
            selectField.focus()
            setTimeout(function () {
                selectField.blur()
            }, 250)
        }
    }
}
e.validator.setDefaults({
    focusInvalid: false,
    onclick: function (e) {
        var t = a(e),
            n = t.$field,
            i = t.tagName
        if (n) return 'SELECT' !== i
    },
    highlight: function (e) {
        var t = a(e).$field
        return t && t.addClass('floating-field--invalid'), !0
    },
    unhighlight: function (e) {
        var t = a(e).$field
        return t && t.removeClass('floating-field--invalid'), !0
    }
})
