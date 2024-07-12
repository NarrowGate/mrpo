function adjustErrorMessageForValidation(event) {
  const $el = $(event.target);
  const value = $el.val().trim();
  if ($el.prop("type") === "text" && value) {
    const msg = makeMessageForRegexField($el);
    if (msg) {
      const fieldName = $el.attr("name");
      $el.closest("form").validate().settings.messages[fieldName]["regex"] =
        msg;
    }
  }
}

function makeMessageForRegexField($element) {
  const errorMessageTemplate = $element.data("val-regex");
  if (!errorMessageTemplate) return null;

  const value = $element.val().trim();
  const { regex: pattern } = $element.rules();
  const regex = new RegExp(pattern.replace(/['"]/g, "/"));

  if (regex.test(value)) return null;

  const problematicChar = value.slice(-1);
  return errorMessageTemplate.replace("{}", `"${problematicChar}"`);
}