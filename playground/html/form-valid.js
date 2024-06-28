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
  const $floatingFormField = $(".floating-field");

  $floatingFormField.find("input, select").on("focus", floatingFieldFocusHandler);
  $floatingFormField.find("input, select").on("blur", validateFloatingField );
  $floatingFormField.find("input").on("keyup", validateFloatingField );
  // $floatingFormField.find("select").on("change", validateFloatingField );
  // $floatingFormField.find("input, select").on("blur, keyup", floatingFieldBlurHandler );
  // $floatingFormField.find("input[type=text]").on("keyup", (e) => {
  //   // e.stopImmediatePropagation();
  // } );

  function validateFloatingField(event) {
    if(event.type === "blur") {
      floatingFieldBlurHandler(event)
    } else if(event.type === "keyup") {
      let $el = $(event.target);
      if($el.val() !== "") {
        runValidationForElement(event)
      } else {
        debugger
        event.stopImmediatePropagation();
      }
    }
  }

  function getJqElandJqField(element) {
    let $el = $(element);
    let $field = $el.closest(".floating-field").length ? $el.closest(".floating-field") : null;
    return {
      $el,
      $field
    }
  }

  function runValidationForElement(event) {
    let { $el, $field }= getJqElandJqField(event.target);
    
    if($el.valid()) {
      // $field.removeClass("floating-field--invalid");
    } else {
      // $field.addClass("floating-field--invalid");
      // $el.addClass("input-validation-error");
    }
  }

  $floatingFormField.find("select").on("change", (e) => {
    e.stopImmediatePropagation();
    e.stopPropagation();

    let $el = $(e.target);
    let $field = $el.closest(".floating-field");

    if(e.target.value !== "") {
      $field.removeClass("floating-field--invalid");
    }
  });

  function floatingFieldFocusHandler() {
    let $field = $(this).closest(".floating-field");
    $field.addClass(["floating-field--focused", "floating-field--dirty"]);
  }

  function floatingFieldBlurHandler(e) {
    let { $field }= getJqElandJqField(e.target);
    $field.removeClass("floating-field--focused");
    runValidationForElement(e)
  }

  function highlightFloatingField(element) {
      let { $el, $field } = getJqElandJqField(element);
      if($field) {
        if(element.tagName === "SELECT" && $el.closest(".floating-field--focused").length) {
          debugger
          return false
        } else {
        $field.addClass("floating-field--invalid")
        }
      }
      return true
  }
  function unHighlightFloatingField(element ) {
      let { $field } = getJqElandJqField(element);
      if($field.length) {
        $field.removeClass("floating-field--invalid")
      }
      return true
  }
  function validatorSettingOnKeyUp(element, event) {
    console.log("Keyup config fn element is", element)

    if($(element).closest(".floating-field").length) {
      if(element.type === "text") {
        return false
      } else {
        return true
      }
    } else {
      return true
    }
  }

$.validator.setDefaults({
    onKeyup: false,
    focusCleanup: true,
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
    unhighlight: unHighlightFloatingField
});
  function appendNoteToHelpBlock($el) {
    let $fieldContainer = $el.closest(".floating-field");
    let noteText = ($el.data().noteMsg) ? $el.data().noteMsg : '';
    $fieldContainer.find('.field-validation-valid').text(noteText);
  }