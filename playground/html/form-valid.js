// const $floatingFormField = $('.floating-field')

// $floatingFormField.find('input').on('focus', floatingFieldFocusHandler)

// $floatingFormField.find('input').on('blur', floatingFieldBlurHandler)
// console.log('logskk')
// function floatingFieldFocusHandler() {
//     let $field = $(this).closest('.floating-field')
//     $field.addClass(['floating-field--focused', 'floating-field--dirty'])
// }

// function floatingFieldBlurHandler(a, b, c, d) {
//     debugger
//     let $field = $(this).closest('.floating-field')
//     $field.removeClass('floating-field--focused')

//     if ($(this).valid()) {
//         debugger
//         console.log(a, 'a')
//         console.log(b, 'b')
//         console.log(c, 'c')
//         console.log(d, 'd')
//         $field.removeClass('floating-field--invalid')
//     } else {
//         debugger
//         console.log(this.validity)
//         let labelErrorText = $(this).data().valRequired ? $(this).data().valRequired : ''
//         $field.find('.floating-label-error').text(labelErrorText)
//         $field.addClass('floating-field--invalid')
//     }
// }

$(document).ready(function () {
    const $floatingFormField = $('.floating-field')

    $floatingFormField.find('input, select').on('focus', floatingFieldFocusHandler)
    $floatingFormField.find('input, select').on('blur', validateFloatingField)
    // $floatingFormField.find('input').on('blur', validateFloatingField)
    $floatingFormField.find('input').on('keyup', validateFloatingField)
    // $floatingFormField.find("select").on("change", validateFloatingField );
    // $floatingFormField.find("input, select").on("blur, keyup", floatingFieldBlurHandler );
    // $floatingFormField.find("input[type=text]").on("keyup", (e) => {
    //   // e.stopImmediatePropagation();
    // } );

    function validateFloatingField(event) {
        if (event.type === 'blur') {
            floatingFieldBlurHandler(event)
        } else if (event.type === 'keyup') {
            let { $el, $field } = getJqElandJqField(event.target)
            let backspaceOrDelete = ifKeyPressedIsBackspaceOrDelete(event)

            if (!backspaceOrDelete) {
                if ($el.val().length >= 1) {
                    let isRegexValid = manuallyCheckIfRegexIsValidForElement($el)
                    if (!isRegexValid) {
                        runValidationForElement(event)
                    }
                }
                // else if ($el.val().length > 1) {
                //                     runValidationForElement(event)
                //                 }
                // else {
                // debugger
                // let rules = $el.rules()
                // $form.validate().settings.rules[$el.attr('id')] = {}
                // $el.rules('add', rules)
                // event.stopImmediatePropagation()
                // }
            }
        }
    }

    function getJqElandJqField(element) {
        let $el = $(element)
        let tagName = $el.prop('tagName')
        let $field = $el.closest('.floating-field').length ? $el.closest('.floating-field') : null
        let $form = $el.closest('form').length ? $el.closest('form') : null
        return {
            $el,
            $field,
            $form,
            tagName
        }
    }

    function runValidationForElement(event) {
        let { $el, $field } = getJqElandJqField(event.target)

        if ($el.valid()) {
            // $field.removeClass("floating-field--invalid");
        } else {
            // $field.addClass("floating-field--invalid");
            // $el.addClass("input-validation-error");
        }
    }

    $floatingFormField.find('select').on('change', (e) => {
        e.stopImmediatePropagation()
        e.stopPropagation()

        let $el = $(e.target)
        let $field = $el.closest('.floating-field')

        if (e.target.value !== '') {
            $field.removeClass('floating-field--invalid')
        }
    })

    function floatingFieldFocusHandler() {
        let $field = $(this).closest('.floating-field')
        $field.addClass(['floating-field--focused', 'floating-field--dirty'])
    }

    function floatingFieldBlurHandler(e) {
        let { $field } = getJqElandJqField(e.target)
        $field.removeClass('floating-field--focused')
        runValidationForElement(e)
    }

    function highlightFloatingField(element) {
        let { $el, $field } = getJqElandJqField(element)
        if ($field) {
            if (element.tagName === 'SELECT' && $el.closest('.floating-field--focused').length) {
                debugger
                return false
            } else {
                $field.addClass('floating-field--invalid')
            }
        }
        return true
    }
    function unHighlightFloatingField(element) {
        let { $field } = getJqElandJqField(element)
        if ($field.length) {
            $field.removeClass('floating-field--invalid')
        }
        return true
    }
    function validatorSettingOnKeyUp(element, event) {
        console.log('Keyup config fn element is', element)

        if ($(element).closest('.floating-field').length) {
            if (element.type === 'text') {
                return false
            } else {
                return true
            }
        } else {
            return true
        }
    }
    $.validator.addMethod(
        'regex',
        function (value, element, regexpr) {
            return regexpr.test(value)
        },
        'Invalid input.'
    )

    function ifKeyPressedIsBackspaceOrDelete(event) {
        return event.keyCode === 8 || event.keyCode === 46
    }

    function manuallyCheckIfRegexIsValidForElement($el) {
        let rules = $el.validate().settings.rules
        let rulesForId = rules ? rules[$el.attr('id')] : null

        if (rulesForId && rulesForId.regex) {
            let regex = new RegExp(rulesForId.regex)
            let value = $el.val()
            return regex.test(value)
        }
    }

    $.validator.setDefaults({
        // onKeyup: true,
        onkeyup: false,
        //     let { $field, tagName } = getJqElandJqField(element)
        //     if ($field.hasClass('floating-field--focused') && tagName === 'INPUT') {
        //         return true
        //     } else {
        //         return false
        //     }
        // },
        // focusCleanup: true,
        // onfocusout: false,
        // onkeyup: validatorSettingOnKeyUp,
        // onclick: function (element) {
        //  return false
        //   if (element.tagName === "SELECT") {
        //     if($(element).valid()) {
        //       debugger
        //     }
        //   }
        // },
        highlight: highlightFloatingField,
        unhighlight: unHighlightFloatingField,
        // showErrors: function (errorMap, errorList) {
        //     if (errorList.length) {
        //         let interceptionNeeded = floatingFieldShowErrorsInterceptor(errorMap, errorList)
        //         if (interceptionNeeded) {
        //             // this.defaultShowErrors()
        //             return false
        //         } else {
        //             this.defaultShowErrors()
        //         }
        //     } else {
        //         this.defaultShowErrors()
        //     }
        // },
        rules: {
            'first-name-input-float': {
                required: true,
                regex: /^[^<>{}]*$/
            },
            'last-name-input-float': {
                required: true,
                regex: /^[^<>{}]*$/
            },
            'email-input-float': {
                required: true,
                regex: /^[\w-+.\"]+@[\w-.]+\.[\w-]+$/
            }
        },
        messages: {
            'first-name-input-float': {
                required: 'First name is required',
                regex: 'Name contains potentially dangerous characters'
            },
            'last-name-input-float': {
                required: 'Last name is required',
                regex: 'Name contains potentially dangerous characters'
            },
            'email-input-float': {
                required: 'Email is required',
                regex: 'This is not a valid email address'
            }
        }
    })

    function floatingFieldShowErrorsInterceptor(errorMap, errorList) {
        let { $el, $field } = getJqElandJqField($(errorList[0].element))
        if ($field) {
            let messages = $el.validate().settings.messages
            let rules = $el.validate().settings.rules
            let elId = $el.attr('id')
            let tagName = $el.prop('tagName')
            if (tagName === 'INPUT') {
                if ($field.hasClass('floating-field--focused') && $el.val() === '') {
                    // Interception needed
                    return true
                } else {
                    // Interception not needed
                    return false
                }
            } else {
                // Interception not needed
                return false
            }
        } else {
            // Interception not needed - Not a floating field
            return false
        }
    }

    // setTimeout(() => {
    //     debugger
    //     $('#first-name-input-float').trigger('focus')
    // }, 10000)

    function appendNoteToHelpBlock($el) {
        let $fieldContainer = $el.closest('.floating-field')
        let noteText = $el.data().noteMsg ? $el.data().noteMsg : ''
        $fieldContainer.find('.field-validation-valid').text(noteText)
    }
})
