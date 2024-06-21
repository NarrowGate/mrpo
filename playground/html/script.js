// websites\vfwn-dev\web-pages\create-service-connection\content-pages\Create-Service-Connection.en-US.webpage.custom_javascript.js
// C:\Users\melvin.wilson_admin\Documents\Work\Repos\RSLQLD_VFWN\websites\vfwn-dev\web-templates\vfwn-create-service-connection---js\VFWN-Create-Service-Connection---JS.webtemplate.source.html
$(() => {
    function formatPhoneNumber(numString, firstSpaceAt = 4, subsequentSpacesAt = 3) {
        // Remove all non-digit characters
        numString = numString.replace(/\D/g, '')

        let firstFourDigits = numString.slice(0, firstSpaceAt)
        let remainingDigits = numString.slice(firstSpaceAt)
        let regex = new RegExp('(\\d{' + subsequentSpacesAt + '})', 'g')
        remainingDigits = remainingDigits.replace(regex, '$1 ')

        let formattedNumber = (firstFourDigits + ' ' + remainingDigits).trim()

        return formattedNumber
    }

    let phoneregEx = /^((61|\+61)?)04[0-9]{2}?([0-9]{3}?[0-9]{3}|[0-9]{2}?[0-9]{2}?[0-9]{2})$/
    document.querySelectorAll('.mobileValidation').forEach((field) => {
        field.addEventListener('change', function () {
            this.value = formatPhoneNumber(this.value)

            if (!phoneregEx.test(this.value.replace(/\s/g, ''))) {
                this.value = ''

                this.nextElementSibling.textContent = 'Please provide a valid phone number.(Ex: 04xxxxxxxx)'
                ValidateForm(document.querySelectorAll('.step')[currentStep])
            } else {
                this.classList.remove('is-invalid')
            }
        })

        field.addEventListener('input', function (e) {
            if (e.data !== null) {
                const input = e.target
                const phoneNumber = input.value.replace(/\D/g, '') // Remove non-numeric characters
                input.value = formatPhoneNumber(phoneNumber)
            }
        })
    })
})
