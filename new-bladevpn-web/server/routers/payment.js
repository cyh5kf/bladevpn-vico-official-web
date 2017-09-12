// Paymentwall Node.JS Library: https://www.paymentwall.com/lib/node
var Paymentwall = require('paymentwall');
Paymentwall.Configure(
  Paymentwall.Base.API_GOODS,
  'cf307485ca9764fe7d9c082e881b693d',
  '4747252d6b8a121815a8ce3df66e45a2'
);

var widget = new Paymentwall.Widget(
  'user40012',
  'p10',
  [
    new Paymentwall.Product(
      'product301',
      9.99,
      'USD',
      'Gold Membership',
      Paymentwall.Product.TYPE_FIXED
    )
  ],
  { 'email': '1269415602@qq.com', 'history[registration_date]': '1445950321', 'customer[firstname]': 'chen', 'customer[lastname]': 'yu', 'customer[country]': 'china', 'history[registration_email_verified]': '1', 'history[payments_number]': '10', 'history[payments_amount]': '355.01', 'history[was_banned]': '0', 'history[cancelled_payments]': '2', 'any_custom_parameter': 'value'}
);
console.log(widget.getHtmlCode());

const getHtmlCode = (ctx) => {
    const htmlCode = widget.getHtmlCode();
    ctx.body = htmlCode;
}

module.exports = getHtmlCode;
