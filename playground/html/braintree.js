var form = document.querySelector('#cardForm')
var authorization = 'sandbox_g42y39zw_348pk9cgf3bgyw2b'

braintree.client.create(
    {
        authorization: authorization
    },
    function (err, clientInstance) {
        if (err) {
            console.error(err)
            return
        }
        createHostedFields(clientInstance)
    }
)

function createHostedFields(clientInstance) {
    braintree.hostedFields.create(
        {
            client: clientInstance,
            styles: {
                input: {
                    'font-size': '16px',
                    'font-family': 'courier, monospace',
                    'font-weight': 'lighter',
                    color: '#ccc'
                },
                ':focus': {
                    color: 'black'
                },
                '.valid': {
                    color: '#8bdda8'
                }
            },
            fields: {
                number: {
                    selector: '#card-number',
                    placeholder: '4111 1111 1111 1111'
                },
                cvv: {
                    selector: '#cvv',
                    placeholder: '123'
                },
                expirationDate: {
                    selector: '#expiration-date',
                    placeholder: 'MM/YYYY'
                },
                postalCode: {
                    selector: '#postal-code',
                    placeholder: '11111'
                }
            }
        },
        function (err, hostedFieldsInstance) {
            if (err) {
                console.error(err)
                return
            }
            var tokenize = function (event) {
                event.preventDefault()

                hostedFieldsInstance.tokenize(function (err, payload) {
                    if (err) {
                        alert('Something went wrong. Check your card details and try again.')
                        return
                    }

                    alert('Submit your nonce (' + payload.nonce + ') to your server here!')
                })
            }

            form.addEventListener('submit', tokenize, false)
        }
    )
}